import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogType } from "@/constants/blog";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <Card>
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={`${blog.image}`}
          alt={'alt'}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover p-2"
        />
      </div>
      <CardHeader className="space-y-1">
        <div className="text-xs text-muted-foreground">
          {blog.publishedAt}
        </div>
        <CardTitle className="line-clamp-1">
          {blog.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <CardDescription className="line-clamp-2">
          {blog.description}
        </CardDescription>

        {blog.category && blog.category.length > 0 && (
          <div className="flex flex-wrap gap-2">
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
      </CardContent>

      <CardFooter>
        <Button asChild variant="link" className="px-0">
          <Link href={`/blogs/view/${blog.id}`}>
            View Full Blog
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
