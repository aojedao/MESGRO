---
layout: default
title: Acerca de
permalink: /about/
---

<div class="hero-section" style="padding: 100px 0; background: var(--background-color); border-bottom: 1px solid var(--border-color); text-align: center;">
    <div class="container">
        <h1 style="font-size: var(--font-size-3xl); letter-spacing: -0.02em; color: var(--text-primary);">Acerca de MESGRO</h1>
        <p style="color: var(--text-secondary); opacity: 0.7; max-width: 600px; margin: 0 auto; font-weight: 300;">Una plantilla de portafolio de código abierto diseñada específicamente para ingenieros de robótica y mecatrónica para mostrar sus proyectos innovadores.</p>
    </div>
</div>

<div class="about-content">
    <div class="container">
        
        <section class="about-section">
            <h2>¿Qué es MESGRO?</h2>
            <p>MESGRO (Mechatronics Engineering Showcase Gallery for Robotics Operations) es una plantilla completa de Jekyll que permite a ingenieros, investigadores y estudiantes crear portafolios impresionantes para sus proyectos de robótica y mecatrónica.</p>
            
            <p>Construido con tecnologías web modernas y diseñado pensando en la experiencia del usuario, MESGRO proporciona todo lo que necesitas para mostrar tus proyectos técnicos de manera profesional y efectiva.</p>
        </section>

        <section class="about-section">
            <h2>Características Principales</h2>
            <div class="features-list">
                <div class="feature-item">
                    <h3><i class="fas fa-cube"></i> Visor de Modelos 3D Interactivo</h3>
                    <p>Muestra tus diseños mecánicos, prototipos y piezas impresas en 3D con un visor interactivo que soporta formatos STL, OBJ, GLTF y GLB. Los usuarios pueden rotar, hacer zoom y explorar tus diseños en detalle.</p>
                </div>
                
                <div class="feature-item">
                    <h3><i class="fas fa-microchip"></i> Visualización de Esquemas de Circuito</h3>
                    <p>Muestra tus diseños eléctricos con diagramas de circuito con zoom y desplazamiento. Perfecto para mostrar diseños de PCB, diagramas de cableado y arquitecturas de sistemas.</p>
                </div>
                
                <div class="feature-item">
                    <h3><i class="fas fa-code"></i> Integración de Código</h3>
                    <p>Presenta tu código fuente con resaltado de sintaxis, interfaces con pestañas y enlaces de descarga. Soporta múltiples lenguajes de programación incluyendo C/C++, Python, Arduino y más.</p>
                </div>
                
                <div class="feature-item">
                    <h3><i class="fas fa-mobile-alt"></i> Diseño Responsivo</h3>
                    <p>Tu portafolio se ve excelente en todos los dispositivos - desde computadoras de escritorio hasta teléfonos móviles. El diseño responsivo asegura una experiencia de visualización óptima en todos los tamaños de pantalla.</p>
                </div>
                
                <div class="feature-item">
                    <h3><i class="fab fa-github"></i> Compatible con GitHub Pages</h3>
                    <p>Despliega tu portafolio gratis usando GitHub Pages. La plantilla es completamente compatible con Jekyll y la plataforma de alojamiento de GitHub.</p>
                </div>
                
                <div class="feature-item">
                    <h3><i class="fas fa-palette"></i> Tema Personalizable</h3>
                    <p>Temas oscuros y claros con opciones de personalización fáciles. Modifica colores, fuentes y diseños para que coincidan con tu marca personal.</p>
                </div>
            </div>
        </section>

        <section class="about-section">
            <h2>Perfecto Para</h2>
            <div class="perfect-for-grid">
                <div class="perfect-for-item">
                    <h4>Estudiantes</h4>
                    <p>Muestra tu trabajo de curso, proyectos finales y trabajo de investigación a potenciales empleadores y escuelas de posgrado.</p>
                </div>
                
                <div class="perfect-for-item">
                    <h4>Ingenieros</h4>
                    <p>Exhibe tus proyectos profesionales, innovaciones y experiencia técnica a colegas y compañeros de la industria.</p>
                </div>
                
                <div class="perfect-for-item">
                    <h4>Investigadores</h4>
                    <p>Presenta tus hallazgos de investigación, prototipos y configuraciones experimentales con medios enriquecidos y documentación detallada.</p>
                </div>
                
                <div class="perfect-for-item">
                    <h4>Aficionados</h4>
                    <p>Comparte tus proyectos maker, creaciones de Arduino y construcciones de robótica DIY con la comunidad maker.</p>
                </div>
            </div>
        </section>

        <section class="about-section">
            <h2>Construido Con</h2>
            <div class="tech-stack">
                <div class="tech-item">
                    <i class="fab fa-html5"></i>
                    <span>HTML5</span>
                </div>
                <div class="tech-item">
                    <i class="fab fa-css3-alt"></i>
                    <span>CSS3/SCSS</span>
                </div>
                <div class="tech-item">
                    <i class="fab fa-js-square"></i>
                    <span>JavaScript</span>
                </div>
                <div class="tech-item">
                    <i class="fas fa-gem"></i>
                    <span>Jekyll</span>
                </div>
                <div class="tech-item">
                    <i class="fas fa-cube"></i>
                    <span>Three.js</span>
                </div>
                <div class="tech-item">
                    <i class="fab fa-github"></i>
                    <span>GitHub Pages</span>
                </div>
            </div>
        </section>

        <section class="about-section">
            <h2>Comenzar</h2>
            <p>¿Listo para crear tu propio portafolio de robótica? Comienza con MESGRO en solo unos pasos:</p>
            
            <ol class="getting-started-steps">
                <li><strong>Haz Fork del Repositorio:</strong> Comienza haciendo fork del repositorio MESGRO a tu cuenta de GitHub.</li>
                <li><strong>Personaliza tu Contenido:</strong> Agrega tus proyectos, actualiza la configuración y personaliza el diseño.</li>
                <li><strong>Habilita GitHub Pages:</strong> Activa GitHub Pages en la configuración de tu repositorio para publicar tu portafolio.</li>
                <li><strong>Comparte tu Trabajo:</strong> ¡Tu portafolio ahora está en vivo y listo para compartir con el mundo!</li>
            </ol>
            
            <div class="cta-buttons">
                <a href="https://github.com/aojedao/MESGRO" class="btn-primary" target="_blank">
                    <i class="fab fa-github"></i> Comenzar en GitHub
                </a>
                <a href="{{ '/projects/' | relative_url }}" class="btn-secondary">
                    <i class="fas fa-eye"></i> Ver Proyectos de Ejemplo
                </a>
            </div>
        </section>

        <section class="about-section">
            <h2>Contribuir</h2>
            <p>MESGRO es un proyecto de código abierto y damos la bienvenida a contribuciones de la comunidad. Ya sea que estés corrigiendo errores, agregando nuevas características o mejorando la documentación, tu ayuda es apreciada.</p>
            
            <p>Consulta nuestra <a href="https://github.com/aojedao/MESGRO/blob/main/CONTRIBUTING.md" target="_blank">Guía de Contribución</a> para comenzar.</p>
        </section>

    </div>
