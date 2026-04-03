export type BlogType = {
  id: string;
  image?: string;
  title: string;
  description: string;
  content: string;
  category?: string[];
  publishedAt: string;
};

export const blogsObj: BlogType[] = [
  {
    id: "1",
    image: "/coderelaychampion.jpg",
    title: "Code Relay Champion",
    description: "A journey of teamwork, pressure, and the moment we realized we could actually win.",
    content: "I still remember the tension in the room during the Code Relay competition. Each of us had a role, and every second counted. As the problems got harder, the pressure built—but so did our trust in each other. We weren’t just writing code; we were communicating, adapting, and pushing forward together. When we were finally announced as champions, it didn’t feel real at first. All the late nights, practice sessions, and small struggles led to that single moment. It reminded me that success is rarely individual—it’s built with people who push you to be better.",
    category: ["achievements", "technology"],
    publishedAt: "2026-03-19",
  },
  {
    id: "2",
    image: "/oopaward.jpg",
    title: "Code Relay Special Award OOP Architect",
    description: "An unexpected recognition that made me reflect on how far I’ve come as a developer.",
    content: "Winning the OOP Architect award was something I didn’t see coming. While others focused on speed, I found myself focusing on structure—how the code flowed, how everything connected, and how it could scale. When my name was called, I felt both proud and surprised. It made me realize that the small details I cared about actually mattered. This moment reminded me that growth isn’t always loud or obvious—sometimes, it quietly builds in the background until someone finally notices.",
    category: ["achievements", "technology"],
    publishedAt: "2026-03-19",
  },
  {
    id: "3",
    image: "/quizbowl.jpg",
    title: "Tech Quiz Bowl",
    description: "A fast-paced challenge that tested not just what I know, but how quickly I can think.",
    content: "The Tech Quiz Bowl was a completely different kind of challenge. No time to overthink—just listen, recall, and answer. Some questions felt easy, others completely caught me off guard. There were moments of doubt, especially when I missed answers I knew I should have gotten. But there were also moments of excitement when everything just clicked. It wasn’t just about winning—it was about discovering what I know, what I don’t, and how I respond under pressure. In the end, it pushed me to keep learning and stay curious.",
    category: ["experiences", "technology", "web"],
    publishedAt: "2026-03-20",
  },
];
