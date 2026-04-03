import { Info } from "lucide-react";
import Image from "next/image";
import Skill from "../common/Skill";
import { SKILLS } from "@/constants/skills";

const AboutBanner = () => {
  return (
    <section className="mx-auto mt-16 container">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-x-6 lg:gap-y-0 gap-y-16">
        <div className="lg:bg-slate-950 lg:h-135 lg:p-6 md:p-0 p-2 lg:m-0 mt-12 rounded-lg">
          <Image
            src={"/profile3.jpg"}
            className="rounded lg:block -mt-12 mx-auto"
            width={400}
            height={400}
            alt="test"
          />
        </div>
        <div className="flex-1 max-w-150 lg:m-0 mx-auto">
          <h1 className="text-xl font-bold flex items-center lg:justify-start justify-center-safe gap-x-2.5">
            <Info /> Who Am I?
          </h1>
  
          <div className="mt-8 md:p-0 p-4">
            <p className="text-wrap text-justify md:text-sm text-[12.5px] leading-8">
              Hi! I'm Kyle Ando a student developer passionate about building modern web
              applications and continuously learning new technologies. I enjoy
              working with JavaScript, React, and tools that help bring ideas to
              life through code. I'm currently expanding my knowledge in
              full-stack development and always open to collaboration and new
              challenges.
            </p>
  
            <div className="mt-10">
              <h1 className="text-lg lg:text-left text-center font-bold">
                Tech Stack
              </h1>
  
              <div className="space-x-2 space-y-2 lg:w-100 mt-4">
                {SKILLS.map((s, index) => (
                  <Skill key={index} skill={s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
