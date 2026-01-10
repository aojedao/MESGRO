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
                'project.arm_accuracy': 'Position Accuracy: Average error of 1.2mm within workspace',
                'project.arm_repeatability': 'Repeatability: Standard deviation of 0.8mm over 1000 cycles',
                'project.object_detection': 'Object Detection: 94% success rate for target objects',
                'project.overview': 'Project Overview',
                'project.key_features': 'Key Features',
                'project.technical_details': 'Technical Details',
                'project.system_architecture': 'System Architecture',
                'project.applications': 'Applications',
                'project.lessons_intro': 'Lessons Learned from This Project',
                'project.pid_tuning': 'PID Tuning',
                'project.pid_desc': 'Start with proportional control only, then add integral and derivative terms',
                'project.sensor_calibration': 'Sensor Calibration',
                'project.sensor_calib_desc': 'Regular calibration is crucial for consistent performance',
                'project.power_management': 'Power Management',
                'project.power_desc': 'Use voltage regulators for stable sensor readings',
                'project.mechanical_design': 'Mechanical Design',
                'project.mech_desc': 'Proper wheel alignment significantly improves tracking accuracy',
                'project.machine_learning': 'Machine Learning',
                'project.ml_desc': 'Implement adaptive PID parameters using reinforcement learning',
                'project.multi_line': 'Multi-Line Support',
                'project.multi_line_desc': 'Add capability to handle intersections and multiple line paths',
                'project.wireless_comm': 'Wireless Communication',
                'project.wireless_desc': 'Upgrade to WiFi for remote monitoring and control',
                'project.advanced_sensors': 'Advanced Sensors',
                'project.adv_sensors_desc': 'Add color sensors for enhanced track detection',
                'project.assembly_step1': '3D print the chassis using the provided STL files',
                'project.assembly_step2': 'Mount the motors and wheels to the chassis',
                'project.assembly_step3': 'Install the sensor array at the front of the robot',
                'project.assembly_step4': 'Secure the Arduino and motor driver board',
                'project.electronics_step1': 'Follow the circuit schematic to connect all components',
                'project.electronics_step2': 'Use the custom PCB design for a cleaner installation',
                'project.electronics_step3': 'Test all connections before powering on',
                'project.electronics_step4': 'Upload the Arduino code and calibrate sensors',
                'project.software_step1': 'Install the Arduino IDE and required libraries',
                'project.software_step2': 'Upload the main control code to the Arduino',
                'project.software_step3': 'Install Python dependencies for the tuning interface',
                'project.software_step4': 'Run initial calibration and PID tuning procedures',
                'project.line_overview': 'This project demonstrates the design and implementation of an autonomous line-following robot using Arduino Uno and advanced control algorithms. The robot features PID (Proportional-Integral-Derivative) control for smooth line tracking, obstacle detection capabilities, and wireless parameter tuning.',
                'project.advanced_control': 'Advanced Control System',
                'project.pid_controller': 'PID Controller: Implements a sophisticated PID control algorithm for precise line following',
                'project.sensor_fusion': 'Sensor Fusion: Uses a 5-sensor IR array for accurate line position detection',
                'project.adaptive_speed': 'Adaptive Speed: Automatically adjusts speed based on track curvature',
                'project.wireless_telemetry': 'Real-time Telemetry: Sends sensor data and control parameters via Bluetooth',
                'project.param_tuning': 'Parameter Tuning: Live PID parameter adjustment using custom Python GUI',
                'project.perf_logging': 'Performance Logging: Records track performance for analysis and optimization',
                'project.obstacle_detection': 'Obstacle Detection: Ultrasonic sensor for collision avoidance',
                'project.battery_mgmt': 'Battery Management: Low voltage detection and automatic shutdown',
                'project.emergency_stop': 'Emergency Stop: Wireless emergency stop functionality',
                'project.specs_microcontroller': 'Microcontroller Arduino Uno R3 (ATmega328P)',
                'project.specs_voltage': 'Operating Voltage 7.4V (2S LiPo)',
                'project.specs_max_speed': 'Maximum Speed 1.2 m/s',
                'project.specs_detection_range': 'Line Detection Range 12cm wide sensor array',
                'project.specs_battery_life': 'Battery Life 45 minutes continuous operation',
                'project.specs_weight': 'Weight 485g',
                'project.specs_dimensions': 'Dimensions 18cm x 12cm x 8cm',
                'project.6dof_overview': 'This project presents the design and implementation of a sophisticated 6-degree-of-freedom robotic arm integrated with a computer vision system for autonomous object manipulation. The system combines advanced inverse kinematics algorithms, real-time object detection using YOLO, and precise servo control to achieve accurate pick-and-place operations.',
                'project.mechanical_design_title': 'Mechanical Design',
                'project.six_dof': '6 Degrees of Freedom: Full spatial manipulation capability',
                'project.precision_joints': 'Precision Joints: Ball bearing supported joints for smooth operation',
                'project.custom_gripper': 'Custom Gripper: Force-feedback enabled end-effector',
                'project.modular_design': 'Modular Design: Easy maintenance and component replacement',
                'project.ik_system': 'Intelligent Control System',
                'project.inv_kinematics': 'Inverse Kinematics: Real-time calculation of joint angles for desired positions',
                'project.path_planning': 'Path Planning: Smooth trajectory generation with obstacle avoidance',
                'project.force_control': 'Force Control: Gentle object handling with force feedback',
                'project.safety_limits': 'Safety Limits: Joint limit protection and collision detection',
                'project.computer_vision_title': 'Computer Vision',
                'project.rtod': 'Real-time Object Detection: YOLO-based detection of common objects',
                'project.pos_estimation': '3D Position Estimation: Convert 2D detections to 3D world coordinates',
                'project.obj_classification': 'Object Classification: Identify and categorize manipulation targets',
                'project.visual_servoing': 'Visual Servoing: Closed-loop control using visual feedback',
                'project.6dof_specs': [
                    'Reach 400mm maximum',
                    'Payload 500g maximum',
                    'Repeatability ±2mm',
                    'Joint Resolution 0.1° per step',
                    'Operating Speed 50°/second maximum',
                    'Vision Resolution 1920x1080 @ 30fps',
                    'Processing Power Raspberry Pi 4B (4GB RAM)',
                    'Control Frequency 100Hz servo update rate'
                ],
                'project.iot_overview': 'This IoT Environmental Monitoring Station is a comprehensive system designed to collect, process, and visualize environmental data for agricultural, research, and monitoring applications. The system combines multiple sensors, wireless communication, solar power, and cloud-based data processing to provide real-time insights into environmental conditions.',
                'project.hardware_components': 'Hardware Components',
                'project.esp32': 'ESP32 Microcontroller: Main processing unit with WiFi connectivity',
                'project.multi_sensor': 'Multi-Sensor Array: Temperature, humidity, pressure, light, soil conditions, and weather',
                'project.solar_power': 'Solar Power System: Self-sustaining power with battery backup',
                'project.weatherproof': 'Weatherproof Enclosure: IP65-rated protection for outdoor deployment',
                'project.software_stack': 'Software Stack',
                'project.firmware': 'Embedded Firmware: C++ on ESP32 for sensor reading and data transmission',
                'project.mqtt': 'MQTT Protocol: Lightweight messaging for IoT communication',
                'project.backend': 'Python Backend: Data processing, storage, and analysis',
                'project.dashboard': 'Web Dashboard: Real-time visualization and monitoring interface',
                'project.mobile_app': 'Mobile App: Remote monitoring and alert notifications',
                'project.comprehensive_monitoring': 'Comprehensive Monitoring',
                'project.temp_humidity': 'Temperature & Humidity: High-precision DHT22 sensor',
                'project.atm_pressure': 'Atmospheric Pressure: BMP280 barometric sensor',
                'project.light_levels': 'Light Levels: TSL2561 digital luminosity sensor',
                'project.soil_monitoring': 'Soil Conditions: Moisture and temperature monitoring',
                'project.weather_data': 'Weather Data: Rain detection, wind speed and direction',
                'project.energy_efficient': 'Energy Efficient Design',
                'project.solar_powered': 'Solar Powered: 6W solar panel with MPPT charging',
                'project.battery_backup': 'Battery Backup: 2000mAh LiPo for 72-hour operation without sun',
                'project.sleep_modes': 'Sleep Modes: Ultra-low power consumption between readings',
                'project.power_monitoring': 'Power Monitoring: Real-time battery voltage and charging status',
                'project.wireless_connectivity': 'Wireless Connectivity',
                'project.wifi_comm': 'WiFi Communication: IEEE 802.11 b/g/n connectivity',
                'project.mqtt_messaging': 'MQTT Messaging: Efficient publish/subscribe messaging',
                'project.ota_updates': 'Over-the-Air Updates: Remote firmware updates',
                'project.fallback_storage': 'Fallback Storage: Local data logging when offline',
                'project.intelligent_alerting': 'Intelligent Alerting',
                'project.threshold_monitoring': 'Threshold Monitoring: Customizable alert thresholds',
                'project.notifications': 'Multi-Channel Notifications: Email, SMS, and push notifications',
                'project.smart_filtering': 'Smart Filtering: Reduces false alarms with trend analysis',
                'project.escalation': 'Escalation Policies: Different alert levels based on severity',
                'project.iot_specs': [
                    'Operating Voltage 3.3V (regulated from solar/battery)',
                    'Power Consumption 45mA active, 10μA sleep',
                    'Transmission Range WiFi: 100m (outdoor)',
                    'Data Resolution Temperature: ±0.1°C, Humidity: ±2%',
                    'Sampling Rate 30 seconds (configurable)',
                    'Data Storage 1MB onboard flash + cloud storage',
                    'Operating Temperature -40°C to +85°C',
                    'Weather Rating IP65 (dust tight, water resistant)'
                ],
                'project.sensor_details': 'Sensor Details',
                'project.environmental_sensors': 'Environmental Sensors',
                'project.dht22': 'DHT22: ±0.5°C temperature, ±2-5% humidity accuracy',
                'project.bmp280': 'BMP280: ±1 hPa pressure accuracy, 0.17m altitude resolution',
                'project.tsl2561': 'TSL2561: 0.1 to 40,000 lux light measurement range',
                'project.agricultural': 'Agricultural Sensors',
                'project.soil_moisture': 'Capacitive Soil Moisture: Corrosion-resistant, 0-100% range',
                'project.soil_temp': 'Soil Temperature DS18B20: Waterproof, ±0.5°C accuracy',
                'project.rain_sensor': 'Rain Sensor: Digital rain/no-rain detection',
                'project.weather_sensors': 'Weather Sensors',
                'project.anemometer': 'Anemometer: Hall effect, 0-70 m/s wind speed range',
                'project.wind_vane': 'Wind Vane: 16-position wind direction measurement',
                'project.weather_station': 'Weather Station Integration: Compatible with standard protocols',
                'project.data_processing': 'Data Processing Pipeline',
                'project.real_time': 'Real-Time Processing',
                'project.sensor_fusion_dp': 'Sensor Fusion: Combines multiple sensor readings for accuracy',
                'project.quality_checks': 'Quality Checks: Validates data for sensor errors and outliers',
                'project.calibration': 'Calibration: Automatic drift compensation and calibration'
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

        // Add click handler - bind 'this' explicitly
        const handler = (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.switchLanguage();
        };
        
        toggle.addEventListener('click', handler);
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
            const translation = this.translations[lang] && this.translations[lang][key];
            
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
function initLanguageSwitcher() {
    window.languageSwitcher = new LanguageSwitcher();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
} else {
    initLanguageSwitcher();
}
