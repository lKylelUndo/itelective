import BlogCard from "@/components/common/BlogCard";
import { blogsObj, BlogType } from "@/constants/blog";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogPageByDate({ params } : {params: Promise<{ date: string[] }>}) {
    const { date } = await params;

    // tinapolan
    const dateParam = date.join("-");

    const BLOGS = blogsObj.filter((blog: BlogType) => blog.publishedAt === dateParam)

    if (BLOGS.length === 0)
        notFound();

    return (
        <section className="px-6 mx-auto container pt-10">
            <Link href={"/blogs"} className="flex items-center gap-x-2"> <ArrowLeft/> Back To Blogs</Link>
            <div className="p-5 grid grid-cols-1 lg:grid-cols-3 gap-x-4  gap-y-4 mt-4">
                {BLOGS.map((blog: BlogType) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </section>
    )
}