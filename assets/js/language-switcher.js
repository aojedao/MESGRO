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
                'about.contribute_guide': 'Guía de Contribución',
                'project.assembly': 'Instrucciones de Ensamblaje',
                'project.future_improvements': 'Mejoras Futuras',
                'project.lessons_learned': 'Lecciones Aprendidas',
                'project.build_instructions': 'Instrucciones de Construcción',
                'project.mechanical_assembly': 'Ensamblaje Mecánico',
                'project.electronics': 'Electrónica',
                'project.software_setup': 'Configuración de Software',
                'project.algorithms': 'Implementación de Algoritmos',
                'project.performance_intro': 'Después de pruebas extensivas y ajuste PID, el robot logró:',
                'project.line_accuracy': 'Precisión de Seguimiento de Línea',
                'project.line_accuracy_val': '95% en pistas estándar',
                'project.max_speed': 'Velocidad Máxima de Pista',
                'project.max_speed_val': 'Sigue líneas exitosamente a 80cm/s',
                'project.curve_handling': 'Manejo de Curvas',
                'project.curve_handling_val': 'Navega giros de 90° sin perder la línea',
                'project.obstacle_response': 'Respuesta de Obstáculo',
                'project.obstacle_response_val': 'Se detiene dentro de 10cm de obstáculos detectados',
                'project.accuracy_validation': 'Validación de Precisión',
                'project.temperature_accuracy': 'Temperatura: ±0.3°C comparado con termómetro de referencia',
                'project.humidity_accuracy': 'Humedad: ±3% comparado con higrómetro profesional',
                'project.pressure_accuracy': 'Presión: ±0.5 hPa comparado con estación meteorológica de referencia',
                'project.soil_accuracy': 'Humedad del Suelo: ±5% validado con método gravimétrico',
                'project.reliability_metrics': 'Métricas de Confiabilidad',
                'project.uptime': 'Tiempo de Actividad: 99.7% en prueba de campo de 6 meses',
                'project.data_loss': 'Pérdida de Datos: <0.1% con sistemas de almacenamiento redundante',
                'project.battery_life': 'Vida de Batería: 96 horas sin carga solar',
                'project.weather_resistance': 'Resistencia Meteorológica: Sobrevivió a -20°C a +45°C',
                'project.arm_accuracy': 'Precisión de Posición: Error medio de 1.2mm en el espacio de trabajo',
                'project.arm_repeatability': 'Repetibilidad: Desviación estándar de 0.8mm en 1000 ciclos',
                'project.object_detection': 'Detección de Objetos: Tasa de éxito del 94% para objetos objetivo'
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
                'about.contribute_guide': 'Contribution Guide',
                'project.assembly': 'Assembly Instructions',
                'project.future_improvements': 'Future Improvements',
                'project.lessons_learned': 'Lessons Learned',
                'project.build_instructions': 'Build Instructions',
                'project.mechanical_assembly': 'Mechanical Assembly',
                'project.electronics': 'Electronics',
                'project.software_setup': 'Software Setup',
                'project.algorithms': 'Algorithm Implementation',
                'project.performance_intro': 'After extensive testing and PID tuning, the robot achieved:',
                'project.line_accuracy': 'Line Following Accuracy',
                'project.line_accuracy_val': '95% on standard tracks',
                'project.max_speed': 'Maximum Track Speed',
                'project.max_speed_val': 'Successfully follows lines at 80cm/s',
                'project.curve_handling': 'Curve Handling',
                'project.curve_handling_val': 'Navigates 90° turns without losing the line',
                'project.obstacle_response': 'Obstacle Response',
                'project.obstacle_response_val': 'Stops within 10cm of detected obstacles',
                'project.accuracy_validation': 'Accuracy Validation',
                'project.temperature_accuracy': 'Temperature: ±0.3°C compared to reference thermometer',
                'project.humidity_accuracy': 'Humidity: ±3% compared to professional hygrometer',
                'project.pressure_accuracy': 'Pressure: ±0.5 hPa compared to reference weather station',
                'project.soil_accuracy': 'Soil Moisture: ±5% validated with gravimetric method',
                'project.reliability_metrics': 'Reliability Metrics',
                'project.uptime': 'Uptime: 99.7% over 6-month field test',
                'project.data_loss': 'Data Loss: <0.1% with redundant storage systems',
                'project.battery_life': 'Battery Life: 96 hours without solar charging',
                'project.weather_resistance': 'Weather Resistance: Survived -20°C to +45°C conditions',
                'project.arm_accuracy': 'Precisión de Posición: Error medio de 1.2mm en el espacio de trabajo',
                'project.arm_repeatability': 'Repetibilidad: Desviación estándar de 0.8mm en 1000 ciclos',
                'project.object_detection': 'Detección de Objetos: Tasa de éxito del 94% para objetos objetivo',
                'project.overview': 'Descripción General del Proyecto',
                'project.key_features': 'Características Clave',
                'project.technical_details': 'Detalles Técnicos',
                'project.system_architecture': 'Arquitectura del Sistema',
                'project.applications': 'Aplicaciones',
                'project.lessons_intro': 'Lecciones Aprendidas en el Proyecto',
                'project.pid_tuning': 'Ajuste PID',
                'project.pid_desc': 'Comience con control proporcional solo, luego agregue términos integral y derivado',
                'project.sensor_calibration': 'Calibración de Sensores',
                'project.sensor_calib_desc': 'La calibración regular es crucial para un rendimiento consistente',
                'project.power_management': 'Gestión de Energía',
                'project.power_desc': 'Use reguladores de voltaje para lecturas de sensores estables',
                'project.mechanical_design': 'Diseño Mecánico',
                'project.mech_desc': 'El alineamiento adecuado de las ruedas mejora significativamente la precisión del seguimiento',
                'project.machine_learning': 'Aprendizaje Automático',
                'project.ml_desc': 'Implementar parámetros PID adaptativos usando aprendizaje por refuerzo',
                'project.multi_line': 'Soporte Multi-Línea',
                'project.multi_line_desc': 'Agregar capacidad para manejar intersecciones y múltiples caminos de línea',
                'project.wireless_comm': 'Comunicación Inalámbrica',
                'project.wireless_desc': 'Actualizar a WiFi para monitoreo y control remoto',
                'project.advanced_sensors': 'Sensores Avanzados',
                'project.adv_sensors_desc': 'Agregar sensores de color para detección de pista mejorada',
                'project.assembly_step1': 'Impresión 3D del chasis',
                'project.assembly_step2': 'Montaje de motores y ruedas',
                'project.assembly_step3': 'Instalación de matriz de sensores',
                'project.assembly_step4': 'Montaje de placas Arduino y controlador de motor',
                'project.electronics_step1': 'Seguir el esquema de circuito',
                'project.electronics_step2': 'Usar diseño de PCB personalizado',
                'project.electronics_step3': 'Probar todas las conexiones',
                'project.electronics_step4': 'Cargar código Arduino y calibrar sensores',
                'project.software_step1': 'Instalar Arduino IDE y bibliotecas requeridas',
                'project.software_step2': 'Cargar código de control principal',
                'project.software_step3': 'Instalar dependencias de Python',
                'project.software_step4': 'Ejecutar procedimientos iniciales de calibración y ajuste PID',
                'project.line_overview': 'Este proyecto demuestra el diseño e implementación de un robot autónomo seguidor de líneas usando Arduino Uno y algoritmos de control avanzados. El robot cuenta con control PID (Proporcional-Integral-Derivado) para seguimiento suave de líneas, capacidades de detección de obstáculos y ajuste de parámetros inalámbricos.',
                'project.advanced_control': 'Sistema de Control Avanzado',
                'project.pid_controller': 'Controlador PID: Implementa un algoritmo de control PID sofisticado para seguimiento preciso de líneas',
                'project.sensor_fusion': 'Fusión de Sensores: Utiliza una matriz IR de 5 sensores para detección precisa de la posición de la línea',
                'project.adaptive_speed': 'Velocidad Adaptativa: Ajusta automáticamente la velocidad según la curvatura de la pista',
                'project.wireless_telemetry': 'Telemetría en Tiempo Real: Envía datos de sensores y parámetros de control vía Bluetooth',
                'project.param_tuning': 'Ajuste de Parámetros: Ajuste en vivo de parámetros PID mediante GUI personalizado en Python',
                'project.perf_logging': 'Registro de Desempeño: Registra el desempeño de la pista para análisis y optimización',
                'project.obstacle_detection': 'Detección de Obstáculos: Sensor ultrasónico para evitar colisiones',
                'project.battery_mgmt': 'Gestión de Batería: Detección de bajo voltaje y apagado automático',
                'project.emergency_stop': 'Parada de Emergencia: Funcionalidad inalámbrica de parada de emergencia',
                'project.specs_microcontroller': 'Microcontrolador Arduino Uno R3 (ATmega328P)',
                'project.specs_voltage': 'Voltaje de Operación 7.4V (2S LiPo)',
                'project.specs_max_speed': 'Velocidad Máxima 1.2 m/s',
                'project.specs_detection_range': 'Rango de Detección de Línea Matriz de sensores de 12cm de ancho',
                'project.specs_battery_life': 'Vida de Batería 45 minutos de operación continua',
                'project.specs_weight': 'Peso 485g',
                'project.specs_dimensions': 'Dimensiones 18cm x 12cm x 8cm',
                'project.6dof_overview': 'Este proyecto presenta el diseño e implementación de un sofisticado brazo robótico de seis grados de libertad integrado con un sistema de visión por computadora para manipulación autónoma de objetos. El sistema combina algoritmos avanzados de cinemática inversa, detección de objetos en tiempo real usando YOLO y control preciso de servos para lograr operaciones precisas de recogida y colocación.',
                'project.mechanical_design_title': 'Diseño Mecánico',
                'project.six_dof': 'Seis Grados de Libertad: Capacidad de manipulación espacial completa',
                'project.precision_joints': 'Articulaciones de Precisión: Articulaciones soportadas por rodamientos de bolas para operación suave',
                'project.custom_gripper': 'Pinza Personalizada: Efector final habilitado con retroalimentación de fuerza',
                'project.modular_design': 'Diseño Modular: Mantenimiento fácil y reemplazo de componentes',
                'project.ik_system': 'Sistema de Control Inteligente',
                'project.inv_kinematics': 'Cinemática Inversa: Cálculo en tiempo real de ángulos de articulación para posiciones deseadas',
                'project.path_planning': 'Planificación de Trayectoria: Generación suave de trayectorias con evasión de obstáculos',
                'project.force_control': 'Control de Fuerza: Manejo suave de objetos con retroalimentación de fuerza',
                'project.safety_limits': 'Límites de Seguridad: Protección de límites de articulación y detección de colisiones',
                'project.computer_vision_title': 'Visión por Computadora',
                'project.rtod': 'Detección de Objetos en Tiempo Real: Detección basada en YOLO de objetos comunes',
                'project.pos_estimation': 'Estimación de Posición 3D: Convierte detecciones 2D a coordenadas del mundo 3D',
                'project.obj_classification': 'Clasificación de Objetos: Identificar y categorizar objetivos de manipulación',
                'project.visual_servoing': 'Visual Servoing: Control en bucle cerrado usando retroalimentación visual',
                'project.6dof_specs': [
                    'Alcance 400mm máximo',
                    'Carga útil 500g máximo',
                    'Repetibilidad ±2mm',
                    'Resolución de Articulación 0.1° por paso',
                    'Velocidad de Operación 50°/segundo máximo',
                    'Resolución de Visión 1920x1080 @ 30fps',
                    'Poder de Procesamiento Raspberry Pi 4B (4GB RAM)',
                    'Frecuencia de Control 100Hz velocidad de actualización de servo'
                ],
                'project.iot_overview': 'Esta Estación de Monitoreo Ambiental IoT es un sistema integral diseñado para recopilar, procesar y visualizar datos ambientales para aplicaciones agrícolas, de investigación y de monitoreo. El sistema combina múltiples sensores, comunicación inalámbrica, energía solar y procesamiento de datos basado en la nube para proporcionar información en tiempo real sobre condiciones ambientales.',
                'project.hardware_components': 'Componentes de Hardware',
                'project.esp32': 'Microcontrolador ESP32: Unidad de procesamiento principal con conectividad WiFi',
                'project.multi_sensor': 'Matriz de Sensores Múltiples: Temperatura, humedad, presión, luz, condiciones del suelo y clima',
                'project.solar_power': 'Sistema de Energía Solar: Potencia autosuficiente con batería de respaldo',
                'project.weatherproof': 'Caja Resistente a la Intemperie: Protección clasificada IP65 para despliegue al aire libre',
                'project.software_stack': 'Stack de Software',
                'project.firmware': 'Firmware Embebido: C++ en ESP32 para lectura de sensores y transmisión de datos',
                'project.mqtt': 'Protocolo MQTT: Mensajería ligera para comunicación IoT',
                'project.backend': 'Backend en Python: Procesamiento de datos, almacenamiento y análisis',
                'project.dashboard': 'Panel Web: Interfaz de visualización y monitoreo en tiempo real',
                'project.mobile_app': 'Aplicación Móvil: Monitoreo remoto y notificaciones de alerta',
                'project.comprehensive_monitoring': 'Monitoreo Integral',
                'project.temp_humidity': 'Temperatura y Humedad: Sensor de alta precisión DHT22',
                'project.atm_pressure': 'Presión Atmosférica: Sensor barométrico BMP280',
                'project.light_levels': 'Niveles de Luz: Sensor de luminosidad digital TSL2561',
                'project.soil_monitoring': 'Monitoreo del Suelo: Monitoreo de humedad y temperatura',
                'project.weather_data': 'Datos Meteorológicos: Detección de lluvia, velocidad del viento y dirección',
                'project.energy_efficient': 'Diseño Eficiente Energéticamente',
                'project.solar_powered': 'Panel Solar: Panel solar de 6W con carga MPPT',
                'project.battery_backup': 'Batería de Respaldo: 2000mAh LiPo para operación de 72 horas sin sol',
                'project.sleep_modes': 'Modos de Reposo: Consumo ultra bajo entre lecturas',
                'project.power_monitoring': 'Monitoreo de Potencia: Estado de carga y voltaje de batería en tiempo real',
                'project.wireless_connectivity': 'Conectividad Inalámbrica',
                'project.wifi_comm': 'Comunicación WiFi: Conectividad IEEE 802.11 b/g/n',
                'project.mqtt_messaging': 'Mensajería MQTT: Mensajería eficiente de publicación/suscripción',
                'project.ota_updates': 'Actualizaciones Over-the-Air: Actualizaciones de firmware remoto',
                'project.fallback_storage': 'Almacenamiento Fallback: Registro de datos local cuando está desconectado',
                'project.intelligent_alerting': 'Alertas Inteligentes',
                'project.threshold_monitoring': 'Monitoreo de Umbral: Umbrales de alerta personalizables',
                'project.notifications': 'Notificaciones Multicanal: Correo electrónico, SMS y notificaciones push',
                'project.smart_filtering': 'Filtrado Inteligente: Reduce falsas alarmas con análisis de tendencias',
                'project.escalation': 'Políticas de Escalada: Diferentes niveles de alerta según la gravedad',
                'project.iot_specs': [
                    'Voltaje de Operación 3.3V (regulado desde solar/batería)',
                    'Consumo de Potencia 45mA activo, 10μA sueño',
                    'Rango de Transmisión WiFi: 100m (exterior)',
                    'Resolución de Datos Temperatura: ±0.1°C, Humedad: ±2%',
                    'Velocidad de Muestreo 30 segundos (configurable)',
                    'Almacenamiento de Datos 1MB flash embebido + almacenamiento en nube',
                    'Temperatura de Operación -40°C a +85°C',
                    'Clasificación de Tiempo IP65 (hermético al polvo, resistente al agua)'
                ],
                'project.sensor_details': 'Detalles del Sensor',
                'project.environmental_sensors': 'Sensores Ambientales',
                'project.dht22': 'DHT22: Precisión de temperatura ±0.5°C, precisión de humedad ±2-5%',
                'project.bmp280': 'BMP280: Precisión de presión ±1 hPa, resolución de altitud de 0.17m',
                'project.tsl2561': 'TSL2561: Rango de medición de luz de 0.1 a 40,000 lux',
                'project.agricultural': 'Sensores Agrícolas',
                'project.soil_moisture': 'Humedad del Suelo Capacitiva: Resistente a la corrosión, rango 0-100%',
                'project.soil_temp': 'Temperatura del Suelo DS18B20: Resistente al agua, precisión ±0.5°C',
                'project.rain_sensor': 'Sensor de Lluvia: Detección digital lluvia/sin lluvia',
                'project.weather_sensors': 'Sensores Meteorológicos',
                'project.anemometer': 'Anemómetro: Efecto Hall, rango de velocidad del viento 0-70 m/s',
                'project.wind_vane': 'Veleta: Medición de dirección del viento de 16 posiciones',
                'project.weather_station': 'Integración de Estación Meteorológica: Compatible con protocolos estándar',
                'project.data_processing': 'Pipeline de Procesamiento de Datos',
                'project.real_time': 'Procesamiento en Tiempo Real',
                'project.sensor_fusion_dp': 'Fusión de Sensores: Combina múltiples lecturas de sensores para precisión',
                'project.quality_checks': 'Verificaciones de Calidad: Valida datos para errores de sensores y valores atípicos',
                'project.calibration': 'Calibración: Compensación automática de cambios y calibración'
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
