import { Badge } from "@/components/ui/badge";

type Category =
  | "Technology"
  | "Business"
  | "Health & Wellness"
  | "Productivity"
  | "Innovation";

type Post = {
  title: string;
  category: Category;
  description: string;
  image: string;
};

const posts: Post[] = [
  {
    title: "Exploring the Future of AI in Modern Technology Trends",
    category: "Technology",
    description:
      "Discover how AI is transforming industries and learn about the latest advancements in artificial intelligence. Discover how AI is transforming industries and learn about the latest advancements in artificial intelligence.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    title: "Strategies for Effective Business Growth in 2025",
    category: "Business",
    description:
      "Learn proven strategies to grow your business and stay competitive in the ever-evolving market landscape.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  {
    title: "Top Wellness Trends to Improve Your Health in 2025",
    category: "Health & Wellness",
    description:
      "Explore the top wellness trends that can help you achieve a healthier and more balanced lifestyle.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  },
  {
    title: "Boosting Productivity with Smart Tools and Techniques",
    category: "Productivity",
    description:
      "Find out how to enhance your productivity using the latest tools and techniques for better time management.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
  },
];

const Blog14 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-medium md:text-6xl">
            Insights and Trends Blog
          </h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
            Stay updated with the latest insights, trends, and tips across
            various topics to keep ahead of the curve.
          </p>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="my-16 grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16">
            <img
              src={posts[0].image}
              alt="placeholder"
              className="aspect-video rounded-lg object-cover"
            />
            <div className="flex flex-col items-start gap-4">
              <Badge variant="secondary" className="shrink">
                {posts[0].category}
              </Badge>
              <h2 className="text-balance text-2xl font-semibold md:max-w-lg lg:text-3xl">
                {posts[0].title}
              </h2>
              <p className="text-muted-foreground md:max-w-lg">
                {posts[0].description}
              </p>
            </div>
          </div>
          <p className="text-2xl font-medium md:text-3xl">Popular Posts</p>
          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
            {posts.slice(1).map((post) => (
              <div key={post.title} className="flex flex-col items-start gap-4">
                <img
                  src={post.image}
                  alt="placeholder"
                  className="aspect-video rounded-lg object-cover"
                />
                <Badge variant="secondary" className="shrink">
                  {post.category}
                </Badge>
                <h3 className="text-balance text-xl font-semibold md:max-w-md">
                  {post.title}
                </h3>
                <p className="text-muted-foreground md:max-w-md">
                  {post.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Blog14 };
