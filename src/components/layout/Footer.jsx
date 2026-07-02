import { footer, identity } from '../../data/portfolio.config';

// Símbolo de tierra de esquemático: la traza que recorre el sitio
// termina aquí, correctamente aterrizada.
function GroundIcon() {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 0v6M2 6h12M4.5 9.5h7M7 13h2"
        className="stroke-cobre"
        strokeWidth="1.25"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-hueso/5 px-5 py-10 md:px-10 lg:px-28">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="font-mono text-[11px] tracking-[0.2em] text-humo/60">
          © {new Date().getFullYear()} {identity.name.toUpperCase()}
        </p>
        <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-humo/60">
          <GroundIcon />
          {footer.ground}
        </p>
        <p className="font-mono text-[11px] tracking-wide text-humo/60">
          {footer.note}
        </p>
      </div>
    </footer>
  );
}
