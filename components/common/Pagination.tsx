import Link from "next/link";

export const parsePageParam = (value?: string) => {
  const parsed = Number(value ?? "1");
  return Number.isInteger(parsed) && parsed >= 1 ? parsed : 1;
};

type PaginationProps = {
  page: number;
  totalPages: number;
  basePath: string;
};

const range = (from: number, to: number) => {
  const items: number[] = [];
  for (let n = from; n <= to; n++) items.push(n);
  return items;
};

// Full list at small scales; windowed with gaps once it grows past 7.
const pageItems = (page: number, totalPages: number): (number | "gap")[] => {
  if (totalPages <= 7) return range(1, totalPages);

  const pages = new Set<number>([1, totalPages]);
  for (const n of [page - 1, page, page + 1]) {
    if (n > 1 && n < totalPages) pages.add(n);
  }

  const sorted = [...pages].sort((a, b) => a - b);
  const items: (number | "gap")[] = [];
  sorted.forEach((n, index) => {
    if (index > 0 && n - sorted[index - 1] > 1) items.push("gap");
    items.push(n);
  });
  return items;
};

const linkClasses =
  "font-mono text-[13px] text-ink underline decoration-hairline underline-offset-4 transition-colors hover:text-ember hover:decoration-ember";
const disabledClasses = "font-mono text-[13px] text-urn";

const Pagination = ({ page, totalPages, basePath }: PaginationProps) => {
  // One page = no pager; the mechanism is ready for when the data grows.
  if (totalPages <= 1) return null;

  const hrefFor = (n: number) => (n === 1 ? basePath : `${basePath}?page=${n}`);

  return (
    <div className="mt-12">
      <p className="text-right font-mono text-[12px] text-urn">
        page {page} of {totalPages}
      </p>

      <nav
        aria-label="Pagination"
        className="mt-2 flex items-baseline justify-between gap-4 border-t border-hairline pt-4"
      >
        {page > 1 ? (
          <Link href={hrefFor(page - 1)} className={linkClasses}>
            prev
          </Link>
        ) : (
          <span aria-disabled="true" className={disabledClasses}>
            prev
          </span>
        )}

        <ul className="flex items-baseline gap-x-5">
          {pageItems(page, totalPages).map((item, index) => {
            if (item === "gap") {
              return (
                <li
                  key={`gap-${index}`}
                  aria-hidden="true"
                  className="font-mono text-[13px] text-urn"
                >
                  …
                </li>
              );
            }
            if (item === page) {
              return (
                <li key={item}>
                  <span
                    aria-current="page"
                    className="font-mono text-[13px] text-ember underline decoration-ember decoration-2 underline-offset-4"
                  >
                    {item}
                  </span>
                </li>
              );
            }
            return (
              <li key={item}>
                <Link href={hrefFor(item)} className={linkClasses}>
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        {page < totalPages ? (
          <Link href={hrefFor(page + 1)} className={linkClasses}>
            next
          </Link>
        ) : (
          <span aria-disabled="true" className={disabledClasses}>
            next
          </span>
        )}
      </nav>
    </div>
  );
};

export default Pagination;
