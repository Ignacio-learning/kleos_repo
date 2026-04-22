import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ctaIllustration from '../assets/cta-illustration.png';

const CTA = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="contacto" className="bg-green-dark text-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-start z-10"
          >
            <span className="font-mono text-sm tracking-widest text-white/70 uppercase mb-6">
              ¿Listo para comenzar?
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Construyamos tu próximo producto digital.
            </h2>
            <p className="font-sans text-lg md:text-xl text-white/80 mb-10 max-w-lg">
              Hablemos de tus objetivos. Sin compromiso, con propósito.
            </p>
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a href="mailto:contacto@kleos.digital" className="w-full sm:w-auto text-center bg-white hover:bg-bg text-green-dark px-8 py-4 rounded-md font-bold transition-colors shadow-lg">
                Agendar una reunión
              </a>
              <a href="#servicios" className="w-full sm:w-auto text-center border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-md font-medium transition-colors">
                Ver nuestros servicios →
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative lg:ml-auto w-full max-w-md mx-auto lg:max-w-none flex justify-center"
          >
            <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl opacity-50 transform scale-75"></div>
            <img 
              src={ctaIllustration} 
              alt="Personajes griegos con dispositivos tech" 
              className="relative z-10 w-full h-auto object-contain max-h-[400px]"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default CTA;
