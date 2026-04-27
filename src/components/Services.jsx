import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

/* ─── Iconos SVG por servicio ─── */
const IconWeb = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-10 h-10" aria-hidden="true">
    <rect x="2" y="5" width="28" height="20" rx="2" stroke="#C9A84C" strokeWidth="1.5" />
    <path d="M2 11h28" stroke="#C9A84C" strokeWidth="1.5" />
    <circle cx="7" cy="8" r="1.2" fill="#C9A84C" />
    <circle cx="11" cy="8" r="1.2" fill="#C9A84C" />
    <circle cx="15" cy="8" r="1.2" fill="#C9A84C" />
    <path d="M8 17h6M8 21h10" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const IconMarketing = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-10 h-10" aria-hidden="true">
    <path d="M4 24 L10 16 L16 20 L22 10 L28 8" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    <circle cx="28" cy="8" r="2.5" stroke="#C9A84C" strokeWidth="1.5" />
    <path d="M4 28h24" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const IconMobile = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-10 h-10" aria-hidden="true">
    <rect x="9" y="2" width="14" height="28" rx="3" stroke="#C9A84C" strokeWidth="1.5" />
    <path d="M9 8h14M9 24h14" stroke="#C9A84C" strokeWidth="1.2" />
    <circle cx="16" cy="27" r="1.2" fill="#C9A84C" />
    <path d="M13 5h6" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const IconBranding = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-10 h-10" aria-hidden="true">
    <path d="M16 4 L28 10 L28 22 L16 28 L4 22 L4 10 Z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M16 4 L16 28M4 10 L28 22M4 22 L28 10" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5" />
    <circle cx="16" cy="16" r="4" stroke="#C9A84C" strokeWidth="1.2" />
  </svg>
);

const services = [
  {
    id: 'web',
    icon: <IconWeb />,
    name: 'Desarrollo Web',
    description: 'Sitios y aplicaciones web escalables, rápidos y con diseño excepcional.',
    metrics: [
      { value: 340, suffix: '%', label: 'Velocidad de carga mejorada', prefix: '+' },
      { value: 2.8, suffix: 'x', label: 'Conversión promedio', prefix: '+' },
      { value: 98, suffix: 'pts', label: 'Score de rendimiento', prefix: '' },
    ],
  },
  {
    id: 'marketing',
    icon: <IconMarketing />,
    name: 'Marketing Digital',
    description: 'Estrategias basadas en datos que aumentan tu visibilidad y generan leads.',
    metrics: [
      { value: 520, suffix: '%', label: 'Aumento en visibilidad orgánica', prefix: '+' },
      { value: 180, suffix: '%', label: 'Leads generados', prefix: '+' },
      { value: 3.4, suffix: 'x', label: 'ROI promedio en campañas', prefix: '' },
    ],
  },
  {
    id: 'mobile',
    icon: <IconMobile />,
    name: 'Desarrollo Mobile',
    description: 'Apps nativas e híbridas que ofrecen experiencias excepcionales.',
    metrics: [
      { value: 4.8, suffix: '★', label: 'Rating promedio en tiendas', prefix: '+' },
      { value: 200, suffix: 'k', label: 'Descargas acumuladas', prefix: '+' },
      { value: 99, suffix: '%', label: 'Uptime garantizado', prefix: '' },
    ],
  },
  {
    id: 'branding',
    icon: <IconBranding />,
    name: 'Branding & Diseño',
    description: 'Identidades de marca que inspiran confianza y dejan huella duradera.',
    metrics: [
      { value: 75, suffix: '%', label: 'Reconocimiento de marca', prefix: '+' },
      { value: 3, suffix: 'x', label: 'Engagement en redes', prefix: '+' },
      { value: 100, suffix: '%', label: 'Clientes renovaron', prefix: '' },
    ],
  },
];

function MetricCountUp({ value, prefix, suffix, active }) {
  const decimals = value % 1 !== 0 ? 1 : 0;
  if (!active) return <span>{prefix}0{suffix}</span>;
  return (
    <span>
      {prefix}{value}{suffix}
      {/* 
      {prefix}
      <CountUp
        end={value}
        duration={1.5}
        decimals={decimals}
        useEasing
        start={0}
      />
      {suffix}
      */}
    </span>
  );
}

function ServiceCard({ service, index, inView }) {
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleInteraction = () => {
    if (isMobile) setFlipped((v) => !v);
  };

  const cardFlipped = isMobile ? flipped : undefined;

  return (
    <motion.div
      className="h-80 md:h-96"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Outer container with perspective */}
      <div
        className={`flip-card w-full h-full ${cardFlipped ? 'flipped' : ''}`}
        onClick={handleInteraction}
        style={{ cursor: isMobile ? 'pointer' : 'default' }}
      >
        <div className="flip-card-inner">

          {/* Front face */}
          <div
            className="flip-card-front rounded-sm border border-gold/30 flex flex-col justify-between p-7"
            style={{ backgroundColor: '#1E2D3D' }}
          >
            <div className="flex flex-col gap-4">
              {service.icon}
              <h3 className="font-display text-xl font-semibold text-text-light">
                {/* EDITABLE */}{service.name}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {/* EDITABLE */}{service.description}
              </p>
            </div>
            <div className="flex justify-end">
              <span className="text-gold text-lg">→</span>
            </div>
            {isMobile && (
              <p className="text-gold/50 text-xs mt-2 text-center">Toca para ver resultados</p>
            )}
          </div>

          {/* Back face */}
          <div
            className="flip-card-back rounded-sm flex flex-col justify-center gap-5 p-7"
            style={{ backgroundColor: '#A07830' }}
          >
            <h4 className="font-display text-lg font-semibold text-dark text-center">
              Resultados que logramos
            </h4>
            <ul className="flex flex-col gap-4">
              {service.metrics.map((m, mi) => (
                <li key={mi} className="flex items-center gap-4">
                  <span className="font-display text-2xl font-bold text-dark min-w-[80px]">
                    <MetricCountUp
                      value={m.value}
                      prefix={m.prefix}
                      suffix={m.suffix}
                      active={isMobile ? flipped : true}
                    />
                  </span>
                  <span className="text-dark/80 text-sm leading-tight">
                    {/* EDITABLE */}{m.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="servicios"
      className="py-24 px-6 bg-cream"
      style={{ position: 'relative', zIndex: 2 }}
    >
      <div ref={ref} className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            className="text-xs font-medium tracking-[0.25em] text-text-main/40 uppercase mb-4"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {/* EDITABLE */}Nuestros servicios
          </motion.p>
          <motion.h2
            className="font-display text-3xl md:text-4xl font-semibold text-text-main"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            {/* EDITABLE */}
            Soluciones digitales diseñadas para{' '}
            <span style={{ color: '#C9A84C' }}>conquistar</span> tu mercado.
          </motion.h2>
          <motion.p
            className="text-text-main/50 text-sm mt-3 hidden md:block"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            Pasa el cursor sobre cada tarjeta para ver los resultados.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
