# Portafolio — Frandy R. Nuñez

**En vivo:** https://portfolio-xi-navy-50.vercel.app

Portafolio personal de Full Stack Developer. Dirección estética **«TRAZA»**:
placa de circuito a contraluz — carbón, cobre y pátina, con una traza que se
dibuja con el scroll y conecta todas las secciones.

## Ejecutar en local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de producción en dist/
npm run preview  # sirve el build para probarlo
```

No hay variables de entorno: es un sitio estático sin backend.

## Editar el contenido

**Todo el contenido vive en `src/data/portfolio.config.js`** — textos, proyectos,
skills, experiencia y links. Es el único archivo que necesitas tocar. Los
comentarios dentro del archivo indican qué es placeholder pendiente de datos
reales:

- Links de GitHub y LinkedIn (`socials`)
- Entradas de trayectoria (`experience.entries`)
- Proyectos: nombres, links `demo`/`repo` y capturas (`projects.items[].image`;
  con `null` se muestra la serigrafía provisional)

## Stack

React 18 · Vite 5 · TailwindCSS 3.4 (tokens en `tailwind.config.js`) ·
Framer Motion 11. Sin UI kits.

## Estructura

```
src/
  data/portfolio.config.js   ← contenido (lo único que editas)
  components/
    sections/                ← una sección por componente
    ui/                      ← primitivas (Button, SectionHeading, ProjectCard…)
    layout/                  ← Nav, Footer, TrazaSpine
  hooks/useReveal.js         ← reveal al scroll con reduced-motion
```

## Pendiente de revisión humana

- Reemplazar placeholders de experiencia y proyectos con datos reales
- `og:image` 1200×630 cuando haya captura (y cambiar `twitter:card` a
  `summary_large_image`)
- Cabecera Content-Security-Policy en el hosting
- El email queda visible en texto plano (decisión deliberada; los bots de
  spam pueden cosecharlo)
