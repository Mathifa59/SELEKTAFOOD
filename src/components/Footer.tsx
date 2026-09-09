import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { Logo } from "./Logo";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8 17v-7H6v7h2zM7 8.8A1.2 1.2 0 1 0 7 6.4a1.2 1.2 0 0 0 0 2.4zM18 17v-3.9c0-2-1.1-3-2.6-3-1.3 0-1.9.7-2.2 1.2V10h-2.1c0 .6 0 7 0 7h2.1v-3.7c0-.2 0-.4.1-.5.2-.4.5-.9 1.2-.9 1 0 1.4.7 1.4 1.8V17H18z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-accent-900 via-accent-800 to-brand-950 text-neutral-200">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/3 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Logo layout="footer" />
          <p className="mt-5 max-w-xs text-xs leading-relaxed text-neutral-300">
            Más eficiencia. Menos desperdicio.
            <br />
            Mayor rentabilidad.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">
            Enlaces rápidos
          </h4>
          <ul className="grid grid-cols-2 gap-y-2 text-sm text-neutral-300">
            <li><Link href="/" className="transition-colors hover:text-lime-brand">Inicio</Link></li>
            <li><Link href="/beneficios" className="transition-colors hover:text-lime-brand">Beneficios</Link></li>
            <li><Link href="/nosotros" className="transition-colors hover:text-lime-brand">Nosotros</Link></li>
            <li><Link href="/blog" className="transition-colors hover:text-lime-brand">Blog</Link></li>
            <li><Link href="/servicios" className="transition-colors hover:text-lime-brand">Servicios</Link></li>
            <li><Link href="/contacto" className="transition-colors hover:text-lime-brand">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Síguenos</h4>
          <div className="flex gap-3">
            {[
              { Icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/showcase/selektafood/" },
              { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/selekta.food/" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 transition-all duration-300 hover:bg-lime-brand hover:text-accent-900 hover:-translate-y-0.5 hover:ring-lime-brand"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <h4 className="mt-8 mb-3 text-sm font-semibold text-white">¿Tienes algo que decirnos?</h4>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfHtUV_CJDOCt--H1pEjrt7h1VjmUNNqzRQypH2zLeYZ1qE2Q/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-lime-brand/40 bg-lime-brand/10 px-4 py-2 text-xs font-medium text-lime-brand transition-all duration-300 hover:bg-lime-brand hover:text-accent-900 hover:-translate-y-0.5"
          >
            <MessageSquare className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-rotate-6" />
            Quejas y sugerencias
          </a>
        </div>

      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-5 text-center text-xs text-neutral-400 sm:flex-row sm:justify-between">
          <span>© 2026 Selekta. Todos los derechos reservados.</span>
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <Link
              href="/privacidad"
              className="transition-colors hover:text-lime-brand"
            >
              Política de Privacidad
            </Link>
            <span className="hidden text-neutral-600 sm:inline">•</span>
            <a
              href="https://www.devhorses.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-lime-brand"
            >
              Desarrollado por DevHorses
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
