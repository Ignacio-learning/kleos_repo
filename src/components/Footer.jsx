import { Logo } from './Navbar';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10v7M7 7v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 17v-4a2 2 0 014 0v4M11 10v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Behance',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M3 6h7a3 3 0 010 6H3V6zM3 12h8a3 3 0 010 6H3v-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M15 8h6M14 14h7a3.5 3.5 0 10-7 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contacto', href: '#contacto' },
];

const serviceLinks = [
  { label: 'Desarrollo Web', href: '#servicios' },
  { label: 'Desarrollo Mobile', href: '#servicios' },
  { label: 'Marketing Digital', href: '#servicios' },
  { label: 'Branding & Diseño', href: '#servicios' },
];

const linkClass =
  'text-sm text-text-muted hover:text-gold transition-colors duration-200';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111C26' }}>
      {/* Gold top border */}
      <div style={{ height: '1px', backgroundColor: '#C9A84C', opacity: 0.4 }} />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Logo className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="font-display text-base font-semibold text-text-light tracking-wider">
                  {/* EDITABLE */}KLEOS
                </span>
                <span className="text-text-muted text-xs tracking-widest uppercase">
                  {/* EDITABLE */}Agencia
                </span>
              </div>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              {/* EDITABLE */}Estrategia, tecnología y resultados que dejan huella.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-text-muted hover:text-gold transition-colors duration-200"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-sm font-semibold text-text-light tracking-widest uppercase">
              {/* EDITABLE */}Enlaces
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} className={linkClass}>
                  {/* EDITABLE */}{l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-sm font-semibold text-text-light tracking-widest uppercase">
              {/* EDITABLE */}Servicios
            </h4>
            <nav className="flex flex-col gap-3">
              {serviceLinks.map((l) => (
                <a key={l.label} href={l.href} className={linkClass}>
                  {/* EDITABLE */}{l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-sm font-semibold text-text-light tracking-widest uppercase">
              {/* EDITABLE */}Contacto
            </h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:hola@agenciakleos.com" className={linkClass}>
                {/* EDITABLE */}hola@agenciakleos.com
              </a>
              <a href="tel:+569XXXXXXXX" className={linkClass}>
                {/* EDITABLE */}+56 9 XXXX XXXX
              </a>
              <span className="text-sm text-text-muted">
                {/* EDITABLE */}Santiago, Chile
              </span>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 border border-text-light/30 text-text-light text-sm font-medium tracking-wide hover:border-gold hover:text-gold transition-all duration-200 rounded-sm self-start"
              >
                {/* EDITABLE */}Hablemos →
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-gold/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            {/* EDITABLE */}© 2025 Kleos Agencia. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-text-muted text-xs hover:text-gold transition-colors">
              {/* EDITABLE */}Política de Privacidad
            </a>
            <a href="#" className="text-text-muted text-xs hover:text-gold transition-colors">
              {/* EDITABLE */}Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
