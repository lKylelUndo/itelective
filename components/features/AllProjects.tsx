import { projectsObj, ProjectType } from "@/constants/projects"
import ProjectCard from "../common/ProjectCard"

const AllProjects = () => {
  return (
     <section className="mt-8 container mx-auto">
      <h1 className="text-center font-bold text-3xl">All Projects</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 mt-12">
          {projectsObj.map((project: ProjectType) => (
            <ProjectCard key={project.id} project={project} /> 
          ))}
      </div>
    </section>
  )
}

export default AllProjects