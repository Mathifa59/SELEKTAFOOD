import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { SITE_URL, formatDate, getPost, posts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { ShareButtons } from "@/components/ShareButtons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = {
    url: post.ogImage.src,
    width: post.ogImage.width,
    height: post.ogImage.height,
    alt: post.title,
  };

  return {
    title: post.title,
    description: post.shareDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      locale: "es_PE",
      siteName: "Selekta",
      title: post.title,
      description: post.shareDescription,
      url,
      publishedTime: post.date,
      authors: [post.author.name],
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.shareDescription,
      images: [post.ogImage.src],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const others = posts.filter((p) => p.slug !== post.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.shareDescription,
    image: `${SITE_URL}${post.ogImage.src}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Selekta",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/SELEKTA_fondo_blanco.png`,
      },
    },
    mainEntityOfPage: url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-brand-50/80 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
            <Image
              src={post.cover.src}
              alt={post.title}
              fill
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>

          <header className="mt-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold text-brand-700 ring-1 ring-brand-100">
              <Tag className="h-3 w-3" />
              {post.category}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-accent-800 sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-500">
              <span>{formatDate(post.date)}</span>
              <span className="h-1 w-1 rounded-full bg-neutral-300" />
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime} lectura
              </span>
              <span className="h-1 w-1 rounded-full bg-neutral-300" />
              <span>
                Por {post.author.name}, {post.author.role}
              </span>
            </div>
          </header>

          <div className="mt-10 space-y-5 text-base leading-8 text-neutral-700">
            {post.body.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="pt-5 text-xl font-bold tracking-tight text-accent-800 sm:text-2xl"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul
                    key={i}
                    className="list-disc space-y-3 pl-6 marker:text-brand-500"
                  >
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i}>{block.text}</p>;
            })}
          </div>

          {post.sources && (
            <section className="mt-12 border-t border-neutral-200 pt-8">
              <h2 className="text-xl font-bold tracking-tight text-accent-800 sm:text-2xl">
                Fuentes
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-6 text-sm leading-relaxed text-neutral-600 marker:text-brand-500">
                {post.sources.map((source) => (
                  <li key={source.url}>
                    {source.text}{" "}
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all font-medium text-brand-600 underline underline-offset-2 transition-colors hover:text-brand-700"
                    >
                      {source.url}
                      <span className="sr-only"> (se abre en una pestaña nueva)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-10 border-t border-neutral-200 pt-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Compartir este artículo
            </p>
            <ShareButtons url={url} title={post.title} />
          </div>
        </div>
      </article>

      <CTA />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="mb-10 text-2xl font-extrabold tracking-tight text-accent-800 sm:text-3xl">
              Sigue leyendo
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-4xl">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={i * 100}>
                <BlogCard post={other} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-all duration-300 hover:text-brand-700"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Volver al blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
