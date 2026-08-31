/**
 * Enhanced Project Viewer with 3D Models, Schematics, and Interactive Features
 * Part of MESGRO - Robotics & Mechatronics Portfolio Template
 */

class ProjectViewer {
    constructor() {
        this.init();
    }

    init() {
        this.setupModelViewers();
        this.setupSchematicZoom();
        this.setupCodeTabs();
        this.setupImageZoom();
        this.setupCollapsibleSections();
    }

    /**
     * Initialize 3D Model Viewers
     */
    setupModelViewers() {
        const modelViewers = document.querySelectorAll('model-viewer');

        modelViewers.forEach(viewer => {
            // Add loading state
            viewer.addEventListener('load', () => {
                viewer.classList.add('loaded');
            });

            // Add error handling
            viewer.addEventListener('error', (event) => {
                console.error('Model loading error:', event);
                this.showModelError(viewer);
            });

            // Add custom controls
            this.addModelControls(viewer);
        });
    }

    /**
     * Add custom controls to model viewer
     */
    addModelControls(viewer) {
        const container = viewer.parentElement;
        const controls = document.createElement('div');
        controls.className = 'model-controls';

        controls.innerHTML = `
            <button class="control-btn" data-action="reset" title="Reset View">
                <i class="fas fa-home"></i>
            </button>
            <button class="control-btn" data-action="fullscreen" title="Fullscreen">
                <i class="fas fa-expand"></i>
            </button>
            <button class="control-btn toggle-rotate" data-action="rotate" title="Toggle Rotation">
                <i class="fas fa-sync-alt"></i>
            </button>
        `;

        container.appendChild(controls);

        // Add control functionality
        controls.addEventListener('click', (e) => {
            const action = e.target.closest('.control-btn')?.dataset.action;
            if (!action) return;

            switch (action) {
                case 'reset':
                    viewer.resetTurntableRotation();
                    viewer.jumpCameraToGoal();
                    break;
                case 'fullscreen':
                    this.toggleModelFullscreen(viewer);
                    break;
                case 'rotate':
                    this.toggleAutoRotate(viewer, e.target.closest('.control-btn'));
                    break;
            }
        });
    }

    /**
     * Toggle auto-rotation for models
     */
    toggleAutoRotate(viewer, button) {
        const isRotating = viewer.hasAttribute('auto-rotate');

        if (isRotating) {
            viewer.removeAttribute('auto-rotate');
            button.classList.remove('active');
        } else {
            viewer.setAttribute('auto-rotate', '');
            button.classList.add('active');
        }
    }

    /**
     * Toggle fullscreen for model viewer
     */
    toggleModelFullscreen(viewer) {
        if (!document.fullscreenElement) {
            viewer.requestFullscreen().catch(err => {
                console.error('Fullscreen error:', err);
            });
        } else {
            document.exitFullscreen();
        }
    }

    /**
     * Show error message for failed model loading
     */
    showModelError(viewer) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'model-error';
        errorDiv.innerHTML = `
            <div class="error-content">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Failed to load 3D model</p>
                <small>Please check the file format and path</small>
            </div>
        `;

