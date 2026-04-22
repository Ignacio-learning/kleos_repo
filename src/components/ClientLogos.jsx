import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ClientLogos = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const logos = ['NEXUS', 'ALPHA Co.', 'NOVA', 'ORION', 'SUMMIT'];

  return (
    <section className="py-16 md:py-20 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <span className="font-mono text-xs tracking-widest text-text-muted uppercase mb-10 block">
          Confianza y Resultados
        </span>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 items-center"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="font-display font-black text-2xl md:text-3xl text-text-main/30 hover:text-text-main transition-colors duration-300 cursor-pointer grayscale hover:grayscale-0"
            >
              {logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
