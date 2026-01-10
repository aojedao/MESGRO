/**
 * Main JavaScript for MESGRO Template
 * Handles navigation, mobile menu, and general interactions
 */

class MESGROApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupThemeToggle();
        this.setupSmoothScrolling();
        this.setupScrollToTop();
        this.setupLazyLoading();
        this.setupAnimations();
    }

    /**
     * Mobile menu functionality
     */
    setupMobileMenu() {
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        const siteNav = document.getElementById('site-nav');
        
        if (!mobileToggle || !siteNav) return;

        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            siteNav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !siteNav.contains(e.target)) {
                mobileToggle.classList.remove('active');
                siteNav.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                mobileToggle.classList.remove('active');
                siteNav.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    /**
     * Theme toggle functionality
     */
    /**
     * Theme toggle functionality
     */
    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        // Allow for the icon to be finding more flexibly
        const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
        
        if (!themeToggle) {
            console.warn('Theme toggle button not found');
            return;
        }

        // Check for saved theme preference or default to 'dark'
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        // Function to update icon
        const updateIcon = (theme) => {
            if (!themeIcon) return;
            
            // Remove both potentially to be safe
            themeIcon.classList.remove('fa-moon', 'fa-sun');
            
            if (theme === 'dark') {
                themeIcon.classList.add('fa-sun'); // Sun icon for dark mode (switch to light)
            } else {
                themeIcon.classList.add('fa-moon'); // Moon icon for light mode (switch to dark)
            }
        };

        // Initial icon update
        updateIcon(savedTheme);

        // Toggle theme on button click
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent any default button behavior
            
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            updateIcon(newTheme);
        });
    }

    /**
     * Smooth scrolling for anchor links
     */
    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Scroll to top button
     */
    setupScrollToTop() {
        // Create scroll to top button
        const scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        scrollToTopBtn.className = 'scroll-to-top';
        scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
        document.body.appendChild(scrollToTopBtn);

        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        // Scroll to top functionality
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /**
     * Lazy loading for images
     */
    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }

    /**
     * Setup scroll-triggered animations
     */
    setupAnimations() {
        if ('IntersectionObserver' in window) {
            const animationObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .slide-in-left, .slide-in-right');
            animatedElements.forEach(el => animationObserver.observe(el));
        }
    }
}

/**
 * Utility functions
 */
const Utils = {
    /**
     * Copy text to clipboard
     */
    copyToClipboard: (text) => {
        if (navigator.clipboard) {
            return navigator.clipboard.writeText(text);
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return Promise.resolve();
        }
    },

    /**
     * Show notification
     */
    showNotification: (message, type = 'info') => {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span class="notification-message">${message}</span>
            <button class="notification-close" aria-label="Close">
                <i class="fas fa-times"></i>
            </button>
        `;

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);

        // Manual close
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });
    },

    /**
     * Debounce function
     */
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Format file size
     */
    formatFileSize: (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MESGROApp();
});

// Make Utils available globally
window.MESGROUtils = Utils;

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}