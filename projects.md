---
layout: default
title: Proyectos
description: Galería completa de proyectos de robótica y mecatrónica
permalink: /projects/
---

<div class="container">
  <div class="page-header">
    <h1>{% include translate.html key="portfolio.title" %}</h1>
    <p class="page-subtitle">{% include translate.html key="portfolio.subtitle" %}</p>
  </div>

  <div class="projects-grid">
    {% assign sorted_projects = site.projects | sort: "date" | reverse %}
    {% for project in sorted_projects %}
      <div class="project-card">
        <div class="project-card-image">
          {% if project.featured_image %}
            <img src="{{ project.featured_image | relative_url }}" alt="{{ project.title }}" loading="lazy">
          {% elsif project.models.first %}
            <div class="model-preview">
              <model-viewer 
                src="{{ project.models.first.file | relative_url }}"
                alt="{{ project.title }}"
                camera-controls
                auto-rotate
              ></model-viewer>
            </div>
          {% else %}
            <div class="placeholder-image">
              <i class="fas fa-cube"></i>
            </div>
          {% endif %}
        </div>

        <div class="project-card-content">
          <h3 class="project-card-title">
            <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
          </h3>

          <p class="project-card-description">{{ project.description }}</p>

          <div class="project-meta">
            {% if project.date %}
              <span class="project-meta-item">
                <i class="fas fa-calendar"></i>
                {{ project.date | date: "%b %Y" }}
              </span>
            {% endif %}

            {% if project.categories %}
              <span class="project-meta-item">
                <i class="fas fa-tags"></i>
                {% for category in project.categories limit: 2 %}
                  <span class="category-tag">{{ category }}</span>
                  {% unless forloop.last %}<span class="separator">,</span>{% endunless %}
                {% endfor %}
              </span>
            {% endif %}
          </div>

          <a href="{{ project.url | relative_url }}" class="project-link">
            {% include translate.html key="project.overview" %} →
          </a>
        </div>
      </div>
    {% endfor %}
  </div>

  {% if site.projects.size == 0 %}
    <div class="no-projects">
      <i class="fas fa-folder-open"></i>
      <p>No projects yet. Check back soon!</p>
    </div>
  {% endif %}
</div>

<style>
.page-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
  padding: var(--spacing-lg) 0;
}

.page-header h1 {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
}

.page-subtitle {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.project-card {
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-color);
}

.project-card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-card-image img {
  transform: scale(1.05);
}

.placeholder-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: var(--text-secondary);
  opacity: 0.3;
}

.project-card-content {
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-card-title {
  margin: 0 0 var(--spacing-sm) 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
}

.project-card-title a {
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.project-card-title a:hover {
  color: var(--accent-color);
}

.project-card-description {
  margin: 0 0 var(--spacing-md) 0;
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  flex-grow: 1;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-xs);
  color: var(--text-tertiary);
}

.project-meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.category-tag {
  display: inline-block;
  padding: 2px 8px;
  background: var(--accent-color-light);
  color: var(--accent-color);
  border-radius: 4px;
  font-size: var(--font-size-xs);
  white-space: nowrap;
}

.separator {
  margin: 0 2px;
}

.project-link {
  align-self: flex-start;
  color: var(--accent-color);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
  transition: all 0.2s ease;
}

.project-link:hover {
  transform: translateX(4px);
}

.no-projects {
  text-align: center;
  padding: var(--spacing-xl);
  color: var(--text-secondary);
}

.no-projects i {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  opacity: 0.5;
}

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .page-header h1 {
    font-size: var(--font-size-3xl);
  }
}
</style>
