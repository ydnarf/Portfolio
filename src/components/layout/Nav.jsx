import { identity, nav } from '../../data/portfolio.config';

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hueso/5 bg-carbon/80 backdrop-blur-md">
      <nav
        aria-label="Principal"
        className="flex h-14 items-center justify-between px-5 font-mono text-xs md:px-10"
      >
        <a
          href="#inicio"
          className="tracking-[0.25em] text-hueso transition-colors hover:text-cobre"
        >
          {identity.logo}
        </a>
        <ul className="flex items-center gap-5 md:gap-8">
          {nav.links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-humo transition-colors hover:text-cobre"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
