import type { Metadata } from "next";
import { Blog } from "@/components/Blog";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre innovación agroindustrial, reducción de mermas y sistemas de selección automatizada aplicados al campo.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Selekta",
    description:
      "Artículos sobre innovación agroindustrial, reducción de mermas y sistemas de selección automatizada aplicados al campo.",
    url: "https://www.selektafood.com/blog",
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

export default function BlogPage() {
  return (
    <>
      <Blog />
      <CTA />
    </>
  );
}
