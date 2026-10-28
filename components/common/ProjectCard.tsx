import { ProjectType } from "@/constants/projects";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const footerLinkClasses =
  "inline-flex items-center gap-2 font-mono text-[13px] text-ink underline decoration-ember decoration-2 underline-offset-4 transition-colors hover:text-ember";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  // Deterministic plate pairing: odd ids get the ember field, even get ink.
  const isEmberPlate = Number(project.id) % 2 === 1;

  return (
    <article className="relative h-full">
      {/* misregistration offset plate */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 translate-x-2.5 translate-y-2.5",
          isEmberPlate ? "bg-ink" : "bg-ember"
        )}
      />

      <div className="relative flex h-full flex-col border border-ink bg-plate">
        {/* cover — the real screenshot when it exists, the typographic plate otherwise */}
        {project.project_image ? (
          <div className="relative aspect-[12/5] w-full border-b border-hairline">
            <Image
              src={project.project_image}
              alt={`${project.project_title} product screenshot`}
              fill
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, 536px"
              className="object-cover"
            />
          </div>
        ) : (
          <div
            className={cn(
              "relative aspect-[4/3] w-full",
              isEmberPlate ? "bg-ember" : "bg-ink"
            )}
          >
            <p className="absolute left-6 top-6 font-mono text-[13px] text-paper">
              {project.project_used_tools[0]}
            </p>
            <p className="absolute bottom-5 left-6 right-6 font-display text-[clamp(2.25rem,3.2vw,3.25rem)] font-semibold leading-none tracking-tight text-paper">
              {project.project_title}
              <span aria-hidden>.</span>
            </p>
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          {/* the title lives on the typographic cover; with a screenshot cover it moves here */}
          {project.project_image && (
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
              {project.project_title}
            </h3>
          )}

          <p
            className={cn(
              "text-[15px] leading-relaxed text-urn",
              project.project_image && "mt-2.5"
            )}
          >
            {project.project_description}
          </p>

          <ul className="mb-6 mt-5 flex flex-wrap gap-2">
            {project.project_used_tools.map((tool) => (
              <li
                key={tool}
                className="border border-hairline bg-paper px-2.5 py-1 font-mono text-[12px] text-ink"
              >
                {tool}
              </li>
            ))}
          </ul>

          <div className="mt-auto border-t border-hairline pt-4">
            {project.project_live_url ? (
              <a
                href={project.project_live_url}
                target="_blank"
                rel="noreferrer"
                className={footerLinkClasses}
              >
                <Globe className="size-4" aria-hidden /> Live
              </a>
            ) : project.project_repository ? (
              <a
                href={project.project_repository}
                target="_blank"
                rel="noreferrer"
                className={footerLinkClasses}
              >
                <Github className="size-4" aria-hidden /> Repository
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
