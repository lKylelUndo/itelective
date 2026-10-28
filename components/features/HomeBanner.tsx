import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HomeBanner = () => {
  return (
    <section className="wrap py-16 md:py-24">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <h1 className="font-display text-[clamp(2.9rem,7vw,4.6rem)] font-semibold leading-[1.04] tracking-[-0.015em] text-ink">
            <span
              className="press-rise block"
              style={{ animationDelay: "80ms" }}
            >
              Modern{" "}
              <em className="font-display-italic font-medium italic">
                Developer
              </em>
              <span className="text-ember">.</span>
            </span>
            <span
              className="press-rise mt-1 block md:pl-[2ch]"
              style={{ animationDelay: "160ms" }}
            >
              Modern{" "}
              <em className="font-display-italic font-medium italic">Code</em>
              <span className="text-ember">.</span>
            </span>
          </h1>

          <p
            className="press-rise mt-8 max-w-[50ch] text-[17px] leading-relaxed text-urn"
            style={{ animationDelay: "240ms" }}
          >
            Hi, I&rsquo;m Kyle Ando. I build optimized, secure, modern web
            applications with a focus on performance, SEO, and clean design
            architecture.
          </p>

          <div
            className="press-rise mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "320ms" }}
          >
            <Button asChild size="lg" className="px-7">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-7">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div
            className="press-rise relative mx-auto w-full max-w-md lg:rotate-1 lg:max-w-none"
            style={{ animationDelay: "200ms" }}
          >
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 bg-ember"
            />
            <div className="relative border border-ink bg-plate p-4 md:p-5">
              <div className="relative aspect-square w-full">
                <Image
                  src="/robotai.png"
                  fill
                  alt="Illustration of a 3D robot, the developer's mascot"
                  priority
                  sizes="(max-width: 1024px) 90vw, 400px"
                  className="object-contain"
                />
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-hairline pt-3">
                <span className="font-mono text-[12px] text-urn">specimen</span>
                <span className="size-2 bg-ember" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
