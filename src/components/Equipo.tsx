import Image from "next/image";
import { Reveal } from "./Reveal";

const equipo = [
  {
    nombre: "Jorge Delgado",
    cargo: "COO - Chief Operating Officer",
    foto: "/assets/equipo/01_jorge-delgado.jpg",
  },
  {
    nombre: "Toniko Kuriyama",
    cargo: "CCO - Chief Commercial Officer",
    foto: "/assets/equipo/02_toniko-kuriyama.jpg",
  },
  {
    nombre: "Celeste Gayoso",
    cargo: "CFO - Chief Financial Officer",
    foto: "/assets/equipo/03_celeste-gayoso.jpg",
  },
];

export function Equipo() {
  return (
    <section id="equipo" className="relative overflow-hidden bg-white py-20">
      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-accent-800 sm:text-4xl">
              Equipo
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-brand-500 to-lime-brand" />
          </div>
        </Reveal>

        <ul className="grid gap-12 sm:grid-cols-3 sm:gap-8">
          {equipo.map(({ nombre, cargo, foto }, i) => (
            <Reveal key={nombre} delay={i * 100} as="li">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full shadow-lg ring-4 ring-brand-50">
                  <Image
                    src={foto}
                    alt={nombre}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 text-base font-bold text-accent-800">
                  {nombre}
                </h3>
                <p className="mt-1 max-w-[14rem] text-sm text-neutral-600">
                  {cargo}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
