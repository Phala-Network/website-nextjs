const Integrate = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-medium lg:text-5xl">
            Let&apos;s Make Your Space Beautiful
          </h1>
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            nisi accusantium voluptate aspernatur minima.
          </p>
        </div>
        <div className="mx-auto grid gap-10 lg:grid-cols-3">
          <div className="order-1 flex h-full items-center rounded-lg bg-muted p-4 lg:order-none">
            <div className="mx-auto max-w-80 rounded-lg bg-background p-6">
              <div className="mb-2 flex gap-2">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                  alt="logo"
                  className="h-7"
                />
                <span className="text-lg font-semibold">Build with blocks</span>
              </div>
              <p className="text-sm">
                Copy and paste any block into your own design system.
              </p>
            </div>
          </div>
          <div className="order-3 flex h-full items-center rounded-lg bg-muted lg:order-none">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="placeholder"
              className="aspect-video h-full w-full rounded-lg object-cover"
            />
          </div>
          <div className="order-5 grid h-full grid-cols-3 gap-4 rounded-lg bg-muted p-4 lg:order-none">
            <div className="flex items-center justify-center self-stretch rounded-lg bg-background text-4xl font-medium">
              01
            </div>
            <div className="col-span-2 flex items-center justify-center self-stretch rounded-lg bg-background p-6 text-4xl font-medium">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg"
                alt="placeholder"
                className="max-h-16"
              />
            </div>

            <div className="col-span-3 flex items-center justify-center self-stretch rounded-lg bg-background p-6 text-4xl font-medium">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg"
                alt="placeholder"
                className="max-h-44"
              />
            </div>
            <div className="col-span-2 flex items-center justify-center self-stretch rounded-lg bg-background p-6 text-4xl font-medium">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg"
                alt="placeholder"
                className="max-h-16"
              />
            </div>
            <div className="flex items-center justify-center self-stretch rounded-lg bg-background text-4xl font-medium">
              10
            </div>
          </div>
          <div className="order-2 -mt-6 max-w-[412px] lg:order-none">
            <p className="mb-6 text-sm text-muted-foreground lg:mb-12">
              Lorem ipsum dolor sit amet.
            </p>
            <h3 className="mb-3 text-2xl font-medium lg:mb-6">
              Perfect for Any Space
            </h3>
            <p className="mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              distinctio maiores sint cupiditate ab ullam numquam a similique
              vel itaque.
            </p>
          </div>
          <div className="order-4 -mt-6 max-w-[412px] lg:order-none">
            <p className="mb-6 text-sm text-muted-foreground lg:mb-12">
              Lorem ipsum dolor sit amet.
            </p>
            <h3 className="mb-3 text-2xl font-medium lg:mb-6">
              Modern and Sleek Design
            </h3>
            <p className="mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              distinctio maiores sint cupiditate ab ullam numquam a similique
              vel itaque.
            </p>
          </div>
          <div className="order-6 -mt-6 max-w-[412px] lg:order-none">
            <p className="mb-6 text-sm text-muted-foreground lg:mb-12">
              Lorem ipsum dolor sit amet.
            </p>
            <h3 className="mb-3 text-2xl font-medium lg:mb-6">
              Many Layouts to Choose From
            </h3>
            <p className="mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              distinctio maiores sint cupiditate ab ullam numquam a similique
              vel itaque.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integrate
