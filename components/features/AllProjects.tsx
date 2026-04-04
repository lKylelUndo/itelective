import { projectsObj, ProjectType } from "@/constants/projects";
import ProjectCard from "../common/ProjectCard";

const AllProjects = () => {
  return (
    <section className="container mx-auto px-6 mt-8">
      <h1 className="text-center font-bold text-3xl">All Projects</h1>

      <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {projectsObj.map((project: ProjectType) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
