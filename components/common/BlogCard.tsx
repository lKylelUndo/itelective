import { BlogType } from "@/constants/blog";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <div className="bg-background dark:bg-card rounded shadow space-y-3 p-4">
      
      <div className="text-xs text-muted-foreground">{blog.publishedAt}</div>
      <Image className="object-fill w-full" src={`${blog.image}`} width={300} height={200} alt="s" priority sizes="(max-width: 750px) 100vw, 292px" />
      <h2 className="font-semibold line-clamp-1">{blog.title}</h2>
      <p className="text-sm text-muted-foreground line-clamp-2">{blog.description}</p>

      {blog.category && blog.category.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {blog.category.map((c) => (
            <span
              key={c}
              className="text-xs px-2 py-0.5 rounded bg-accent text-accent-foreground"
            >
              {c}
            </span>
          ))}
        </div>
      )}

      <div className="pt-2">
        <Button asChild variant="link" className="px-0">
          <Link href={`/blogs/view/${blog.id}`}>View Full Blog</Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
