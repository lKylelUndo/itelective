import { projectsObj } from "@/constants/projects";
import ProjectCard from "../common/ProjectCard";
import Link from "next/link";

const HomeTopProjects = () => {
  const topProjects = projectsObj.slice(0, 3);

  return (
    <section className="border-t border-hairline">
      <div className="wrap py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[13px] text-ink">
              <span className="text-ember">[</span> selected work{" "}
              <span className="text-ember">]</span>
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Flagship builds<span className="text-ember">.</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="font-mono text-[13px] text-ink underline decoration-ember decoration-2 underline-offset-4 transition-colors hover:text-ember"
          >
            All projects
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {topProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTopProjects;
