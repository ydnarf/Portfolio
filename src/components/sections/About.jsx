import { motion, useReducedMotion } from 'framer-motion';
import { about } from '../../data/portfolio.config';
import SectionHeading from '../ui/SectionHeading';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  const reduced = useReducedMotion();

  return (
    <section
      id="sobre-mi"
      className="relative border-t border-hueso/5 px-5 py-24 md:px-10 md:py-36 lg:px-28"
    >
      <motion.div
        variants={container}
        initial={reduced ? 'show' : 'hidden'}
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-12 lg:grid-cols-12"
      >
        <motion.div variants={item} className="lg:col-span-4">
          <SectionHeading signal={about.signal} title={about.title} />
        </motion.div>

        {/* La bio arranca pasada la mitad del grid: cada sección tiene su propio eje */}
        <div className="lg:col-span-7 lg:col-start-6">
          <motion.p
            variants={item}
            className="text-xl leading-relaxed text-hueso md:text-2xl"
          >
            {about.bio[0]}
          </motion.p>
          {about.bio.slice(1).map((paragraph) => (
            <motion.p
              key={paragraph}
              variants={item}
              className="mt-6 text-lg leading-relaxed text-humo"
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.dl
            variants={item}
            className="mt-12 grid gap-6 border-t border-hueso/10 pt-6 sm:grid-cols-3"
          >
            {about.datasheet.map(({ label, value }) => (
              <div key={label}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.25em] text-humo/60">
                  {label}
                </dt>
                <dd className="mt-2 text-sm text-hueso">{value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </motion.div>
    </section>
  );
}
