import AllProjects from "@/components/features/AllProjects";
import { projectsObj } from "@/constants/projects";
import { notFound } from "next/navigation";
import { parsePageParam } from "@/components/common/Pagination";

const PAGE_SIZE = 4;

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = parsePageParam(params?.page);

  const totalPages = Math.ceil(projectsObj.length / PAGE_SIZE);
  if (page > totalPages) notFound();

  const start = (page - 1) * PAGE_SIZE;
  const paged = projectsObj.slice(start, start + PAGE_SIZE);

  return <AllProjects projects={paged} page={page} totalPages={totalPages} />;
}
