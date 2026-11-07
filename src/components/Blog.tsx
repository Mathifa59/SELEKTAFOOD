import { posts } from "@/lib/blog";
import { Reveal } from "./Reveal";
import { BlogCard } from "./BlogCard";

export function Blog() {
  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-white py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-brand-50/80 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 ring-1 ring-brand-100">
              Blog
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-accent-800 sm:text-4xl lg:text-5xl">
              Contenido que{" "}
              <span className="text-gradient-brand">suma</span>
            </h1>
            <p className="mt-3 max-w-xl text-sm text-neutral-600">
              Artículos sobre innovación agroindustrial, reducción de mermas
              y tecnología aplicada al campo.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
