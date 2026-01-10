---
layout: default
title: Proyectos
description: Galería completa de proyectos de robótica y mecatrónica
permalink: /projects/
---

<div class="projects-showcase">
  <div class="container">
    <div class="section-header">
      <h2 data-i18n="portfolio.title">{% include translate.html key="portfolio.title" %}</h2>
      <p class="section-subtitle" data-i18n="portfolio.subtitle">{% include translate.html key="portfolio.subtitle" %}</p>
    </div>
    
    <div class="projects-grid-featured">
      {% assign sorted_projects = site.projects | sort: "date" | reverse %}
      {% for project in sorted_projects %}
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
  </div>
</div>
