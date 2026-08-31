---
layout: project
title: "Autonomous Navigation Robot"
description: "Multi-sensor autonomous mobile robot with finite state machine architecture. Fuses Pixy2 vision, IR proximity, ultrasonic ranging, and quadrature encoders for obstacle avoidance and cue-based navigation on a custom differential-drive platform."
status: completed
date: 2023-06-01
categories: [Autonomy, Embedded, Navigation, C++, Arduino]
featured_image: "https://github.com/Seyi-roboticist/OluwaseyiR.github.io/assets/143431845/e2be8889-235b-4072-83e4-30efd551662b"
github_url: "https://github.com/Seyi-roboticist/OluwaseyiR.github.io/tree/main/Projects/AutonomousNavigation"

code_files:
  - name: "Finite State Machine & Main Loop"
    file: "autonomousnav.ino"
    language: "cpp"
    download_url: "https://github.com/Seyi-roboticist/OluwaseyiR.github.io/blob/main/Projects/AutonomousNavigation/autonomousnav.ino"
    content: |
      // State machine for motor movements
      enum motorsMove {
        idle,
        move_forward,
        move_backward,
        left_turn,
        right_turn,
        u_turn,
        obstacle_avoidance
      };

      void loop(){
        double frontDist = measureDistance();
        double leftDist = measureIRDistance(IR_left);
        double rightDist = measureIRDistance(IR_right);

        if (((leftDist < sideDistance) || (rightDist < sideDistance))
             && frontDist < sideDistance) {
          currentState = obstacle_avoidance;
        }

        adjustWheelSpeeds();

        switch(currentState){
          case move_forward:
            forward();
            delay(10);
            checkForCues();
            break;
          case obstacle_avoidance:
            stop();
            delay(2000);
            currentState = determineTurn(leftDist, rightDist);
            break;
          case u_turn:
            performUturn();
            break;
          // ... additional states
        }
      }

  - name: "Pixy2 Color Cue Detection"
    file: "autonomousnav.ino"
    language: "cpp"
    download_url: "https://github.com/Seyi-roboticist/OluwaseyiR.github.io/blob/main/Projects/AutonomousNavigation/autonomousnav.ino"
    content: |
      // Color-based navigation cue detection
      void checkForCues() {
        pixy.ccc.getBlocks();
        if (pixy.ccc.numBlocks) {
          if (pixy.ccc.blocks[0].m_signature == 1
              && pixy.ccc.blocks[0].m_width >= pixyDist) {
            currentState = left_turn;
          }
          else if (pixy.ccc.blocks[0].m_signature == 2
              && pixy.ccc.blocks[0].m_width >= pixyDist) {
            currentState = right_turn;
          }
          else if (pixy.ccc.blocks[0].m_signature == 3
              && pixy.ccc.blocks[0].m_width >= pixyDist) {
            currentState = u_turn;
          }
        }
      }

  - name: "Encoder-Based Precise Turning"
    file: "autonomousnav.ino"
    language: "cpp"
    download_url: "https://github.com/Seyi-roboticist/OluwaseyiR.github.io/blob/main/Projects/AutonomousNavigation/autonomousnav.ino"
    content: |
      // Kinematic parameters
      const double wheelDiameter = 6.5;   // cm
      const double wheelCircumference = wheelDiameter * (22.0/7.0);
      const uint8_t CPR = 48;             // counts per revolution
      const double wheelBase = 21.7;      // cm

      // Convert desired angle to encoder counts
      int angleToCounts(double angle) {
        double arcLength = (2 * (22.0/7.0) * wheelBase * angle) / 360.0;
        int counts = (arcLength * CPR) / wheelCircumference;
        return counts;
      }

      // Encoder-controlled U-turn
      void performUturn() {
        static bool isTurning = false;
        static long startEncoderPos = 0;

        if (!isTurning){
          startEncoderPos = encoder0Pos;
          isTurning = true;
          setMotorSpeed(-200, 200);
        }
        long encoderDiff = abs(encoder0Pos - startEncoderPos);
        int countsForUturn = angleToCounts(180.0);
        if (encoderDiff >= countsForUturn) {
          stop();
          isTurning = false;
          currentState = move_forward;
        }
      }
---

## Overview

This project is a ground-up autonomous mobile robot built on an Arduino Mega with a custom differential-drive chassis. The robot navigates unknown environments by fusing data from four distinct sensor modalities: a Pixy2 camera for color-based cue recognition, IR proximity sensors on each flank, an ultrasonic ping sensor for frontal ranging, and quadrature wheel encoders for odometry and heading control. A finite state machine coordinates all behaviors — from straight-line driving with encoder-based correction to obstacle avoidance and precise encoder-metered turns.

The system demonstrates core mobile robotics principles at the hardware level: real-time multi-sensor polling, interrupt-driven encoder counting, kinematic modeling for differential-drive turning, and reactive behavior arbitration — all running on bare-metal embedded C++ with no operating system.

## Demo

