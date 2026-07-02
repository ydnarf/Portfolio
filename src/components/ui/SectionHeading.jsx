// Cabecera de sección del sistema TRAZA: cada sección es una señal
// numerada que la traza recorre en orden (001 hero … 00N contacto).
export default function SectionHeading({ signal, title, className = '' }) {
  return (
    <div className={className}>
      <p className="font-mono text-[11px] tracking-[0.35em] text-cobre">
        SEÑAL {signal}
      </p>
      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-hueso md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
