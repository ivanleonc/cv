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
    subtitle: 'Frontend Developer · AI · Ingeniería Informática',
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
  profile: `Ingeniero Informático apasionado por la tecnología, el desarrollo web y la innovación.
Me especializo en la construcción de aplicaciones web escalables y eficientes, con experiencia en el
diseño de interfaces intuitivas y la integración de tecnologías modernas para mejorar la experiencia del usuario.

Trabajo con APIs REST y WebSockets, garantizando comunicación fluida en tiempo real. Me motiva la optimización
y el código limpio, buscando siempre mejorar la eficiencia del software a través de buenas prácticas y patrones de diseño.`,

  // ── EXPERIENCIA LABORAL ───────────────────────────────────
  experience: [
    {
      company: 'CariAI',
      role: 'Development Engineer',
      period: 'Jun 2023 – Presente',
      duration: '3+ años',
      location: 'Popayán, Colombia',
      description:
        'Ingeniero de desarrollo especializado en la creación de aplicaciones web escalables y eficientes para plataformas de inteligencia artificial conversacional.',
      responsibilities: [
        'Desarrollo y optimización de la Consola de Agentes utilizando Vue.js y JavaScript.',
        'Implementación de WebSockets para comunicación en tiempo real dentro de la plataforma.',
        'Gestión de estado con Pinia, garantizando una experiencia fluida y reactiva.',
        'Integración con API REST, refactorizando código para adaptarse a nuevos modelos de datos.',
        'Diseño y desarrollo de componentes reutilizables para mejorar la mantenibilidad del código.',
        'Colaboración con equipos de backend y UX/UI para garantizar un flujo de trabajo eficiente.',
      ],
      stack: ['Vue.js', 'TypeScript', 'JavaScript', 'PHP', 'Pinia', 'WebSockets', 'Axios', 'HTML', 'CSS'],
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

  // ── FORMACIÓN ACADÉMICA ───────────────────────────────────
  education: [
    {
      institution: 'Institución Universitaria Colegio Mayor del Cauca',
      degree: 'Ingeniería Informática',
      period: '2021 – Jul 2026',
      status: 'En curso',
      current: true,
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
      { name: 'PHP', level: 75 },
      { name: 'Java', level: 65 },
      { name: 'C#', level: 60 },
      { name: '.NET / ASP.NET', level: 60 },
    ],
    databases: [
      { name: 'MySQL', level: 75 },
      { name: 'SQL', level: 75 },
    ],
    tools: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'WebSockets', level: 80 },
      { name: 'Pinia', level: 85 },
      { name: 'Axios', level: 80 },
      { name: 'API REST', level: 85 },
    ],
  },

  // ── CERTIFICACIONES ───────────────────────────────────────
  certifications: [
    {
      name: 'Scrum Master Certified',
      issuer: 'SCRUMstudy',
      year: '', // TODO: Agrega el año si lo recuerdas
      id: '',   // TODO: Agrega el ID del certificado si lo tienes
      url: '',  // TODO: Agrega el link de verificación si existe
    },
    {
      name: 'Scrum Foundations Certified',
      issuer: 'SCRUMstudy',
      year: '',
      id: '',
      url: '',
    },
    {
      name: '¿Cómo funciona la tecnología? Computadoras y Smartphones',
      issuer: 'Coursera / Universidad de Michigan',
      year: '',
      id: '',
      url: '',
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
