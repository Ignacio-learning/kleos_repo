import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

/* ─── SVG: Patrón de meandro griego ─── */
function MeanderPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.04 }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="meander" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          {/* Meandro griego simplificado */}
          <path
            d="M0 24 L8 24 L8 8 L24 8 L24 16 L16 16 L16 24 L24 24 L24 40 L40 40 L40 24 L32 24 L32 16 L48 16"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="1.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#meander)" />
    </svg>
  );
}

/* ─── SVG: Estatua neoclásica abstracta ─── */
function StatueSVG() {
  return (
    <svg
      viewBox="0 0 400 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-h-[580px] object-contain"
      aria-label="Ilustración decorativa de estatua neoclásica"
    >
      {/* Cabeza / casco */}
      <ellipse cx="200" cy="80" rx="42" ry="46" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.8" />
      {/* Penacho del casco */}
      <path d="M165 60 Q170 20 200 15 Q230 20 235 60" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.7" />
      <path d="M175 55 Q185 35 200 30 Q215 35 225 55" stroke="#C9A84C" strokeWidth="1.2" fill="none" opacity="0.5" />
      {/* Cuello */}
      <path d="M188 124 L195 150 M212 124 L205 150" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.7" />
      {/* Hombros / cuerpo superior */}
      <path d="M195 150 Q155 155 140 175 L130 250 L270 250 L260 175 Q245 155 205 150 Z"
        stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.8" />
      {/* Pecho — detalle de armadura */}
      <path d="M165 175 Q200 185 235 175" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M160 195 Q200 208 240 195" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M158 215 Q200 228 242 215" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.4" />
      {/* Brazo izquierdo — sostiene escudo / rama */}
      <path d="M130 175 Q100 200 92 240 Q88 265 100 280" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.7" />
      <path d="M100 280 Q88 300 96 318" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.6" />
      {/* Escudo circular */}
      <ellipse cx="82" cy="310" rx="24" ry="28" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.6" />
      <ellipse cx="82" cy="310" rx="16" ry="20" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M70 298 L94 322 M94 298 L70 322" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4" />
      {/* Brazo derecho — lanza / tridente */}
      <path d="M270 175 Q300 195 310 235 Q316 265 308 290" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.7" />
      {/* Lanza */}
      <path d="M315 290 L330 140" stroke="#C9A84C" strokeWidth="1.8" fill="none" opacity="0.7" />
      <path d="M325 140 L330 120 L335 140" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.8" />
      {/* Faldas / quíton inferior */}
      <path d="M130 250 L118 370 L140 370 L145 300 Q200 320 255 300 L260 370 L282 370 L270 250 Z"
        stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.75" />
      {/* Pliegues de tela */}
      <path d="M150 260 L142 365" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M168 265 L163 368" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M185 268 L182 370" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M200 268 L200 370" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M215 268 L218 370" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M232 265 L237 368" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M250 260 L258 365" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4" />
      {/* Piernas */}
      <path d="M140 370 L128 490 L155 490 L160 410 M260 370 L272 490 L245 490 L240 410"
        stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.75" />
      {/* Base de la estatua */}
      <rect x="100" y="490" width="200" height="12" rx="2" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.6" />
      <rect x="85" y="502" width="230" height="18" rx="2" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Detalles decorativos — laureles alrededor */}
      <path d="M80 530 Q100 520 120 530 Q140 520 160 530" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M240 530 Q260 520 280 530 Q300 520 320 530" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.4" />
      {/* Resplandor difuso central */}
      <ellipse cx="200" cy="300" rx="120" ry="200" stroke="#C9A84C" strokeWidth="0.5" fill="none" opacity="0.08" />
      <ellipse cx="200" cy="300" rx="150" ry="240" stroke="#C9A84C" strokeWidth="0.3" fill="none" opacity="0.05" />
    </svg>
  );
}

const stats = [
  { value: 120, prefix: '+', label: 'Proyectos\ncompletados' },
  { value: 80, prefix: '+', label: 'Clientes\nsatisfechos' },
  { value: 7, prefix: '+', label: 'Años de\nexperiencia' },
  { value: 98, suffix: '%', label: 'Tasa de\nsatisfacción' },
];

function StatItem({ stat, inView }) {
  return (
    <div className="flex-1 flex flex-col items-center text-center px-4">
      <span className="stat-number text-2xl md:text-3xl text-gold">
        {stat.prefix}
        {stat.value}
        {/* 
        {inView ? (
          <CountUp end={stat.value} duration={2} useEasing />
        ) : (
          0
        )}
        */}
        {stat.suffix}
      </span>
      <span className="text-text-muted text-xs mt-1 leading-tight whitespace-pre-line">
        {/* EDITABLE */}{stat.label}
      </span>
    </div>
  );
}

export default function Hero() {
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  return (
    <section
      id="inicio"
      className="relative"
      style={{
        /* position: 'sticky',
        top: 0,
        height: '100vh', */
        paddingTop: '100px',
        paddingBottom: '100px',
        minHeight: '80vh',
        zIndex: 1,
        backgroundColor: '#1E2D3D',
        overflow: 'hidden',
      }}
    >
      {/* Meander pattern overlay */}
      <MeanderPattern />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 60% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center pt-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left column */}
          <div className="flex flex-col gap-6">
            <motion.p
              className="text-xs font-medium tracking-[0.25em] text-olive uppercase"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              {/* EDITABLE */}Estrategia · Tecnología · Resultados
            </motion.p>

            <motion.h1
              className="font-display text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight text-text-light"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              {/* EDITABLE */}
              Desarrollamos soluciones<br />
              digitales que impulsan<br />
              tu <span style={{ color: '#C9A84C' }}>legado.</span>
            </motion.h1>

            <motion.p
              className="text-text-muted text-base md:text-lg leading-relaxed max-w-md"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              {/* EDITABLE */}
              En Kleos combinamos estrategia, diseño y desarrollo para crear experiencias digitales que generan crecimiento real.
            </motion.p>

            <motion.div
              className="flex gap-4 flex-wrap"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <a
                href="#servicios"
                className="px-6 py-3 bg-gold text-dark font-medium text-sm tracking-wide hover:scale-[1.03] transition-transform duration-200 rounded-sm"
              >
                Ver Servicios →
              </a>
              <a
                href="#contacto"
                className="px-6 py-3 border border-text-light text-text-light font-medium text-sm tracking-wide hover:scale-[1.03] hover:border-gold hover:text-gold transition-all duration-200 rounded-sm"
              >
                Hablemos →
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              ref={statsRef}
              className="mt-4 flex items-stretch border-t border-gold/20 pt-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-stretch">
                  <StatItem stat={s} inView={statsInView} />
                  {i < stats.length - 1 && (
                    <div className="w-px bg-gold/20 self-stretch mx-1" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column: statue illustration */}
          <motion.div
            className="hidden lg:flex items-center justify-center h-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <StatueSVG />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
