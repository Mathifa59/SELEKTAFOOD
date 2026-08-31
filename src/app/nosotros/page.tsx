import type { Metadata } from "next";
import { Nosotros } from "@/components/Nosotros";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Somos una empresa peruana que optimiza la selección de frutas en plantas agroexportadoras. Conoce nuestra misión, visión y el equipo detrás de Selekta.",
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: "Nosotros | Selekta",
    description:
      "Somos una empresa peruana que optimiza la selección de frutas en plantas agroexportadoras. Conoce nuestra misión, visión y el equipo detrás de Selekta.",
    url: "https://www.selektafood.com/nosotros",
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

export default function NosotrosPage() {
  return (
    <>
      <Nosotros />
      <CTA />
    </>
  );
}
