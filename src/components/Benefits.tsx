import { BarChart3, Leaf, Award, User, Globe2 } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: BarChart3,
    title: "Hasta 20% más\nde rentabilidad",
    desc: "Aumenta tus ganancias reduciendo pérdidas innecesarias.",
  },
  {
    icon: Leaf,
    title: "Reducción significativa\nde mermas",
    desc: "Aprovecha mejor cada fruta y cuida lo que el campo produce.",
  },
  {
    icon: Award,
    title: "Estandarización\nde calidad",
    desc: "Asegura productos consistentes que cumplen con los estándares del mercado.",
  },
  {
    icon: User,
    title: "Disminución de\nerrores humanos",
    desc: "Menos variabilidad, más precisión y decisiones confiables.",
  },
  {
    icon: Globe2,
    title: "Impacto ambiental\npositivo",
    desc: "Menos desperdicio de alimento, más sostenibilidad.",
  },
];

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative overflow-hidden bg-cover bg-center bg-fixed py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(251,250,246,0.92), rgba(245,242,232,0.9)), url('/assets/CULTIVO DE PALTA.jpg')",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(62,166,70,0.12)_1px,transparent_0)] [background-size:28px_28px]"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 ring-1 ring-brand-100">
              Beneficios
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-accent-800 sm:text-4xl">
              Menos merma,{" "}
              <span className="text-brand-600">más valor</span> en tu producción
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-600">
              Mejoramos la precisión en la selección en planta para reducir
              pérdidas y aumentar el valor de cada campaña.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="card-lift group relative flex h-full flex-col items-center overflow-hidden rounded-2xl bg-white/85 p-6 text-center shadow-sm ring-1 ring-black/5 backdrop-blur-sm">
                <div
                  aria-hidden
                  className="absolute -inset-px bg-gradient-to-br from-brand-100/0 via-brand-100/0 to-brand-200/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 to-lime-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 ring-1 ring-brand-100 transition-all duration-500 group-hover:-rotate-6 group-hover:from-brand-500 group-hover:to-brand-700 group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-500/30">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="relative whitespace-pre-line text-sm font-bold text-accent-800">
                  {title}
                </h3>
                <p className="relative mt-2 text-xs leading-relaxed text-neutral-600">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
