import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

// La traza global: una pista de cobre en el margen derecho que se dibuja
// con el scroll y conecta todas las señales, del hero a tierra.
// Solo transform (scaleY), origen arriba; oculta si hay reduced motion.
export default function TrazaSpine() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed bottom-0 right-8 top-0 z-40 hidden w-px bg-hueso/5 lg:block"
    >
      <motion.div
        style={{ scaleY }}
        className="h-full w-full origin-top bg-cobre/60"
      />
    </div>
  );
}
