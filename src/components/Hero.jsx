import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import heroIllustration from '../assets/hero-illustration.png';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const Hero = () => {
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start z-10 w-full lg:w-[110%]"
          >
            <motion.span 
              variants={fadeUpVariant}
              className="font-mono text-xs md:text-sm tracking-widest text-text-muted uppercase mb-4"
            >
              Consultoría TI & Desarrollo
            </motion.span>
            
            <motion.h1 
              variants={fadeUpVariant}
              className="font-display font-bold text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] text-text-main mb-6"
            >
              Estrategia y tecnología que dejan huella.
            </motion.h1>
            
            <motion.p 
              variants={fadeUpVariant}
              className="font-sans text-lg md:text-xl text-text-body mb-8 max-w-lg"
            >
              Acompañamos a empresas a crecer con soluciones digitales sólidas, escalables y pensadas para el futuro.
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="flex flex-wrap items-center gap-4">
              <a href="#contacto" className="bg-green-dark hover:bg-green-mid text-white px-7 py-3 rounded-md font-medium transition-colors shadow-[0_4px_24px_rgba(45,74,34,0.15)]">
                Conversemos
              </a>
              <a href="#servicios" className="group flex items-center gap-2 text-text-main font-medium py-3 px-4 relative">
                Ver servicios 
                <span className="transition-transform group-hover:translate-x-1">→</span>
                <span className="absolute bottom-2 left-4 right-4 h-[1px] bg-text-main scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative lg:ml-auto w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="absolute inset-0 bg-[#EDE8DC] rounded-full blur-3xl opacity-50 transform scale-90 translate-x-10 translate-y-10"></div>
            <img 
              src={heroIllustration} 
              alt="Ilustración Kleos Digital" 
              className="relative z-10 w-full h-auto object-contain max-h-[500px]"
            />
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div 
        ref={statsRef}
        initial={{ y: 50, opacity: 0 }}
        animate={statsInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        className="mt-20 md:mt-32 w-full bg-green-dark py-8 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8 text-white divide-y md:divide-y-0 md:divide-x divide-white/20">
          
          <div className="w-full md:w-auto flex-1 text-center py-2">
            <div className="stat-number text-4xl mb-1">
              +50
            </div>
            <div className="font-sans text-sm text-white/80 uppercase tracking-wider">Proyectos completados</div>
          </div>
          
          <div className="w-full md:w-auto flex-1 text-center py-2">
            <div className="stat-number text-4xl mb-1">
              +8
            </div>
            <div className="font-sans text-sm text-white/80 uppercase tracking-wider">Años de experiencia</div>
          </div>
          
          <div className="w-full md:w-auto flex-1 text-center py-2">
            <div className="stat-number text-4xl mb-1">
              98%
            </div>
            <div className="font-sans text-sm text-white/80 uppercase tracking-wider">Clientes satisfechos</div>
          </div>
          
          <div className="w-full md:w-auto flex-1 text-center py-2">
            <div className="stat-number text-4xl mb-1">
              120%
            </div>
            <div className="font-sans text-sm text-white/80 uppercase tracking-wider">Crecimiento promedio</div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
