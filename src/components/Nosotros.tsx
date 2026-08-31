import Image from "next/image";
import { Leaf, Zap, Globe2, Users } from "lucide-react";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: Zap,
    title: "Innovación tecnológica",
    desc: "Desarrollamos software de precisión gráfica entrenado con millones de imágenes reales del campo, que mejora la consistencia y exactitud en la clasificación de fruta.",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    desc: "Cada fruta bien clasificada reduce el desperdicio y evita que producto apto se convierta en merma, generando un impacto positivo en el uso de recursos y el medio ambiente.",
  },
  {
    icon: Globe2,
    title: "Visión global",
    desc: "Expandir nuestra solución a los principales mercados agroexportadores, llevando procesos de selección más precisos y eficientes desde Perú hacia el mundo.",
  },
  {
    icon: Users,
    title: "Equipo especializado",
    desc: "Somos un equipo con experiencia directa en agroexportación. Entendemos los desafíos de la operación porque trabajamos dentro de plantas reales.",
  },
];

const milestones = [
  { value: "+5M", label: "imágenes reales analizadas en operación" },
  { value: "+35", label: "plantas que ya optimizan su selección" },
  { value: "+20%", label: "mejora en rentabilidad" },
  { value: "+13 TN", label: "producto recuperado que antes se consideraba merma" },
];

export function Nosotros() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-gradient-to-b from-white via-cream-50 to-brand-50/50 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_1px_1px,rgba(62,166,70,0.1)_1px,transparent_0)] [background-size:28px_28px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 ring-1 ring-brand-100">
              Nosotros
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-accent-800 sm:text-5xl">
              Mejoramos la selección.
              <br />
              <span className="text-gradient-brand">
                Mejoramos el resultado.
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-600">
              Somos una empresa peruana enfocada en optimizar la selección de
              fruta en plantas agroexportadoras. Mejoramos la precisión en la
              clasificación en línea, reduciendo mermas y recuperando valor
              que se pierde por errores en el proceso. Nuestra solución ya
              opera en plantas reales, donde contribuye a mejorar la
              eficiencia operativa y la rentabilidad de cada campaña.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal delay={120} variant="fade">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-brand-200/35 to-brand-500/15 blur-2xl" />
              <div className="relative pb-20 pt-20 sm:pb-16 sm:pt-16">
                <div className="pointer-events-none absolute inset-x-4 top-0 z-10 grid grid-cols-2 gap-3 sm:inset-x-8">
                  {milestones.slice(0, 2).map(({ value, label }) => (
                    <MilestoneBadge key={value} value={value} label={label} />
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-x-4 bottom-0 z-10 grid grid-cols-2 gap-3 sm:inset-x-8">
                  {milestones.slice(2).map(({ value, label }) => (
                    <MilestoneBadge key={value} value={value} label={label} />
                  ))}
                </div>
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-2xl shadow-brand-900/15 ring-1 ring-black/5">
                <Image
                  src="/assets/IMAGEN PARA SECCION NOSOTROS.jpeg"
                  alt="Equipo Selekta en planta agroexportadora"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-900/45 via-transparent to-transparent" />
              </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={80}>
              <div className="grid gap-4 sm:grid-cols-2">
                <StatementCard
                  tone="brand"
                  label="Nuestra misión"
                  text="Optimizar los procesos de selección en la agroindustria, mejorando la precisión en la clasificación de frutas para reducir mermas y maximizar el valor de la producción."
                />
                <StatementCard
                  tone="accent"
                  label="Nuestra visión"
                  text="Ser líderes internacionales en soluciones tecnológicas para la agroexportación, promoviendo una industria más eficiente, sostenible y sin desperdicios."
                />
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={title} delay={i * 80 + 140}>
                  <PillarCard icon={Icon} title={title} desc={desc} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function StatementCard({
  tone,
  label,
  text,
}: {
  tone: "brand" | "accent";
  label: string;
  text: string;
}) {
  const toneClass =
    tone === "brand"
      ? "from-brand-600 to-brand-800 text-brand-200"
      : "from-accent-700 to-accent-900 text-accent-200";

  return (
    <div className={`rounded-2xl bg-gradient-to-br ${toneClass} p-6 text-white shadow-lg shadow-brand-900/15`}>
      <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em]">
        {label}
      </div>
      <p className="text-sm leading-relaxed text-white/90">{text}</p>
    </div>
  );
}

function PillarCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="group flex h-full gap-4 rounded-2xl bg-white/85 p-5 shadow-sm ring-1 ring-neutral-100 backdrop-blur transition-all duration-300 hover:bg-white hover:shadow-md card-lift">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-all duration-500 group-hover:bg-brand-600 group-hover:text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm font-bold text-accent-800">{title}</div>
        <p className="mt-1 text-xs leading-relaxed text-neutral-600">{desc}</p>
      </div>
    </div>
  );
}

function MilestoneBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white/90 px-3 py-3 text-center shadow-lg ring-1 ring-brand-100 backdrop-blur-md">
      <div className="bg-gradient-to-br from-brand-700 to-brand-500 bg-clip-text text-2xl font-extrabold text-transparent">
        {value}
      </div>
      <div className="mx-auto mt-1 max-w-[9rem] text-[10px] font-medium leading-tight text-neutral-600">
        {label}
      </div>
    </div>
  );
}
