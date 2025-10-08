import { Button } from "@/components/ui/button";

const Feature161 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="relative grid grid-cols-1 grid-rows-2 border border-muted-foreground/25 lg:grid-cols-2 lg:grid-rows-1">
          <div className="absolute top-[-16px] left-[-1px] h-4 w-[1px] bg-muted-foreground/25" />
          <div className="absolute top-[-1px] left-[-16px] h-[1px] w-4 bg-muted-foreground/25" />
          <div className="absolute bottom-[-16px] left-[-1px] h-4 w-[1px] bg-muted-foreground/25" />
          <div className="absolute bottom-0 left-[-16px] h-[1px] w-4 bg-muted-foreground/25" />
          <div className="relative border-b border-muted-foreground/25 p-6 md:p-16 lg:border-r lg:border-b-0">
            <div className="absolute top-[-16px] right-[-1px] hidden h-4 w-[1px] bg-muted-foreground/25 lg:block" />
            <div className="absolute right-[-1px] bottom-[-16px] h-4 w-[1px] bg-muted-foreground/25" />
            <h1 className="flex-row text-4xl font-bold">
              Proof & Compliance
            </h1>
            <h3 className="mt-2 mb-6 text-xl text-muted-foreground">
              Remote attestation, SOC 2 Type II, and cryptographic audit trails for regulatory compliance.
            </h3>
            <div className="flex items-center gap-3">
              <Button asChild><a href="https://cloud.phala.network">Get Started</a></Button>
              <Button variant="outline" asChild><a href="https://docs.phala.network">Docs</a></Button>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-7">
            <div className="row-start-1 row-end-2 flex justify-evenly">
              <div className="h-full w-[1px] bg-muted-foreground/25" />
              <div className="h-full w-[1px] bg-muted-foreground/25" />
              <div className="h-full w-[1px] bg-muted-foreground/25" />
              <div className="h-full w-[1px] bg-muted-foreground/25" />
            </div>
            <div className="row-start-2 row-end-7 flex items-center justify-center gap-8 border-t border-b border-muted-foreground/25">
              <div className="flex flex-col items-center gap-8 py-12 md:flex-row">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/ph-daily.svg"
                  alt="logo"
                  className="h-14 object-cover"
                />
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/ph-weekly.svg"
                  alt="logo"
                  className="h-14 object-cover"
                />
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/ph-kitty.svg"
                  alt="logo"
                  className="h-14 object-cover"
                />
              </div>
            </div>
            <div className="row-start-7 row-end-8 flex justify-evenly">
              <div className="h-full w-[1px] bg-muted-foreground/25" />
              <div className="h-full w-[1px] bg-muted-foreground/25" />
              <div className="h-full w-[1px] bg-muted-foreground/25" />
              <div className="h-full w-[1px] bg-muted-foreground/25" />
            </div>
          </div>
          <div className="absolute top-[-16px] right-[-1px] h-4 w-[1px] bg-muted-foreground/25" />
          <div className="absolute top-[-1px] right-[-16px] h-[1px] w-4 bg-muted-foreground/25" />
          <div className="absolute right-[-1px] bottom-[-16px] h-4 w-[1px] bg-muted-foreground/25" />
          <div className="absolute right-[-16px] bottom-[-1px] h-[1px] w-4 bg-muted-foreground/25" />
        </div>
      </div>
    </section>
  );
};

export { Feature161 };
