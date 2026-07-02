import { useReducedMotion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Props listos para untar en cualquier motion.*: reveal al entrar al
// viewport (una sola vez), estático si el usuario prefiere menos movimiento.
export default function useReveal() {
  const reduced = useReducedMotion();
  return {
    variants,
    initial: reduced ? 'show' : 'hidden',
    whileInView: 'show',
    viewport: { once: true, margin: '-80px' },
  };
}
