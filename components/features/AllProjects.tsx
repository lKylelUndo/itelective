import { ProjectType } from "@/constants/projects";
import ProjectCard from "../common/ProjectCard";
import Pagination from "../common/Pagination";

const AllProjects = ({
  projects,
  page,
  totalPages,
}: {
  projects: ProjectType[];
  page: number;
  totalPages: number;
}) => {
  return (
    <section className="wrap py-16 md:py-24">
      <p className="font-mono text-[13px] text-ink">
        <span className="text-ember">[</span> projects{" "}
        <span className="text-ember">]</span>
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
        All projects<span className="text-ember">.</span>
      </h1>
      <p className="mt-5 max-w-[55ch] text-[16px] leading-relaxed text-urn">
        Two builds that taught me the most — full-stack platforms designed,
        engineered, and shipped end to end.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} basePath="/projects" />
    </section>
  );
};

export default AllProjects;
