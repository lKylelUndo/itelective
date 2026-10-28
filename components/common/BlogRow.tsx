import Link from "next/link";
import { BlogType } from "@/constants/blog";
import { format } from "date-fns";

const BlogRow = ({ blog }: { blog: BlogType }) => {
  const published = format(new Date(`${blog.publishedAt}T00:00:00`), "MMM d, yyyy");

  return (
    <Link
      href={`/blogs/view/${blog.id}`}
      className="group grid gap-1 border-b border-hairline py-5 transition-colors hover:bg-plate sm:grid-cols-[9rem_1fr_auto] sm:items-baseline sm:gap-6"
    >
      <p className="font-mono text-[12px] text-urn">{published}</p>
      <div>
        <h2 className="font-display text-[1.35rem] font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-ember sm:text-2xl">
          {blog.title}
        </h2>
        <p className="mt-1 line-clamp-1 text-sm text-urn">{blog.description}</p>
      </div>
      <p className="font-mono text-[12px] text-urn sm:justify-self-end sm:text-right">
        {blog.category?.join(", ")}
      </p>
    </Link>
  );
};

export default BlogRow;
