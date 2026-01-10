/**
 * Language switching module
 * Handles client-side language switching between Spanish and English
 */

class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'es';
        this.translations = {
            es: {
                'nav.home': 'Inicio',
                'nav.projects': 'Proyectos',
                'nav.about': 'Acerca de',
                'hero.subtitle': 'Robótica y Mecatrónica',
                'hero.about_btn': 'Acerca de',
                'hero.contact_btn': 'Contacto',
                'portfolio.title': 'Portafolio',
                'portfolio.subtitle': 'Una colección curada de mi investigación y diseño',
                'site.author_name': 'Tu Nombre',
                'footer.rights': 'Todos los derechos reservados',
                'footer.built_with': 'Construido con Jekyll',
                'project.overview': 'Descripción General',
                'project.features': 'Características Principales',
                'project.technical': 'Detalles Técnicos',
                'project.components': 'Componentes',
                'project.specs': 'Especificaciones Técnicas',
                'project.model': 'Modelo 3D',
                'project.schematic': 'Esquema de Circuito',
                'project.schematics': 'Esquemas de Circuito',
                'project.code': 'Código Fuente',
                'project.github': 'Ver en GitHub',
                'project.categories': 'Categorías',
                'project.date': 'Fecha',
                'project.status': 'Estado',
                'project.performance': 'Datos de Rendimiento del Sistema'
            },
            en: {
                'nav.home': 'Home',
                'nav.projects': 'Projects',
                'nav.about': 'About',
                'hero.subtitle': 'Robotics & Mechatronics',
                'hero.about_btn': 'About',
                'hero.contact_btn': 'Contact',
                'portfolio.title': 'Portfolio',
                'portfolio.subtitle': 'A curated collection of my research and design',
                'site.author_name': 'Tu Nombre',
                'footer.rights': 'All rights reserved',
                'footer.built_with': 'Built with Jekyll',
                'project.overview': 'Overview',
                'project.features': 'Key Features',
                'project.technical': 'Technical Details',
                'project.components': 'Components',
                'project.specs': 'Technical Specifications',
                'project.model': '3D Model',
                'project.schematic': 'Circuit Schematic',
                'project.schematics': 'Circuit Schematics',
                'project.code': 'Source Code',
                'project.github': 'View on GitHub',
                'project.categories': 'Categories',
                'project.date': 'Date',
                'project.status': 'Status',
                'project.performance': 'System Performance Data'
            }
        };
        
        this.init();
    }

    init() {
        this.applyLanguage(this.currentLang);
        this.setupToggle();
    }

    setupToggle() {
        const toggle = document.querySelector('.language-toggle');
        if (!toggle) return;

        // Update toggle text
        this.updateToggleText();

        // Add click handler
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.switchLanguage();
        });

        // Make it clickable if it's a span
        toggle.style.cursor = 'pointer';
    }

    switchLanguage() {
        this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('language', this.currentLang);
        this.applyLanguage(this.currentLang);
        this.updateToggleText();
    }

    updateToggleText() {
        const toggle = document.querySelector('.language-toggle');
        if (toggle) {
            toggle.textContent = this.currentLang === 'es' ? 'EN' : 'ES';
            toggle.title = this.currentLang === 'es' ? 
                'Click to switch to English / Haz clic para cambiar a inglés' :
                'Click to switch to Spanish / Haz clic para cambiar a español';
        }
    }

    applyLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translations[lang][key];
            
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Store current language in HTML element
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('data-language', lang);
    }

    getTranslation(key) {
        return this.translations[this.currentLang][key] || key;
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    window.languageSwitcher = new LanguageSwitcher();
});
