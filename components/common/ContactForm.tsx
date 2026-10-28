import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const linkCardClasses =
  "inline-flex items-center gap-2 border border-ink bg-plate px-4 py-2 text-sm text-ink transition-colors hover:bg-ink hover:text-paper";

const ContactForm = () => {
  return (
    <section className="wrap py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="font-mono text-[13px] text-ink">
            <span className="text-ember">[</span> contact{" "}
            <span className="text-ember">]</span>
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.8rem)] font-semibold leading-[1.06] tracking-tight text-ink">
            Discuss your{" "}
            <em className="font-display-italic font-medium italic">
              technological
            </em>{" "}
            needs<span className="text-ember">.</span>
          </h1>
          <p className="mt-6 max-w-[46ch] text-[16px] leading-relaxed text-urn">
            Have a project, a question, or an idea worth building? Send a note.
          </p>

          <div className="mt-12 border-t-2 border-ink">
            <div className="grid gap-2 border-b border-hairline py-5 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-6">
              <p className="flex items-center gap-2 font-mono text-[13px] text-urn">
                <Mail className="size-4 text-ember" aria-hidden /> Email
              </p>
              <a
                href="mailto:ando.kyle44@gmail.com"
                className="break-all text-[15px] text-ink underline decoration-ember decoration-2 underline-offset-4 transition-colors hover:text-ember"
              >
                ando.kyle44@gmail.com
              </a>
            </div>

            <div className="grid gap-3 border-b border-hairline py-5 sm:grid-cols-[10rem_1fr] sm:items-center sm:gap-6">
              <p className="font-mono text-[13px] text-urn">Connect</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/kyle-ando-942947289/"
                  target="_blank"
                  rel="noreferrer"
                  className={linkCardClasses}
                >
                  <Linkedin className="size-4" aria-hidden /> LinkedIn
                </a>
                <a
                  href="https://github.com/lkylelUndo"
                  target="_blank"
                  rel="noreferrer"
                  className={linkCardClasses}
                >
                  <Github className="size-4" aria-hidden /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-2.5 translate-y-2.5 bg-hairline"
            />
            <div className="relative border border-ink bg-plate p-6 md:p-8">
              <form className="space-y-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-mono text-[13px] text-ink"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-mono text-[13px] text-ink"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    className="min-h-44"
                  />
                </div>

                <Button className="w-full">
                  <MessageCircle aria-hidden /> Send Message
                </Button>
                <p className="font-mono text-[12px] leading-relaxed text-urn">
                  this form saves nothing yet — email me directly for faster
                  replies.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
