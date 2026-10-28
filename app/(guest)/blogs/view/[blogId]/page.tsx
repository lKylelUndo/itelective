import { blogsObj } from "@/constants/blog";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ViewSingleBlogPage({ params}: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;

  const blog = blogsObj.find((b) => b.id === blogId);

  if (!blog) {
    notFound();
  }

  const published = format(new Date(`${blog.publishedAt}T00:00:00`), "MMMM d, yyyy");

  return (
    <article className="wrap py-16 md:py-24">
      <div className="mx-auto max-w-[68ch]">
        <Link
          href="/blogs"
          className="font-mono text-[13px] text-ink underline decoration-ember decoration-2 underline-offset-4 transition-colors hover:text-ember"
        >
          Back to journal
        </Link>

        <header className="mt-10">
          <p className="font-mono text-[13px] text-urn">{published}</p>
          {blog.category && blog.category.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
              {blog.category.map((category) => (
                <Link
                  key={category}
                  href={`/categories/${category}`}
                  className="font-mono text-[13px] text-ember underline underline-offset-4 transition-colors hover:text-ink"
                >
                  {category}
                </Link>
              ))}
            </div>
          )}
          <h1 className="mt-5 font-display text-[clamp(2.1rem,4.5vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.01em] text-ink">
            {blog.title}
          </h1>
          <p className="mt-5 border-l-2 border-ember pl-5 text-lg leading-relaxed text-urn">
            {blog.description}
          </p>
        </header>

        {blog.image && (
          <figure className="mt-10 border border-ink bg-plate p-3">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 640px"
                className="object-cover"
              />
            </div>
          </figure>
        )}

        <div className="mt-10 border-t border-hairline pt-10">
          <p className="text-[17px] leading-[1.75] text-ink">{blog.content}</p>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-2 border-t-2 border-ink pt-5">
          <p className="font-mono text-[12px] text-urn">Written by Kyle Ando</p>
          <p className="font-mono text-[12px] text-urn">
            end of entry <span className="text-ember">■</span>
          </p>
        </div>
      </div>
    </article>
  );
}