</div>

<style>
.about-content {
    padding: var(--spacing-2xl) 0;
}

.about-section {
    margin-bottom: var(--spacing-3xl);
}

.about-section h2 {
    color: var(--text-primary);
    margin-bottom: var(--spacing-lg);
    padding-bottom: var(--spacing-sm);
    border-bottom: 1px solid var(--border-color);
    font-size: var(--font-size-2xl);
    letter-spacing: -0.01em;
}

.features-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-xl);
    margin-top: var(--spacing-lg);
}

.feature-item {
    padding: var(--spacing-lg);
    background-color: var(--surface-color);
    border-radius: var(--radius-sm);
    border: none;
    box-shadow: 0 4px 20px var(--shadow-color);
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.feature-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px var(--shadow-hover);
}

.feature-item h3 {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    color: var(--text-primary);
    margin-bottom: var(--spacing-md);
}

.feature-item h3 i {
    color: var(--primary-color);
    font-size: var(--font-size-lg);
}

.perfect-for-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-lg);
    margin-top: var(--spacing-lg);
}

.perfect-for-item {
    text-align: center;
    padding: var(--spacing-lg);
    background-color: var(--surface-color);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-color);
}

.perfect-for-item h4 {
    color: var(--primary-color);
    margin-bottom: var(--spacing-sm);
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-lg);
    justify-content: center;
    margin-top: var(--spacing-lg);
}

.tech-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-lg);
    background-color: var(--surface-color);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-color);
    min-width: 120px;
}

.tech-item i {
    font-size: var(--font-size-2xl);
    color: var(--accent-color);
}

.tech-item span {
    font-weight: var(--font-weight-medium);
    color: var(--text-primary);
}

.getting-started-steps {
    background-color: var(--surface-color);
    padding: var(--spacing-xl);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-color);
    margin: var(--spacing-lg) 0;
}

.getting-started-steps li {
    margin-bottom: var(--spacing-md);
    line-height: var(--line-height-relaxed);
}

.cta-buttons {
    display: flex;
    gap: var(--spacing-md);
    justify-content: center;
    flex-wrap: wrap;
    margin-top: var(--spacing-xl);
}

@media (max-width: 640px) {
    .features-list {
        grid-template-columns: 1fr;
    }
    
    .perfect-for-grid {
        grid-template-columns: 1fr;
    }
    
    .tech-stack {
        justify-content: center;
    }
    
    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }
}
</style>