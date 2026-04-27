import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    id: 1,
    quote:
      'Kleos transformó nuestra presencia digital por completo. En 3 meses duplicamos nuestras consultas online.',
    name: 'Alejandro Mora',
    role: 'CEO',
    company: 'Nexum Pay',
    initials: 'AM',
  },
  {
    id: 2,
    quote:
      'El equipo entiende el negocio antes de escribir una sola línea de código. Resultado: conversiones x3.',
    name: 'Valeria Cisternas',
    role: 'Directora de Marketing',
    company: 'Titón Store',
    initials: 'VC',
  },
  {
    id: 3,
    quote:
      'La app que desarrollaron para nosotros superó todas las expectativas del lanzamiento.',
    name: 'Sebastián Rojas',
    role: 'Fundador',
    company: 'Vitae App',
    initials: 'SR',
  },
  {
    id: 4,
    quote:
      'Rediseñaron nuestra marca y ahora nos reconocen en toda la industria. Inversión que valió cada peso.',
    name: 'Camila Espinoza',
    role: 'Rectora',
    company: 'Areté Academy',
    initials: 'CE',
  },
  {
    id: 5,
    quote:
      'El acompañamiento estratégico de Kleos es lo que diferencia a este equipo del resto.',
    name: 'Rodrigo Fuentes',
    role: 'Gerente',
    company: 'Helios Group',
    initials: 'RF',
  },
];

const AUTOPLAY_MS = 4500;

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" className="w-4 h-4" fill="#C9A84C" aria-hidden="true">
          <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ initials }) {
  return (
    <div
      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-display text-lg font-semibold text-dark"
      style={{ backgroundColor: '#C9A84C' }}
    >
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const goTo = useCallback(
    (index) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused || !inView) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, inView, next]);

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  const t = testimonials[current];

  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: '#1E2D3D', position: 'relative', zIndex: 2 }}
    >
      <div ref={ref} className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-xs font-medium tracking-[0.25em] text-gold uppercase mb-4"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {/* EDITABLE */}Testimonios
          </motion.p>
          <motion.h2
            className="font-display text-3xl md:text-4xl font-semibold text-text-light"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            {/* EDITABLE */}Lo que dicen nuestros{' '}
            <span style={{ color: '#C9A84C' }}>clientes.</span>
          </motion.h2>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Navigation arrows (desktop) */}
          <button
            onClick={prev}
            className="hidden md:flex absolute -left-14 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center border border-gold/30 text-gold hover:bg-gold/10 transition-colors rounded-sm z-10"
            aria-label="Testimonio anterior"
          >
            ←
          </button>
          <button
            onClick={next}
            className="hidden md:flex absolute -right-14 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center border border-gold/30 text-gold hover:bg-gold/10 transition-colors rounded-sm z-10"
            aria-label="Siguiente testimonio"
          >
            →
          </button>

          {/* Slide */}
          <div className="overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={t.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                className="w-full"
              >
                <div
                  className="rounded-sm border border-gold/20 p-8 md:p-12 flex flex-col gap-6"
                  style={{ backgroundColor: 'rgba(201, 168, 76, 0.05)' }}
                >
                  {/* Quote mark */}
                  <span className="font-display text-6xl text-gold/30 leading-none select-none">"</span>

                  <blockquote className="font-display text-xl md:text-2xl text-text-light leading-relaxed -mt-8">
                    {/* EDITABLE */}{t.quote}
                  </blockquote>

                  <div className="flex items-center gap-4 mt-2">
                    <Avatar initials={t.initials} />
                    <div className="flex flex-col gap-1">
                      <Stars />
                      <span className="font-display text-base font-semibold text-text-light">
                        {/* EDITABLE */}{t.name}
                      </span>
                      <span className="text-text-muted text-sm">
                        {/* EDITABLE */}{t.role} · {t.company}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  backgroundColor: i === current ? '#C9A84C' : 'rgba(201,168,76,0.3)',
                }}
                aria-label={`Ver testimonio ${i + 1}`}
              />
            ))}
          </div>

          {/* Mobile swipe hints */}
          <div className="flex justify-center gap-6 mt-6 md:hidden">
            <button onClick={prev} className="text-gold/60 hover:text-gold text-xl px-3 py-1">
              ←
            </button>
            <button onClick={next} className="text-gold/60 hover:text-gold text-xl px-3 py-1">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
