import { projectsObj, ProjectType } from "@/constants/projects";
import ProjectCard from "../common/ProjectCard";

const HomeTopProjects = () => {
  const topProjects = projectsObj.slice(0, 3);

  return (
    <section className="mt-8 container mx-auto">
      <h1 className="text-center font-bold text-3xl">Top Projects</h1>
      <div className="grid lg:grid-cols-3 lg:p-0 p-4 md:grid-cols-2 gap-4 mt-12">
          {topProjects.map((project: ProjectType) => (
            <ProjectCard key={project.id} project={project} /> 
          ))}
      </div>
    </section>
  );
};

export default HomeTopProjects;
