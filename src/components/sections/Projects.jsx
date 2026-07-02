import { motion } from 'framer-motion';
import { projects } from '../../data/portfolio.config';
import useReveal from '../../hooks/useReveal';
import ProjectCard from '../ui/ProjectCard';
import SectionHeading from '../ui/SectionHeading';

export default function Projects() {
  const reveal = useReveal();

  return (
    <section
      id="proyectos"
      className="relative border-t border-hueso/5 px-5 py-24 md:px-10 md:py-36 lg:px-28"
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <motion.div {...reveal}>
          <SectionHeading signal={projects.signal} title={projects.title} />
        </motion.div>
        <motion.p
          {...reveal}
          className="max-w-xs pb-1 font-mono text-xs leading-relaxed text-humo"
        >
          {projects.intro}
        </motion.p>
      </div>

      <div className="mt-20 space-y-24 md:space-y-32">
        {projects.items.map((project, i) => (
          <motion.div key={project.code} {...reveal}>
            <ProjectCard project={project} flip={i % 2 === 1} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
