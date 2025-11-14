import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const filters = [
  {
    name: "Categories",
    values: ["None", "Technology", "Design", "Marketing", "Business"],
  },
];

const posts = [
  {
    id: "post-1",
    title: "10 Web Design Trends to Watch in 2023",
    summary:
      "Discover the latest design trends that are shaping the digital landscape and how you can implement them in your next project.",
    label: "Design",
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
  {
    id: "post-2",
    title: "The Complete Guide to Modern JavaScript",
    summary:
      "Learn about the modern JavaScript features that are revolutionizing web development and making code more efficient.",
    label: "Technology",
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg",
  },
  {
    id: "post-3",
    title: "Building Accessible Web Applications",
    summary:
      "Explore best practices for creating web applications that are accessible to all users, regardless of ability or disability.",
    label: "Development",
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg",
  },
  {
    id: "post-4",
    title: "SEO Strategies That Actually Work in 2023",
    summary:
      "Cut through the noise and discover SEO techniques that are proven to improve your site's visibility and drive organic traffic.",
    label: "Marketing",
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-4.svg",
  },
  {
    id: "post-5",
    title: "The Future of Artificial Intelligence in Web Development",
    summary:
      "Explore how AI is transforming the way we build websites and applications, from code generation to user experience optimization.",
    label: "Technology",
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-5.svg",
  },
  {
    id: "post-6",
    title: "Responsive Design: Beyond Media Queries",
    summary:
      "Learn advanced techniques for creating truly responsive designs that adapt to any device or screen size with modern CSS features.",
    label: "Design",
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-6.svg",
  },
];

const Blog1 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="mb-6 w-full text-4xl font-medium md:mb-14 md:text-5xl lg:mb-16 lg:text-6xl">
            Latest Blog Posts
          </h2>
          <div className="mb-10 flex flex-wrap items-center gap-x-4 gap-y-3 lg:gap-x-3">
            {filters.map((filter) => (
              <div key={filter.name} className="shrink-0">
                <Select>
                  <SelectTrigger className="text-black">
                    <SelectValue
                      placeholder={filter.name}
                      className="text-black"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {filter.values.map((value) => (
                      <SelectItem key={value} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:gap-6 2xl:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.href}
              className="border-border bg-accent group flex flex-col justify-between rounded-xl border p-6"
            >
              <div>
                <div className="aspect-3/2 flex overflow-clip rounded-xl">
                  <div className="flex-1">
                    <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-2xl lg:pt-4">
                {post.title}
              </div>
              <div className="text-muted-foreground mb-8 line-clamp-2 text-sm md:mb-12 md:text-base lg:mb-9">
                {post.summary}
              </div>
              <div>
                <Badge variant="outline">{post.label}</Badge>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog1 };
