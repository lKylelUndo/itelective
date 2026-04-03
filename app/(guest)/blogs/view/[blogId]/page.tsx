import { blogsObj } from "@/constants/blog";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ViewSingleBlogPage({ params}: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;

  const blog = blogsObj.find((b) => b.id === blogId);

  if (!blog) {
    notFound();
  }

  return (
    <section className="container mx-auto px-6">
      <div className="mt-10">
        <Link href={"/blogs"}>
          <ArrowLeft className="inline" /> Back to Blogs
        </Link>
      </div>

      <div className="bg-background mx-auto dark:bg-card rounded-lg max-w-3xl mt-6 shadow p-8 space-y-4">
        <div className="text-xs text-muted-foreground">
          {blog.publishedAt}
          {blog.category?.length ? ` • ${blog.category.join(" / ")}` : ""}
        </div>
        <Image src={`${blog.image}`} alt="s" height={400} width={400} className="mx-auto rounded" />
        <h1 className="text-2xl font-semibold text-center">{blog.title}</h1>
        <p className="text-muted-foreground text-center">{blog.description}</p>

        <article className="leading-7 text-[16px] text-justify mt-10">{blog.content}</article>
      </div>
    </section>
  );
}