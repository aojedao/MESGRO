---
layout: default
---

<div class="hero-personal">
  <div class="container">
    <div class="hero-content">
      <div class="hero-info-wrapper">
        <div class="hero-text">
           <h1 class="hero-name" data-i18n="site.author_name">{% include translate.html key="site.author_name" %}</h1>
           <p class="hero-title" data-i18n="hero.subtitle">{% include translate.html key="hero.subtitle" %}</p>
        </div>
        
        <div class="hero-actions">
          <a href="{{ '/about/' | relative_url }}" class="btn-secondary" data-i18n="hero.about_btn">
            {% include translate.html key="hero.about_btn" %}
          </a>
           <a href="mailto:{{ site.email }}" class="btn-secondary" data-i18n="hero.contact_btn">
            {% include translate.html key="hero.contact_btn" %}
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="projects-showcase">
  <div class="container">
    <div class="section-header">
      <h2 data-i18n="portfolio.title">{% include translate.html key="portfolio.title" %}</h2>
      <p class="section-subtitle" data-i18n="portfolio.subtitle">{% include translate.html key="portfolio.subtitle" %}</p>
    </div>
    
    <div class="projects-grid-featured">
      {% assign featured_projects = site.projects | where: "featured", true | sort: "date" | reverse %}
      {% assign all_projects = site.projects | sort: "date" | reverse %}
      {% assign combined_projects = featured_projects | concat: all_projects %}
      {% assign unique_projects = combined_projects | uniq %}
      {% for project in unique_projects limit: 9 %}
        <div class="project-card-featured">
          <div class="project-media">
            {% if project.featured_image %}
              <img src="{{ project.featured_image | relative_url }}" alt="{{ project.title }}" class="project-image">
            {% elsif project.models.first %}
              <div class="model-preview-small">
                <model-viewer 
                  src="{{ project.models.first.file | relative_url }}"
                  alt="{{ project.title }}"
                  camera-controls
                  auto-rotate
                  class="preview-model-small">
                </model-viewer>
              </div>
            {% else %}
              <div class="project-placeholder-small">
                <i class="fas fa-robot"></i>
              </div>
            {% endif %}
            
            <div class="project-overlay">
              <a href="{{ project.url | relative_url }}" class="project-link-overlay">
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          
          <div class="project-info-featured">
            <div class="project-categories-small">
              {% for category in project.categories limit:2 %}
                <span class="category-tag-small">{{ category }}</span>
              {% endfor %}
            </div>
            
            <h3 class="project-title-featured">
              <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
            </h3>
            
            <p class="project-excerpt-small">{{ project.description | truncate: 80 }}</p>
            
            <div class="project-features-small">
              {% if project.models %}
                <span class="feature-badge-small" title="3D Models">
                  <i class="fas fa-cube"></i>
                  {{ project.models.size }}
                </span>
              {% endif %}
              
              {% if project.schematics %}
                <span class="feature-badge-small" title="Schematics">
                  <i class="fas fa-microchip"></i>
                  {{ project.schematics.size }}
                </span>
              {% endif %}
              
              {% if project.code_files %}
                <span class="feature-badge-small" title="Code Files">
                  <i class="fas fa-code"></i>
                  {{ project.code_files.size }}
                </span>
              {% endif %}
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
    
    <div class="showcase-actions">
      <a href="{{ '/projects/' | relative_url }}" class="btn-primary-large">
        <i class="fas fa-th"></i>
        Ver Todos los Proyectos
      </a>
    </div>
  </div>
</div>

<div class="skills-section">
  <div class="container">
    <div class="skills-content">
      <h2>Experiencia Técnica</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3><i class="fas fa-robot"></i> Robótica</h3>
          <div class="skill-tags">
            <span class="skill-tag">ROS</span>
            <span class="skill-tag">Kinematics</span>
            <span class="skill-tag">Path Planning</span>
            <span class="skill-tag">SLAM</span>
          </div>
        </div>
        <div class="skill-category">
          <h3><i class="fas fa-microchip"></i> Electrónica</h3>
          <div class="skill-tags">
            <span class="skill-tag">Arduino</span>
            <span class="skill-tag">ESP32</span>
            <span class="skill-tag">PCB Design</span>
            <span class="skill-tag">Sensors</span>
          </div>
        </div>
        <div class="skill-category">
          <h3><i class="fas fa-code"></i> Programación</h3>
          <div class="skill-tags">
            <span class="skill-tag">Python</span>
            <span class="skill-tag">C/C++</span>
            <span class="skill-tag">MATLAB</span>
            <span class="skill-tag">JavaScript</span>
          </div>
        </div>
        <div class="skill-category">
          <h3><i class="fas fa-cube"></i> CAD/Diseño</h3>
          <div class="skill-tags">
            <span class="skill-tag">SolidWorks</span>
            <span class="skill-tag">Fusion 360</span>
            <span class="skill-tag">3D Printing</span>
            <span class="skill-tag">KiCad</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>