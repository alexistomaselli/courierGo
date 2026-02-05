
export type Language = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      features: "Features",
      dashboard: "Dashboard",
      pricing: "Pricing",
      login: "Login",
      getStarted: "Get Started"
    },
    hero: {
      new: "New: AI-Powered Route Optimization",
      title1: "Global Logistics",
      title2: "Redefined.",
      desc: "The world's most advanced tracking platform for enterprises and individuals. Real-time insights, zero delays, absolute security.",
      placeholder: "Enter tracking number (e.g. TRK-9901)",
      cta: "Track Package"
    },
    stats: {
      packages: "Packages Delivered",
      countries: "Countries Reached",
      clients: "Happy Clients",
      uptime: "System Uptime"
    },
    process: {
      title: "Our Simple Process",
      sub: "From warehouse to doorstep in 3 easy steps.",
      step1Title: "Registration",
      step1Desc: "Register your package and get a unique tracking ID instantly.",
      step2Title: "Sorting & Transit",
      step2Desc: "Real-time AI monitoring ensures the fastest route possible.",
      step3Title: "Final Delivery",
      step3Desc: "Secure delivery with digital proof and instant notifications."
    },
    featuresSection: {
      title1: "Intelligence",
      title2: "at every step.",
      desc: "We don't just move boxes; we move data. Our platform provides the visibility you need to optimize your entire business cycle.",
      item1: "AI Route Prediction",
      item2: "Carbon Footprint Tracking",
      item3: "Secure Vault Warehousing",
      card1Title: "Deep Analytics",
      card1Desc: "Predictive modeling for your entire supply chain efficiency.",
      card2Title: "Vault Security",
      card2Desc: "Every package movement is encrypted and logged in real-time.",
      card3Title: "Carrier Network",
      card3Desc: "Seamlessly connect with 500+ global shipping partners instantly."
    },
    pricingSection: {
      title: "Flexible Pricing",
      sub: "Choose the plan that fits your logistics needs.",
      basic: "Basic",
      pro: "Professional",
      enterprise: "Enterprise",
      perMonth: "/mo",
      feature1: "Real-time tracking",
      feature2: "Email notifications",
      feature3: "24/7 Support",
      feature4: "API Access",
      feature5: "Custom reporting",
      cta: "Get Started"
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: "How can I track my package?",
      a1: "Simply enter your tracking ID in the search bar at the top of the page.",
      q2: "Do you offer international shipping?",
      a2: "Yes, we operate in over 150 countries with a global network of partners.",
      q3: "How secure is the platform?",
      a3: "We use banking-grade encryption and real-time audit logs for every movement."
    },
    footer: {
      desc: "Making the world's logistics accessible, transparent, and faster for everyone through data-driven innovation.",
      product: "Product",
      company: "Company",
      legal: "Legal",
      tracking: "Tracking",
      analytics: "Analytics",
      automation: "Automation",
      about: "About Us",
      careers: "Careers",
      contact: "Contact",
      privacy: "Privacy",
      terms: "Terms",
      rights: "All rights reserved."
    },
    auth: {
      welcome: "Welcome back",
      create: "Create Account",
      loginTab: "Login",
      signupTab: "Sign Up",
      descLogin: "Please enter your details to access your dashboard.",
      descSignup: "Start your logistics journey with our advanced platform.",
      email: "Email Address",
      password: "Password",
      forgot: "Forgot?",
      submitLogin: "Get Started",
      submitSignup: "Create Account",
      or: "Or continue with email"
    },
    sidebar: {
      adminTitle: "CourierGo",
      customerTitle: "CourierGo Portal",
      customerSub: "Customer Dashboard",
      dashboard: "Dashboard",
      packages: "Packages",
      clients: "Clients",
      rates: "Rates & Billing",
      logs: "Logs",
      myPackages: "My Packages",
      history: "Shipping History",
      profile: "Profile",
      settings: "Settings",
      support: "Support Center"
    },
    admin: {
      overview: "Dashboard Overview",
      sub: "Real-time logistics monitoring and fleet management.",
      report: "Report",
      stats: {
        active: "Total Active Packages",
        delivered: "Delivered Packages",
        users: "Registered Users",
        revenue: "Estimated Revenue"
      },
      table: {
        title: "Recent Package Activity",
        sub: "Last 10 package movements across the network",
        filter: "Filter Data",
        id: "Tracking ID",
        client: "Client",
        status: "Status",
        weight: "Weight",
        updated: "Last Updated",
        actions: "Actions"
      }
    },
    customer: {
      title: "My Packages",
      sub: "Manage and track your incoming shipments in real-time.",
      add: "Add Pre-alert",
      stats: {
        total: "Total Packages",
        transit: "In Transit",
        toPay: "Total to Pay",
        storage: "Storage Days"
      },
      active: "Active Shipments",
      steps: {
        pre: "Pre-alerted",
        warehouse: "In Warehouse",
        transit: "In Transit",
        ready: "Ready for Pickup"
      },
      supportTitle: "Need assistance with your packages?",
      supportSub: "Our support team is available 24/7 to help you.",
      supportCTA: "Chat with Support"
    }
  },
  es: {
    nav: {
      features: "Características",
      dashboard: "Panel de Control",
      pricing: "Precios",
      login: "Ingresar",
      getStarted: "Empezar"
    },
    hero: {
      new: "Nuevo: Optimización de Rutas con IA",
      title1: "Logística Global",
      title2: "Redefinida.",
      desc: "La plataforma de seguimiento más avanzada del mundo para empresas y particulares. Información en tiempo real, cero retrasos, seguridad absoluta.",
      placeholder: "Ingrese número de guía (ej. TRK-9901)",
      cta: "Rastrear Paquete"
    },
    stats: {
      packages: "Paquetes Entregados",
      countries: "Países Alcanzados",
      clients: "Clientes Felices",
      uptime: "Disponibilidad"
    },
    process: {
      title: "Nuestro Proceso Simple",
      sub: "Del almacén a su puerta en 3 sencillos pasos.",
      step1Title: "Registro",
      step1Desc: "Registre su paquete y obtenga un ID de rastreo único al instante.",
      step2Title: "Clasificación y Tránsito",
      step2Desc: "El monitoreo con IA asegura la ruta más rápida posible.",
      step3Title: "Entrega Final",
      step3Desc: "Entrega segura con comprobante digital y notificaciones al instante."
    },
    featuresSection: {
      title1: "Inteligencia",
      title2: "en cada paso.",
      desc: "No solo movemos cajas; movemos datos. Nuestra plataforma proporciona la visibilidad que necesita para optimizar todo su ciclo de negocio.",
      item1: "Predicción de Rutas con IA",
      item2: "Seguimiento de Huella de Carbono",
      item3: "Almacenamiento en Bóveda Segura",
      card1Title: "Analítica Profunda",
      card1Desc: "Modelado predictivo para la eficiencia de toda su cadena de suministro.",
      card2Title: "Seguridad de Bóveda",
      card2Desc: "Cada movimiento de paquete está encriptado y registrado en tiempo real.",
      card3Title: "Red de Transportistas",
      card3Desc: "Conéctese sin problemas con más de 500 socios de envío globales al instante."
    },
    pricingSection: {
      title: "Precios Flexibles",
      sub: "Elija el plan que se adapte a sus necesidades logísticas.",
      basic: "Básico",
      pro: "Profesional",
      enterprise: "Empresarial",
      perMonth: "/mes",
      feature1: "Rastreo en tiempo real",
      feature2: "Notificaciones por correo",
      feature3: "Soporte 24/7",
      feature4: "Acceso a API",
      feature5: "Reportes personalizados",
      cta: "Empezar"
    },
    faq: {
      title: "Preguntas Frecuentes",
      q1: "¿Cómo puedo rastrear mi paquete?",
      a1: "Simplemente ingrese su ID de rastreo en la barra de búsqueda en la parte superior.",
      q2: "¿Ofrecen envíos internacionales?",
      a2: "Sí, operamos en más de 150 países con una red global de socios.",
      q3: "¿Qué tan segura es la plataforma?",
      a3: "Usamos cifrado de grado bancario y registros de auditoría para cada movimiento."
    },
    footer: {
      desc: "Haciendo la logística mundial accesible, transparente y más rápida para todos a través de la innovación impulsada por datos.",
      product: "Producto",
      company: "Empresa",
      legal: "Legal",
      tracking: "Rastreo",
      analytics: "Analítica",
      automation: "Automatización",
      about: "Nosotros",
      careers: "Carreras",
      contact: "Contacto",
      privacy: "Privacidad",
      terms: "Términos",
      rights: "Todos los derechos reservados."
    },
    auth: {
      welcome: "Bienvenido de nuevo",
      create: "Crear Cuenta",
      loginTab: "Ingresar",
      signupTab: "Registrarse",
      descLogin: "Por favor ingrese sus datos para acceder al panel.",
      descSignup: "Comience su viaje logístico con nuestra plataforma avanzada.",
      email: "Correo Electrónico",
      password: "Contraseña",
      forgot: "¿Olvidó su clave?",
      submitLogin: "Empezar",
      submitSignup: "Crear Cuenta",
      or: "O continúe con su correo"
    },
    sidebar: {
      adminTitle: "CourierGo",
      customerTitle: "Portal CourierGo",
      customerSub: "Panel del Cliente",
      dashboard: "Resumen",
      packages: "Paquetes",
      clients: "Clientes",
      rates: "Tarifas y Facturación",
      logs: "Registros",
      myPackages: "Mis Paquetes",
      history: "Historial de Envíos",
      profile: "Perfil",
      settings: "Configuración",
      support: "Centro de Soporte"
    },
    admin: {
      overview: "Vista General",
      sub: "Monitoreo logístico y gestión de flota en tiempo real.",
      report: "Reporte",
      stats: {
        active: "Total de Paquetes Activos",
        delivered: "Paquetes Entregados",
        users: "Usuarios Registrados",
        revenue: "Ingresos Estimados"
      },
      table: {
        title: "Actividad Reciente de Paquetes",
        sub: "Últimos 10 movimientos de paquetes en la red",
        filter: "Filtrar Datos",
        id: "ID de Rastreo",
        client: "Cliente",
        status: "Estado",
        weight: "Peso",
        updated: "Última Actualización",
        actions: "Actions"
      }
    },
    customer: {
      title: "Mis Paquetes",
      sub: "Gestione y rastree sus envíos entrantes en tiempo real.",
      add: "Pre-alerta",
      stats: {
        total: "Total de Paquetes",
        transit: "En Tránsito",
        toPay: "Total a Pagar",
        storage: "Días de Almacén"
      },
      active: "Envíos Activos",
      steps: {
        pre: "Pre-alertado",
        warehouse: "En Almacén",
        transit: "En Tránsito",
        ready: "Listo para Retiro"
      },
      supportTitle: "¿Necesita ayuda con sus paquetes?",
      supportSub: "Nuestro equipo de soporte está disponible 24/7.",
      supportCTA: "Chat con Soporte"
    }
  }
};
