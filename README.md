# Iván León Capote — CV Digital

Hoja de vida profesional construida con **Astro** y desplegada en **GitHub Pages**.

🌐 **URL pública:** [https://ivanleonc.github.io/cv](https://ivanleonc.github.io/cv)

---

## ✨ Características

- Diseño web dark moderno e innovador
- Responsive (mobile, tablet, desktop)
- Descarga de PDF en formato A4 con diseño de dos columnas
- Despliegue automático con GitHub Actions
- Toda la información centralizada en un solo archivo

---

## 🗂️ Estructura del proyecto

```
cv/
├── .github/workflows/deploy.yml   ← CI/CD automático
├── public/
│   ├── profile.svg                ← Foto de perfil (reemplázala)
│   └── favicon.svg
├── src/
│   ├── data/
│   │   └── cv.js                  ← ✅ EDITA AQUÍ TU INFORMACIÓN
│   ├── components/
│   │   ├── web/                   ← Componentes de la página web
│   │   └── print/                 ← Componente del PDF
│   ├── layouts/Layout.astro
│   ├── pages/index.astro
│   └── styles/global.css
├── astro.config.mjs
└── package.json
```

---

## ✏️ Cómo actualizar tu información

**Toda tu información está en un solo archivo:**

```
src/data/cv.js
```

Solo edita ese archivo. No necesitas tocar ningún componente ni estilo.

### Desde tu computador

```bash
# 1. Abre el archivo en tu editor
code src/data/cv.js

# 2. Guarda los cambios

# 3. Ejecuta el servidor local para previsualizar
npm run dev

# 4. Cuando estés listo, haz commit y push
git add .
git commit -m "Actualizar CV"
git push origin main
# El deploy es automático (1-2 minutos)
```

### Desde el móvil o tablet (sin instalar nada)

1. Ve a tu repositorio en [github.com](https://github.com/ivanleonc/cv)
2. Navega a `src/data/cv.js`
3. Haz clic en el ícono ✏️ **Edit this file**
4. Modifica la información que necesites
5. Haz clic en **Commit changes**
6. En 1-2 minutos tu CV se actualiza automáticamente

---

## 📸 Cómo cambiar tu foto de perfil

1. Prepara tu foto en formato cuadrado (recomendado: `400x400 px`)
2. Renómbrala como `profile.jpg` (o `.png`, `.webp`)
3. Reemplaza el archivo en `public/profile.jpg`
4. En `src/data/cv.js`, cambia la línea:
   ```js
   photo: 'profile.jpg',
   ```
5. En `src/components/print/PrintCV.astro`, la foto se tomará automáticamente

> **Nota:** Mientras no tengas foto real, se muestra un avatar con tus iniciales.

---

## 📄 Cómo descargar el CV en PDF

**Opción 1 — Desde la web:**
- Haz clic en el botón **"Descargar CV"** (esquina inferior derecha)
- Se abre el diálogo de impresión del navegador
- Selecciona **"Guardar como PDF"** (o "Microsoft Print to PDF")
- El archivo se guardará como `Ivan_Leon_Capote_CV.pdf`

**Opción 2 — Atajo de teclado:**
- `Ctrl + P` (Windows/Linux) o `Cmd + P` (Mac)
- Selecciona "Guardar como PDF"

> 💡 **Tip:** Usa Chrome o Edge para el mejor resultado de impresión. Asegúrate de que "Gráficos de fondo" esté activado en las opciones de impresión.

---

## ➕ Cómo agregar experiencia o proyectos

En `src/data/cv.js`, agrega un nuevo objeto al array `experience`:

```js
experience: [
  {
    company: 'Nueva Empresa',
    role: 'Tu Cargo',
    period: 'Ene 2026 – Presente',
    duration: '1 año',
    location: 'Ciudad, País',
    description: 'Descripción breve del rol.',
    responsibilities: [
      'Responsabilidad 1.',
      'Responsabilidad 2.',
    ],
    stack: ['Vue.js', 'TypeScript'],
    current: true,  // false si ya terminó
  },
  // ... experiencias anteriores
],
```

---

## 📚 Cómo agregar educación, certificaciones e idiomas

Sigue el mismo patrón: agrega objetos a los arrays correspondientes en `src/data/cv.js`.

```js
// Educación
education: [
  {
    institution: 'Universidad',
    degree: 'Título',
    period: '2020 – 2024',
    status: 'Completado',
    current: false,
  },
],

// Certificaciones
certifications: [
  {
    name: 'Nombre del certificado',
    issuer: 'Entidad emisora',
    year: '2024',
    id: 'ABC-123',         // opcional
    url: 'https://...',    // opcional
  },
],

// Idiomas
languages: [
  { name: 'Español', level: 'Nativo', percent: 100 },
  { name: 'Inglés',  level: 'B2',     percent: 72  },
],

// Intereses
interests: [
  { name: 'Tecnología', emoji: '💻' },
  { name: 'Gaming',     emoji: '🎮' },
],

// Referencias
references: [
  {
    name: 'Nombre Apellido',
    role: 'Cargo',
    company: 'Empresa',
    contact: '+57 300 000 0000',
  },
],
```

---

## 🚀 Ejecutar localmente

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (con recarga automática)
npm run dev

# Build de producción
npm run build

# Previsualizar el build local
npm run preview
```

---

## ⚙️ Configurar GitHub Pages (primera vez)

1. Crea un repositorio en GitHub llamado `cv`
2. Sube el código:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/ivanleonc/cv.git
   git push -u origin main
   ```
3. En GitHub → **Settings → Pages**
4. Source: **GitHub Actions**
5. El workflow se ejecuta automáticamente al hacer push a `main`
6. Tu CV estará en: `https://ivanleonc.github.io/cv`

---

## 🛠️ Tecnologías usadas

| Tecnología | Uso |
|---|---|
| [Astro](https://astro.build) | Framework principal |
| HTML semántico | Estructura |
| CSS moderno | Estilos, animaciones, `@media print` |
| JavaScript (mínimo) | Typewriter, scroll observer, animaciones |
| GitHub Actions | CI/CD automático |
| GitHub Pages | Hosting gratuito |

---

## 📬 Contacto

**Iván León Capote**
- 📧 ileoncapote@gmail.com
- 💼 [linkedin.com/in/ivanleoncapote](https://linkedin.com/in/ivanleoncapote)
- 💻 [github.com/ivanleonc](https://github.com/ivanleonc)
