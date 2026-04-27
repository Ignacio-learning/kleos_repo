import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Logo SVG: "K" serif con ramas de olivo ─── */
export function Logo({ className = '' }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Kleos Agencia"
    >
      {/* Círculo de fondo sutil */}
      <circle cx="60" cy="60" r="56" stroke="#C9A84C" strokeWidth="1" opacity="0.4" />

      {/* Letra K serif */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="52"
        fill="#C9A84C"
      >
        K
      </text>

      {/* Rama de olivo izquierda */}
      <g opacity="0.85">
        <path d="M18 60 Q10 52 14 42" stroke="#C9A84C" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <ellipse cx="13" cy="45" rx="4" ry="2.5" transform="rotate(-30 13 45)" fill="#C9A84C" opacity="0.7" />
        <ellipse cx="16" cy="53" rx="4" ry="2.5" transform="rotate(-15 16 53)" fill="#C9A84C" opacity="0.7" />
        <ellipse cx="15" cy="42" rx="3.5" ry="2" transform="rotate(-45 15 42)" fill="#C9A84C" opacity="0.6" />
        <path d="M18 60 Q9 62 11 72" stroke="#C9A84C" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <ellipse cx="10" cy="69" rx="4" ry="2.5" transform="rotate(20 10 69)" fill="#C9A84C" opacity="0.7" />
        <ellipse cx="13" cy="62" rx="3.5" ry="2" transform="rotate(10 13 62)" fill="#C9A84C" opacity="0.6" />
      </g>

      {/* Rama de olivo derecha */}
      <g opacity="0.85">
        <path d="M102 60 Q110 52 106 42" stroke="#C9A84C" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <ellipse cx="107" cy="45" rx="4" ry="2.5" transform="rotate(30 107 45)" fill="#C9A84C" opacity="0.7" />
        <ellipse cx="104" cy="53" rx="4" ry="2.5" transform="rotate(15 104 53)" fill="#C9A84C" opacity="0.7" />
        <ellipse cx="105" cy="42" rx="3.5" ry="2" transform="rotate(45 105 42)" fill="#C9A84C" opacity="0.6" />
        <path d="M102 60 Q111 62 109 72" stroke="#C9A84C" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <ellipse cx="110" cy="69" rx="4" ry="2.5" transform="rotate(-20 110 69)" fill="#C9A84C" opacity="0.7" />
        <ellipse cx="107" cy="62" rx="3.5" ry="2" transform="rotate(-10 107 62)" fill="#C9A84C" opacity="0.6" />
      </g>
    </svg>
  );
}

const leftLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
];

const rightLinks = [
  { label: 'Blog', href: '#blog' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    background: scrolled
      ? 'rgba(18, 28, 38, 0.95)'
      : 'rgba(30, 45, 61, 0.82)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    transition: 'background 0.3s ease',
  };

  const linkClass =
    'text-sm font-medium tracking-wide text-text-light/80 hover:text-gold transition-colors duration-200';

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b border-gold/10"
        style={navStyle}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Desktop: Left links */}
          <nav className="hidden md:flex items-center gap-8 flex-1">
            {leftLinks.map((l) => (
              <a key={l.label} href={l.href} className={linkClass}>
                {/* EDITABLE */}{l.label}
              </a>
            ))}
          </nav>

          {/* Center: Logo */}
          <a href="#inicio" className="flex-shrink-0 mx-6" aria-label="Kleos Agencia — Inicio">
            <Logo className="w-12 h-12 md:w-14 md:h-14" />
          </a>

          {/* Desktop: Right links + CTA */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-end">
            {rightLinks.map((l) => (
              <a key={l.label} href={l.href} className={linkClass}>
                {/* EDITABLE */}{l.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-2 px-5 py-2 text-sm font-medium tracking-wide border border-gold text-gold hover:bg-gold hover:text-dark transition-all duration-200 rounded-sm"
            >
              {/* EDITABLE */}Hablemos →
            </a>
          </nav>

          {/* Mobile: hamburger */}
          <button
            className="md:hidden text-text-light p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className="flex flex-col gap-1.5 w-6">
              <span
                className="block h-px bg-text-light transition-all duration-300"
                style={{ transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none' }}
              />
              <span
                className="block h-px bg-text-light transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block h-px bg-text-light transition-all duration-300"
                style={{ transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none' }}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden border-b border-gold/20"
            style={{ background: 'rgba(18, 28, 38, 0.98)', backdropFilter: 'blur(16px)' }}
          >
            <nav className="flex flex-col items-center gap-6 py-8">
              {[...leftLinks, ...rightLinks].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-base font-medium text-text-light/80 hover:text-gold transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="mt-2 px-6 py-2.5 border border-gold text-gold text-sm font-medium hover:bg-gold hover:text-dark transition-all duration-200 rounded-sm"
                onClick={() => setMenuOpen(false)}
              >
                Hablemos →
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
