import type { Metadata } from "next";
import { Productos } from "@/components/Productos";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Selekta opera en palta Hass, frijol chino, frijol castilla y pallar bebé. Resultados reales: toneladas recuperadas, mermas reducidas e impacto ambiental positivo.",
  alternates: {
    canonical: "/productos",
  },
  openGraph: {
    title: "Productos | Selekta",
    description:
      "Selekta opera en palta Hass, frijol chino, frijol castilla y pallar bebé. Resultados reales: toneladas recuperadas y mermas reducidas.",
    url: "https://www.selektafood.com/productos",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Selekta — Selección inteligente para la agroindustria",
      },
    ],
  },
};

export default function ProductosPage() {
  return (
    <>
      <Productos />
      <CTA />
    </>
  );
}
