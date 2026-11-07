"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const logos = [
  { nombre: "EIT Climate-KIC", src: "/assets/supported-by/01_eit-climate-kic.png", width: 577, height: 200 },
  { nombre: "Tecnológico de Monterrey", src: "/assets/supported-by/02_tec-de-monterrey.png", width: 642, height: 183 },
  { nombre: "GIZ - Deutsche Gesellschaft für Internationale Zusammenarbeit", src: "/assets/supported-by/03_giz.png", width: 539, height: 150 },
  { nombre: "ADEX - Asociación de Exportadores", src: "/assets/supported-by/04_adex.png", width: 569, height: 200 },
  { nombre: "Laboratoria", src: "/assets/supported-by/05_laboratoria.png", width: 571, height: 134 },
  { nombre: "Ministerio de la Producción", src: "/assets/supported-by/06_ministerio-de-la-produccion.png", width: 879, height: 200 },
];

const arrowClass =
  "absolute top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-600 shadow-md ring-1 ring-black/10 transition-colors hover:text-brand-700";

export function SupportedBy() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateArrows();
    const observer = new ResizeObserver(updateArrows);
    observer.observe(el);
    el.addEventListener("scroll", updateArrows, { passive: true });
    return () => {
      observer.disconnect();
      el.removeEventListener("scroll", updateArrows);
    };
  }, [updateArrows]);

  function scrollByPage(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.7, behavior: "smooth" });
  }

  return (
    <section
      id="supported-by"
      aria-labelledby="supported-by-title"
      className="bg-white pb-20 pt-4"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2
          id="supported-by-title"
          className="text-center text-lg font-bold text-accent-800"
        >
          Supported by:
        </h2>

        <div className="relative mt-10">
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scrollByPage(-1)}
              aria-label="Ver logos anteriores"
              className={`${arrowClass} left-0`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          <div
            ref={scrollerRef}
            tabIndex={0}
            role="region"
            aria-label="Organizaciones que respaldan a Selekta"
            className="overflow-x-auto scroll-smooth [scrollbar-width:none] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 [&::-webkit-scrollbar]:hidden"
          >
            <ul className="mx-auto flex w-max items-center gap-8 px-4 py-2 lg:gap-10">
              {logos.map(({ nombre, src, width, height }) => (
                <li key={nombre} className="flex-none">
                  <Image
                    src={src}
                    alt={nombre}
                    width={width}
                    height={height}
                    sizes="240px"
                    className="h-10 w-auto sm:h-11"
                  />
                </li>
              ))}
            </ul>
          </div>

          {canScrollRight && (
            <button
              type="button"
              onClick={() => scrollByPage(1)}
              aria-label="Ver más logos"
              className={`${arrowClass} right-0`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
