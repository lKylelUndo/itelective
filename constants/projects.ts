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
    project_title: "AlumnAI",
    project_description: "A full-stack platform connecting students and alumni with real-time mentorship, collaboration matchmaking, profile verification, and admin management.",
    project_used_tools: ["NextJs", "TailwindCSS", "ExpressJs", "PostgreSQL", "Prisma", "Redis", "SocketIO"],
    project_repository: "https://github.com/lKylelUndo/alumnai",
  },
  {
    id: "2",
    project_title: "RecitReady",
    project_description: "An AI-powered oral recitation and academic Q&A simulator with AI teacher personalities, timed drills, adaptive follow-up questions, and performance feedback.",
    project_used_tools: ["NextJs", "TailwindCSS", "ExpressJs", "PostgreSQL", "Prisma", "Gemini AI"],
    project_repository: "https://github.com/lKylelUndo/recitready",
  },
];
