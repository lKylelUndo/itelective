import MyBlogs from "@/components/features/MyBlogs";
import { blogsObj } from "@/constants/blog";
import { notFound } from "next/navigation";
import { parsePageParam } from "@/components/common/Pagination";

const PAGE_SIZE = 3;

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = parsePageParam(params?.page);

  // blogsObj is ordered newest-first — page 1 always opens on the latest entry.
  const totalPages = Math.ceil(blogsObj.length / PAGE_SIZE);
  if (page > totalPages) notFound();

  const start = (page - 1) * PAGE_SIZE;
  const paged = blogsObj.slice(start, start + PAGE_SIZE);

  return <MyBlogs blogs={paged} page={page} totalPages={totalPages} />;
}
