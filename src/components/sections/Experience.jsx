import { motion } from 'framer-motion';
import { experience } from '../../data/portfolio.config';
import useReveal from '../../hooks/useReveal';
import SectionHeading from '../ui/SectionHeading';

// La trayectoria como changelog de software: nada de timeline con puntitos.
// Cada entrada es una versión liberada, la más reciente arriba.
export default function Experience() {
  const reveal = useReveal();

  return (
    <section
      id="registro"
      className="relative border-t border-hueso/5 px-5 py-24 md:px-10 md:py-36 lg:px-28"
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <motion.div {...reveal}>
          <SectionHeading signal={experience.signal} title={experience.title} />
        </motion.div>
        <motion.p
          {...reveal}
          className="max-w-xs pb-1 font-mono text-xs leading-relaxed text-humo"
        >
          {experience.intro}
        </motion.p>
      </div>

      <div className="mt-16">
        {experience.entries.map((entry) => (
          <motion.article
            key={entry.version}
            {...reveal}
            className="group grid gap-4 border-t border-hueso/10 py-10 md:py-12 lg:grid-cols-12 lg:gap-8"
          >
            <div className="lg:col-span-3">
              <p className="flex items-baseline gap-3">
                <span className="font-display text-4xl font-bold tracking-tight text-hueso transition-colors duration-300 group-hover:text-cobre md:text-5xl">
                  {entry.version}
                </span>
                <span className="border border-patina/50 px-2 py-0.5 font-mono text-[10px] tracking-[0.2em] text-patina">
                  {entry.tag}
                </span>
              </p>
              <p className="mt-3 font-mono text-xs tracking-[0.15em] text-humo/70">
                {entry.period}
              </p>
            </div>

            <div className="lg:col-span-5">
              <h3 className="font-display text-xl font-semibold text-hueso md:text-2xl">
                {entry.role}
              </h3>
              <p className="mt-1.5 font-mono text-xs tracking-[0.15em] text-humo">
                {entry.place}
              </p>
            </div>

            <p className="text-sm leading-relaxed text-humo lg:col-span-4">
              {entry.notes}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
