import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const empresas = [
  'Nexum Pay',
  'Titón Store',
  'Vitae App',
  'Areté Academy',
  'Helios Group',
];

export default function ClientLogos() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="empresas"
      className="relative bg-cream py-16 px-6"
      style={{ position: 'relative', zIndex: 2 }}
    >
      <div ref={ref} className="max-w-5xl mx-auto">

        {/* Label */}
        <motion.p
          className="text-center text-xs font-medium tracking-[0.25em] text-text-main/40 uppercase mb-10"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* EDITABLE */}Empresas que confían en nosotros
        </motion.p>

        {/* Company names row */}
        <div className="flex flex-wrap items-center justify-center gap-y-6">
          {empresas.map((nombre, i) => (
            <motion.div
              key={nombre}
              className="flex items-center gap-6 md:gap-10"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="font-display text-lg md:text-xl font-medium text-text-main/40 hover:text-gold transition-colors duration-300 cursor-default tracking-wide">
                {/* EDITABLE */}{nombre}
              </span>
              {i < empresas.length - 1 && (
                <span className="text-gold/30 text-sm select-none hidden sm:inline">·</span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="greek-divider mt-12" />
      </div>
    </section>
  );
}
