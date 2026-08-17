import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsappFab } from "@/components/WhatsappFab";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.selektafood.com"),
  title: {
    default: "Selekta — Selección inteligente para la agroindustria",
    template: "%s | Selekta",
  },
  description:
    "Selekta automatiza la clasificación de frutas y hortalizas con tecnología de clasificación inteligente. Reduce mermas, mejora calidad y aumenta la rentabilidad de tu planta hasta en 20%.",
  keywords: [
    "selección de frutas",
    "clasificación automática",
    "clasificación inteligente agroindustria",
    "reducción de mermas",
    "selección de paltas",
    "selección de frijoles",
    "tecnología agroindustrial",
    "selekta",
    "selektafood",
    "agroexportación",
  ],
  authors: [{ name: "Selekta", url: "https://www.selektafood.com" }],
  creator: "Selekta",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Selekta — Selección inteligente para la agroindustria",
    description:
      "Sistemas de selección automatizada que clasifican frutas con precisión superior al humano, reduciendo merma y aumentando rentabilidad hasta en 20%.",
    type: "website",
    locale: "es_PE",
    url: "https://www.selektafood.com",
    siteName: "Selekta",
    images: [
      {
        url: "/assets/SELEKTA_fondo_blanco.png",
        width: 1200,
        height: 630,
        alt: "Selekta — Selección inteligente para la agroindustria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selekta — Selección inteligente para la agroindustria",
    description:
      "Automatización inteligente que clasifica frutas con precisión superior al humano, reduciendo merma hasta en 20%.",
    images: ["/assets/SELEKTA_fondo_blanco.png"],
  },
  verification: {
    google: "xQAhWW4PCL3oz7zIGSYw58O2Dmhux9ZTYnsMH1-OGWA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[var(--foreground)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsappFab />
      </body>
    </html>
  );
}
