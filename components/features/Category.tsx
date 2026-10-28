import { blogsObj, BlogType } from "@/constants/blog";
import BlogRow from "../common/BlogRow";
import CategoryButtons from "./CategoryButtons";
import { notFound } from "next/navigation";

const Category = ({ path }: { path: string[] }) => {
  const filteredBlogs = blogsObj.filter((blog: BlogType) => {
    if (!blog.category) return false;

    return path.every((segment) => blog.category?.includes(segment));
  });

  if (filteredBlogs.length === 0) notFound();

  const label = path.join(", ");
  const capitalized = label.charAt(0).toUpperCase() + label.slice(1);
  const countLine = `${filteredBlogs.length} ${filteredBlogs.length === 1 ? "entry" : "entries"}`;

  return (
    <section className="wrap py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[13px] text-ink">
            <span className="text-ember">[</span> journal — category{" "}
            <span className="text-ember">]</span>
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {capitalized}
            <span className="text-ember">.</span>
          </h1>
          <p className="mt-3 font-mono text-[12px] text-urn">{countLine}</p>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between gap-3 border-y border-hairline py-3">
        <CategoryButtons />
      </div>

      <div className="mt-4 border-t border-ink">
        {filteredBlogs.map((blog) => (
          <BlogRow key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Category;
