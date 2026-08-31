import Image from "next/image";
import { Scale, Sprout, Leaf } from "lucide-react";
import { Reveal } from "./Reveal";

type Producto = {
  cultivo: string;
  img: string;
  metrics: {
    procesado: string;
    mermas: string;
    co2: string;
  };
};

const productos: Producto[] = [
  {
    cultivo: "Palta Hass",
    img: "/assets/paltas.jpg",
    metrics: {
      procesado: "+150 toneladas",
      mermas: "hasta 15%",
      co2: "+30 tn CO₂e",
    },
  },
  {
    cultivo: "Frijol chino",
    img: "/assets/FOTO FRIJOL CHINO 002.jpg",
    metrics: {
      procesado: "+80 toneladas",
      mermas: "hasta 12%",
      co2: "+20 tn CO₂e",
    },
  },
  {
    cultivo: "Frijol Castilla",
    img: "/assets/FRIJOL CASTILLA 002.jpg",
    metrics: {
      procesado: "25 toneladas",
      mermas: "hasta 9%",
      co2: "+8 tn CO₂e",
    },
  },
  {
    cultivo: "Pallar Bebé",
    img: "/assets/FOTO PALLAR 002.jpg",
    metrics: {
      procesado: "30 toneladas",
      mermas: "hasta 11%",
      co2: "+10 tn CO₂e",
    },
  },
];

export function Productos() {
  return (
    <section
      id="productos"
      className="relative overflow-hidden bg-cover bg-center bg-fixed py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(251,250,246,0.92), rgba(245,242,232,0.9)), url('/assets/CULTIVO DE PALTA.jpg')",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(62,166,70,0.15)_1px,transparent_0)] [background-size:28px_28px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 ring-1 ring-brand-100">
              Productos
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-accent-800 sm:text-4xl lg:text-5xl">
              Cultivos donde ya{" "}
              <span className="text-gradient-brand">generamos resultados</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-600">
              Hemos validado nuestra tecnología en distintos cultivos, logrando
              mejoras medibles en eficiencia, reducción de mermas e impacto
              ambiental.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productos.map((p, i) => (
            <Reveal key={p.cultivo} delay={i * 100}>
              <article className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.cultivo}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-900/70 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="text-lg font-extrabold text-white">
                      {p.cultivo}
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <ul className="flex flex-1 flex-col gap-3">
                    <MetricRow
                      icon={Scale}
                      label="Cantidad procesada"
                      value={p.metrics.procesado}
                    />
                    <MetricRow
                      icon={Sprout}
                      label="Mermas reducidas"
                      value={p.metrics.mermas}
                    />
                    <MetricRow
                      icon={Leaf}
                      label="CO₂ reducido"
                      value={p.metrics.co2}
                    />
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  const isPending = value === "En medición";
  return (
    <li className="flex items-center gap-3 rounded-xl bg-neutral-50 p-3 ring-1 ring-neutral-100">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 ring-1 ring-brand-100">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
          {label}
        </div>
        <div
          className={`text-sm font-bold ${
            isPending ? "text-neutral-400" : "text-accent-800"
          }`}
        >
          {value}
        </div>
      </div>
    </li>
  );
}
