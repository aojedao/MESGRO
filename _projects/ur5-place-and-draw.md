---
layout: project
title: "UR5 Place-and-Draw: Three Control Schemes + Batman"
description: "Team project comparing inverse kinematics, resolved-rate differential kinematics, and Jacobian transpose control for precision end-effector trajectory following on the UR5. I wrote the IK controller and, for extra credit, used parametric equations to trace the Batman symbol on the physical robot."
status: completed
date: 2024-04-03
categories: [Manipulation, Controls, Kinematics, MATLAB, ROS]
featured_image: "https://github.com/Seyi-roboticist/OluwaseyiR.github.io/assets/143431845/c90ffc7d-1856-41c0-b7ab-4463ea19785c"

code_files:
  - name: "IK-Based Trajectory Controller"
    file: "ur5InverseControl.m"
    language: "matlab"
    content: |
      % Developer: Seyi R. Afolayan
      % IK controller for Team 7 Place-and-Draw
      function done = ur5InverseControl(ur5, startFrame, ...
          overDistance1, downDistance, overDistance2, lineTime)

          stepSizes = [overDistance1, downDistance, overDistance2] * 1000;
          timings = [lineTime/stepSizes(1), ...
                     lineTime/stepSizes(2), ...
                     lineTime/stepSizes(3)];

          % Segment 1: translate along -Y
          for i = 1:stepSizes(1)
              T_new = startFrame * [1,0,0,0;
                  0,1,0,-overDistance1*i/stepSizes(1);
                  0,0,1,0; 0,0,0,1];
              thetas = ur5InvKin(T_new);
              best = determineAngle(thetas, ur5);
              ur5.move_joints(thetas(1:6, best), timings(1));
              pause(timings(1));
          end

          % Segment 2: translate along +X (down)
          for i = 1:stepSizes(2)
              T_new = T_new * [1,0,0,downDistance*i/stepSizes(2);
                  0,1,0,0; 0,0,1,0; 0,0,0,1];
              thetas = ur5InvKin(T_new);
              best = determineAngle(thetas, ur5);
              ur5.move_joints(thetas(1:6, best), timings(2));
              pause(timings(2));
          end

          % Segment 3: translate along -Y again
          for i = 1:stepSizes(3)
              T_new = T_new * [1,0,0,0;
                  0,1,0,-overDistance2*i/stepSizes(3);
                  0,0,1,0; 0,0,0,1];
              thetas = ur5InvKin(T_new);
              best = determineAngle(thetas, ur5);
              ur5.move_joints(thetas(1:6, best), timings(3));
              pause(timings(3));
          end
          done = 1;
      end

  - name: "Batman Symbol Point Generator"
    file: "batman_points.m"
    language: "matlab"
    content: |
      function final = batman_points()
          % Developer: Seyi R. Afolayan
          % Hardcoded path planning points using gradient
          % ascent/descent to approximate Batman's logo

          x = [-4.92, -5.23, -5.69, -6, -6.3, -6.62, ...
               -6.92, -6.46, -6.31, -5.85, -5.54, -5.35, ...
               -4.77, -4.46, -4.15, -3.7, -3.23, -3.08, ...
               -2.8, -2.4, -2, -1.6, -1.2, -0.91, -0.72, ...
               -0.54, -0.3, -0.1, 0.1, 0.3, 0.545, 0.91, ...
               1.6, 2, 2.4, 2.8, 3.12, 3.51, 3.9, 4.3, ...
               4.79, 5.44, 5.82, 6.33, 6.72, 6.97, 6.59, ...
               6.21, 5.7, 5.31, 4.92, 4, 3.58, 3.16, 2.31, ...
               1.89, 1.47, 1.05, 0.631, 0.21, -0.21, ...
               -0.63, -1.05, -1.47, -1.89, -2.74, -3.16, ...
               -3.58, -4, -4.92];

          y = [-2.13, -1.99, -1.74, -1.54, -1.3, -0.98, ...
               -0.44, 1.15, 1.3, 1.65, 1.83, 1.91, 2.2, ...
               2.31, 2.41, 2.54, 2.66, 2.69, 1.63, 1.07, ...
               0.86, 0.82, 0.91, 1.73, 2.931, 2.38, 2.25, ...
               2.25, 2.25, 2.85, 2.4, 1.72, 0.82, 0.86, ...
               1.1, 1.62, 2.7, 2.6, 2.5, 2.37, 2.19, 1.9, ...
               1.67, 1.28, 0.84, -0.26, -1.012, -1.39, ...
               -1.74, -1.96, -2.13, -2.46, -1.57, -1.35, ...
               -1.6, -1.93, -1.6, -1.57, -1.791, -2.285, ...
               -2.285, -1.79, -1.58, -1.581, -1.93, -1.35, ...
               -1.34, -1.57, -2.46, -2.13];

          final = [x', y'];
      end
