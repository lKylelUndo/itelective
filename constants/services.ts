import { Server, Code, Cloud, MessageCircle, LucideIcon } from "lucide-react";

export type ServicesTypes = {
    title: string,
    description: string,
    icon?: any;
}

export const services = [
  {
    title: "Consultation",
    description:
      "Get expert guidance on architecture, scalability, and best practices for your projects.",
    icon: MessageCircle,
  },
  {
    title: "Backend Development",
    description:
      "Build scalable APIs and systems using Express.js and NestJS with clean architecture.",
    icon: Server,
  },
  {
    title: "Frontend Development",
    description:
      "Modern UI development using React and Next.js with performance and SEO in mind.",
    icon: Code,
  },
  {
    title: "DevOps",
    description:
      "CI/CD pipelines, Docker, cloud deployments, and infrastructure optimization.",
    icon: Cloud,
  },
];