import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-gradient-to-br from-white via-brand-50/40 to-cream-50 px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-20 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -left-28 h-[28rem] w-[28rem] rounded-full bg-lime-brand/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-lg text-center">
        <div className="mx-auto mb-8 flex justify-center">
          <Logo />
        </div>

        <span className="text-7xl font-extrabold tracking-tight text-gradient-brand sm:text-8xl">
          404
        </span>

        <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-accent-800 sm:text-3xl">
          Esta página no existe
        </h1>

        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-neutral-600">
          Puede que el enlace esté roto o que la página se haya movido.
          Vuelve al inicio para seguir explorando Selekta.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="btn-glow group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Home className="h-4 w-4" />
            Volver al inicio
          </Link>
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 ring-1 ring-brand-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50"
          >
            Contáctanos
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