---

## Overview

This was a team project for *Robot Devices, Kinematics, Dynamics, and Control* (EN.530.646) at Johns Hopkins, taught by Dr. Jin Seob Kim. We implemented three control schemes on the UR5 to perform a "place-and-draw" task: given start and target poses in $SE(3)$, move the end-effector between them while tracing geometric line segments in Cartesian space. Each scheme approaches the problem differently. Inverse kinematics solves for joint angles at every waypoint. Resolved-rate control works at the velocity level through the body Jacobian. And Jacobian transpose avoids the matrix inverse entirely by exploiting the transpose as a gradient-descent-like approximation.

I was responsible for the inverse kinematics controller that drives the actual trajectory execution, and I also came up with the idea of drawing the Batman symbol for extra credit. That part required hand-plotting 70 parametric points to define the outline, then feeding them through the IK pipeline on the physical robot. It was a fun challenge and it got the team full extra credit.

## Demo

![UR5 Place-and-Draw Demo](https://github.com/Seyi-roboticist/OluwaseyiR.github.io/assets/143431845/c90ffc7d-1856-41c0-b7ab-4463ea19785c)

## System Architecture

<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
<script>mermaid.initialize({startOnLoad:true, theme:'dark'});</script>

<pre class="mermaid">
flowchart LR
    A["Start Pose T_start"] --> B["Waypoint Generator"]
    B --> C{"Control Scheme"}
    C -->|"IK"| D["ur5InvKin(T_des)"]
    C -->|"Resolved-Rate"| E["J_b^{-1} · twist"]
    C -->|"J Transpose"| F["J_b^T · error"]
    D --> G["determineAngle()"]
    G --> H["ur5.move_joints()"]
    E --> H
    F --> H
    H --> I["Physical UR5"]
    I --> J["Goal Pose T_goal"]
</pre>

## The Three Control Schemes

### 1. Inverse Kinematics

This is the most direct approach. For each desired end-effector pose $\mathbf{T}_{\text{des}} \in SE(3)$, solve for the full set of joint angles $\mathbf{q} \in \mathbb{R}^6$ that achieve that pose. The UR5 has a spherical wrist, which means the position and orientation subproblems decouple nicely.

The first step is to locate the wrist center by subtracting the tool offset along the approach direction:

$$\mathbf{p}_{\text{wrist}} \;=\; \mathbf{p}_{\text{des}} \;-\; d_6 \;\hat{\mathbf{z}}_{\text{des}}$$

where $d_6$ is the distance from the wrist center to the tool tip and $\hat{\mathbf{z}}_{\text{des}}$ is the approach axis of the desired orientation. From this wrist position, joints $q_1$ through $q_3$ are recovered using geometric relationships between the link lengths.

Once the first three joints are known, the wrist orientation is isolated by removing the base-to-wrist rotation:

$$R_4^{\,6} \;=\; \left(R_0^{\,3}(\mathbf{q})\right)^{T} \; R_{\text{des}}$$

This gives a $ZYZ$ Euler angle decomposition for joints $q_4$, $q_5$, and $q_6$. The closed-form solver produces up to 8 valid solutions, and the `determineAngle()` function picks the one closest to the robot's current configuration to avoid unnecessary joint flips.

For the drawing task, I discretized each Cartesian line segment into millimeter-scale waypoints and solved IK at every step. Each segment is parameterized as a pure translation applied to the current tool frame:

$$\mathbf{T}_k \;=\; \mathbf{T}_{\text{start}} \;\cdot\; \begin{bmatrix} I_3 & \Delta\mathbf{p}_k \\ \mathbf{0}^T & 1 \end{bmatrix}$$

where $\Delta\mathbf{p}_k$ is the incremental translation along the segment direction. The timing for each step is computed by dividing the total line time by the number of millimeter steps, which keeps the end-effector velocity roughly constant along the path.

<p align="center">
  <img width="320" alt="IK Simulation" src="https://github.com/Seyi-roboticist/OluwaseyiR.github.io/assets/143431845/95cb3193-2573-4cf3-bfb5-dd9a08080a45"> 
  <img width="360" alt="IK Hardware" src="https://github.com/Seyi-roboticist/OluwaseyiR.github.io/assets/143431845/9834414b-dae7-42da-ab40-20542fb8f776">
</p>

### 2. Resolved-Rate Control

Rather than solving for joint angles at each waypoint, resolved-rate control operates at the velocity level. Given a desired end-effector twist $\boldsymbol{\xi}_{\text{des}}$, the corresponding joint velocities are:

$$\dot{\mathbf{q}} \;=\; J_b^{-1}(\mathbf{q}) \;\cdot\; \boldsymbol{\xi}_{\text{des}}$$

where $J_b(\mathbf{q}) \in \mathbb{R}^{6 \times 6}$ is the body Jacobian of the UR5 at the current configuration. The twist itself is derived from the pose error between the current and goal frames. At each control step, the forward kinematics compute the current tool pose, the error twist is calculated in the body frame, and the Jacobian inverse maps it to joint velocity commands.

The advantage over IK is that there is no need for a closed-form solver or branch selection. The disadvantage is sensitivity near kinematic singularities, where the Jacobian becomes ill-conditioned and joint velocities can blow up. For the three-segment drawing task, the paths were short and well within the workspace, so singularity was not a practical concern.

### 3. Jacobian Transpose

This scheme replaces the Jacobian inverse with its transpose:

$$\dot{\mathbf{q}} \;=\; J_b^{T}(\mathbf{q}) \;\cdot\; \mathbf{e}$$

where $\mathbf{e}$ is the task-space error vector. Mathematically, this works because $J^T \mathbf{e}$ points in a descent direction for the squared error $\|\mathbf{e}\|^2$ in joint space. It converges more slowly than the resolved-rate approach since it does not account for the full coupling between joints, but it has two practical benefits: no matrix inversion is needed (which matters for real-time systems), and it is inherently stable near singularities since there is nothing to invert.

For our drawing task, the Jacobian transpose produced slightly less precise trajectories compared to IK and resolved-rate. The end-effector followed a curved path where the other methods traced straight lines. However, it reliably reached the goal pose every time, which made it a good fallback in configurations where the Jacobian condition number was poor.

### Comparing the Three

Each scheme traces a different path through joint space to achieve the same Cartesian task:

| Property | Inverse Kinematics | Resolved-Rate | Jacobian Transpose |
|---|---|---|---|
| Works in | Position space | Velocity space | Velocity space |
| Requires | Closed-form solver | Jacobian inverse | Jacobian transpose |
| Singularity behavior | Multiple solutions | Blows up | Gracefully slows |
| Path accuracy | Exact (at waypoints) | High | Moderate |
| Computational cost | Low per step | Medium | Low |

## Foundations: FK, Jacobian, and Manipulability

Before we could run any of the control schemes, we needed solid implementations of the underlying kinematics. These functions formed the foundation that everything else built on top of.

### Forward Kinematics via Product of Exponentials

We computed the UR5's forward kinematics using the Product of Exponentials (POE) formulation rather than DH parameters. Each joint defines a twist $\boldsymbol{\xi}_i \in \mathbb{R}^6$ composed of an axis direction and a point on that axis. The forward kinematics map is then:

$$T(\mathbf{q}) \;=\; e^{[\boldsymbol{\xi}_1]\,q_1} \;\cdot\; e^{[\boldsymbol{\xi}_2]\,q_2} \;\cdot\; \cdots \;\cdot\; e^{[\boldsymbol{\xi}_6]\,q_6} \;\cdot\; M$$

where $M \in SE(3)$ is the robot's home configuration (all joints at zero) and each $e^{[\boldsymbol{\xi}_i]\,q_i}$ is the matrix exponential of the twist scaled by the joint angle. The twists were derived from the UR5 schematic, with all link lengths specified in meters to match RViz's metric system.

The POE formulation has a nice property: adding or removing joints is just a matter of adding or removing exponential terms. There are no link frame assignments to worry about, which makes it less error-prone than DH for a 6-DOF arm.

### Body Jacobian and Its Estimate

The body Jacobian $J_b(\mathbf{q}) \in \mathbb{R}^{6 \times 6}$ maps joint velocities to the end-effector twist expressed in the body frame. We implemented two versions: the analytical Jacobian computed directly from the adjoint transforms of each twist, and a numerical estimate obtained by introducing small perturbations $\delta q_i$ to each joint and computing the resulting change in the forward kinematics:

$$\hat{J}_b(:,\,i) \;\approx\; \frac{1}{\delta q_i} \; \log\!\Big(T(\mathbf{q})^{-1} \;\cdot\; T(\mathbf{q} + \delta q_i \,\mathbf{e}_i)\Big)$$

where $\log(\cdot)$ extracts the twist from the resulting transformation. The norm of the difference between the analytical and estimated Jacobians was consistently below $1 \times 10^{-10}$, which validated both implementations. This matters because the resolved-rate controller depends entirely on the Jacobian being correct, so having two independent computations that agree to 10 decimal places gave us real confidence before deploying on hardware.

### Manipulability Near Singularities

We also implemented a manipulability analysis function to characterize how "well-conditioned" the robot is at any given configuration. The classic Yoshikawa manipulability measure is:

$$\mu(\mathbf{q}) \;=\; \sqrt{\det\!\big(J_b(\mathbf{q}) \;\cdot\; J_b(\mathbf{q})^T\big)}$$

This goes to zero at singular configurations, where the robot loses one or more degrees of freedom. We tested this by sweeping two known singularities of the UR5. The first occurs at $\theta_3 = 0$ (elbow fully extended), and the second at $\theta_5 = 0$ (wrist aligned with the forearm). For each sweep, we held all other joints at safe values and varied the singular joint across $[-\frac{\pi}{4},\; \frac{\pi}{4}]$:

$$\boldsymbol{\theta}_{\,\theta_3\text{ sweep}} = \begin{bmatrix} 0.5 \\ 0.7 \\ \theta_3 \\ 1.0 \\ 1.2 \\ 1.4 \end{bmatrix}, \qquad \boldsymbol{\theta}_{\,\theta_5\text{ sweep}} = \begin{bmatrix} 0.5 \\ 0.7 \\ 0.9 \\ 1.0 \\ \theta_5 \\ 1.4 \end{bmatrix}$$

In both cases, the manipulability function dropped sharply toward zero as the joint approached the singular value, which confirmed that our Jacobian and manipulability implementations were correctly identifying the UR5's kinematic limitations. This analysis also informed where we could safely run the resolved-rate controller (which inverts the Jacobian) versus where the Jacobian transpose was the safer choice.

## The Batman (Extra Credit)

I came up with this one because I figured if we're going to draw shapes with a robot, we might as well draw something memorable. I hand-plotted 70 points that approximate the Batman logo outline, using gradient ascent and descent techniques to trace the contour. The points live in a 2D plane ($x$, $y$ coordinates in centimeters), and each one gets mapped to a full $SE(3)$ tool pose by fixing the orientation and setting the $z$-height constant. From there, the IK controller steps through every point sequentially, and the UR5 traces the shape on the physical workspace.

<p align="center">
  <img width="491" alt="Batman MATLAB Plot" src="https://github.com/Seyi-roboticist/OluwaseyiR.github.io/assets/143431845/2bd0c95d-0571-49d4-9c3f-81174033d52f">
  <img width="448" alt="Batman UR5 Hardware" src="https://github.com/Seyi-roboticist/OluwaseyiR.github.io/assets/143431845/27b36d31-3653-4056-a828-0f023ad41cec">
</p>

The left image shows the MATLAB plot of the 70 hardcoded points forming the outline. The right shows what the UR5 actually drew on hardware. The results matched up well, and the team got full extra credit.

## Team

This was a collaborative project with Tarun PrasadSenthilvel, Tushar Singh, and Zachary Frey. I wrote the IK-based trajectory controller (`ur5InverseControl`) and the Batman symbol generator (`batman_points`, `Batman_equations`, `batman_real_time_plot`), and contributed to the resolved-rate and Jacobian transpose implementations. Special thanks to Dr. Jin Seob Kim for his guidance throughout the course.

## Links

- [Project Page](https://github.com/Seyi-roboticist/OluwaseyiR.github.io/tree/main/Projects/Place_and_Draw)
