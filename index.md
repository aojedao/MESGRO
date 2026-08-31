---
layout: default
title: Home
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">

<style>
  .hero-personal {
    padding: 5rem 0 3rem;
  }
  .hero-tagline {
    letter-spacing: 0.05em;
    opacity: 0.85;
  }
  .hero-layout {
    display: flex;
    align-items: center;
    gap: 4rem;
  }
  .hero-photo-wrapper {
    flex-shrink: 0;
  }
  .hero-photo {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center top;
    border: 3px solid var(--border-color);
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .hero-photo:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 40px rgba(0,0,0,0.25);
  }
  @media (max-width: 768px) {
    .hero-layout {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
    }
    .hero-photo {
      width: 180px;
      height: 180px;
    }
    .hero-info-wrapper {
      align-items: center !important;
    }
    .hero-actions {
      justify-content: center !important;
    }
  }
  .intro-section p {
    font-size: 1.15rem;
    line-height: 1.8;
    max-width: 720px;
    margin: 0 auto;
  }
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
  .section-divider {
    border: none;
    border-top: 1px solid rgba(128,128,128,0.15);
    margin: 3rem 0;
  }
  .skill-category h3 {
    margin-bottom: 0.8rem;
  }
  .skill-category p {
    font-size: 0.92rem;
    line-height: 1.6;
    opacity: 0.8;
    margin-bottom: 1rem;
  }
</style>

<div class="hero-personal">
  <div class="container">
    <div class="hero-content">
      <div class="hero-layout">
        <div class="hero-photo-wrapper">
          <img src="{{ '/assets/images/seyi.png' | relative_url }}" alt="Seyi R. Afolayan" class="hero-photo">
        </div>
        <div class="hero-info-wrapper" style="flex-direction: column; align-items: flex-start;">
          <div class="hero-text">
            <h1 class="hero-name">Oluwaseyi R. Afolayan</h1>
            <p class="hero-title">Full-Stack Roboticist</p>
            <p class="hero-tagline">Manipulation · Flight Controls · Perception · Autonomy · State Estimation</p>
          </div>

          <div class="hero-actions">
            <a href="{{ '/projects/' | relative_url }}" class="btn-primary">View Projects</a>
            {% if site.author.resume %}
            <a href="{{ site.author.resume | relative_url }}" class="btn-secondary" target="_blank"
              rel="noopener" data-track="resume" data-track-location="hero">Download Resume</a>
            {% endif %}
            <a href="{{ '/about/' | relative_url }}" class="btn-secondary">About Me</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="intro-section">
  <div class="container">
    <p>I build robots that manipulate, navigate, and fly. My work spans real-time Cartesian control on industrial manipulators, full-stack drone autonomy with sim-to-real pipelines, and custom motion planners for collision-free operation. Every project here goes from mathematical foundations through implementation to hardware validation.</p>
  </div>
</div>

<hr class="section-divider">

<div class="skills-section">
  <div class="container">
    <div class="skills-content">
      <h2>Core Competencies</h2>
    </div>

    <div class="skills-grid">
      <div class="skill-category">
        <h3>Robotic Manipulation</h3>
        <p>Jacobian-based Cartesian control, singularity-robust IK, and real-time servo loops on UR5/UR5e platforms.</p>
        <div class="skill-tags">
          <span class="skill-tag">Inverse Kinematics</span>
          <span class="skill-tag">ros2_control</span>
          <span class="skill-tag">500Hz Servo</span>
          <span class="skill-tag">SVD Damping</span>
        </div>
      </div>

      <div class="skill-category">
        <h3>Flight Controls & GNC</h3>
        <p>6DOF modeling, successive loop closure, dual EKF state estimation, and full autopilot design for fixed-wing and rotary platforms.</p>
        <div class="skill-tags">
          <span class="skill-tag">ArduPilot</span>
          <span class="skill-tag">MAVROS</span>
          <span class="skill-tag">PID Tuning</span>
          <span class="skill-tag">FAA Part 107</span>
        </div>
      </div>

      <div class="skill-category">
        <h3>Motion Planning</h3>
        <p>Sampling-based and optimization-based planners for collision-free trajectory generation in configuration space.</p>
        <div class="skill-tags">
          <span class="skill-tag">BiEST</span>
          <span class="skill-tag">MoveIt 2</span>
          <span class="skill-tag">OMPL</span>
          <span class="skill-tag">C++ Plugins</span>
        </div>
      </div>

      <div class="skill-category">
        <h3>Perception & ML</h3>
        <p>Computer vision pipelines, ArUco-based precision landing, deep learning for classification, and from-scratch autograd engines.</p>
        <div class="skill-tags">
          <span class="skill-tag">OpenCV</span>
          <span class="skill-tag">PyTorch</span>
          <span class="skill-tag">ArUco</span>
          <span class="skill-tag">Backpropagation</span>
        </div>
      </div>

      <div class="skill-category">
        <h3>Embedded & Mechatronics</h3>
        <p>Sensor integration, real-time embedded control, motor drives, and full electromechanical system design.</p>
        <div class="skill-tags">
          <span class="skill-tag">Arduino</span>
          <span class="skill-tag">Pixhawk</span>
          <span class="skill-tag">NVIDIA Jetson</span>
          <span class="skill-tag">Bradley PLCs</span>
          <span class="skill-tag">Safety Interlocks</span>
          <span class="skill-tag">VFD Motor Control</span>
          <span class="skill-tag">Embedded Real-Time</span>
        </div>
      </div>

    </div>
  </div>
</div>

<hr class="section-divider">

<div class="skills-section">
  <div class="container">
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
        <i class="devicon-ros-original"></i>
        <span>ROS 2</span>
      </div>
      <div class="tool-icon">
        <i class="devicon-gazebo-plain"></i>
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
      <span class="skill-tag">Isaac Sim</span>
      <span class="skill-tag">MAVROS</span>
      <span class="skill-tag">ros2_control</span>
      <span class="skill-tag">Simulink</span>
      <span class="skill-tag">KDL</span>
      <span class="skill-tag">Eigen</span>
      <span class="skill-tag">Pixhawk</span>
      <span class="skill-tag">NVIDIA Jetson</span>
    </div>
  </div>
</div>

<hr class="section-divider">

<div class="projects-showcase">
  <div class="container">
    <div class="section-header">
      <h2>Portfolio</h2>
      <p class="section-subtitle">A curated collection of my research and designs</p>
    </div>

    <div class="projects-grid-featured">
      {% assign completed = site.projects | where: "status", "completed" | sort: "date" | reverse %}
      {% for project in completed limit: 6 %}
        <div class="project-card-featured">
          <div class="project-media">
            {% if project.featured_image %}
              <img src="{{ project.featured_image | relative_url }}" alt="{{ project.title }}">
            {% else %}
              <div class="project-placeholder">
                <i class="fas fa-robot"></i>
              </div>
            {% endif %}
            <div class="project-overlay">
              <a href="{{ project.url | relative_url }}" class="project-link">
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div class="project-info">
            <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
            <p>{{ project.description | truncate: 100 }}</p>
          </div>
        </div>
      {% endfor %}
    </div>

    <div class="showcase-actions">
      <a href="{{ '/projects/' | relative_url }}" class="btn-primary">View All Projects</a>
    </div>
  </div>
</div>
