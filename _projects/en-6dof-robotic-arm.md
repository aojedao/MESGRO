---
layout: project
title: "6-DOF Robotic Arm with Vision System"
description: "An advanced six-degree-of-freedom robotic arm with computer vision capabilities for object detection, pick-and-place operations, and precise positioning tasks."
date: 2024-09-20
categories: [Robotics, Computer Vision, Machine Learning, 3D Printing]
featured_image: "/assets/images/projects/robotic-arm/featured.jpg"
github_url: "https://github.com/aojedao/6dof-robotic-arm"
demo_url: "#"
interactive_plot: true
lang: "en"

models:
  - file: "/assets/models/robotic-arm/base.gltf"
    description: "Robotic arm base with servo mounting points"
  - file: "/assets/models/robotic-arm/upper-arm.gltf"
    description: "Upper arm segment with gear reduction"

schematics:
  - file: "/assets/schematics/robotic-arm/control-system.svg"
    description: "Main control system with microcontroller and servo controllers"
  - file: "/assets/schematics/robotic-arm/power-distribution.svg"
    description: "Power distribution for servos and control electronics"
  - file: "/assets/schematics/robotic-arm/vision-module.svg"
    description: "Camera module and processing unit connections"

---

## Project Overview

This project presents a sophisticated 6-degree-of-freedom robotic arm integrated with a computer vision system for autonomous object manipulation. The system combines advanced inverse kinematics algorithms with real-time object detection for precise pick-and-place operations.

## Key Features

### Mechanical Design
- **6 Degrees of Freedom**: Full spatial manipulation capability
- **Precision Joints**: Ball bearing supported for smooth operation
- **Custom Gripper**: Force-feedback enabled end-effector
- **Modular Design**: Easy maintenance and replacement

### Intelligent Control System
- **Inverse Kinematics**: Real-time joint angle calculation
- **Path Planning**: Smooth trajectory generation with collision avoidance
- **Safety Limits**: Joint limit protection and collision detection

### Computer Vision
- **Real-time Detection**: YOLO-based object detection
- **3D Positioning**: Convert 2D detections to 3D coordinates
- **Object Classification**: Identify and categorize targets

## Technical Specifications

| Component | Specification |
|-----------|---------------|
| **Reach** | 400mm maximum |
| **Payload** | 500g maximum |
| **Repeatability** | ±2mm |
| **Joint Resolution** | 0.1° per step |
| **Operating Speed** | 50°/second maximum |
| **Vision Resolution** | 1920x1080 @ 30fps |

## System Architecture

- **Raspberry Pi 4B**: Main processing unit
- **Arduino Mega**: Real-time servo control
- **PCA9685**: 16-channel PWM servo driver
- **USB Camera**: High-resolution vision system
- **Custom PCB**: Power distribution and signal conditioning

## Applications

### 1. Automated Sorting
- Identifies objects by type and color
- Sorts items into designated containers

### 2. Assembly Tasks
- Precise component placement
- Visual-guided insertion operations

### 3. Quality Inspection
- Multi-angle object photography
- Dimension measurement via computer vision

## Performance Results

- **Position Accuracy**: Mean error of 1.2mm
- **Repeatability**: Standard deviation of 0.8mm
- **Detection Success Rate**: 94% for target objects
- **Pick-Place Cycle Time**: 12 seconds average
