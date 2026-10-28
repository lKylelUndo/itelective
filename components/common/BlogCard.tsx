import Link from "next/link";
import { BlogType } from "@/constants/blog";
import { format } from "date-fns";
import Image from "next/image";

const BlogCard = ({ blog }: { blog: BlogType }) => {
  const published = format(new Date(`${blog.publishedAt}T00:00:00`), "MMM d, yyyy");

  return (
    <article className="flex h-full flex-col border border-hairline bg-plate transition-colors hover:border-ink">
      <Link href={`/blogs/view/${blog.id}`} className="group flex flex-1 flex-col">
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-hairline">
          {blog.image ? (
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center bg-ember">
              <span className="font-display text-6xl font-semibold text-paper">
                {blog.title.charAt(0)}
              </span>
            </div>
          )}
        </div>

        <div className="p-5">
          <p className="font-mono text-[12px] text-urn">{published}</p>
          <h2 className="mt-2.5 font-display text-[1.35rem] font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-ember">
            {blog.title}
          </h2>
          <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-urn">
            {blog.description}
          </p>
        </div>
      </Link>

      <p className="border-t border-hairline px-5 py-3.5 font-mono text-[12px] text-urn">
        {blog.category?.join(", ")}
      </p>
    </article>
  );
};

export default BlogCard;
