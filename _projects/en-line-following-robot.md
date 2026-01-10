---
layout: project
title: "Autonomous Line Following Robot"
description: "A sophisticated line-following robot built with Arduino Uno, featuring PID control, obstacle detection, and wireless monitoring capabilities."
date: 2024-10-15
categories: [Robotics, Arduino, Mechatronics]
featured_image: "/assets/images/projects/line-robot/featured.jpg"
github_url: "https://github.com/aojedao/line-following-robot"
demo_url: "#"
lang: "en"

models:
  - file: "/assets/models/line-robot/chassis.gltf"
    description: "3D printed chassis with integrated sensor mounts"
  - file: "/assets/models/line-robot/wheel-assembly.gltf"
    description: "Custom wheel assembly with encoder integration"

schematics:
  - file: "/assets/schematics/line-robot/main-circuit.svg"
    description: "Main control circuit with Arduino Uno and motor driver"

---

## Project Overview

This project demonstrates the design and implementation of an autonomous line-following robot using Arduino microcontroller technology. The robot uses infrared sensors and a PID controller for precise line tracking and can detect and avoid obstacles.

## Key Features

### Sensor System
- **5-Channel IR Sensor Array**: For precise line detection
- **Obstacle Detection**: Ultrasonic sensor for collision avoidance
- **Wireless Communication**: HC-12 module for remote monitoring

### Control System
- **PID Controller**: Maintains smooth line following
- **Adaptive Speed Control**: Adjusts velocity based on line complexity
- **Obstacle Avoidance**: Detects and navigates around obstacles

### Mechanical Design
- **3D Printed Chassis**: Lightweight and durable
- **Precision Encoders**: For speed feedback and distance tracking
- **Custom Motor Mounts**: Rigid and vibration-free

## Technical Specifications

| Specification | Value |
|---------------|-------|
| **Microcontroller** | Arduino Uno |
| **Motor Type** | DC Motors with Gearbox |
| **Max Speed** | 1.5 m/s |
| **Line Detection** | 5-Channel IR Array |
| **Obstacle Detection** | HC-SR04 Ultrasonic |
| **Power Source** | 7.4V LiPo Battery |
| **Operating Time** | 45 minutes continuous |
| **Sensor Resolution** | 1cm (distance) |

## System Architecture

### Hardware Components
1. **Arduino Uno**: Main processing unit
2. **Motor Driver Module**: L298N dual motor driver
3. **Sensor Array**: 5 infrared sensors for line tracking
4. **Ultrasonic Sensor**: For obstacle detection
5. **Wireless Module**: HC-12 for remote communication

### Software Architecture
- **Real-time Sensor Processing**: 100Hz update rate
- **PID Loop**: Continuous path correction
- **State Machine**: Manages robot behavior (follow, avoid, stop)

## PID Control Implementation

### Control Parameters
- **Kp** (Proportional): 2.0 - Controls response to line deviation
- **Ki** (Integral): 0.1 - Eliminates steady-state error
- **Kd** (Derivative): 0.5 - Prevents overshooting

### Line Position Calculation
- Sensors weighted by position (-2 to +2 range)
- Real-time error calculation for controller input

## Obstacle Avoidance Algorithm

1. **Detection**: Continuously measures distance via ultrasonic sensor
2. **Decision**: If distance < 15cm, execute avoidance
3. **Execution**: Turn away from obstacle while maintaining line contact
4. **Recovery**: Resume line following after obstacle cleared

## Performance Metrics

### Speed Performance
- **Straight Line**: 1.5 m/s maximum
- **Curved Section**: 0.8-1.2 m/s (adaptive)
- **Obstacle Avoidance**: Controlled deceleration

### Accuracy
- **Line Tracking Error**: <2cm deviation
- **Obstacle Detection Range**: 5-50cm
- **Positioning Repeatability**: Within 5cm

### Efficiency
- **Battery Life**: 45 minutes continuous operation
- **Current Draw**: 0.5A average (1.2A peak)
- **Power Consumption**: 6W average (10W peak)

## Applications

### Educational Use
- Learning robotics fundamentals
- Understanding control systems
- Exploring sensor integration

### Competition Events
- Autonomous vehicle competitions
- Line following challenges
- Multi-robot race events

### Industrial Inspection
- Floor surface monitoring
- Warehouse navigation
- Inspection track systems

## Lessons Learned

### Mechanical Design
1. **Motor Synchronization**: Both motors must have equal speed
2. **Friction Minimization**: Ball bearings in wheel hubs reduce power loss
3. **Center of Mass**: Position affects stability during turns

### Control Tuning
1. **PID Parameter Selection**: Critical for stable operation
2. **Sensor Calibration**: Ensures reliable line detection
3. **Feedback Loop Timing**: Must match sensor reading frequency

### Integration Challenges
1. **Noise Reduction**: Motor noise affects sensor readings
2. **Power Stability**: Voltage sag under load affects control
3. **Wireless Latency**: Communication delay in remote operations

## Future Enhancements

### Hardware Upgrades
- **Improved Motors**: Higher torque and precision encoders
- **Advanced Sensors**: RGB camera for line color detection
- **GPS Integration**: For large-scale area coverage

### Software Improvements
- **Machine Learning**: Adaptive control parameters
- **SLAM Implementation**: Simultaneous localization and mapping
- **Multi-Robot Coordination**: Fleet of coordinated robots

### Capability Expansion
- **Variable Track Width**: Adaptable to different line widths
- **Speed Optimization**: Faster completion times
- **Telemetry Dashboard**: Real-time performance monitoring
