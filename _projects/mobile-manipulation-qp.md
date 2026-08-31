---
layout: project
title: "Mobile Manipulation with Quadratic Programming"
description: "Building a full-stack ROS 2 mobile manipulation system from scratch. Clearpath Husky A200 base, Universal Robots UR5e arm, and Robotiq 2F-85 gripper controlled through a unified QP-based whole-body motion planner that coordinates the base and arm simultaneously. Modular xacro architecture with sim-to-real transfer via ros2_control. Status: ongoing."
date: 2025-02-01
categories: [Mobile Robotics, Manipulation, Motion Planning, ROS2, C++, Python]
# featured_image: "/assets/images/projects/mobile-manipulation-qp/featured.png"  # TODO: add this image; the file has never existed, so the card rendered a broken <img>
github_url: "https://github.com/Seyi-roboticist/mobile_manipulation_qp"

code_files:
  - name: "Composable URDF: Top-Level Bringup"
    file: "mobile_manipulation.urdf.xacro"
    language: "xml"
    download_url: "https://github.com/Seyi-roboticist/mobile_manipulation_qp"
    content: |
      <robot name="mobile_manipulation_robot"
             xmlns:xacro="http://www.ros.org/wiki/xacro">

        <!-- Include subsystem descriptions -->
        <xacro:include filename="$(find husky_description)/
          urdf/husky.urdf.xacro"/>
        <xacro:include filename="$(find arm_description)/
          urdf/ur5e.urdf.xacro"/>
        <xacro:include filename="$(find gripper_description)/
          urdf/gripper.urdf.xacro"/>

        <!-- Mount arm to mobile base top plate -->
        <joint name="arm_mount_joint" type="fixed">
          <origin xyz="0 0 0" rpy="0 0 0"/>
          <parent link="top_plate_link"/>
          <child  link="arm_world"/>
        </joint>

        <!-- Attach gripper to arm tool flange -->
        <joint name="gripper_mount_joint" type="fixed">
          <origin xyz="0 0 0" rpy="0 0 0"/>
          <parent link="tool0"/>
          <child  link="gripper_base_link"/>
        </joint>

      </robot>
---

This project is ongoing. I'm building a complete mobile manipulation system from the ground up in ROS 2 Humble. Not a nav2-to-MoveIt handoff. Not a "drive then reach" pipeline. The full stack: perception, whole-body QP planning, ros2_control hardware abstraction, and coordinated base-arm execution. Three subsystems, one unified planner.

The robot pairs a Clearpath Husky A200 mobile base with a Universal Robots UR5e 6-DOF arm and a Robotiq 2F-85 adaptive gripper. I chose these specifically because they all have solid ROS 2 driver support and well-documented hardware interfaces, which matters when the goal is seamless sim-to-real transfer.

## Why This Project

Most mobile manipulation systems treat the base and arm as separate problems. Drive to a position, stop, then plan and execute the arm motion. That works, but it's slow, and it throws away a huge chunk of the robot's reachable workspace. The base and arm form a single kinematic chain with 8+ degrees of freedom, and if you plan over all of them simultaneously, the robot can navigate and manipulate in one coordinated motion. That's the idea behind the QP formulation here.

This builds directly on my work with the [Cartesian controller](/projects/cartesian-controller), where I implemented damped least-squares Jacobian IK for the UR5e at 500Hz. The mobile manipulation problem is the same math extended to a larger kinematic chain: now the Jacobian includes the base velocity terms alongside the arm joints, and the QP solver handles the joint limits, velocity bounds, and collision constraints that come with coordinating two very different actuator systems.

## System Architecture

<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
<script>mermaid.initialize({startOnLoad:true, theme:'dark'});</script>

<pre class="mermaid">
flowchart LR
    subgraph Perception["Perception"]
        A["IMU / GPS"]
        B["Encoders"]
        C["F/T Sensor"]
    end

    subgraph Planning["QP Motion Planner"]
        D["Task-Space Objective"]
        E["Joint & Velocity Constraints"]
        F["Collision Avoidance"]
    end

    subgraph Control["ros2_control"]
        G["Joint Trajectory Controller"]
        H["Diff Drive Controller"]
    end

    subgraph Hardware["Hardware Interface"]
        I["UR5e Driver"]
        J["Husky Driver"]
        K["Robotiq Driver"]
    end

    A --> D
    B --> D
    C --> D
    D --> G
    E --> G
    F --> H
    G --> I
    G --> K
    H --> J
</pre>

## Hardware Platform

| Component | Model | Role |
|-----------|-------|------|
| Mobile Base | Clearpath Husky A200 | 4-wheel differential drive, all-terrain UGV |
| Manipulator | Universal Robots UR5e | 6-DOF collaborative arm, force/torque sensing |
| Gripper | Robotiq 2F-85 | Adaptive parallel-jaw, 85mm stroke |
| Compute | Onboard PC | ROS 2 Humble, Ubuntu 22.04 |

## How It Works

### Whole-Body QP Formulation

I treat the mobile base and arm as a single kinematic chain. At each control cycle, the QP solver takes the desired end-effector pose and computes optimal joint velocities for all actuated joints (base wheels + arm joints) simultaneously:

$$\min_{\dot{q}} \; \| J(q)\dot{q} - \dot{x}_{\text{des}} \|^2 + \lambda \|\dot{q}\|^2$$

subject to joint position limits, velocity bounds, and collision constraints. The regularization term $\lambda$ prevents excessive joint velocities near singularities. This is the same Tikhonov damping idea from my Cartesian controller, but the Jacobian is now a wider matrix that spans both the base and arm DOFs. The cost function balances tracking accuracy against joint effort, and the constraints keep everything physically safe.

### Modular URDF Architecture

Each subsystem (base, arm, gripper) lives in its own xacro module. The top-level bringup xacro composes them through fixed joints: the UR5e mounts to the Husky's `top_plate_link`, and the Robotiq attaches to the arm's `tool0` flange. This gives a single unified URDF tree with consistent TF frames across simulation and real hardware.

The modularity is the point. Swapping the arm model, gripper, or sensor payload means changing one xacro include and one mount joint. Everything downstream, the controller configs, the planning scene, the launch files, adapts automatically. I learned from the Aurelia project how much time you waste when the URDF is tangled up with the rest of the stack, so I structured this one to be cleanly separable from the start.

### Sim-to-Real via ros2_control

The system uses `ros2_control` hardware abstractions so the same controller code runs in Gazebo Ignition and on the physical robot. A launch argument (`use_sim:=true/false`) switches between the Gazebo hardware interface and real drivers. Same pattern I used on the Aurelia X4, where `use_sim` and `use_real` toggled the full stack between SITL and the physical drone.

I built the Gazebo simulation with accurate physics for the Husky drivetrain, UR5e dynamics, and gripper contact forces. If the sim doesn't match the real robot, the whole point of simulation is lost. I treated the physics modeling as a first-class engineering task, not an afterthought.

### Dev Container Workflow

The entire development environment runs in a Docker container with ROS 2 Humble, pre-configured VS Code extensions, X11 forwarding for RViz and Gazebo, and GPU passthrough for simulation performance. Clone the repo, build the container, and everything works. No dependency hunting, no version conflicts.

## Tech Stack

ROS 2 Humble · Gazebo Ignition · ros2_control · colcon · xacro / URDF · vcstool · Docker · C++17 · Python 3 · CMake · ament · QP Solver
