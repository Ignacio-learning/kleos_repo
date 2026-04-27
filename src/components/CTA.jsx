import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const contactMethods = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#C9A84C" strokeWidth="1.5" />
        <path d="M22 6L12 13 2 6" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Email',
    value: 'hola@agenciakleos.com',
    href: 'mailto:hola@agenciakleos.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Teléfono',
    value: '+56 9 XXXX XXXX',
    href: 'tel:+569XXXXXXXX',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#C9A84C" strokeWidth="1.5" />
        <circle cx="12" cy="10" r="3" stroke="#C9A84C" strokeWidth="1.5" />
      </svg>
    ),
    label: 'Ubicación',
    value: 'Santiago, Chile',
    href: 'https://maps.google.com/?q=Santiago,Chile',
  },
];

export default function CTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  return (
    <section
      id="contacto"
      className="py-28 px-6 bg-cream"
      style={{ position: 'relative', zIndex: 2 }}
    >
      <div ref={ref} className="max-w-3xl mx-auto text-center">

        {/* Label */}
        <motion.p
          className="text-xs font-medium tracking-[0.25em] text-text-main/40 uppercase mb-5"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          {/* EDITABLE */}¿Listo para comenzar?
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="font-display text-3xl md:text-4xl xl:text-5xl font-semibold text-text-main leading-tight mb-6"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          {/* EDITABLE */}
          Hablemos de tu próximo<br />
          gran <span style={{ color: '#C9A84C' }}>proyecto.</span>
        </motion.h2>

        {/* Sub-copy */}
        <motion.p
          className="text-text-main/55 text-base md:text-lg leading-relaxed mb-10"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={2}
        >
          {/* EDITABLE */}
          Cuéntanos tu idea y en menos de 24 horas te respondemos con una propuesta inicial sin costo.
        </motion.p>

        {/* Contact methods */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={3}
        >
          {contactMethods.map((m) => (
            <a
              key={m.label}
              href={m.href}
              className="flex items-center gap-3 group"
              target={m.href.startsWith('http') ? '_blank' : undefined}
              rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {m.icon}
              <span className="text-text-main/60 text-sm group-hover:text-gold transition-colors duration-200">
                {/* EDITABLE */}{m.value}
              </span>
            </a>
          ))}
        </motion.div>

        {/* Decorative divider */}
        <div className="greek-divider mb-12" />

        {/* CTA Button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={4}
        >
          <a
            href="mailto:hola@agenciakleos.com"
            className="inline-flex items-center gap-2 px-8 py-4 font-medium text-sm tracking-wide text-text-light rounded-sm hover:bg-gold transition-all duration-200"
            style={{ backgroundColor: '#1E2D3D' }}
          >
            {/* EDITABLE */}Agendar una llamada gratuita →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
