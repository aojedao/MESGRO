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
                'project.performance': 'Datos de Rendimiento del Sistema',
                'skills.technical_experience': 'Experiencia Técnica',
                'skills.robotics': 'Robótica',
                'skills.electronics': 'Electrónica',
                'skills.programming': 'Programación',
                'skills.cad_design': 'CAD/Diseño',
                'about.title': 'Acerca de MESGRO',
                'about.subtitle': 'Una plantilla de portafolio de código abierto diseñada específicamente para ingenieros de robótica y mecatrónica para mostrar sus proyectos innovadores.',
                'about.what_is': '¿Qué es MESGRO?',
                'about.what_is_desc': 'MESGRO (Mechatronics Engineering Showcase Gallery for Robotics Operations) es una plantilla completa de Jekyll que permite a ingenieros, investigadores y estudiantes crear portafolios impresionantes para sus proyectos de robótica y mecatrónica.',
                'about.what_is_desc2': 'Construido con tecnologías web modernas y diseñado pensando en la experiencia del usuario, MESGRO proporciona todo lo que necesitas para mostrar tus proyectos técnicos de manera profesional y efectiva.',
                'about.key_features': 'Características Principales',
                'about.3d_models': 'Visor de Modelos 3D Interactivo',
                'about.3d_models_desc': 'Muestra tus diseños mecánicos, prototipos y piezas impresas en 3D con un visor interactivo que soporta formatos STL, OBJ, GLTF y GLB. Los usuarios pueden rotar, hacer zoom y explorar tus diseños en detalle.',
                'about.circuit_schematic': 'Visualización de Esquemas de Circuito',
                'about.circuit_schematic_desc': 'Muestra tus diseños eléctricos con diagramas de circuito con zoom y desplazamiento. Perfecto para mostrar diseños de PCB, diagramas de cableado y arquitecturas de sistemas.',
                'about.code_integration': 'Integración de Código',
                'about.code_integration_desc': 'Presenta tu código fuente con resaltado de sintaxis, interfaces con pestañas y enlaces de descarga. Soporta múltiples lenguajes de programación incluyendo C/C++, Python, Arduino y más.',
                'about.responsive_design': 'Diseño Responsivo',
                'about.responsive_design_desc': 'Tu portafolio se ve excelente en todos los dispositivos - desde computadoras de escritorio hasta teléfonos móviles. El diseño responsivo asegura una experiencia de visualización óptima en todos los tamaños de pantalla.',
                'about.github_compatible': 'Compatible con GitHub Pages',
                'about.github_compatible_desc': 'Despliega tu portafolio gratis usando GitHub Pages. La plantilla es completamente compatible con Jekyll y la plataforma de alojamiento de GitHub.',
                'about.customizable_theme': 'Tema Personalizable',
                'about.customizable_theme_desc': 'Temas oscuros y claros con opciones de personalización fáciles. Modifica colores, fuentes y diseños para que coincidan con tu marca personal.',
                'about.perfect_for': 'Perfecto Para',
                'about.students': 'Estudiantes',
                'about.students_desc': 'Muestra tu trabajo de curso, proyectos finales y trabajo de investigación a potenciales empleadores y escuelas de posgrado.',
                'about.engineers': 'Ingenieros',
                'about.engineers_desc': 'Exhibe tus proyectos profesionales, innovaciones y experiencia técnica a colegas y compañeros de la industria.',
                'about.researchers': 'Investigadores',
                'about.researchers_desc': 'Presenta tus hallazgos de investigación, prototipos y configuraciones experimentales con medios enriquecidos y documentación detallada.',
                'about.makers': 'Aficionados',
                'about.makers_desc': 'Comparte tus proyectos maker, creaciones de Arduino y construcciones de robótica DIY con la comunidad maker.',
                'about.built_with': 'Construido Con',
                'about.getting_started': 'Comenzar',
                'about.getting_started_desc': '¿Listo para crear tu propio portafolio de robótica? Comienza con MESGRO en solo unos pasos:',
                'about.fork_repo': 'Haz Fork del Repositorio',
                'about.fork_repo_desc': 'Comienza haciendo fork del repositorio MESGRO a tu cuenta de GitHub.',
                'about.customize_content': 'Personaliza tu Contenido',
                'about.customize_content_desc': 'Agrega tus proyectos, actualiza la configuración y personaliza el diseño.',
                'about.enable_pages': 'Habilita GitHub Pages',
                'about.enable_pages_desc': 'Activa GitHub Pages en la configuración de tu repositorio para publicar tu portafolio.',
                'about.share_work': 'Comparte tu Trabajo',
                'about.share_work_desc': '¡Tu portafolio ahora está en vivo y listo para compartir con el mundo!',
                'about.start_github': 'Comenzar en GitHub',
                'about.view_examples': 'Ver Proyectos de Ejemplo',
                'about.contribute': 'Contribuir',
                'about.contribute_desc': 'MESGRO es un proyecto de código abierto y damos la bienvenida a contribuciones de la comunidad. Ya sea que estés corrigiendo errores, agregando nuevas características o mejorando la documentación, tu ayuda es apreciada.',
                'about.contribute_guide': 'Guía de Contribución'
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
                'site.author_name': 'Your Name',
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
                'project.performance': 'System Performance Data',
                'skills.technical_experience': 'Technical Experience',
                'skills.robotics': 'Robotics',
                'skills.electronics': 'Electronics',
                'skills.programming': 'Programming',
                'skills.cad_design': 'CAD/Design',
                'about.title': 'About MESGRO',
                'about.subtitle': 'An open-source portfolio template specifically designed for robotics and mechatronics engineers to showcase their innovative projects.',
                'about.what_is': 'What is MESGRO?',
                'about.what_is_desc': 'MESGRO (Mechatronics Engineering Showcase Gallery for Robotics Operations) is a comprehensive Jekyll template that enables engineers, researchers, and students to create impressive portfolios for their robotics and mechatronics projects.',
                'about.what_is_desc2': 'Built with modern web technologies and designed with user experience in mind, MESGRO provides everything you need to showcase your technical projects professionally and effectively.',
                'about.key_features': 'Key Features',
                'about.3d_models': 'Interactive 3D Model Viewer',
                'about.3d_models_desc': 'Display your mechanical designs, prototypes, and 3D-printed parts with an interactive viewer that supports STL, OBJ, GLTF, and GLB formats. Users can rotate, zoom, and explore your designs in detail.',
                'about.circuit_schematic': 'Circuit Schematic Visualization',
                'about.circuit_schematic_desc': 'Showcase your electrical designs with zoomable and pannable circuit diagrams. Perfect for displaying PCB designs, wiring diagrams, and system architectures.',
                'about.code_integration': 'Code Integration',
                'about.code_integration_desc': 'Present your source code with syntax highlighting, tabbed interfaces, and download links. Supports multiple programming languages including C/C++, Python, Arduino, and more.',
                'about.responsive_design': 'Responsive Design',
                'about.responsive_design_desc': 'Your portfolio looks great on all devices—from desktop computers to mobile phones. Responsive design ensures an optimal viewing experience on all screen sizes.',
                'about.github_compatible': 'GitHub Pages Compatible',
                'about.github_compatible_desc': 'Deploy your portfolio for free using GitHub Pages. The template is fully compatible with Jekyll and the GitHub hosting platform.',
                'about.customizable_theme': 'Customizable Theme',
                'about.customizable_theme_desc': 'Dark and light themes with easy customization options. Modify colors, fonts, and layouts to match your personal brand.',
                'about.perfect_for': 'Perfect For',
                'about.students': 'Students',
                'about.students_desc': 'Showcase your coursework, capstone projects, and research work to potential employers and graduate schools.',
                'about.engineers': 'Engineers',
                'about.engineers_desc': 'Display your professional projects, innovations, and technical expertise to colleagues and industry peers.',
                'about.researchers': 'Researchers',
                'about.researchers_desc': 'Present your research findings, prototypes, and experimental setups with rich media and detailed documentation.',
                'about.makers': 'Makers',
                'about.makers_desc': 'Share your maker projects, Arduino creations, and DIY robotics builds with the maker community.',
                'about.built_with': 'Built With',
                'about.getting_started': 'Getting Started',
                'about.getting_started_desc': 'Ready to create your own robotics portfolio? Get started with MESGRO in just a few steps:',
                'about.fork_repo': 'Fork the Repository',
                'about.fork_repo_desc': 'Start by forking the MESGRO repository to your GitHub account.',
                'about.customize_content': 'Customize Your Content',
                'about.customize_content_desc': 'Add your projects, update the configuration, and customize the design.',
                'about.enable_pages': 'Enable GitHub Pages',
                'about.enable_pages_desc': 'Turn on GitHub Pages in your repository settings to publish your portfolio.',
                'about.share_work': 'Share Your Work',
                'about.share_work_desc': 'Your portfolio is now live and ready to share with the world!',
                'about.start_github': 'Start on GitHub',
                'about.view_examples': 'View Example Projects',
                'about.contribute': 'Contribute',
                'about.contribute_desc': 'MESGRO is an open-source project and we welcome contributions from the community. Whether you\'re fixing bugs, adding new features, or improving documentation, your help is appreciated.',
                'about.contribute_guide': 'Contribution Guide'
            }
        };
        
        // Project content translations
        this.projectContent = {
            es: {
                'overview': 'Descripción General',
                'features': 'Características Principales',
                'specifications': 'Especificaciones Técnicas',
                'components': 'Componentes',
                'applications': 'Aplicaciones',
                'performance': 'Resultados de Desempeño'
            },
            en: {
                'overview': 'Project Overview',
                'features': 'Key Features',
                'specifications': 'Technical Specifications',
                'components': 'Components',
                'applications': 'Applications',
                'performance': 'Performance Results'
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

        // Make it clickable
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
                'Click to switch to English' :
                'Haz clic para cambiar a español';
        }
    }

    applyLanguage(lang) {
        // Update all data-i18n elements
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translations[lang][key];
            
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    // Only update if element has content or is empty
                    element.textContent = translation;
                }
            }
        });

        // Store current language in HTML element
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('data-language', lang);
    }

    updatePageContent() {
        // This is now handled by applyLanguage
        // Keep for backward compatibility
    }

    updateProjectContent(lang) {
        // Update section headings in project pages
        const sectionHeadings = document.querySelectorAll('.project-section-title');
        sectionHeadings.forEach(heading => {
            const dataKey = heading.getAttribute('data-section');
            if (dataKey && this.projectContent[lang][dataKey]) {
                heading.textContent = this.projectContent[lang][dataKey];
            }
        });
    }

    getTranslation(key) {
        return this.translations[this.currentLang][key] || key;
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    window.languageSwitcher = new LanguageSwitcher();
});
