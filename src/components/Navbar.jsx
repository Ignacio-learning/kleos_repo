import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Logo = () => (
  <div className="flex items-center gap-2">
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 85 C20 85 10 50 20 25 C30 10 45 15 45 15 C45 15 40 30 50 45" stroke="#C9A84C" strokeWidth="4" strokeLinecap="round" />
      <path d="M50 85 C80 85 90 50 80 25 C70 10 55 15 55 15 C55 15 60 30 50 45" stroke="#C9A84C" strokeWidth="4" strokeLinecap="round" />
      <path d="M30 45 C40 35 45 35 45 35 C45 35 35 45 30 55" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" />
      <path d="M70 45 C60 35 55 35 55 35 C55 35 65 45 70 55" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" />
      <path d="M25 35 C35 25 40 25 40 25 C40 25 30 35 25 45" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" />
      <path d="M75 35 C65 25 60 25 60 25 C60 25 70 35 75 45" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" />
    </svg>
    <div className="flex flex-col leading-none">
      <span className="font-display font-bold text-xl text-text-main tracking-wide">KLEOS</span>
      <span className="font-sans font-normal text-[0.65rem] text-text-muted tracking-[0.2em] mt-[2px]">DIGITAL</span>
    </div>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Casos de Éxito', href: '#casos' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-bg/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="z-50">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-body hover:text-green-dark font-medium transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#contacto"
            className="bg-green-dark hover:bg-green-mid text-white px-7 py-3 rounded-md font-medium transition-colors shadow-[0_4px_24px_rgba(45,74,34,0.08)]"
          >
            Hablemos
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 text-text-main p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 bg-bg z-40 flex flex-col pt-24 px-6"
            >
              <div className="flex flex-col gap-6 text-xl font-display">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-text-main hover:text-green-dark border-b border-border pb-4"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 bg-green-dark text-white text-center py-4 rounded-md font-medium"
              >
                Hablemos
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export { Navbar, Logo };
