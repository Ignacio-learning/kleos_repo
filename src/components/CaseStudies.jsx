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

const CaseStudies = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="casos" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col mb-16"
        >
          <motion.span variants={fadeUpVariant} className="font-mono text-sm tracking-widest text-text-muted uppercase mb-4">
            Casos de Éxito
          </motion.span>
          <motion.h2 variants={fadeUpVariant} className="font-display font-bold text-4xl md:text-5xl text-text-main max-w-2xl">
            Resultados que hablan por sí solos.
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="group cursor-pointer flex flex-col"
          >
            <div className="w-full h-64 md:h-80 bg-gray-900 rounded-xl mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-green-dark/20 group-hover:bg-transparent transition-colors duration-300"></div>
              {/* Mock dashboard content for thumbnail */}
              <div className="absolute top-8 left-8 right-8 bottom-0 bg-gray-800 rounded-t-lg border-t border-x border-gray-700 p-6 flex flex-col gap-4">
                <div className="w-1/3 h-4 bg-gray-600 rounded"></div>
                <div className="w-full flex gap-4">
                   <div className="flex-1 h-32 bg-gray-700 rounded-lg"></div>
                   <div className="flex-1 h-32 bg-gray-700 rounded-lg"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <span className="bg-bg border border-border text-text-muted px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest mb-4">
                E-Commerce
              </span>
              <h3 className="font-display font-bold text-2xl text-text-main mb-3 group-hover:text-green-dark transition-colors">
                Optimización E-commerce
              </h3>
              <p className="font-sans text-text-body mb-6">
                Estrategia integral que multiplicó las ventas online reduciendo el costo de adquisición.
              </p>
              <span className="font-sans font-medium text-text-main group-hover:text-green-dark flex items-center gap-2">
                Ver caso de estudio <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="group cursor-pointer flex flex-col mt-0 lg:mt-12"
          >
            <div className="w-full h-64 md:h-80 bg-blue-900 rounded-xl mb-6 overflow-hidden relative">
               <div className="absolute inset-0 bg-green-dark/20 group-hover:bg-transparent transition-colors duration-300"></div>
               {/* Mock mobile app content for thumbnail */}
               <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 bottom-0 bg-gray-100 rounded-t-3xl border-4 border-b-0 border-gray-800 p-4">
                 <div className="w-full h-12 bg-white rounded-lg mb-4 shadow-sm"></div>
                 <div className="w-full h-24 bg-blue-100 rounded-lg mb-4"></div>
                 <div className="w-full h-8 bg-white rounded-lg shadow-sm"></div>
               </div>
            </div>
            <div className="flex flex-col items-start">
              <span className="bg-bg border border-border text-text-muted px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest mb-4">
                Fintech
              </span>
              <h3 className="font-display font-bold text-2xl text-text-main mb-3 group-hover:text-green-dark transition-colors">
                Desarrollo App Fintech
              </h3>
              <p className="font-sans text-text-body mb-6">
                Plataforma robusta que conectó a miles de usuarios con soluciones financieras innovadoras.
              </p>
              <span className="font-sans font-medium text-text-main group-hover:text-green-dark flex items-center gap-2">
                Ver caso de estudio <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
