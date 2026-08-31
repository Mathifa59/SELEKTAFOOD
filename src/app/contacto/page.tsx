import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Solicita una demo personalizada de Selekta. Un especialista se comunicará contigo en menos de 24 horas para analizar tu operación.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto | Selekta",
    description:
      "Solicita una demo personalizada de Selekta. Un especialista se comunicará contigo en menos de 24 horas para analizar tu operación.",
    url: "https://www.selektafood.com/contacto",
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

export default function ContactoPage() {
  return <ContactForm />;
}
