import type { Metadata } from "next";
import { Benefits } from "@/components/Benefits";
import { Crops } from "@/components/Crops";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Beneficios",
  description:
    "Hasta 20% más de rentabilidad, reducción significativa de mermas y estandarización de calidad. Descubre los beneficios reales de Selekta en tu planta.",
  alternates: {
    canonical: "/beneficios",
  },
  openGraph: {
    title: "Beneficios | Selekta",
    description:
      "Hasta 20% más de rentabilidad, reducción significativa de mermas y estandarización de calidad. Descubre los beneficios reales de Selekta en tu planta.",
    url: "https://www.selektafood.com/beneficios",
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

export default function BeneficiosPage() {
  return (
    <>
      <Benefits />
      <Crops />
      <CTA />
    </>
  );
}
