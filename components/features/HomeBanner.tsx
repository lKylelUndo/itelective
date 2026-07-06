import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const HomeBanner = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24">
      <div className="container px-6 mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:justify-between">
        <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight md:leading-none">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-600 bg-clip-text text-transparent">
              Modern Developer.
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Modern Code.
            </span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Hi, I'm Kyle Ando. I build highly optimized, secure, and modern web applications with a focus on SEO, performance, and clean design architecture.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
            <Button asChild size="lg" className="group shadow-sm">
              <Link href="/projects" className="flex items-center gap-2">
                Explore Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-sm">
              <Link href="/contact" className="flex items-center gap-2">
                Let's Talk <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end w-full max-w-[450px] lg:max-w-none">
          <div className="relative w-full aspect-square max-w-[420px] lg:max-w-[480px]">
            <Image
              src="/robotai.png"
              fill
              alt="Kyle Ando - Professional Developer Portfolio Illustration"
              priority
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
