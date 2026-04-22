import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const steps = [
  {
    num: '01',
    title: 'Estrategia',
    desc: 'Analizamos tu negocio y definimos el camino a seguir con claridad.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Diseño & Desarrollo',
    desc: 'Construimos soluciones con las mejores tecnologías y prácticas del mercado.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Crecimiento',
    desc: 'Medimos, optimizamos y escalamos. Tu éxito es nuestro legado.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
];

const Process = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-24 md:py-32 bg-[#EDE8DC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center mb-20"
        >
          <motion.span variants={fadeUpVariant} className="font-mono text-sm tracking-widest text-text-muted uppercase mb-4">
            Nuestro Proceso
          </motion.span>
          <motion.h2 variants={fadeUpVariant} className="font-display font-bold text-4xl md:text-5xl text-text-main mb-6">
            Cómo trabajamos para ti.
          </motion.h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative flex flex-col md:flex-row gap-12 md:gap-6"
        >
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[20%] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-border" />
          
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeUpVariant} className="relative flex-1 flex flex-col items-center text-center">
              <div className="relative mb-8">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-cormorant font-black text-8xl text-[#2D4A22] opacity-5 select-none pointer-events-none">
                  {step.num}
                </span>
                <div className="relative z-10 w-16 h-16 bg-bg border border-gold rounded-full flex items-center justify-center text-green-dark shadow-sm">
                  {step.icon}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-3 w-3 h-3 rotate-45 bg-gold border border-gold transform translate-x-[280px]" />
                  )}
                </div>
              </div>
              <h3 className="font-display font-bold text-2xl text-text-main mb-4">{step.title}</h3>
              <p className="font-sans text-text-body text-base max-w-sm mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
