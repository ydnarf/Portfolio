import { motion } from 'framer-motion';
import { skills } from '../../data/portfolio.config';
import useReveal from '../../hooks/useReveal';
import SectionHeading from '../ui/SectionHeading';

// Cada grupo se indenta un paso más que el anterior, como una traza
// que baja en escalera por la placa.
const OFFSETS = ['', 'lg:ml-[6%]', 'lg:ml-[12%]', 'lg:ml-[18%]'];

export default function Skills() {
  const reveal = useReveal();

  return (
    <section
      id="skills"
      className="relative border-t border-hueso/5 px-5 py-24 md:px-10 md:py-36 lg:px-28"
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <motion.div {...reveal}>
          <SectionHeading signal={skills.signal} title={skills.title} />
        </motion.div>
        <motion.p
          {...reveal}
          className="max-w-xs pb-1 font-mono text-xs leading-relaxed text-humo"
        >
          {skills.legend}
        </motion.p>
      </div>

      <div className="mt-16 space-y-16 md:space-y-20">
        {skills.groups.map((group, i) => (
          <motion.div
            key={group.label}
            {...reveal}
            className={OFFSETS[i % OFFSETS.length]}
          >
            <div className="flex items-baseline gap-5">
              <h3 className="font-mono text-[11px] tracking-[0.3em] text-patina">
                {group.label}
              </h3>
              <span aria-hidden="true" className="h-px flex-1 bg-hueso/10" />
            </div>

            <p className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-hueso md:text-5xl">
              {group.core.map((skill, j) => (
                <span key={skill}>
                  <span className="cursor-default transition-colors duration-200 hover:text-cobre">
                    {skill}
                  </span>
                  {/* Espacios reales alrededor del separador: sin ellos los
                      spans adyacentes forman una "palabra" imposible de
                      partir y desbordan en móvil. */}
                  {j < group.core.length - 1 && (
                    <span aria-hidden="true" className="text-cobre/60">
                      {' / '}
                    </span>
                  )}
                </span>
              ))}
            </p>

            <p className="mt-4 font-mono text-sm text-humo">
              <span aria-hidden="true" className="mr-2 text-patina">
                +
              </span>
              {group.also.join(' · ')}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
