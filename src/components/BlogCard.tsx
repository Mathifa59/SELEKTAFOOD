import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { formatDate, type Post } from "@/lib/blog";

export function BlogCard({ post }: { post: Post }) {
  const href = `/blog/${post.slug}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 card-lift">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={post.cover.src}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-accent-900/50 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-brand-700 ring-1 ring-brand-200 backdrop-blur-sm">
          <Tag className="h-2.5 w-2.5" />
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3 text-[11px] text-neutral-500">
          <span>{formatDate(post.date)}</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime} lectura
          </span>
        </div>

        <h3 className="text-sm font-bold leading-snug text-accent-800 transition-colors duration-300 group-hover:text-brand-700">
          {post.title}
        </h3>

        <p className="mt-3 flex-1 text-xs leading-relaxed text-neutral-600">
          {post.excerpt}
        </p>

        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 transition-all duration-300 hover:gap-2.5 hover:text-brand-700"
        >
          Leer artículo
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
