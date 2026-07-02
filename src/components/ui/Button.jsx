// Botón del sistema TRAZA. Renderiza <a> si recibe href, <button> si no.
// Dos variantes:
//  solid — cobre pleno con esquina cortada a 45° (pad de soldadura)
//  ghost — contorno humo que se energiza a cobre en hover
const variants = {
  solid:
    'bg-cobre text-carbon hover:bg-cobre-bright ' +
    '[clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)]',
  ghost:
    'border border-humo/40 text-hueso hover:border-cobre hover:text-cobre',
};

export default function Button({ href, onClick, variant = 'solid', children }) {
  const className = `inline-block px-7 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.2em]
    transition-[color,background-color,border-color,transform] duration-200
    motion-safe:hover:-translate-y-0.5 ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}
