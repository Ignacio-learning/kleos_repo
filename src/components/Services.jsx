import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    title: 'Consultoría TI',
    desc: 'Transformamos ideas en planes concretos y arquitecturas sólidas.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
  {
    title: 'Desarrollo Web',
    desc: 'Aplicaciones rápidas, seguras y escalables.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Desarrollo Mobile',
    desc: 'Experiencias móviles que conectan con tus usuarios.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: 'Marketing Digital',
    desc: 'Atrae, convierte y fideliza clientes con estrategia.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
];

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="servicios" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.span variants={fadeUpVariant} className="font-mono text-sm tracking-widest text-text-muted uppercase mb-4">
            Servicios
          </motion.span>
          <motion.h2 variants={fadeUpVariant} className="font-display font-bold text-4xl md:text-5xl text-text-main mb-6">
            Soluciones que impulsan tu negocio.
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="font-sans text-lg text-text-body max-w-2xl">
            Combinamos estrategia, tecnología y experiencia para crear soluciones digitales que generan resultados.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(45,74,34,0.15)' }}
              className="bg-bg-card border border-border rounded-xl p-8 transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-bg rounded-lg border border-border flex items-center justify-center text-green-dark mb-6">
                {service.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-text-main mb-3">{service.title}</h3>
              <p className="font-sans text-text-body text-base flex-grow">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="mt-24 greek-divider w-full" />
    </section>
  );
};

export default Services;
