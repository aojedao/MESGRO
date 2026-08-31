---
layout: default
title: About
permalink: /about/
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">

<style>
  /* ── Hero ── */
  .about-hero {
    padding: 100px 0 3rem;
    background: var(--background-color);
    border-bottom: 1px solid var(--border-color);
  }
  .about-hero h1 {
    color: var(--text-primary);
    font-size: clamp(2.6rem, 6vw, 3.8rem);
    letter-spacing: -0.03em;
    margin-bottom: 1.8rem;
    font-weight: 800;
  }
  .about-intro {
    color: var(--text-secondary);
    font-size: clamp(1.15rem, 2.5vw, 1.35rem);
    line-height: 1.85;
    max-width: 760px;
    margin: 0 auto 1.2rem;
    font-weight: 300;
  }

  /* ── Open to Opportunities Banner ── */
  .opportunity-banner {
    position: relative;
    max-width: 760px;
    margin: 2.5rem auto 0;
    padding: 2.4rem 2.6rem;
    background: linear-gradient(135deg, rgba(99,102,241,0.07) 0%, rgba(52,211,153,0.07) 100%);
    border: 1px solid rgba(99,102,241,0.25);
    border-radius: 14px;
    overflow: hidden;
  }
  .opportunity-banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(180deg, var(--primary-color, #6366f1), #34d399);
    border-radius: 5px 0 0 5px;
  }
  .opportunity-badge {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 8px 22px;
    background: linear-gradient(135deg, var(--primary-color, #6366f1), #34d399);
    color: #fff;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-radius: 20px;
    margin-bottom: 1.2rem;
  }
  .opportunity-badge .pulse {
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    animation: pulse-opp 2s ease-in-out infinite;
  }
  @keyframes pulse-opp {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(255,255,255,0.5); }
    50% { opacity: 0.6; box-shadow: 0 0 0 6px rgba(255,255,255,0); }
  }
  .opportunity-text {
    color: var(--text-primary);
    font-size: clamp(1.05rem, 2.2vw, 1.22rem);
    line-height: 1.8;
    margin: 0;
    font-weight: 400;
  }
  .opportunity-text strong {
    color: var(--accent-color, var(--primary-color));
  }

  /* ── Now Section ── */
  .now-section {
    max-width: 760px;
    margin: 2.5rem auto 0;
  }
  .now-card {
    display: flex;
    align-items: flex-start;
    gap: 1.4rem;
    padding: 1.4rem 1.6rem;
    background: var(--surface-color);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .now-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px var(--shadow-color);
  }
  .now-icon {
    flex-shrink: 0;
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--primary-color, #6366f1), var(--accent-color, #818cf8));
    border-radius: 10px;
    font-size: 1.1rem;
  }
  .now-details h3 {
    color: var(--text-primary);
    font-size: 1rem;
    margin: 0 0 4px;
    font-weight: 600;
  }
  .now-details p {
    color: var(--text-secondary);
    font-size: 0.88rem;
    margin: 0;
    line-height: 1.6;
    opacity: 0.8;
  }
  .now-tag {
    display: inline-block;
    margin-top: 6px;
    padding: 2px 10px;
    background: rgba(99,102,241,0.1);
    color: var(--accent-color, var(--primary-color));
    font-size: 0.72rem;
    font-weight: 600;
    border-radius: 20px;
    letter-spacing: 0.03em;
  }

  /* ── Body ── */
  .about-body h2 {
    color: var(--text-primary);
    font-size: clamp(1.6rem, 3.5vw, 2rem);
    letter-spacing: -0.01em;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }
  .about-divider {
    border: none;
    border-top: 1px solid rgba(128,128,128,0.15);
    margin: 3rem 0;
  }
  .about-body .skill-category h3 {
    margin-bottom: 0.8rem;
  }
  .about-body .skill-category p {
    font-size: 0.92rem;
    line-height: 1.7;
    opacity: 0.8;
    margin-bottom: 1rem;
  }

  /* ── Tools ── */
  .tools-icon-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.2rem;
    padding: 2.5rem 0 1.5rem;
  }
  .tool-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    transition: transform 0.2s ease;
  }
  .tool-icon:hover {
    transform: translateY(-4px);
  }
  .tool-icon i {
    font-size: 2.8rem;
    opacity: 0.9;
  }
  .tool-icon span {
    font-size: 0.75rem;
    opacity: 0.7;
    letter-spacing: 0.03em;
  }
  .extra-tools {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.6rem;
    padding: 0.5rem 0 2rem;
  }

  /* ── Education & Teaching ── */
  .edu-role {
    color: var(--accent-color, var(--primary-color));
    font-weight: 600;
  }
  .edu-detail {
    opacity: 0.7;
    font-size: 0.88rem;
  }

  /* ── Timeline ── */
  .timeline {
    position: relative;
    padding-left: 2rem;
  }
  .timeline::before {
    content: '';
    position: absolute;
    left: 6px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: linear-gradient(180deg, var(--primary-color, #6366f1), rgba(99,102,241,0.15));
    border-radius: 2px;
  }
  .timeline-item {
    position: relative;
    padding: 0 0 2rem 1.5rem;
  }
  .timeline-item:last-child {
    padding-bottom: 0;
  }
  .timeline-item::before {
    content: '';
    position: absolute;
    left: -1.55rem;
    top: 8px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--primary-color, #6366f1);
    border: 2px solid var(--background-color);
    box-shadow: 0 0 0 2px var(--primary-color, #6366f1);
  }
  .timeline-period {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--accent-color, var(--primary-color));
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 4px;
  }
  .timeline-role {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 2px;
  }
  .timeline-org {
    font-size: 0.88rem;
    color: var(--text-secondary);
    opacity: 0.7;
    margin-bottom: 6px;
  }
  .timeline-desc {
    font-size: 0.88rem;
    color: var(--text-secondary);
    line-height: 1.6;
    opacity: 0.8;
  }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .opportunity-banner { padding: 1.4rem 1.4rem; }
    .now-card { flex-direction: column; text-align: center; align-items: center; }
  }
</style>

<div class="about-hero">
  <div class="container">
    <h1>About Me</h1>
    <p class="about-intro">I am a roboticist by training with an M.S.E. in Robotics from Johns Hopkins University, where I was an LCSR Distinguished Scholar on full-tuition fellowship, and a B.Sc. in Mechatronics, graduating first in my class, Summa Cum Laude. My training and experience focus on building robotic systems end to end, from mathematical modeling and control design to real-time C++ and Python implementation and validation on real hardware. I care deeply about correctness, stability, and execution in the real world.</p>


    <!-- Current Role -->
    <div class="now-section">
      <div class="now-card">
        <div class="now-icon">
          <i class="fas fa-industry" style="color: #fff; font-size: 1.1rem;"></i>
        </div>
        <div class="now-details">
          <h3>Controls Engineer at The RDI Group</h3>
          <p>Currently designing control system architectures for industrial automation: Allen-Bradley PLC programming, safety-critical sequencing, and validation protocols for production systems across manufacturing verticals. </p>
          <span class="now-tag">Current Role</span>
        </div>
      </div>
    </div>

    <!-- Open to Opportunities -->
    <div class="opportunity-banner">
      <div class="opportunity-badge">
        <span class="pulse"></span>
        Open to Opportunities
      </div>
      <p class="opportunity-text">I am a trained roboticist with deep, proven expertise in <strong>robotic manipulation</strong>, <strong>flight controls and GNC</strong>, <strong>motion planning</strong>, <strong>real-time control systems</strong>, <strong>state estimation</strong>, and <strong>perception</strong>. I am actively seeking roles in the robotics industry where the full depth of my skills can be put to work: designing control architectures, building sensor fusion pipelines, deploying autonomous systems, and shipping robots that perform in the real world. If your team is solving hard problems in robotics, I would love to hear from you.</p>
    </div>
  </div>
</div>

<div class="container about-body">

<h2>What I Build</h2>

<div class="skills-grid">
  <div class="skill-category">
    <h3>Robotic Manipulation</h3>
    <p>This is where I started and what I keep coming back to. Real-time Cartesian control on UR5/UR5e platforms with singularity-robust inverse kinematics and sub-millimeter tracking accuracy. Currently designing a custom robot arm from scratch: mechanical design, electronics, and full ROS 2 integration.</p>
    <div class="skill-tags">
      <span class="skill-tag">Jacobian IK (SVD + Tikhonov)</span>
      <span class="skill-tag">Real-Time Control Loops</span>
      <span class="skill-tag">+/-0.7mm Accuracy</span>
      <span class="skill-tag">ros2_control</span>
      <span class="skill-tag">UR5/UR5e</span>
      <span class="skill-tag">Custom Arm Design</span>
    </div>
  </div>

  <div class="skill-category">
    <h3>Flight Controls & GNC</h3>
    <p>Full autopilot design from first principles: 6DOF modeling, trim analysis, linearization, and successive loop closure for both fixed-wing and rotary-wing UAVs. Dual EKF state estimation with GPS smoothing using Gauss-Markov error models. Dual FAA Part 107 and Transport Canada certified remote pilot.</p>
    <div class="skill-tags">
      <span class="skill-tag">6DOF Modeling</span>
      <span class="skill-tag">Successive Loop Closure</span>
      <span class="skill-tag">PID/PIR</span>
      <span class="skill-tag">Stability Margins</span>
      <span class="skill-tag">EKF Sensor Fusion</span>
      <span class="skill-tag">FAA Part 107</span>
    </div>
  </div>

  <div class="skill-category">
    <h3>Mobile Robotics</h3>
    <p>Autonomous mobile robots that navigate, plan, and interact. Built JHockey, an autonomous mobile robot for a robotics hockey competition at Hopkins. Whole-body coordination for mobile manipulation using quadratic programming on a Husky+UR5 platform.</p>
    <div class="skill-tags">
      <span class="skill-tag">Autonomous Navigation</span>
      <span class="skill-tag">Motion Planning</span>
      <span class="skill-tag">Mobile Manipulation</span>
      <span class="skill-tag">QP Optimization</span>
      <span class="skill-tag">JHockey</span>
    </div>
  </div>

  <div class="skill-category">
    <h3>Perception & Machine Learning</h3>
    <p>Computer vision, deep learning, and 3D reconstruction. Implemented Neural Radiance Fields (NeRF) for novel view synthesis. Built a from-scratch autograd engine and trained a neural network classifier using my own backpropagation code. Experience with sim-to-real transfer and vision-based autonomy.</p>
    <div class="skill-tags">
      <span class="skill-tag">Computer Vision (OpenCV)</span>
      <span class="skill-tag">Deep Learning</span>
      <span class="skill-tag">NeRF</span>
      <span class="skill-tag">Autograd Engine</span>
      <span class="skill-tag">Sim-to-Real Transfer</span>
    </div>
  </div>

  <div class="skill-category">
    <h3>State Estimation & Sensor Fusion</h3>
    <p>Turning noisy sensor data into reliable state estimates. Dual EKF design: attitude estimation from gyro and accelerometer data, and GPS smoothing with Gauss-Markov error models. Multi-sensor fusion for navigation in GPS-denied environments including underwater vehicles.</p>
    <div class="skill-tags">
      <span class="skill-tag">Extended Kalman Filters</span>
      <span class="skill-tag">GPS Smoothing</span>
      <span class="skill-tag">IMU/Accel/Mag Fusion</span>
      <span class="skill-tag">GPS-Denied Navigation</span>
    </div>
  </div>

  <div class="skill-category">
    <h3>Industrial Automation</h3>
    <p>Safety-critical control systems for production environments. Allen-Bradley PLC programming, fault-tolerant interlocks, VFD motor control, and deterministic sequencing. Built computer vision and LLM-based tools to extract engineering data from electrical schematics, reducing manual documentation effort by 80%.</p>
    <div class="skill-tags">
      <span class="skill-tag">Allen-Bradley PLCs</span>
      <span class="skill-tag">Safety Interlocks</span>
      <span class="skill-tag">VFD Motor Control</span>
      <span class="skill-tag">Ladder Logic</span>
    </div>
  </div>
</div>

<hr class="about-divider">

<h2>Experience</h2>

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-period">Sep 2025 - Present</div>
    <div class="timeline-role">Controls Engineer</div>
    <div class="timeline-org">The RDI Group, Itasca, IL</div>
    <div class="timeline-desc">Designing control system architectures for industrial automation. Implementing control logic and I/O interfaces for Allen-Bradley PLCs. Developing safety-critical control sequences with deterministic real-time response requirements. Building automation tools using computer vision and LLMs to extract engineering data from electrical schematics.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-period">Dec 2023 - Aug 2024</div>
    <div class="timeline-role">Research Engineer, Controls & Underwater Robotics</div>
    <div class="timeline-org">Dynamical Systems & Control Lab, JHU (Supervisor: Dr. Louis Whitcomb, IEEE Fellow)</div>
    <div class="timeline-desc">Contributed to the control system development for the JHUROV 2 underwater vehicle autonomy stack. Developed trajectory tracking algorithms for subsea navigation under dynamic constraints. Implemented state estimation and sensor fusion for underwater vehicle localization.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-period">Jun 2024 - Sep 2024</div>
    <div class="timeline-role">Controls Software Engineer Intern</div>
    <div class="timeline-org">Johns Hopkins University (Supervisors: Dr. Simon Leonard, Dr. Jin Seob Kim)</div>
    <div class="timeline-desc">Developed real-time control algorithms with validated simulation-to-hardware deployment pipelines. Built sensor integration and calibration pipelines for control system feedback. Implemented trajectory generation and tracking controllers for manipulator systems.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-period">Apr 2016 - Jul 2019</div>
    <div class="timeline-role">Aviation Systems Technician & Licensed Remote Pilot</div>
    <div class="timeline-org">Cargojet, Canada</div>
    <div class="timeline-desc">System troubleshooting and validation for aviation maintenance operations. Operated UAV systems with focus on flight control and operational safety protocols.</div>
  </div>
</div>

<hr class="about-divider">

<h2>Languages & Tools</h2>

<div class="tools-icon-grid">
  <div class="tool-icon">
    <i class="devicon-cplusplus-plain"></i>
    <span>C++</span>
  </div>
  <div class="tool-icon">
    <i class="devicon-python-plain"></i>
    <span>Python</span>
  </div>
  <div class="tool-icon">
    <i class="devicon-matlab-plain"></i>
    <span>MATLAB</span>
  </div>
  <div class="tool-icon">
    <i class="devicon-pytorch-original"></i>
    <span>PyTorch</span>
  </div>
  <div class="tool-icon">
    <i class="devicon-opencv-plain"></i>
    <span>OpenCV</span>
  </div>
  <div class="tool-icon">
    <i class="fas fa-robot" style="font-size:2.8rem; opacity:0.9;"></i>
    <span>ROS 2</span>
  </div>
  <div class="tool-icon">
    <i class="fas fa-cube" style="font-size:2.8rem; opacity:0.9;"></i>
    <span>Gazebo</span>
  </div>
  <div class="tool-icon">
    <i class="devicon-linux-plain"></i>
    <span>Linux</span>
  </div>
  <div class="tool-icon">
    <i class="devicon-git-plain"></i>
    <span>Git</span>
  </div>
  <div class="tool-icon">
    <i class="devicon-docker-plain"></i>
    <span>Docker</span>
  </div>
  <div class="tool-icon">
    <i class="devicon-cmake-plain"></i>
    <span>CMake</span>
  </div>
  <div class="tool-icon">
    <i class="devicon-bash-plain"></i>
    <span>Bash</span>
  </div>
  <div class="tool-icon">
    <i class="devicon-latex-original"></i>
    <span>LaTeX</span>
  </div>
</div>

<div class="extra-tools">
  <span class="skill-tag">Simulink</span>
  <span class="skill-tag">Isaac Sim</span>
  <span class="skill-tag">MAVROS</span>
  <span class="skill-tag">ros2_control</span>
  <span class="skill-tag">KDL</span>
  <span class="skill-tag">Eigen</span>
  <span class="skill-tag">Pixhawk</span>
  <span class="skill-tag">NVIDIA Jetson</span>
  <span class="skill-tag">Ladder Logic</span>
</div>

<hr class="about-divider">

<h2>Education</h2>

<div class="skills-grid">
  <div class="skill-category">
    <h3>Johns Hopkins University</h3>
    <p><span class="edu-role">M.S.E. Robotics</span><br><span class="edu-detail">Control & Perception Track, Aug 2023 - May 2025</span></p>
    <div class="skill-tags">
      <span class="skill-tag">LCSR Distinguished Scholar</span>
      <span class="skill-tag">Full Fellowship</span>
    </div>
  </div>

  <div class="skill-category">
    <h3>University of Prince Edward Island</h3>
    <p><span class="edu-role">B.Sc. Sustainable Design Engineering</span><br><span class="edu-detail">Mechatronics, Summa Cum Laude, Sep 2019 - Apr 2023</span></p>
    <div class="skill-tags">
      <span class="skill-tag">First in Class</span>
      <span class="skill-tag">Engineers PEI Award</span>
      <span class="skill-tag">Technical Excellence Award</span>
    </div>
  </div>
</div>

<hr class="about-divider">

<h2>Certifications</h2>

<div class="skills-grid">
  <div class="skill-category">
    <h3>FAA Part 107 Remote Pilot</h3>
    <p><span class="edu-detail">United States, Jan 2025</span></p>
  </div>

  <div class="skill-category">
    <h3>Transport Canada Remote Pilot (Advanced)</h3>
    <p><span class="edu-detail">Canada, Sep 2020</span></p>
  </div>
</div>

<hr class="about-divider">

<h2>Teaching</h2>

<div class="skills-grid">
  <div class="skill-category">
    <h3>Algorithms for Sensor-Based Robotics</h3>
    <p><span class="edu-role">EN.601.463/663</span><br><span class="edu-detail">Prof. Simon Leonard, JHU, Aug 2024 - May 2025</span></p>
    <div class="skill-tags">
      <span class="skill-tag">82+ Students</span>
      <span class="skill-tag">UR5 Hardware Validation</span>
      <span class="skill-tag">Motion Planning</span>
    </div>
  </div>

  <div class="skill-category">
    <h3>Design & Analysis of Dynamic Systems</h3>
    <p><span class="edu-role">EN.530.343</span><br><span class="edu-detail">Prof. Louis Whitcomb, JHU, Dec 2024 - May 2025</span></p>
    <div class="skill-tags">
      <span class="skill-tag">Control Theory</span>
      <span class="skill-tag">Servo Systems</span>
      <span class="skill-tag">Stability Analysis</span>
    </div>
  </div>

  <div class="skill-category">
    <h3>Robot Sensors and Actuators</h3>
    <p><span class="edu-role">EN.530.430</span><br><span class="edu-detail">Prof. David Kraemer, JHU, Aug 2024 - Dec 2024</span></p>
    <div class="skill-tags">
      <span class="skill-tag">Sensor Calibration</span>
      <span class="skill-tag">Embedded Systems</span>
      <span class="skill-tag">Arduino</span>
    </div>
  </div>
</div>

<hr class="about-divider">

<h2>Selected Honors</h2>

<div class="skills-grid">
  <div class="skill-category">
    <h3>LCSR Distinguished Scholarship</h3>
    <p><span class="edu-detail">Johns Hopkins University, full tuition and health insurance fellowship for research excellence in robotics</span></p>
  </div>
  <div class="skill-category">
    <h3>Fung Excellence Award</h3>
    <p><span class="edu-detail">Coleman Fung Institute, UC Berkeley. Merit-based scholarship at maximum value (Declined)</span></p>
  </div>
  <div class="skill-category">
    <h3>Engineering Undergraduate Research Award</h3>
    <p><span class="edu-detail">UPEI, NSERC-equivalent research award for international students</span></p>
  </div>
  <div class="skill-category">
    <h3>Mastercard Foundation Scholars Program</h3>
    <p><span class="edu-detail">UC Berkeley, Finalist (Declined due to J-1 visa restrictions)</span></p>
  </div>
</div>

</div>
