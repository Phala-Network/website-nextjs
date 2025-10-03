import {
  Code,
  GitBranch,
  List,
  Play,
  Sparkles,
  WandSparkles,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const Feature3 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h1 className="mb-6 text-4xl font-semibold text-pretty lg:text-5xl">
            This is where your feature goes
          </h1>

          <div className="mt-10 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-1">
                <Code className="size-4" strokeWidth={1} />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                <p className="leading-snug text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </CardContent>
              <CardFooter className="justify-end pr-0 pb-0">
                <img
                  className="h-40 w-full rounded-tl-md object-cover object-center"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt="placeholder"
                />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-1">
                <Play className="size-4" strokeWidth={1} />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                <p className="leading-snug text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </CardContent>
              <CardFooter className="justify-end pr-0 pb-0">
                <img
                  className="h-40 w-full rounded-tl-md object-cover object-center"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt="placeholder"
                />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-1">
                <GitBranch className="size-4" strokeWidth={1} />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                <p className="leading-snug text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </CardContent>
              <CardFooter className="justify-end pr-0 pb-0">
                <img
                  className="h-40 w-full rounded-tl-md object-cover object-center"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt="placeholder"
                />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-1">
                <List className="size-4" strokeWidth={1} />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                <p className="leading-snug text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </CardContent>
              <CardFooter className="justify-end pr-0 pb-0">
                <img
                  className="h-40 w-full rounded-tl-md object-cover object-center"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt="placeholder"
                />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-1">
                <WandSparkles className="size-4" strokeWidth={1} />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                <p className="leading-snug text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </CardContent>
              <CardFooter className="justify-end pr-0 pb-0">
                <img
                  className="h-40 w-full rounded-tl-md object-cover object-center"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt="placeholder"
                />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-1">
                <Sparkles className="size-4" strokeWidth={1} />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                <p className="leading-snug text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </CardContent>
              <CardFooter className="justify-end pr-0 pb-0">
                <img
                  className="h-40 w-full rounded-tl-md object-cover object-center"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt="placeholder"
                />
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature3 };
