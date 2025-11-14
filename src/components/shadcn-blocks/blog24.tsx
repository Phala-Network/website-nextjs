import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

interface Blog24Props {
  tagline: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  posts: Post[];
}

const Blog24 = ({
  tagline = "Latest Updates",
  heading = "Blog Posts",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
  buttonText = "View all articles",
  buttonUrl = "https://shadcnblocks.com",
  posts = [
    {
      id: "post-1",
      title: "Getting Started with shadcn/ui Components",
      summary:
        "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
      label: "Tutorial",
      author: "Sarah Chen",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "post-2",
      title: "Building Accessible Web Applications",
      summary:
        "Explore how to create inclusive web experiences using shadcn/ui's accessible components. Discover practical tips for implementing ARIA labels, keyboard navigation, and semantic HTML.",
      label: "Accessibility",
      author: "Marcus Rodriguez",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "post-3",
      title: "Modern Design Systems with Tailwind CSS",
      summary:
        "Dive into creating scalable design systems using Tailwind CSS and shadcn/ui. Learn how to maintain consistency while building flexible and maintainable component libraries.",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
  ],
}: Blog24Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-6">
            {tagline}
          </Badge>
          <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-5xl lg:mb-6">
            {heading}
          </h2>
          <p className="text-muted-foreground mb-12 md:text-base lg:text-lg">
            {description}
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-12">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden border-0 bg-transparent shadow-none"
            >
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="shrink-0">
                  <a
                    href={post.url}
                    target="_blank"
                    className="block transition-opacity duration-200 hover:opacity-90"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="aspect-16/9 w-full rounded-lg object-cover object-center sm:w-[260px]"
                    />
                  </a>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="text-muted-foreground flex items-center gap-4 text-sm">
                    <Badge variant="secondary">{post.label}</Badge>
                    <span>{post.author}</span>
                    <span>{post.published}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight lg:text-2xl">
                    <a
                      href={post.url}
                      target="_blank"
                      className="hover:underline"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-muted-foreground text-base">
                    {post.summary}
                  </p>
                  <a
                    href={post.url}
                    target="_blank"
                    className="text-primary inline-flex items-center hover:underline"
                  >
                    Read more
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            asChild
          >
            <a href={buttonUrl} target="_blank">
              {buttonText}
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Blog24 };