        viewer.parentElement.appendChild(errorDiv);
        viewer.style.display = 'none';
    }

    /**
     * Setup schematic image zoom and pan functionality
     */
    setupSchematicZoom() {
        const schematicImages = document.querySelectorAll('.schematic-image[data-zoomable]');

        schematicImages.forEach(img => {
            // Create zoom container
            const container = document.createElement('div');
            container.className = 'zoomable-container';

            img.parentNode.insertBefore(container, img);
            container.appendChild(img);

            // Add zoom controls
            const controls = document.createElement('div');
            controls.className = 'zoom-controls';
            controls.innerHTML = `
                <button class="zoom-btn" data-action="zoom-in" title="Zoom In">
                    <i class="fas fa-plus"></i>
                </button>
                <button class="zoom-btn" data-action="zoom-out" title="Zoom Out">
                    <i class="fas fa-minus"></i>
                </button>
                <button class="zoom-btn" data-action="reset" title="Reset Zoom">
                    <i class="fas fa-home"></i>
                </button>
                <button class="zoom-btn" data-action="fullscreen" title="Fullscreen">
                    <i class="fas fa-expand"></i>
                </button>
            `;

            container.appendChild(controls);

            // Initialize zoom functionality
            this.initImageZoom(img, controls);
        });
    }

    /**
     * Initialize image zoom functionality
     */
    initImageZoom(img, controls) {
        let scale = 1;
        let panning = false;
        let pointX = 0;
        let pointY = 0;
        let start = { x: 0, y: 0 };

        // Control button handlers
        controls.addEventListener('click', (e) => {
            const action = e.target.closest('.zoom-btn')?.dataset.action;
            if (!action) return;

            switch (action) {
                case 'zoom-in':
                    scale = Math.min(scale * 1.2, 5);
                    break;
                case 'zoom-out':
                    scale = Math.max(scale / 1.2, 0.5);
                    break;
                case 'reset':
                    scale = 1;
                    pointX = 0;
                    pointY = 0;
                    break;
                case 'fullscreen':
                    this.toggleImageFullscreen(img.parentElement);
                    return;
            }

            this.updateImageTransform(img, scale, pointX, pointY);
        });

        // Mouse wheel zoom
        img.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? 0.9 : 1.1;
            scale = Math.min(Math.max(scale * delta, 0.5), 5);
            this.updateImageTransform(img, scale, pointX, pointY);
        });

        // Pan functionality
        img.addEventListener('mousedown', (e) => {
            e.preventDefault();
            start = { x: e.clientX - pointX, y: e.clientY - pointY };
            panning = true;
            img.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (!panning) return;
            pointX = e.clientX - start.x;
            pointY = e.clientY - start.y;
            this.updateImageTransform(img, scale, pointX, pointY);
        });

        document.addEventListener('mouseup', () => {
            panning = false;
            img.style.cursor = scale > 1 ? 'grab' : 'default';
        });
    }

    /**
     * Update image transform
     */
    updateImageTransform(img, scale, x, y) {
        img.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
        img.style.cursor = scale > 1 ? 'grab' : 'default';
    }

    /**
     * Toggle fullscreen for images
     */
    toggleImageFullscreen(container) {
        if (!document.fullscreenElement) {
            container.requestFullscreen().catch(err => {
                console.error('Fullscreen error:', err);
            });
        } else {
            document.exitFullscreen();
        }
    }

    /**
     * Setup code tabs functionality
     */
    setupCodeTabs() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.dataset.tab;

                // Remove active class from all tabs and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                // Add active class to clicked tab and corresponding content
                button.classList.add('active');
                document.getElementById(`tab-${tabId}`).classList.add('active');
            });
        });
    }

    /**
     * Convert project description headers into collapsible sections
     */
    setupCollapsibleSections() {
        const contentContainer = document.querySelector('.project-description-content');
        if (!contentContainer) return;

        // Sections that should never be collapsible
        const excludeSections = ['overview', 'introduction', 'description'];

        // Sections that are collapsible but start expanded
        const openByDefault = ['demo', 'demos', 'system architecture', 'sensor fusion'];

        const headers = Array.from(contentContainer.querySelectorAll('h2, h3')).filter(
            header => {
                const text = header.textContent.trim().toLowerCase();
                return !header.closest('details') &&
                    !excludeSections.includes(text);
            }
        );

        headers.forEach(header => {
            const details = document.createElement('details');
            details.className = 'section-details';

            // Open by default if section name matches
            const headerText = header.textContent.trim().toLowerCase();
            if (openByDefault.includes(headerText)) {
                details.open = true;
            }

            const summary = document.createElement('summary');
            summary.className = 'section-summary';
            summary.textContent = header.textContent;

            details.appendChild(summary);

            // Create content wrapper
            const wrapper = document.createElement('div');
            wrapper.className = 'section-content';
            details.appendChild(wrapper);

            // Collect all siblings until next header of same or higher level
            let nextNode = header.nextSibling;
            const nodesToMove = [];

            const currentLevel = parseInt(header.tagName.substring(1));

            while (nextNode) {
                // If it's a header of same or higher importance (lower number), stop.
                if (nextNode.nodeType === 1 && /^H[1-6]$/.test(nextNode.tagName)) {
                    const nextLevel = parseInt(nextNode.tagName.substring(1));
                    if (nextLevel <= currentLevel) break;
                }

                nodesToMove.push(nextNode);
                nextNode = nextNode.nextSibling;
            }

            // Replace header with details
            header.parentNode.insertBefore(details, header);
            header.remove(); // Remove original header

            // Move collected nodes into wrapper
            nodesToMove.forEach(node => wrapper.appendChild(node));
        });
    }

    /**
     * Setup general image zoom using medium-zoom
     */
    setupImageZoom() {
        if (typeof mediumZoom !== 'undefined') {
            mediumZoom('.gallery-image:not([data-zoomable])', {
                background: 'rgba(0, 0, 0, 0.8)',
                scrollOffset: 40
            });
        }
    }

    /**
     * Setup theme toggle
     */
    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        if (!themeToggle) return;

        // Check for saved theme or default to light
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(themeToggle, savedTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            this.updateThemeIcon(themeToggle, newTheme);
        });
    }

    /**
     * Update theme toggle icon
     */
    updateThemeIcon(toggle, theme) {
        const icon = toggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectViewer();
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProjectViewer;
}
