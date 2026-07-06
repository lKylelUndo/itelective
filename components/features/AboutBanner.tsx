import { Info } from "lucide-react";
import Image from "next/image";
import Skill from "../common/Skill";
import { SKILLS } from "@/constants/skills";

const AboutBanner = () => {
  return (
    <section className="mx-auto py-12 md:py-16 lg:py-20 container px-6">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        {/* Profile Card Container */}
        <div className="relative w-full max-w-[340px] aspect-square rounded-2xl overflow-hidden border border-border bg-card p-3 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src="/profile3.jpg"
              className="object-cover"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 340px"
              alt="Kyle Ando - Professional Profile Portrait"
            />
          </div>
        </div>

        {/* About Details */}
        <div className="flex-1 max-w-2xl text-center lg:text-left space-y-6">
          <h1 className="text-3xl font-extrabold tracking-tight flex items-center justify-center lg:justify-start gap-x-3 text-primary">
            <Info className="h-6 w-6 text-indigo-600" /> Who Am I?
          </h1>
  
          <p className="text-muted-foreground text-base leading-relaxed text-justify">
            Hi! I'm Kyle Ando, a student developer passionate about building modern web
            applications and continuously learning new technologies. I enjoy
            working with JavaScript, React, and tools that help bring ideas to
            life through code. I'm currently expanding my knowledge in
            full-stack development and always open to collaboration and new
            challenges.
          </p>
  
          <div className="space-y-4 pt-4 border-t border-border">
            <h2 className="text-xl font-bold tracking-tight text-primary">
              Tech Stack
            </h2>
  
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 max-w-lg">
              {SKILLS.map((s, index) => (
                <Skill key={index} skill={s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
