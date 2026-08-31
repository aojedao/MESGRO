---
layout: default
title: Projects
permalink: /projects/
---

<div class="projects-hero" style="padding: 100px 0; background: var(--background-color); border-bottom: 1px solid var(--border-color);">
    <div class="container">
        <h1 style="color: var(--text-primary); font-size: var(--font-size-3xl); letter-spacing: -0.02em;">Archive</h1>
        <p style="color: var(--text-secondary); opacity: 0.7; max-width: 600px; margin: 0 auto; font-weight: 300;">An index of robotics research, engineering prototypes, and design systems developed over the years.</p>
    </div>
</div>

<div class="projects-page">
    <div class="container">
        
        <!-- Filter Buttons -->
        <div class="projects-filters" style="margin: 60px 0;">
            <button class="filter-btn active" data-filter="all">All Works</button>
            {% for category in site.project_categories %}
                <button class="filter-btn" data-filter="{{ category.slug }}">{{ category.name }}</button>
            {% endfor %}
        </div>

        <!-- ============================================ -->
        <!--            COMPLETED PROJECTS                -->
        <!-- ============================================ -->

        {% assign completed_projects = site.projects | where: "status", "completed" | sort: "date" | reverse %}

        {% if completed_projects.size > 0 %}
        <div class="projects-section" id="completed-section">
            <div class="projects-section-header" style="margin-bottom: 32px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
                <h2 style="color: var(--text-primary); font-size: var(--font-size-2xl); letter-spacing: -0.01em; margin: 0 0 6px 0; display: flex; align-items: center; gap: 10px;">
                    <span style="display: inline-block; width: 10px; height: 10px; background: var(--primary-color, #6366f1); border-radius: 50%;"></span>
                    Completed Projects
                </h2>
                <p style="color: var(--text-secondary); opacity: 0.6; margin: 0; font-weight: 300; font-size: var(--font-size-sm);">Finished works and shipped deliverables</p>
            </div>

            <div class="projects-grid" id="completed-grid">
                {% for project in completed_projects %}
                <article class="project-card" 
                         data-categories="{% for cat in project.categories %}{{ cat | slugify }} {% endfor %}"
                         data-status="completed">
                    
                    <div class="project-preview">
                        {% if project.featured_image %}
                            <img src="{{ project.featured_image | relative_url }}" 
                                 alt="{{ project.title }}" 
                                 class="project-image">
                        {% elsif project.models.first %}
                            <div class="model-preview">
                                <model-viewer 
                                    src="{{ project.models.first.file | relative_url }}"
                                    alt="{{ project.title }}"
                                    camera-controls
                                    auto-rotate
                                    class="preview-model">
                                </model-viewer>
                            </div>
                        {% else %}
                            <div class="project-placeholder">
                                <i class="fas fa-robot"></i>
                            </div>
                        {% endif %}
                        
                        <div class="project-overlay">
                            <a href="{{ project.url | relative_url }}" class="project-link">
                                <i class="fas fa-eye"></i>
                                View Project
                            </a>
                        </div>
                    </div>
                    
                    <div class="project-info">
                        <div class="project-categories">
                            {% for category in project.categories %}
                                <span class="category-tag">{{ category }}</span>
                            {% endfor %}
                        </div>
                        
                        <h3 class="project-title">
                            <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
                        </h3>
                        
                        <p class="project-excerpt">{{ project.description | truncate: 120 }}</p>
                        
                        <div class="project-features">
                            {% if project.models %}
                                <span class="feature-badge" title="3D Models">
                                    <i class="fas fa-cube"></i>
                                    {{ project.models.size }}
                                </span>
                            {% endif %}
                            
                            {% if project.schematics %}
                                <span class="feature-badge" title="Schematics">
                                    <i class="fas fa-microchip"></i>
                                    {{ project.schematics.size }}
                                </span>
                            {% endif %}
                            
                            {% if project.code_files %}
                                <span class="feature-badge" title="Code Files">
                                    <i class="fas fa-code"></i>
                                    {{ project.code_files.size }}
                                </span>
                            {% endif %}
                            
                            {% if project.gallery %}
                                <span class="feature-badge" title="Media">
                                    <i class="fas fa-images"></i>
                                    {{ project.gallery.size }}
                                </span>
                            {% endif %}
                        </div>
                        
                        <div class="project-meta">
                            {% if project.date %}
                                <span class="project-date">
                                    <i class="fas fa-calendar"></i>
                                    {{ project.date | date: "%B %Y" }}
                                </span>
                            {% endif %}
                            
                            {% if project.github_url %}
                                <a href="{{ project.github_url }}" class="github-link" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                            {% endif %}
                        </div>
                    </div>
                </article>
                {% endfor %}
            </div>
        </div>
        {% endif %}

        <!-- ============================================ -->
        <!--              ONGOING PROJECTS                -->
        <!-- ============================================ -->

        {% assign ongoing_projects = site.projects | where: "status", "ongoing" | sort: "date" | reverse %}

        {% if ongoing_projects.size > 0 %}
        <div class="projects-section" id="ongoing-section" style="{% if completed_projects.size > 0 %}margin-top: 64px;{% endif %}">
            <div class="projects-section-header" style="margin-bottom: 32px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
                <h2 style="color: var(--text-primary); font-size: var(--font-size-2xl); letter-spacing: -0.01em; margin: 0 0 6px 0; display: flex; align-items: center; gap: 10px;">
                    <span style="display: inline-block; width: 10px; height: 10px; background: #34d399; border-radius: 50%; animation: pulse-dot 2s ease-in-out infinite;"></span>
                    Ongoing Projects
                </h2>
                <p style="color: var(--text-secondary); opacity: 0.6; margin: 0; font-weight: 300; font-size: var(--font-size-sm);">Currently in active development</p>
            </div>

            <div class="projects-grid" id="ongoing-grid">
                {% for project in ongoing_projects %}
                <article class="project-card" 
                         data-categories="{% for cat in project.categories %}{{ cat | slugify }} {% endfor %}"
                         data-status="ongoing">
                    
                    <div class="project-preview">
                        {% if project.featured_image %}
                            <img src="{{ project.featured_image | relative_url }}" 
                                 alt="{{ project.title }}" 
                                 class="project-image">
                        {% elsif project.models.first %}
                            <div class="model-preview">
                                <model-viewer 
                                    src="{{ project.models.first.file | relative_url }}"
                                    alt="{{ project.title }}"
                                    camera-controls
                                    auto-rotate
                                    class="preview-model">
                                </model-viewer>
                            </div>
                        {% else %}
                            <div class="project-placeholder">
                                <i class="fas fa-robot"></i>
                            </div>
                        {% endif %}
                        
                        <!-- Ongoing badge -->
                        <div style="position: absolute; top: 12px; right: 12px; background: #34d399; color: #0a0a0f; font-size: 0.7rem; font-weight: 700; padding: 3px 10px; border-radius: 20px; letter-spacing: 0.04em; text-transform: uppercase;">In Progress</div>

                        <div class="project-overlay">
                            <a href="{{ project.url | relative_url }}" class="project-link">
                                <i class="fas fa-eye"></i>
                                View Project
                            </a>
                        </div>
                    </div>
                    
                    <div class="project-info">
                        <div class="project-categories">
                            {% for category in project.categories %}
                                <span class="category-tag">{{ category }}</span>
                            {% endfor %}
                        </div>
                        
                        <h3 class="project-title">
                            <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
                        </h3>
                        
                        <p class="project-excerpt">{{ project.description | truncate: 120 }}</p>
                        
                        <div class="project-features">
                            {% if project.models %}
                                <span class="feature-badge" title="3D Models">
                                    <i class="fas fa-cube"></i>
                                    {{ project.models.size }}
                                </span>
                            {% endif %}
                            
                            {% if project.schematics %}
                                <span class="feature-badge" title="Schematics">
                                    <i class="fas fa-microchip"></i>
                                    {{ project.schematics.size }}
                                </span>
                            {% endif %}
                            
                            {% if project.code_files %}
                                <span class="feature-badge" title="Code Files">
                                    <i class="fas fa-code"></i>
                                    {{ project.code_files.size }}
                                </span>
                            {% endif %}
                            
                            {% if project.gallery %}
                                <span class="feature-badge" title="Media">
                                    <i class="fas fa-images"></i>
                                    {{ project.gallery.size }}
                                </span>
                            {% endif %}
                        </div>
                        
                        <div class="project-meta">
                            {% if project.date %}
                                <span class="project-date">
                                    <i class="fas fa-calendar"></i>
                                    {{ project.date | date: "%B %Y" }}
                                </span>
                            {% endif %}
                            
                            {% if project.github_url %}
                                <a href="{{ project.github_url }}" class="github-link" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                            {% endif %}
                        </div>
                    </div>
                </article>
                {% endfor %}
            </div>
        </div>
        {% endif %}

        <!-- ============================================ -->
        <!--       FALLBACK: NO STATUS SET (legacy)       -->
        <!-- ============================================ -->

        {% assign no_status_projects = site.projects | where_exp: "p", "p.status == nil" | sort: "date" | reverse %}

        {% if no_status_projects.size > 0 %}
        <div class="projects-section" id="other-section" style="margin-top: 64px;">
            <div class="projects-grid" id="other-grid">
                {% for project in no_status_projects %}
                <article class="project-card" 
                         data-categories="{% for cat in project.categories %}{{ cat | slugify }} {% endfor %}">
                    
                    <div class="project-preview">
                        {% if project.featured_image %}
                            <img src="{{ project.featured_image | relative_url }}" 
                                 alt="{{ project.title }}" 
                                 class="project-image">
                        {% elsif project.models.first %}
                            <div class="model-preview">
                                <model-viewer 
                                    src="{{ project.models.first.file | relative_url }}"
                                    alt="{{ project.title }}"
                                    camera-controls
                                    auto-rotate
                                    class="preview-model">
                                </model-viewer>
                            </div>
                        {% else %}
                            <div class="project-placeholder">
                                <i class="fas fa-robot"></i>
                            </div>
                        {% endif %}
                        
                        <div class="project-overlay">
                            <a href="{{ project.url | relative_url }}" class="project-link">
                                <i class="fas fa-eye"></i>
                                View Project
                            </a>
                        </div>
                    </div>
                    
                    <div class="project-info">
                        <div class="project-categories">
                            {% for category in project.categories %}
                                <span class="category-tag">{{ category }}</span>
                            {% endfor %}
                        </div>
                        
                        <h3 class="project-title">
                            <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
                        </h3>
                        
                        <p class="project-excerpt">{{ project.description | truncate: 120 }}</p>
                        
                        <div class="project-features">
                            {% if project.models %}
                                <span class="feature-badge" title="3D Models">
                                    <i class="fas fa-cube"></i>
                                    {{ project.models.size }}
                                </span>
                            {% endif %}
                            
                            {% if project.schematics %}
                                <span class="feature-badge" title="Schematics">
                                    <i class="fas fa-microchip"></i>
                                    {{ project.schematics.size }}
                                </span>
                            {% endif %}
                            
                            {% if project.code_files %}
                                <span class="feature-badge" title="Code Files">
                                    <i class="fas fa-code"></i>
                                    {{ project.code_files.size }}
                                </span>
                            {% endif %}
                            
                            {% if project.gallery %}
                                <span class="feature-badge" title="Media">
                                    <i class="fas fa-images"></i>
                                    {{ project.gallery.size }}
                                </span>
                            {% endif %}
                        </div>
                        
                        <div class="project-meta">
                            {% if project.date %}
                                <span class="project-date">
                                    <i class="fas fa-calendar"></i>
                                    {{ project.date | date: "%B %Y" }}
                                </span>
                            {% endif %}
                            
                            {% if project.github_url %}
                                <a href="{{ project.github_url }}" class="github-link" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                            {% endif %}
                        </div>
                    </div>
                </article>
                {% endfor %}
            </div>
        </div>
        {% endif %}
        
        {% if site.projects.size == 0 %}
        <div class="no-projects">
            <div class="no-projects-content">
                <i class="fas fa-robot"></i>
                <h3>No Projects Yet</h3>
                <p>Check back soon for exciting robotics and mechatronics projects!</p>
                <a href="https://github.com/aojedao/MESGRO" class="btn-primary" target="_blank">
                    Contribute to MESGRO
                </a>
            </div>
        </div>
        {% endif %}
        
    </div>
</div>

<style>
@keyframes pulse-dot {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.4); }
    50% { opacity: 0.7; box-shadow: 0 0 0 6px rgba(52, 211, 153, 0); }
}
</style>

<script>
// Project filtering across both sections
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const ongoingSection = document.getElementById('ongoing-section');
    const completedSection = document.getElementById('completed-section');
    const otherSection = document.getElementById('other-section');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Track visible cards per section
            let ongoingVisible = 0;
            let completedVisible = 0;
            let otherVisible = 0;

            // Filter projects
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-categories');
                const status = card.getAttribute('data-status');
                let show = (filter === 'all') || categories.includes(filter);

                card.style.display = show ? 'block' : 'none';

                if (show) {
                    if (status === 'ongoing') ongoingVisible++;
                    else if (status === 'completed') completedVisible++;
                    else otherVisible++;
                }
            });

            // Hide section headers if no cards are visible in that section
            if (ongoingSection) ongoingSection.style.display = ongoingVisible > 0 ? 'block' : 'none';
            if (completedSection) completedSection.style.display = completedVisible > 0 ? 'block' : 'none';
            if (otherSection) otherSection.style.display = otherVisible > 0 ? 'block' : 'none';
        });
    });
});
</script>
