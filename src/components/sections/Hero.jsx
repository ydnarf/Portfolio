import { motion, useReducedMotion } from 'framer-motion';
import { hero, identity } from '../../data/portfolio.config';
import Button from '../ui/Button';
import CircuitTrace from '../ui/CircuitTrace';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const reduced = useReducedMotion();
  // El punto final se pinta en cobre; se quita del nombre para no duplicarlo.
  const displayName = identity.name.replace(/\.+$/, '');

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-14"
    >
      <div className="pcb-grid absolute inset-0" aria-hidden="true" />

      {/* Serigrafía de margen, como la rotulación de una placa */}
      <span
        aria-hidden="true"
        className="absolute left-7 top-1/2 hidden origin-left -rotate-90 select-none font-mono text-[11px] tracking-[0.35em] text-humo/50 lg:block"
      >
        SEÑAL 001 — INICIO
      </span>

      <CircuitTrace
        reduced={reduced}
        className="absolute inset-y-0 right-0 hidden h-full md:block"
      />

      <motion.div
        variants={container}
        initial={reduced ? 'show' : 'hidden'}
        animate="show"
        className="relative w-full px-5 md:px-10 lg:px-28"
      >
        <motion.p
          variants={item}
          className="mb-5 font-mono text-xs tracking-[0.3em] text-cobre md:text-sm"
        >
          {'// '}
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-[clamp(3.25rem,10vw,8rem)] font-extrabold leading-[0.95] tracking-tight text-hueso"
        >
          {displayName}
          <span className="text-cobre">.</span>
        </motion.h1>

        {/* Bloque indentado a propósito: el hero no comparte un solo eje */}
        <div className="mt-10 max-w-xl lg:ml-[22%] lg:mt-14">
          <motion.p
            variants={item}
            className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-patina"
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-patina motion-safe:animate-pulse"
            />
            {identity.status}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 text-xl leading-snug text-humo md:text-2xl"
          >
            {identity.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Button href={hero.ctaPrimary.href} variant="solid">
              {hero.ctaPrimary.label}
            </Button>
            <Button href={hero.ctaSecondary.href} variant="ghost">
              {hero.ctaSecondary.label}
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#sobre-mi"
        initial={reduced ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.6 }}
        className="absolute bottom-7 left-5 flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-humo/60 transition-colors hover:text-cobre md:left-10"
      >
        <svg
          width="10"
          height="12"
          viewBox="0 0 10 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 0v10M1 7l4 4 4-4"
            className="stroke-current"
            strokeWidth="1.25"
          />
        </svg>
        {hero.scrollHint}
      </motion.a>
    </section>
  );
}
