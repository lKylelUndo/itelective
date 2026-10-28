export type SkillGroupType = {
  category: string;
  skills: string[];
};

export const SKILL_GROUPS: SkillGroupType[] = [
  {
    category: "frontend",
    skills: ["Nextjs", "React"],
  },
  {
    category: "backend",
    skills: [
      "Nodejs",
      "Expressjs",
      "Laravel API",
      "MySQL",
      "PostgreSQL",
      "Prisma",
      "Upstash",
      "Redis",
      "JWT",
    ],
  },
  {
    category: "ai stack",
    skills: ["OpenCode CLI", "Cline", "Google AI"],
  },
  {
    category: "tools & collaboration",
    skills: ["Git", "GitHub", "VS Code", "Antigravity", "Cursor", "Figma"],
  },
];

// Flat list kept in sync with the groups for any simple consumption.
export const SKILLS = SKILL_GROUPS.flatMap((group) => group.skills);
