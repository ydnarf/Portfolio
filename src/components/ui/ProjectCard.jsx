// Módulo de proyecto del sistema TRAZA: fila grande con preview y ficha,
// alternando lados. El hover energiza el módulo completo: borde y título
// a cobre, preview con zoom sutil (solo transform), flechas que apuntan.

function ArrowIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-200 motion-safe:group-hover/link:-translate-y-0.5 motion-safe:group-hover/link:translate-x-0.5"
    >
      <path d="M1 9 9 1M3 1h6v6" className="stroke-current" strokeWidth="1.25" />
    </svg>
  );
}

function ProjectLink({ href, label, fallback }) {
  if (!href) {
    return (
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-humo/40">
        {fallback}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-hueso transition-colors hover:text-cobre"
    >
      {label}
      <ArrowIcon />
    </a>
  );
}

// Serigrafía provisional mientras el proyecto no tiene captura real:
// wordmark fantasma, traza de esquina y rótulo de revisión.
function PlaceholderFrame({ code, name }) {
  return (
    <div className="pcb-grid relative flex h-full w-full items-center justify-center bg-grafito">
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        aria-hidden="true"
        className="absolute left-4 top-4"
      >
        <path
          d="M4 68V24L24 4h44"
          className="stroke-humo/30 transition-colors duration-300 group-hover:stroke-cobre"
          strokeWidth="1.5"
        />
        <circle
          cx="68"
          cy="4"
          r="3.5"
          className="stroke-humo/30 transition-colors duration-300 group-hover:stroke-cobre"
        />
      </svg>
      <span className="select-none font-display text-5xl font-extrabold tracking-tight text-hueso/10 md:text-6xl">
        {name}
      </span>
      <span className="absolute bottom-4 right-5 font-mono text-[10px] tracking-[0.25em] text-humo/50">
        {code} · CAPTURA PENDIENTE
      </span>
    </div>
  );
}

export default function ProjectCard({ project, flip = false }) {
  const { code, name, problem, stack, demo, repo, image, alt } = project;

  const preview = (
    <div className="relative aspect-[16/10] overflow-hidden border border-hueso/10 bg-grafito transition-colors duration-300 group-hover:border-cobre/50">
      <div className="h-full w-full transition-transform duration-500 motion-safe:group-hover:scale-[1.03]">
        {image ? (
          <img
            src={image}
            alt={alt}
            width="1440"
            height="900"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <PlaceholderFrame code={code} name={name} />
        )}
      </div>
    </div>
  );

  return (
    <article className="group grid items-start gap-8 lg:grid-cols-12 lg:gap-14">
      <div className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
        {demo ? (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir demo de ${name}`}
          >
            {preview}
          </a>
        ) : (
          preview
        )}
      </div>

      <div className={`lg:col-span-5 lg:pt-8 ${flip ? 'lg:order-1' : ''}`}>
        <p className="font-mono text-[11px] tracking-[0.3em] text-patina">
          {code}
        </p>
        <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-hueso transition-colors duration-300 group-hover:text-cobre md:text-4xl">
          {name}
        </h3>
        <p className="mt-4 leading-relaxed text-humo">{problem}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li
              key={tech}
              className="border border-humo/25 px-2.5 py-1 font-mono text-[11px] tracking-wider text-humo"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center gap-7">
          <ProjectLink href={demo} label="Demo" fallback="demo en camino" />
          <ProjectLink href={repo} label="Repo" fallback="repo en camino" />
        </div>
      </div>
    </article>
  );
}
