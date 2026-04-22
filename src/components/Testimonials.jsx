import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    quote: "Kleos transformó completamente nuestra presencia digital. Los resultados superaron todas nuestras expectativas.",
    author: "Carlos M.",
    role: "CEO @ Nexus"
  },
  {
    quote: "El equipo de Kleos combina profesionalismo técnico con una visión estratégica que pocas empresas tienen.",
    author: "Ana P.",
    role: "CTO @ Alpha Co."
  },
  {
    quote: "Trabajar con Kleos fue una decisión que cambió el rumbo de nuestro negocio. Muy recomendados.",
    author: "Roberto S.",
    role: "Founder @ Nova"
  }
];

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="font-mono text-sm tracking-widest text-text-muted uppercase mb-4">
            Testimonios
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text-main">
            Lo que dicen nuestros clientes.
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center items-center">
            
            <button onClick={prev} className="hidden md:flex absolute left-0 w-12 h-12 rounded-full border border-border items-center justify-center text-text-main hover:bg-black/5 transition-colors -translate-x-16">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>

            <div className="overflow-hidden relative w-full pb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center text-center px-4"
                >
                  <span className="font-display font-black text-6xl text-gold mb-6 leading-none">"</span>
                  <p className="font-cormorant italic text-2xl md:text-3xl text-text-main mb-10 max-w-2xl">
                    {testimonials[currentIndex].quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-border flex items-center justify-center font-display font-bold text-text-main text-lg">
                      {testimonials[currentIndex].author.charAt(0)}
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-sans font-bold text-text-main">{testimonials[currentIndex].author}</span>
                      <span className="font-sans text-text-muted text-sm">{testimonials[currentIndex].role}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button onClick={next} className="hidden md:flex absolute right-0 w-12 h-12 rounded-full border border-border items-center justify-center text-text-main hover:bg-black/5 transition-colors translate-x-16">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

          </div>
          
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-green-dark' : 'bg-border'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
