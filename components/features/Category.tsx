import { blogsObj, BlogType } from "@/constants/blog";
import BlogCard from "../common/BlogCard";
import { notFound } from "next/navigation";

const Category = ({ path }: { path: string[] }) => {

  const filteredBlogs = blogsObj.filter((blog: BlogType) => {
    if (!blog.category) return false;

    return path.every((segment) => blog.category?.includes(segment));
  });

  return (
    <section className="container mx-auto px-6">
      <h1 className="md:text-xl text-md font-semibold text-center mt-10">
        Category: {path}
      </h1>

      {filteredBlogs.length === 0 ? (
        notFound()
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Category;
