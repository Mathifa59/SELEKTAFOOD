import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Factory, Sparkles, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  "Clasificación automática por calidad",
  "Adaptable a diferentes cultivos",
  "Implementación rápida y sencilla",
  "Toneladas de productos recuperados que antes se considerara merma",
];

export function Services() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-gradient-to-b from-white to-brand-50/40 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-lime-brand/20 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 ring-1 ring-brand-100">
              <Sparkles className="h-3 w-3" />
              Servicios
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-accent-800 sm:text-5xl">
              Nuestros{" "}
              <span className="text-gradient-brand">servicios</span>
            </h1>
            <p className="mt-5 max-w-lg text-neutral-700">
              Combinamos cámaras de alta resolución con nuestro sistema
              para clasificar frutas y hortalizas en tiempo real, asegurando
              calidad, consistencia y menor desperdicio.
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((f, i) => (
                <Reveal key={f} delay={i * 80} as="li">
                  <div className="group flex items-start gap-3 rounded-xl p-3 transition-all duration-300 hover:bg-white hover:shadow-sm">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-sm text-neutral-800">{f}</span>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Link
              href="/contacto"
              className="btn-glow group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Conocer más sobre nuestros servicios
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={150} variant="fade">
          <div className="group relative">
            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-brand-300/30 to-brand-700/20 blur-2xl opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-brand-900/20 ring-1 ring-black/5">
              <Image
                src="/assets/CAMARAS EN FAJA 002.jpeg"
                alt="Cámara Selekta en faja de selección"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/30 to-transparent" />
            </div>
            <div className="absolute -right-4 bottom-10 w-64 rounded-2xl glass-card p-5 shadow-xl sm:-right-6 transition-transform duration-500 group-hover:-translate-y-1">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-500/30">
                <Factory className="h-5 w-5" />
              </div>
              <div className="text-center text-sm font-bold text-accent-800">
                Selección inteligente
                <br />
                en tiempo real
              </div>
              <div className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-brand-50 px-3 py-1.5 text-center text-[11px] font-semibold text-brand-700 ring-1 ring-brand-100">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
                </span>
                Sistema activo
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
