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
        
        if (!themeToggle) {
            console.warn('Theme toggle button not found');
            return;
        }

        const iconEl = themeToggle.querySelector('.theme-toggle-icon');
        const labelEl = themeToggle.querySelector('.theme-toggle-label');

        // Theme definitions: [id, label, icon]
        const themes = [
            ['deep-space',     'Space',   '☽'],
            ['obsidian-gold',  'Gold',    '◆'],
            ['midnight-rose',  'Rose',    '✿'],
            ['arctic',         'Arctic',  '☀'],
            ['ember',          'Ember',   '⬡'],
        ];

        // Find current theme index
        const getIndex = (id) => {
            const idx = themes.findIndex(t => t[0] === id);
            return idx >= 0 ? idx : 0;
        };

        // Apply theme
        const applyTheme = (idx) => {
            const [id, label, icon] = themes[idx];
            document.documentElement.setAttribute('data-theme', id);
            localStorage.setItem('theme', id);
            if (iconEl) iconEl.textContent = icon;
            if (labelEl) labelEl.textContent = label;
        };

        // Load saved or default
        const saved = localStorage.getItem('theme') || 'deep-space';
        // Migrate old values
        let startIdx;
        if (saved === 'dark') startIdx = 0;
        else if (saved === 'light') startIdx = 3;
        else startIdx = getIndex(saved);

        applyTheme(startIdx);

        // Cycle on click
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const current = document.documentElement.getAttribute('data-theme');
            const nextIdx = (getIndex(current) + 1) % themes.length;
            applyTheme(nextIdx);

            // Brief animation
            themeToggle.style.transform = 'scale(0.9)';
            setTimeout(() => { themeToggle.style.transform = ''; }, 150);
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

        // Show/hide button based on scroll position + header effect
        const siteHeader = document.getElementById('site-header');
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
            // Header glassmorphism intensifies on scroll
            if (siteHeader) {
                if (window.pageYOffset > 50) {
                    siteHeader.classList.add('scrolled');
                } else {
                    siteHeader.classList.remove('scrolled');
                }
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


/* ============================================================
   Visitor analytics
   Sends structured events to GA4 (loaded in _includes/analytics.html).
   Every call is a no-op when gtag is absent -- e.g. local development,
   or a visitor running an ad blocker -- so nothing here can break the page.
   ============================================================ */
const Analytics = (() => {
    // Local throttle -- Utils exposes debounce, which is the wrong shape for
    // scroll milestones (we want the leading edge, at a bounded rate).
    const throttle = (fn, wait) => {
        let last = 0;
        return (...args) => {
            const now = Date.now();
            if (now - last < wait) return;
            last = now;
            fn(...args);
        };
    };

    const send = (name, params = {}) => {
        if (typeof window.gtag !== 'function') return;
        window.gtag('event', name, params);
    };

    // Resume downloads, mail clicks, and any other element carrying data-track
    const trackTaggedLinks = () => {
        document.querySelectorAll('[data-track]').forEach(el => {
            el.addEventListener('click', () => {
                const kind = el.dataset.track;
                send(kind === 'resume' ? 'resume_download' : `${kind}_click`, {
                    link_location: el.dataset.trackLocation || 'unknown',
                    page_path: window.location.pathname
                });
            });
        });
    };

    // Clicks that leave the site: GitHub repos, LinkedIn, papers
    const trackOutboundLinks = () => {
        document.querySelectorAll('a[href^="http"]').forEach(link => {
            if (link.hostname === window.location.hostname) return;
            if (link.hasAttribute('data-track')) return; // already covered above
            link.addEventListener('click', () => {
                send('outbound_click', {
                    link_domain: link.hostname,
                    link_url: link.href,
                    page_path: window.location.pathname
                });
            });
        });
    };

    // Which projects actually get opened, and from where
    const trackProjectCards = () => {
        document.querySelectorAll('a[href*="/projects/"]').forEach(link => {
            const slug = link.getAttribute('href').split('/').filter(Boolean).pop();
            if (!slug || slug === 'projects') return;
            link.addEventListener('click', () => {
                send('project_open', { project_slug: slug, from_page: window.location.pathname });
            });
        });
    };

    // How far down a page people actually get -- the honest read on whether
    // a project write-up is holding attention
    const trackScrollDepth = () => {
        const milestones = [25, 50, 75, 100];
        const fired = new Set();
        const onScroll = throttle(() => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollable <= 0) return;
            const pct = Math.round((window.scrollY / scrollable) * 100);
            milestones.forEach(m => {
                if (pct >= m && !fired.has(m)) {
                    fired.add(m);
                    send('scroll_depth', { percent_scrolled: m, page_path: window.location.pathname });
                }
            });
        }, 500);
        window.addEventListener('scroll', onScroll, { passive: true });
    };

    // Time actually spent on the page, reported once on the way out
    const trackTimeOnPage = () => {
        const start = Date.now();
        let reported = false;
        const report = () => {
            if (reported) return;
            reported = true;
            const seconds = Math.round((Date.now() - start) / 1000);
            if (seconds < 3) return; // ignore bounces and prefetches
            send('time_on_page', { seconds_on_page: seconds, page_path: window.location.pathname });
        };
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') report();
        });
        window.addEventListener('pagehide', report);
    };

    const init = () => {
        trackTaggedLinks();
        trackOutboundLinks();
        trackProjectCards();
        trackScrollDepth();
        trackTimeOnPage();
    };

    return { init, send };
})();

document.addEventListener('DOMContentLoaded', () => Analytics.init());
window.Analytics = Analytics;