![Autonomous Navigation Demo](https://github.com/Seyi-roboticist/OluwaseyiR.github.io/assets/143431845/e2be8889-235b-4072-83e4-30efd551662b)

## System Architecture

The robot's control flow follows a sense-plan-act loop running on the Arduino's main `loop()`:

<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
<script>mermaid.initialize({startOnLoad:true, theme:'dark'});</script>

<pre class="mermaid">
stateDiagram-v2
    [*] --> move_forward
    move_forward --> obstacle_avoidance : front + side blocked
    move_forward --> left_turn : Pixy2 sig 1 detected
    move_forward --> right_turn : Pixy2 sig 2 detected
    move_forward --> u_turn : Pixy2 sig 3 detected
    obstacle_avoidance --> left_turn : left clearer
    obstacle_avoidance --> right_turn : right clearer
    left_turn --> move_forward : turn complete
    right_turn --> move_forward : turn complete
    u_turn --> move_forward : 180° reached (encoder)
    move_forward --> idle : stop command
    idle --> move_forward : 4s timeout
</pre>

## Sensor Fusion

The robot polls four sensor types every loop iteration, each serving a distinct role in the navigation pipeline:

**Ultrasonic Ping Sensor (front)** — Measures forward clearance using time-of-flight. The ping pin toggles between output (trigger) and input (echo), and the round-trip duration converts to centimeters via $d = \frac{t \times 0.034}{2}$. This provides the primary "stop or go" signal.

**IR Proximity Sensors (left & right)** — Analog Sharp-type IR sensors on A0 and A1 measure lateral clearance. Raw ADC values convert to distance through the inverse-power model $d = 27.86 \cdot V^{-1.15}$, derived from the sensor's characteristic voltage-distance curve. When either side reads below the 12.5 cm threshold simultaneously with a frontal obstruction, the FSM transitions to `obstacle_avoidance`.

**Pixy2 Camera** — Runs the Color Connected Components (CCC) algorithm to detect trained color signatures in the field of view. Each signature maps to a navigation command: signature 1 triggers a left turn, signature 2 a right turn, and signature 3 a U-turn. The block width threshold (`pixyDist = 50` pixels) ensures the robot only responds when close enough to the cue, preventing premature reactions to distant markers.

**Quadrature Encoders** — Two Pololu 25D gearmotors with 48 CPR encoders provide wheel odometry through hardware interrupts on pins 2, 3, 5, and 6. The ISRs decode the A/B channel phase relationship to determine rotation direction: if channel A leads channel B, the wheel rotates clockwise (decrement); if B leads A, counterclockwise (increment). Encoder counts feed two control loops: differential drive correction for straight-line tracking, and precise angular turns via kinematic conversion.

## Differential Drive Kinematics

Precise turning relies on converting a desired heading change to encoder counts through the robot's kinematic model. For a differential-drive robot with wheel base $L$ and wheel circumference $C$:

$$\text{arc length} = \frac{2\pi \cdot L \cdot \theta}{360°}$$

$$\text{counts} = \frac{\text{arc length} \times \text{CPR}}{C}$$

where $L = 21.7$ cm (track width), $C = \pi \times 6.5$ cm (wheel circumference), CPR $= 48$, and $\theta$ is the desired turn angle in degrees. For a 180° U-turn, this yields approximately 155 encoder counts on the pivot wheel.

The `adjustWheelSpeeds()` function implements a proportional correction that compares left and right encoder counts. When the difference exceeds a 15-count threshold, the faster wheel decelerates until the counts converge — a simple but effective approach to straight-line tracking without a full PID controller.

## Hardware Platform

| Component | Part | Role |
|---|---|---|
| Microcontroller | Arduino Mega 2560 | Main controller, 4 interrupt pins for encoders |
| Motor Driver | Pololu DualMAX14870 Shield | Dual H-bridge, PWM speed control |
| Drive Motors | Pololu 25D Metal Gearmotors | DC motors with 48 CPR quadrature encoders |
| Wheels | DFRobot 65mm Rubber Wheels | 6.5 cm diameter, rubber traction |
| Vision | Pixy2 Camera (SPI) | Color connected components, trained signatures |
| Front Range | Ultrasonic Ping Sensor | Time-of-flight distance, ~2–300 cm range |
| Side Range | Sharp IR Sensors (×2) | Analog distance, ~10–80 cm range |

## Results

The robot successfully navigates structured environments with color-coded turn markers and dynamic obstacles. Key outcomes:

| Metric | Value |
|---|---|
| Sensor polling rate | ~50 Hz (main loop) |
| Encoder resolution | 48 CPR × 4 (quadrature decode) |
| Turn accuracy | ±5° at 90° and 180° turns |
| Obstacle stop distance | 12.5 cm threshold |
| Navigation cues supported | 3 (left, right, U-turn) |
| Straight-line correction | 15-count encoder threshold |

## Links

- [Source Code](https://github.com/Seyi-roboticist/OluwaseyiR.github.io/tree/main/Projects/AutonomousNavigation)
