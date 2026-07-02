// ═══════════════════════════════════════════════════════════════
//  PORTFOLIO.CONFIG — el único archivo que editas.
//  Todo el contenido del sitio (textos, links, proyectos, skills)
//  vive aquí. Los componentes solo leen; nunca los toques.
// ═══════════════════════════════════════════════════════════════

export const identity = {
  name: 'Frandy R. Nuñez',
  logo: 'frandy', // marca corta en la barra de navegación
  role: 'Full Stack Developer',
  tagline: 'De la idea al deploy: el sistema completo, un solo responsable.',
  status: 'Disponible para proyectos',
  email: 'ydnarf21@gmail.com',
};

export const socials = {
  github: 'https://github.com/ydnarf',
  linkedin: 'https://www.linkedin.com/in/frandyrn/',
  email: 'mailto:ydnarf21@gmail.com',
};

export const nav = {
  links: [
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Contacto', href: '#contacto' },
  ],
};

export const hero = {
  eyebrow: 'FULL STACK DEVELOPER',
  ctaPrimary: { label: 'Ver proyectos', href: '#proyectos' },
  ctaSecondary: { label: 'Contacto', href: '#contacto' },
  scrollHint: 'seguir la traza',
};

export const about = {
  signal: '002',
  title: 'Sobre mí',
  bio: [
    'Ingeniero de sistemas. Construyo productos web completos: defino el esquema de datos, levanto la API y la llevo hasta una interfaz que alguien disfruta usar.',
    'Trabajo de punta a punta porque los productos no se rompen en las capas: se rompen en las costuras. Menos handoffs, menos sorpresas en producción.',
  ],
  // Ficha técnica al pie de la bio — edita valores, agrega o quita filas.
  datasheet: [
    { label: 'Formación', value: 'Ingeniería de Sistemas' },
    { label: 'Enfoque', value: 'De la idea al deploy' },
    { label: 'Base', value: 'React · Node · PostgreSQL' },
  ],
};

export const skills = {
  signal: '003',
  title: 'Skills',
  legend: 'En grande, lo que domino. En pequeño, lo que uso a diario.',
  groups: [
    {
      label: 'FRONTEND',
      core: ['React', 'TypeScript', 'TailwindCSS'],
      also: ['Vite', 'Framer Motion', 'Zustand', 'Accesibilidad'],
    },
    {
      label: 'BACKEND',
      core: ['Node.js', 'Express', 'PostgreSQL'],
      also: ['Prisma', 'APIs REST', 'JWT / Auth', 'WebSockets'],
    },
    {
      label: 'TOOLS / DEVOPS',
      core: ['Git', 'Docker'],
      also: ['GitHub Actions', 'Linux', 'Vercel', 'Railway'],
    },
  ],
};

export const projects = {
  signal: '004',
  title: 'Proyectos',
  intro: 'Módulos en producción o en camino. Cada uno, completo: interfaz, API y datos.',
  // Cada item es un proyecto. Para agregar el tuyo: duplica un objeto y edita.
  //  - image: ruta a un screenshot (ej. '/previews/lumen.webp'). Con null se
  //    muestra el placeholder de serigrafía hasta que tengas captura real.
  //  - demo / repo: con null se muestra "en desarrollo" en lugar del link.
  items: [
    {
      code: 'MOD-01',
      name: 'LuzEstudio',
      problem:
        'Landing para un estudio fotográfico que convierte visitas en reservas de sesión: galería con filtros por categoría y formulario de contacto validado.',
      stack: ['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Express'],
      demo: null, // ← https://luzestudio.onrender.com cuando el servicio se reactive en Render
      repo: 'https://github.com/ydnarf/landing-fotografia',
      image: '/previews/luzestudio.jpg',
      alt: 'Hero de LuzEstudio: titular «Luz Estudio» en serif editorial sobre fondo oscuro, junto a una foto de boda con ramo',
    },
    {
      code: 'MOD-02',
      name: 'Butaca',
      problem:
        'Plataforma de streaming con catálogo, perfiles y reproducción, respaldada por PostgreSQL.',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'JWT'],
      demo: null,
      repo: null,
      image: null,
      alt: 'Captura de la plataforma de streaming Butaca',
    },
    {
      code: 'MOD-03',
      name: 'Norte',
      problem:
        'Dashboard de métricas en tiempo real para tiendas online: ventas, stock y alertas en un solo panel, alimentado por WebSockets.',
      stack: ['React', 'TypeScript', 'Node.js', 'Express', 'WebSockets'],
      demo: null,
      repo: 'https://github.com/ydnarf/norte-dashboard',
      image: '/previews/norte.jpg',
      alt: 'Panel Norte: KPIs de ventas, gráfico de ingresos por minuto, alertas de stock y pedidos en vivo',
    },
  ],
};

export const experience = {
  signal: '005',
  title: 'Registro',
  intro: 'La trayectoria como changelog: cada versión, un salto. La más reciente arriba.',
  // ← Reemplaza estas entradas con tu trayectoria real (períodos, roles, lugares).
  //    El orden del array es el orden en pantalla: pon lo más reciente primero.
  entries: [
    {
      version: 'v2.0',
      tag: 'ACTUAL',
      period: '2024 — hoy',
      role: 'Full Stack Developer',
      place: 'Freelance · Workana',
      notes:
        'Productos completos de la idea al deploy: React + Node + PostgreSQL. Interfaz, API y datos bajo una sola responsabilidad.',
    },
    {
      version: 'v1.0',
      tag: 'RELEASE',
      period: '2021 — 2024',
      role: 'Primeros productos en producción',
      place: 'Freelance',
      notes:
        'Primeros clientes reales: sitios y APIs pequeñas, deploy incluido. Aprendí que mantener pesa más que lanzar.',
    },
    {
      version: 'v0.9',
      tag: 'BETA',
      period: '2017 — 2022',
      role: 'Ingeniería de Sistemas',
      place: 'Formación universitaria',
      notes:
        'Fundamentos: algoritmos, bases de datos, redes. Proyectos académicos que ya olían a producto.',
    },
  ],
};

export const contact = {
  signal: '006',
  title: 'Contacto',
  headline: '¿Tienes un producto en mente?',
  blurb:
    'Cuéntame qué necesitas construir y te digo cómo lo haría. Respondo en menos de 24 horas.',
  form: {
    name: 'Nombre',
    email: 'Email',
    message: '¿Qué construimos?',
    submit: 'Enviar mensaje',
    error: 'Completa los tres campos antes de enviar.',
    sent: 'Abriendo tu correo… Si no pasa nada, escríbeme directo al email de arriba.',
  },
};

export const footer = {
  note: 'Diseñado y ruteado a mano. Sin plantillas.',
  ground: 'FIN DE LA TRAZA',
};
