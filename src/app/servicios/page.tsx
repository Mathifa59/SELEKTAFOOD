import type { Metadata } from "next";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Automatizamos la clasificación de frutas y hortalizas en tiempo real con cámaras de alta resolución. Implementación rápida, adaptable a cualquier cultivo.",
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    title: "Servicios | Selekta",
    description:
      "Automatizamos la clasificación de frutas y hortalizas en tiempo real con cámaras de alta resolución. Implementación rápida, adaptable a cualquier cultivo.",
    url: "https://www.selektafood.com/servicios",
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

export default function ServiciosPage() {
  return (
    <>
      <Services />
      <HowItWorks />
      <CTA />
    </>
  );
}
