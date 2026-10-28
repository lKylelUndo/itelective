import Image from "next/image";
import Skill from "../common/Skill";
import { SKILL_GROUPS } from "@/constants/skills";

const AboutBanner = () => {
  return (
    <section className="wrap py-16 md:py-24">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 bg-ember"
            />
            <div className="relative border border-ink bg-plate p-3">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/profile3.jpg"
                  className="object-cover"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 400px"
                  alt="Portrait of Kyle Ando"
                />
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-hairline pt-3">
                <span className="font-mono text-[12px] text-urn">
                  student developer — full stack
                </span>
                <span className="size-2 bg-ember" aria-hidden />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="font-mono text-[13px] text-ink">
            <span className="text-ember">[</span> about{" "}
            <span className="text-ember">]</span>
          </p>

          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Who <em className="font-display-italic font-medium italic">am</em>{" "}
            I?
          </h1>

          <p className="mt-6 max-w-[58ch] text-[16px] leading-relaxed text-urn">
            Hi! I&rsquo;m Kyle Ando, a student developer passionate about
            building modern web applications and continuously learning new
            technologies. I enjoy working with JavaScript, React, and tools
            that help bring ideas to life through code. I&rsquo;m currently
            expanding my knowledge in full-stack development and always open to
            collaboration and new challenges.
          </p>
          <div className="mt-10 border-t border-hairline pt-8">
            <h2 className="font-mono text-[13px] text-urn">Tech stack</h2>

            <ul className="mt-2 divide-y divide-hairline">
              {SKILL_GROUPS.map((group) => (
                <li
                  key={group.category}
                  className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-6"
                >
                  <p className="font-mono text-[13px] text-ink">
                    <span className="text-ember">[</span> {group.category}{" "}
                    <span className="text-ember">]</span>
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((s) => (
                      <Skill key={s} skill={s} />
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
