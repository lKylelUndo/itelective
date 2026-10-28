import BlogRow from "@/components/common/BlogRow";
import { blogsObj, BlogType } from "@/constants/blog";
import Link from "next/link";
import { format } from "date-fns";
import { notFound } from "next/navigation";

export default async function BlogPageByDate({ params } : {params: Promise<{ date: string[] }>}) {
    const { date } = await params;

    // tinapolan
    const dateParam = date.join("-");

    const BLOGS = blogsObj.filter((blog: BlogType) => blog.publishedAt === dateParam)

    if (BLOGS.length === 0)
        notFound();

    const label = format(new Date(`${dateParam}T00:00:00`), "MMMM d, yyyy");

    return (
        <section className="wrap py-16 md:py-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p className="font-mono text-[13px] text-ink">
                        <span className="text-ember">[</span> journal — by date{" "}
                        <span className="text-ember">]</span>
                    </p>
                    <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                        {label}<span className="text-ember">.</span>
                    </h1>
                    <p className="mt-3 font-mono text-[12px] text-urn">
                        {BLOGS.length} {BLOGS.length === 1 ? "entry" : "entries"}
                    </p>
                </div>
                <Link
                    href="/blogs"
                    className="font-mono text-[13px] text-ink underline decoration-ember decoration-2 underline-offset-4 transition-colors hover:text-ember"
                >
                    Back to journal
                </Link>
            </div>

            <div className="mt-10 border-t border-ink">
                {BLOGS.map((blog: BlogType) => (
                    <BlogRow key={blog.id} blog={blog} />
                ))}
            </div>
        </section>
    )
}
