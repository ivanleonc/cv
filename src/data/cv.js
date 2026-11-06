// src/data/cv.js
// ============================================================
// FUENTE CENTRAL DE DATOS — edita aquí toda tu información
// No es necesario modificar ningún archivo .astro o CSS
// ============================================================

export const cv = {
  // ── INFORMACIÓN PERSONAL ──────────────────────────────────
  personal: {
    name: 'Iván León Capote',
    title: 'Development Engineer',
    subtitle: 'Full Stack Developer · Cloud · AI',
    location: 'Piendamó, Cauca, Colombia',
    email: 'ileoncapote@gmail.com',
    emailAlt: 'idzivan@unimayor.edu.co',
    phone: '', // TODO: Agrega tu número de teléfono si lo deseas mostrar
    photo: '/cv/profile.jpg', // Reemplaza con tu foto real en public/profile.jpg
    photoAlt: 'Foto de perfil de Iván León Capote',
  },

  // ── REDES SOCIALES ────────────────────────────────────────
  social: [
    {
      network: 'LinkedIn',
      handle: 'ivanleoncapote',
      url: 'https://www.linkedin.com/in/ivanleoncapote',
      icon: 'linkedin',
    },
    {
      network: 'GitHub',
      handle: 'ivanleonc',
      url: 'https://github.com/ivanleonc',
      icon: 'github',
    },
    // TODO: Agrega otras redes si las tienes
    // { network: 'Twitter/X', handle: '@...', url: 'https://...', icon: 'twitter' },
    // { network: 'Portfolio', handle: 'tu-sitio.com', url: 'https://...', icon: 'globe' },
  ],

  // ── PERFIL PROFESIONAL ────────────────────────────────────
  profile: `Ingeniero Informático con enfoque full-stack. Construyo aplicaciones web escalables de punta a punta:
interfaces con Vue.js, TypeScript y React, y servicios backend con Node.js (NestJS, Express.js), Next.js y PHP.

Trabajo con APIs REST y WebSockets, despliegues en AWS (EC2, S3, Lambda, API Gateway, CloudFront, CloudWatch, IAM),
contenedores con Docker y entornos Linux. Me motiva el código limpio, la automatización y la mejora continua del rendimiento.`,

  // ── EXPERIENCIA LABORAL ───────────────────────────────────
  experience: [
    {
      company: 'CariAI',
      role: 'Development Engineer',
      period: 'Jun 2023 – Presente',
      duration: '4+ años',
      location: 'Popayán, Colombia',
      description:
        'Ingeniero de desarrollo full-stack especializado en la creación de aplicaciones web escalables y eficientes para plataformas de inteligencia artificial conversacional.',
      responsibilities: [
        'Desarrollo y optimización de la Consola de Agentes utilizando Vue.js y JavaScript.',
        'Desarrollo de servicios y APIs con Node.js (NestJS, Express.js) y PHP, integrados con el frontend en Vue.js.',
        'Despliegue y operación de servicios en AWS (EC2, S3, Lambda, API Gateway, CloudFront) con Docker y Linux.',
        'Implementación de WebSockets para comunicación en tiempo real dentro de la plataforma.',
        'Gestión de estado con Pinia, garantizando una experiencia fluida y reactiva.',
        'Integración con API REST, refactorizando código para adaptarse a nuevos modelos de datos.',
        'Diseño y desarrollo de componentes reutilizables para mejorar la mantenibilidad del código.',
        'Colaboración con equipos de backend y UX/UI para garantizar un flujo de trabajo eficiente.',
      ],
      stack: ['Vue.js', 'TypeScript', 'JavaScript', 'Node.js', 'NestJS', 'Express.js', 'PHP', 'Docker', 'AWS', 'Linux', 'Pinia', 'WebSockets', 'Axios', 'HTML', 'CSS'],
      current: true,
    },
    {
      company: 'CariAI',
      role: 'Frontend Developer',
      period: 'Nov 2022 – May 2023',
      duration: '7 meses',
      location: 'Popayán, Colombia',
      description:
        'Desarrollador Frontend enfocado en la creación de interfaces dinámicas y eficientes para plataformas de inteligencia artificial conversacional.',
      responsibilities: [
        'Desarrollo y optimización de la Consola de Agentes utilizando HTML, CSS, JavaScript y PHP.',
        'Implementación de funcionalidades interactivas para mejorar la experiencia del usuario.',
        'Integración con API REST para consumir y mostrar datos de manera eficiente.',
        'Diseño y desarrollo de componentes reutilizables para mejorar la mantenibilidad del código.',
        'Colaboración con equipos de backend y UX/UI para garantizar una experiencia fluida e intuitiva.',
      ],
      stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'API REST'],
      current: false,
    },
  ],

  // ── PROYECTOS / PORTAFOLIO (solo web) ─────────────────────
  projects: [
    {
      id: 'consola-agentes',
      name: 'Consola de Agentes',
      context: 'CariAI',
      type: 'Plataforma de IA conversacional',
      period: '2024 – Presente',
      status: 'Producto de CariAI',
      statusTone: 'product',
      summary:
        'Consola para crear, configurar y operar agentes de IA conversacional, con una interfaz en Vue.js, comunicación en tiempo real y servicios backend integrados.',
      highlights: [
        'Creación y configuración de agentes conversacionales.',
        'Comunicación en tiempo real mediante WebSockets.',
        'Gestión de estado con Pinia y componentes reutilizables.',
        'Integración con API REST y servicios backend en PHP.',
      ],
      stack: [
        'Vue.js',
        'TypeScript',
        'JavaScript',
        'Pinia',
        'WebSockets',
        'API REST',
        'PHP',
        'AWS',
        'Docker',
      ],
      image: '/cv/projects/consola-agentes.webp',
      imageAlt:
        'Interfaz de la Consola de Agentes con una conversación de WhatsApp y el panel de detalles del agente',
      imageWidth: 1600,
      imageHeight: 761,
      links: [
        // TODO: Agrega la URL pública o demo de la Consola de Agentes cuando esté disponible.
        // { label: 'Demo', url: 'https://...', icon: 'docs' },
      ],
      note: 'Producto interno de CariAI',
    },
    {
      id: 'kaleo',
      name: 'Kaleo',
      context: 'Proyecto personal',
      type: 'SaaS multi-tenant',
      period: 'May 2026 – Presente',
      status: 'En desarrollo',
      statusTone: 'wip',
      summary:
        'SaaS multi-tenant para gestionar empresas, sedes, miembros, roles y permisos, con auditoría total y un módulo de analítica a partir de facturación en Excel.',
      highlights: [
        'Multi-tenant: empresas, sedes, miembros y contexto por empresa.',
        'RBAC con roles Owner/Admin/Viewer y 28 permisos, revalidado en backend.',
        'Auditoría total con retención de 365 días y exportación CSV.',
        'Analítica energética: consumo, pérdidas por zona y clientes por segmento.',
      ],
      stack: [
        'Vue 3',
        'TypeScript',
        'Vite',
        'Pinia',
        'Vue Router',
        'ECharts',
        'NestJS',
        'TypeORM',
        'PostgreSQL',
        'Supabase',
        'JWT',
        'Cloudflare Pages',
        'Render',
        'Sentry',
      ],
      image: '/cv/projects/kaleo.webp',
      imageAlt:
        'Panel de analítica de Kaleo con gráficos de consumo, pérdidas por zona y clientes por segmento',
      imageWidth: 1600,
      imageHeight: 721,
      links: [
        { label: 'Documentación', url: 'https://kaleo-docs.pages.dev', icon: 'docs' },
        { label: 'GitHub', url: 'https://github.com/ivanleonc/saas-app', icon: 'github' },
        // TODO: Agrega la URL de la demo pública de Kaleo cuando esté disponible.
        // { label: 'Demo', url: 'https://...', icon: 'docs' },
      ],
    },
  ],

  // ── FORMACIÓN ACADÉMICA ───────────────────────────────────
  education: [
    {
      institution: 'Institución Universitaria Colegio Mayor del Cauca',
      degree: 'Especialización en Administración de la Información y Bases de Datos',
      period: '2026 - Enero 2027',
      status: 'En curso',
      current: true,
    },
    {
      institution: 'Institución Universitaria Colegio Mayor del Cauca',
      degree: 'Ingeniería Informática',
      field: 'Ingeniería de Software y Desarrollo de Aplicaciones Web',
      period: '2021 – Jul 2026',
      status: 'Completado',
      current: false,
    },
    {
      institution: 'Institución Universitaria Colegio Mayor del Cauca',
      degree: 'Tecnólogo en Desarrollo de Software',
      field: 'Desarrollador de Aplicaciones Web',
      period: '2017 – 2022',
      status: 'Completado',
      current: false,
    },
    {
      institution: 'Servicio Nacional de Aprendizaje (SENA)',
      degree: 'Técnico en Sistemas',
      field: 'Tecnología informática / Tecnología de sistemas informáticos',
      period: '2014 – 2015',
      status: 'Completado',
      current: false,
    },
  ],

  // ── HABILIDADES TÉCNICAS ──────────────────────────────────
  skills: {
    frontend: [
      { name: 'Vue.js', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'React.js', level: 70 },
    ],
    backend: [
      { name: 'Node.js', level: 80 },
      { name: 'NestJS', level: 75 },
      { name: 'Express.js', level: 80 },
      { name: 'Next.js', level: 75 },
      { name: 'PHP', level: 75 },
      { name: 'Java', level: 65 },
      { name: 'C#', level: 60 },
      { name: '.NET / ASP.NET', level: 60 },
    ],
    databases: [
      { name: 'MySQL', level: 75 },
      { name: 'SQL', level: 75 },
    ],
    cloud: [
      { name: 'EC2' },
      { name: 'S3' },
      { name: 'Lambda' },
      { name: 'API Gateway' },
      { name: 'CloudFront' },
      { name: 'CloudWatch' },
      { name: 'IAM' },
      { name: 'CodeCommit' },
    ],
    devops: [
      { name: 'Docker', level: 75 },
      { name: 'Linux', level: 75 },
      { name: 'Terminal / Bash', level: 80 },
    ],
    tools: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'WebSockets', level: 80 },
      { name: 'API REST', level: 85 },
      { name: 'Pinia', level: 85 },
      { name: 'Axios', level: 80 },
    ],
  },

  // ── CERTIFICACIONES ───────────────────────────────────────
  certifications: [
    {
      name: 'Scrum Master Certified',
      issuer: 'ITCertificate',
      year: '2022', // TODO: Agrega el año si lo recuerdas
      id: '9tclPvnEWb',   // TODO: Agrega el ID del certificado si lo tienes
      url: 'https://itcertificate.us/campus/mod/customcert/verify_certificate.php?contextid=10168&code=9tclPvnEWb&qrcode=1',  // TODO: Agrega el link de verificación si existe
    },
    {
      name: 'Scrum Foundations Certified',
      issuer: 'ITCertificate',
      year: '2022',
      id: 'tXIk7yhu7B',
      url: 'https://itcertificate.us/campus/mod/customcert/verify_certificate.php?contextid=10169&code=tXIk7yhu7B&qrcode=1',
    },
    {
      name: '¿Cómo funciona la tecnología? Computadoras y Smartphones',
      issuer: 'EDteam',
      year: '2022',
      id: '46862',
      url: 'https://ed.team/u/ivanleonc/curso/tecnologia-computadoras',
    },
    // TODO: Agrega más certificaciones aquí
  ],

  // ── RECONOCIMIENTOS Y PREMIOS ─────────────────────────────
  awards: [
    {
      title: 'Ganador VIII edición EAFI 2022-IP',
      description: 'Premio obtenido en la octava edición del concurso EAFI (Encuentro Académico de Formación en Innovación).',
      year: '2022',
    },
    // TODO: Agrega más reconocimientos aquí
  ],

  // ── IDIOMAS ───────────────────────────────────────────────
  languages: [
    { name: 'Español', level: 'Nativo', percent: 100 },
    // TODO: Descomenta y ajusta tu nivel de inglés
    // { name: 'Inglés', level: 'B1 – Intermedio', percent: 55 },
  ],

  // ── INTERESES PERSONALES ──────────────────────────────────
  interests: [
    // TODO: Agrega tus intereses personales
    // { name: 'Tecnología', emoji: '💻' },
    // { name: 'Gaming', emoji: '🎮' },
    // { name: 'Música', emoji: '🎵' },
    // { name: 'Lectura', emoji: '📚' },
    // { name: 'Fotografía', emoji: '📷' },
  ],

  // ── REFERENCIAS ───────────────────────────────────────────
  references: [
    // TODO: Agrega referencias profesionales
    // {
    //   name: 'Nombre del referente',
    //   role: 'Cargo',
    //   company: 'Empresa',
    //   contact: 'teléfono o email',
    // },
  ],
};
