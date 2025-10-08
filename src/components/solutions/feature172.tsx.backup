import { cn } from "@/lib/utils";

const topItems = [
  {
    title: "Reusable issue templates.",
    description:
      "Draft lightning-fast documents with our Smart Instructions and Templates.",
    images: [
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
        alt: "Issue template interface",
        className: "aspect-495/186 max-w-lg rounded-xl",
      },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: [""] as string[],
  },
  {
    title: "Simplify your stack.",
    description: "No more Confluence, SharePoint, or Microsoft Word.",
    images: [
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/instagram-icon.svg",
        alt: "Jira logo",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/linkedin-icon.svg",
        alt: "Excel logo",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/producthunt-icon.svg",
        alt: "Notion logo",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/twitter-icon.svg",
        alt: "Word logo",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-icon.svg",
        alt: "Astro logo",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg",
        alt: "Figma logo",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg",
        alt: "Slack logo",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg",
        alt: "Google logo",
      },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 md:[&>.title-container]:translate-x-2 xl:[&>.title-container]:translate-x-4 [&>.title-container]:translate-x-0",
    fade: [],
  },
];

const bottomItems = [
  {
    title: "Graveyard it.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
    images: [
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
        alt: "Graveyard interface",
        className: "aspect-305/280 rounded-t-xl max-w-[305px]",
      },
    ],
    className:
      "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: ["bottom"] as string[],
  },
  {
    title: "Task discussions.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
    images: [
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
        alt: "Task discussions interface",
        className: "aspect-320/103 rounded-xl",
      },
    ],
    className:
      "justify-normal [&>.title-container]:mb-5 md:[&>.title-container]:mb-0 [&>.image-container]:flex-1 md:[&>.image-container]:place-items-center md:[&>.image-container]:-translate-y-3",
    fade: [""],
  },
  {
    title: "Notifications.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
    images: [
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
        alt: "Notifications interface",
        className: "aspect-305/280 rounded-t-xl max-w-[305px]",
      },
    ],
    className:
      "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: ["bottom"],
  },
];

function Feature172() {
  return (
    <section className="py-32">
      <div className="container">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          Mainline your resource allocation and execution
        </h2>

        <div className="mt-8 md:mt-12 lg:mt-20">
          <DashedLine orientation="horizontal" className="scale-x-105" />

          {/* Top Features Grid - 2 items */}
          <div className="relative flex max-md:flex-col">
            {topItems.map((item, i) => (
              <Item key={i} item={item} isLast={i === topItems.length - 1} />
            ))}
          </div>
          <DashedLine
            orientation="horizontal"
            className="max-w-7xl scale-x-110"
          />

          {/* Bottom Features Grid - 3 items */}
          <div className="relative grid max-w-7xl md:grid-cols-3">
            {bottomItems.map((item, i) => (
              <Item
                key={i}
                item={item}
                isLast={i === bottomItems.length - 1}
                className="md:pb-0"
              />
            ))}
          </div>
        </div>
        <DashedLine
          orientation="horizontal"
          className="max-w-7xl scale-x-110"
        />
      </div>
    </section>
  );
}

interface ItemProps {
  item: {
    title: string;
    description: string;
    images: { src: string; alt: string; className?: string }[];
    className?: string;
    fade: string[];
  };
  isLast?: boolean;
  className?: string;
}

const Item = ({ item, isLast, className }: ItemProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col px-0 py-6 md:px-6 md:py-8",
        className,
        item.className,
      )}
    >
      <div className="title-container max-w-md text-balance">
        <h3 className="inline font-semibold">{item.title} </h3>
        <span className="font-medium text-muted-foreground">
          {" "}
          {item.description}
        </span>
      </div>

      {item.fade.includes("bottom") && (
        <div className="absolute inset-0 z-10 bg-linear-to-t from-background/80 via-transparent to-transparent md:hidden" />
      )}
      {item.images.length > 4 ? (
        <div className="relative overflow-hidden">
          <div className="flex flex-col gap-5">
            {/* First row - right aligned */}
            <div className="flex translate-x-4 justify-end gap-5">
              {item.images.slice(0, 4).map((image, j) => (
                <div
                  key={j}
                  className="grid aspect-square size-16 place-items-center rounded-xl bg-muted/40 p-2 lg:size-20"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="size-8 object-contain object-top-left lg:size-12"
                  />
                  <div className="absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background/80 to-transparent" />
                </div>
              ))}
            </div>
            {/* Second row - left aligned */}
            <div className="flex -translate-x-4 gap-5">
              {item.images.slice(4).map((image, j) => (
                <div
                  key={j}
                  className="grid aspect-square size-16 place-items-center rounded-xl bg-muted/40 lg:size-20"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="size-8 object-contain object-top-left lg:size-12"
                  />
                  <div className="absolute inset-y-0 bottom-0 left-0 z-10 w-14 bg-linear-to-r from-background/80 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="image-container grid grid-cols-1 gap-4">
          {item.images.map((image, j) => (
            <img
              key={j}
              src={image.src}
              alt={image.alt}
              className={cn(
                "w-full overflow-hidden object-cover",
                image.className,
              )}
            />
          ))}
        </div>
      )}

      {!isLast && (
        <>
          <DashedLine
            orientation="vertical"
            className="absolute top-0 right-0 max-md:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute inset-x-0 bottom-0 md:hidden"
          />
        </>
      )}
    </div>
  );
};

interface DashedLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const DashedLine = ({
  orientation = "horizontal",
  className,
}: DashedLineProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "relative text-muted-foreground",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className,
      )}
    >
      <div
        className={cn(
          isHorizontal
            ? [
                "h-px w-full",
                "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "[mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
              ]
            : [
                "h-full w-px",
                "bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_8px)]",
                "[mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]",
              ],
        )}
      />
    </div>
  );
};

export { Feature172 };
