export type ProjectType = {
  id: string;
  project_image?: string;
  project_title: string;
  project_description: string;
  project_used_tools: string[];
  project_repository?: string;
};

export const projectsObj: ProjectType[] = [
  {
    id: "1",
    project_image: "/health.png",
    project_title: "Health Management System",
    project_description: "A comprehensive health management platform designed to streamline patient records, appointment scheduling, and real-time data tracking.",
    project_used_tools: ["React", "TailwindCSS", "ExpressJs", "MySQL", "Sequelize"],
    project_repository: "https://github.com/lKylelUndo/health-management-system"
  },

  {
    id: "2",
    project_image: "/kareramo.png",
    project_title: "KareraMO PH",
    project_description: "A job listing platform built with TypeScript, modern UI, and a robust backend for managing job data.",
    project_used_tools: ["NextJs", "TailwindCSS", "ExpressJs", "PostgreSQL", "Prisma"],
    project_repository: "https://github.com/lKylelUndo/hci-kareramo-web"
  },

  {
    id: "3",
    project_image: "/edukado.png",
    project_title: "Edukado",
    project_description: "Edukado provides quality and affordable education with modern facilities and expert lecturers.",
    project_used_tools: ["React", "TailwindCSS", "ExpressJs", "PostgreSQL", "Prisma"],
    project_repository: "https://github.com/lKylelUndo/school-enrollment-system",
  },
];
