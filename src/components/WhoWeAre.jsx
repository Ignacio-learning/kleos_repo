import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* ─── SVG: Estatua con tridente (sección Quiénes Somos) ─── */
function TridentStatueSVG() {
  return (
    <svg
      viewBox="0 0 360 580"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-h-[520px] object-contain"
      aria-label="Ilustración decorativa neoclásica con tridente"
    >
      {/* Cabeza con corona de laurel */}
      <ellipse cx="180" cy="72" rx="38" ry="42" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.8" />
      {/* Corona de laurel */}
      <path d="M148 62 Q155 48 165 55 Q172 42 180 50 Q188 42 195 55 Q205 48 212 62"
        stroke="#C9A84C" strokeWidth="1.2" fill="none" opacity="0.7" />
      <ellipse cx="155" cy="58" rx="5" ry="3" transform="rotate(-20 155 58)" fill="#C9A84C" opacity="0.5" />
      <ellipse cx="170" cy="50" rx="5" ry="3" transform="rotate(-5 170 50)" fill="#C9A84C" opacity="0.5" />
      <ellipse cx="180" cy="47" rx="5" ry="3" fill="#C9A84C" opacity="0.5" />
      <ellipse cx="190" cy="50" rx="5" ry="3" transform="rotate(5 190 50)" fill="#C9A84C" opacity="0.5" />
      <ellipse cx="205" cy="58" rx="5" ry="3" transform="rotate(20 205 58)" fill="#C9A84C" opacity="0.5" />
      {/* Cuello */}
      <path d="M168 112 L174 140 M192 112 L186 140" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.7" />
      {/* Torso / toga */}
      <path d="M174 140 Q138 148 124 168 L112 255 L248 255 L236 168 Q222 148 186 140 Z"
        stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.8" />
      {/* Detalles del torso */}
      <path d="M148 170 Q180 182 212 170" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M145 190 Q180 203 215 190" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M143 210 Q180 224 217 210" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.45" />
      {/* Brazo izquierdo — extendido con rama de olivo */}
      <path d="M112 168 Q84 188 76 225 Q72 248 82 265" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.7" />
      {/* Rama de olivo en mano izquierda */}
      <path d="M76 265 Q66 255 60 245" stroke="#C9A84C" strokeWidth="1.2" fill="none" opacity="0.6" />
      <ellipse cx="63" cy="248" rx="7" ry="4" transform="rotate(-30 63 248)" fill="none" stroke="#C9A84C" strokeWidth="0.8" opacity="0.6" />
      <path d="M76 265 Q62 268 56 280" stroke="#C9A84C" strokeWidth="1.2" fill="none" opacity="0.6" />
      <ellipse cx="59" cy="278" rx="7" ry="4" transform="rotate(20 59 278)" fill="none" stroke="#C9A84C" strokeWidth="0.8" opacity="0.6" />
      <path d="M76 265 Q70 278 74 292" stroke="#C9A84C" strokeWidth="1.2" fill="none" opacity="0.6" />
      <ellipse cx="72" cy="290" rx="6" ry="3.5" transform="rotate(10 72 290)" fill="none" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5" />
      {/* Brazo derecho — sostiene tridente */}
      <path d="M248 168 Q272 188 278 225 Q282 248 270 268" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.7" />
      {/* Tridente */}
      <path d="M278 268 L295 80" stroke="#C9A84C" strokeWidth="2" fill="none" opacity="0.8" />
      {/* Punta central */}
      <path d="M292 80 L295 58 L298 80" stroke="#C9A84C" strokeWidth="1.8" fill="none" opacity="0.9" />
      {/* Punta izquierda */}
      <path d="M283 84 L281 64 L286 82" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.8" />
      {/* Punta derecha */}
      <path d="M305 84 L309 64 L304 82" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.8" />
      {/* Travesaño del tridente */}
      <path d="M280 92 L310 92" stroke="#C9A84C" strokeWidth="1.2" fill="none" opacity="0.7" />
      {/* Faldón / toga inferior */}
      <path d="M112 255 L100 380 L124 380 L130 305 Q180 325 230 305 L236 380 L260 380 L248 255 Z"
        stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.75" />
      {/* Pliegues */}
      <path d="M132 265 L124 375" stroke="#C9A84C" strokeWidth="0.7" fill="none" opacity="0.35" />
      <path d="M150 270 L145 378" stroke="#C9A84C" strokeWidth="0.7" fill="none" opacity="0.35" />
      <path d="M168 272 L166 380" stroke="#C9A84C" strokeWidth="0.7" fill="none" opacity="0.35" />
      <path d="M180 272 L180 380" stroke="#C9A84C" strokeWidth="0.7" fill="none" opacity="0.35" />
      <path d="M192 272 L194 380" stroke="#C9A84C" strokeWidth="0.7" fill="none" opacity="0.35" />
      <path d="M210 270 L215 378" stroke="#C9A84C" strokeWidth="0.7" fill="none" opacity="0.35" />
      <path d="M228 265 L236 375" stroke="#C9A84C" strokeWidth="0.7" fill="none" opacity="0.35" />
      {/* Piernas */}
      <path d="M124 380 L112 490 L138 490 L144 418 M236 380 L248 490 L222 490 L216 418"
        stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.75" />
      {/* Pedestal */}
      <rect x="88" y="490" width="184" height="14" rx="2" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.6" />
      <rect x="74" y="504" width="212" height="20" rx="2" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Decoración meandro en pedestal */}
      <path d="M88 524 L96 524 L96 512 L104 512 L104 524 L112 524"
        stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M256 524 L264 524 L264 512 L272 512 L272 524 L280 524"
        stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4" />
      {/* Aura decorativa */}
      <ellipse cx="180" cy="290" rx="110" ry="190" stroke="#C9A84C" strokeWidth="0.4" fill="none" opacity="0.07" />
    </svg>
  );
}

