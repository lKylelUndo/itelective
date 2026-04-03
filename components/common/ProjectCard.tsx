import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectType } from "@/constants/projects";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <Card>
      <CardHeader>
        <Image src={`${project.project_image}`} width={500} height={300} alt="Alt" className="h-47.5" priority />
        <CardTitle>{project.project_title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="leading-6 min-h-22.5">{project.project_description}</CardDescription>
        <div className="flex flex-wrap gap-2 w-78">
          {project.project_used_tools.map((tool, index) => (
            <CardDescription key={index}>
              <Button variant={"secondary"} size={"xs"}>
                {tool}
              </Button>
            </CardDescription>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <CardAction>
        
            <Link
              href={`${project.project_repository}`}
              target="_blank"
              className="flex items-center gap-x-2"
            >
             <Button> View Repository <ArrowRight /></Button>
            </Link>
         
        </CardAction>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
