export type ProjectType = {
  id: string;
  project_image?: string;
  project_title: string;
  project_description: string;
  project_used_tools: string[];
  project_repository?: string;
  project_live_url?: string;
  flagship?: boolean;
};

export const projectsObj: ProjectType[] = [
  {
    id: "1",
    project_image: "/dqcs.jpg",
    project_title: "Data Quality Detective",
    project_description: "A data quality analysis system that scans uploaded CSV datasets against six DQM principles, classifies issues by severity, and computes an overall quality score.",
    project_used_tools: ["NextJs", "TailwindCSS", "PWA"],
    project_repository: "https://github.com/lKylelUndo/dqcs",
    project_live_url: "https://dqcs.vercel.app/",
  },
  {
    id: "2",
    project_image: "/alumnai.jpg",
    project_title: "AlumnAI",
    project_description: "A full-stack platform connecting students and alumni with real-time mentorship, collaboration matchmaking, profile verification, and admin management.",
    project_used_tools: ["NextJs", "TailwindCSS", "ExpressJs", "PostgreSQL", "Prisma", "Redis", "SocketIO"],
    project_repository: "https://github.com/lKylelUndo/alumnai",
    project_live_url: "https://www.alumnaicpc.online/",
    flagship: true,
  },
  {
    id: "3",
    project_image: "/recitready.jpg",
    project_title: "RecitReady",
    project_description: "An AI-powered oral recitation and academic Q&A simulator with AI teacher personalities, timed drills, adaptive follow-up questions, and performance feedback.",
    project_used_tools: ["NextJs", "TailwindCSS", "ExpressJs", "PostgreSQL", "Prisma", "Gemini AI"],
    project_repository: "https://github.com/lKylelUndo/recitready",
    project_live_url: "https://recit-ready.vercel.app/",
    flagship: true,
  },
];