const bullets = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Estrategia',
    text: 'Analizamos, planificamos y definimos el camino.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="#C9A84C" strokeWidth="1.5" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Tecnología',
    text: 'Desarrollamos con las mejores herramientas.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Resultados',
    text: 'Optimizamos, medimos y escalamos tu éxito.',
  },
];

export default function WhoWeAre() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  return (
    <section
      id="nosotros"
      className="relative py-24 px-6"
      style={{ backgroundColor: '#1E2D3D', position: 'relative', zIndex: 2 }}
    >
      {/* Grecas SVG lateral decorativa */}
      <div className="absolute left-0 top-0 h-full w-16 overflow-hidden pointer-events-none opacity-10">
        <svg height="100%" viewBox="0 0 64 800" preserveAspectRatio="xMidYMid slice" fill="none">
          <line x1="32" y1="0" x2="32" y2="800" stroke="#C9A84C" strokeWidth="1" />
          {Array.from({ length: 16 }).map((_, i) => (
            <g key={i} transform={`translate(0, ${i * 50})`}>
              <path d="M32 0 L48 0 L48 16 L16 16 L16 32 L48 32" stroke="#C9A84C" strokeWidth="1" fill="none" />
            </g>
          ))}
        </svg>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: Text */}
        <div className="flex flex-col gap-6">
          <motion.p
            className="text-xs font-medium tracking-[0.25em] text-gold uppercase"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0}
          >
            {/* EDITABLE */}Sobre Kleos
          </motion.p>

          <motion.h2
            className="font-display text-3xl md:text-4xl xl:text-5xl font-semibold text-text-light leading-tight"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={1}
          >
            {/* EDITABLE */}
            No somos solo una agencia.<br />
            Somos tu <span style={{ color: '#C9A84C' }}>aliado estratégico.</span>
          </motion.h2>

          <motion.p
            className="text-text-muted text-base leading-relaxed max-w-lg"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={2}
          >
            {/* EDITABLE */}
            Unimos creatividad, tecnología y análisis para construir soluciones digitales que generan impacto medible. Trabajamos contigo, no solo para ti.
          </motion.p>

          <motion.ul
            className="flex flex-col gap-5 mt-2"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={3}
          >
            {bullets.map((b) => (
              <li key={b.title} className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-0.5">{b.icon}</span>
                <div>
                  <span className="font-display text-base font-semibold text-text-light tracking-wide">
                    — {b.title}:{' '}
                  </span>
                  <span className="text-text-muted text-sm">{/* EDITABLE */}{b.text}</span>
                </div>
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={4}
          >
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 border border-gold text-gold text-sm font-medium tracking-wide hover:bg-gold hover:text-dark transition-all duration-200 rounded-sm"
            >
              {/* EDITABLE */}Conoce más sobre nosotros →
            </a>
          </motion.div>
        </div>

        {/* Right: SVG illustration */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: 32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <TridentStatueSVG />
        </motion.div>
      </div>
    </section>
  );
}
