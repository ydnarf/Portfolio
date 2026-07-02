import { motion } from 'framer-motion';

// La traza — elemento firma de la dirección «TRAZA».
// Una pista de cobre con quiebres a 45° (como el ruteo real de un PCB)
// que se dibuja en la entrada y "enruta" la señal del hero hacia la
// siguiente sección. La rama en pátina es la capa inferior de la placa.
const MAIN_PATH = 'M 40 90 H 170 L 230 150 V 330 L 300 400 H 340 V 620 L 280 680 V 810';
const BRANCH_PATH = 'M 230 330 L 170 390 H 90';

// Vias: pads perforados en origen, quiebres y destino de la señal.
const VIAS = [
  { cx: 40, cy: 90, r: 7, hole: true, delay: 0.9 },
  { cx: 230, cy: 250, r: 4, delay: 1.7 },
  { cx: 340, cy: 520, r: 4, delay: 2.2 },
  { cx: 280, cy: 810, r: 7, hole: true, delay: 2.7 },
  { cx: 90, cy: 390, r: 4, patina: true, delay: 2.6 },
];

const drawn = { pathLength: 1 };

export default function CircuitTrace({ reduced = false, className = '' }) {
  const draw = (delay, duration) =>
    reduced
      ? { initial: drawn }
      : {
          initial: { pathLength: 0 },
          animate: drawn,
          transition: { delay, duration, ease: 'easeInOut' },
        };

  const appear = (delay) =>
    reduced
      ? { initial: { opacity: 1 } }
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay, duration: 0.3 },
        };

  return (
    <svg
      viewBox="0 0 400 900"
      preserveAspectRatio="xMaxYMid meet"
      aria-hidden="true"
      className={`pointer-events-none drop-shadow-[0_0_6px_theme(colors.cobre.DEFAULT/45%)] ${className}`}
    >
      <motion.path
        d={MAIN_PATH}
        className="stroke-cobre"
        strokeWidth="1.5"
        fill="none"
        {...draw(0.9, 1.8)}
      />
      <motion.path
        d={BRANCH_PATH}
        className="stroke-patina/70"
        strokeWidth="1.25"
        fill="none"
        {...draw(2.1, 0.6)}
      />
      {VIAS.map(({ cx, cy, r, hole, patina, delay }) => (
        <motion.g key={`${cx}-${cy}`} {...appear(delay)}>
          <circle
            cx={cx}
            cy={cy}
            r={r}
            className={patina ? 'stroke-patina/70' : 'stroke-cobre'}
            strokeWidth="1.5"
            fill="none"
          />
          {hole && <circle cx={cx} cy={cy} r="2.5" className="fill-cobre" />}
        </motion.g>
      ))}
    </svg>
  );
}
