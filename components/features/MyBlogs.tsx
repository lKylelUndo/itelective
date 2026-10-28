import { BlogType } from "@/constants/blog";
import BlogCard from "../common/BlogCard";
import CategoryButtons from "./CategoryButtons";
import Pagination from "../common/Pagination";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const MyBlogs = ({
  blogs,
  page,
  totalPages,
}: {
  blogs: BlogType[];
  page: number;
  totalPages: number;
}) => {
  // The featured plate is a page-1 moment — it belongs to the newest entry.
  const isFirstPage = page === 1;
  const featured = isFirstPage ? blogs[0] : undefined;
  const rest = isFirstPage ? blogs.slice(1) : blogs;

  // Grid resolves to full rows for the actual slice size:
  // 2 items -> 2 columns, 3 items -> 3 columns.
  const gridClasses =
    rest.length === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";

  const featuredDate = featured
    ? format(new Date(`${featured.publishedAt}T00:00:00`), "MMMM d, yyyy")
    : "";

  return (
    <section className="wrap py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="font-mono text-[13px] text-ink">
          <span className="text-ember">[</span> journal{" "}
          <span className="text-ember">]</span>
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Milestones<span className="text-ember">.</span>
        </h1>
      </div>

      {/* filter strip — categories left, date right */}
      <div className="mt-10 flex items-center justify-between gap-3 border-y border-hairline py-3">
        <CategoryButtons />
      </div>

      {featured && (
        <Link
          href={`/blogs/view/${featured.id}`}
          className="group mt-10 grid border border-ink bg-plate md:grid-cols-2"
        >
          <div className="relative aspect-[16/10] w-full md:aspect-auto md:min-h-[340px]">
            {featured.image ? (
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center bg-ember">
                <span className="font-display text-7xl font-semibold text-paper">
                  {featured.title.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center p-6 md:p-10">
            <p className="font-mono text-[13px] text-ember">Latest entry</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-ember md:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-urn md:text-base">
              {featured.description}
            </p>
            <p className="mt-6 font-mono text-[12px] text-urn">
              {featuredDate} — {featured.category?.join(", ")}
            </p>
          </div>
        </Link>
      )}

      {/* remaining entries */}
      <div className={cn("mt-6 grid gap-6", gridClasses)}>
        {rest.map((blog: BlogType) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} basePath="/blogs" />
    </section>
  );
};

export default MyBlogs;
