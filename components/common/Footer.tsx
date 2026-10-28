import Link from "next/link";

const footerNav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const linkClasses =
  "text-[15px] text-ink underline decoration-hairline underline-offset-4 transition-colors hover:text-ember hover:decoration-ember";

const Footer = () => {
  return (
    <footer>
      <div className="wrap">
        {/* double press rule */}
        <div className="border-t-2 border-ink" />
        <div className="mt-1 border-t border-hairline" />

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="font-display text-3xl font-semibold tracking-tight text-ink">
              Kyle Ando<span className="text-ember">.</span>
            </p>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-urn">
              Student developer sharing real projects, competition stories,
              and the lessons in between.
            </p>
          </div>

          <nav className="lg:col-span-3" aria-label="Footer">
            <h2 className="font-mono text-[13px] text-urn">Index</h2>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClasses}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-mono text-[13px] text-urn">Connect</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="mailto:ando.kyle44@gmail.com" className={linkClasses}>
                  ando.kyle44@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kyle-ando-942947289/"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClasses}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/lkylelUndo"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClasses}
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-hairline py-5">
          <p className="font-mono text-[12px] text-urn">
            © {new Date().getFullYear()} Kyle Ando. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
