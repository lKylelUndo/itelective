"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import DatePicker from "./DatePicker";
import CategoryMobile from "./CategoryMobile";

const categories = [
  { name: "All", href: "/blogs" },
  { name: "Achievements", href: "/categories/achievements" },
  { name: "Technology", href: "/categories/technology" },
  { name: "Web", href: "/categories/web" },
  { name: "Experiences", href: "/categories/experiences" },
];

const CategoryButtons = () => {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/blogs" ? pathname === "/blogs" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-3">
      <nav className="hidden flex-wrap items-center gap-2 lg:flex" aria-label="Journal categories">
        {categories.map((category) => {
          const active = isActive(category.href);
          return (
            <Link
              key={category.href}
              href={category.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "border px-3 py-1.5 font-mono text-[13px] transition-colors",
                active
                  ? "border-ink bg-ink text-paper"
                  : "border-hairline bg-plate text-ink hover:border-ember hover:text-ember"
              )}
            >
              {category.name}
            </Link>
          );
        })}
      </nav>

      {/* mobile */}
      <div className="lg:hidden">
        <CategoryMobile />
      </div>

      <DatePicker />
    </div>
  );
};

export default CategoryButtons;
