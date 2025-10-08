"use client";
import { Menu, X } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url?: string;
  className?: string;
  links?: {
    label: string;
    description?: string;
    url: string;
    image?: string;
  }[];
}

interface MobileNavigationMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface DesktopMenuItemProps {
  item: MenuItem;
  index: number;
}

const LOGO = {
  url: "https://www.shadcnblocks.com",
  src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
  alt: "logo",
  title: "Shadcnblocks.com",
};

const NAVIGATION: MenuItem[] = [
  {
    title: "Products",
    links: [
      {
        label: "Company Blog",
        description: "Explore the latest insights and updates",
        url: "#",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      },
      {
        label: "Our Platform",
        description: "Innovative tools to empower your workflow",
        url: "#",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
      },
      {
        label: "Careers at Our Company",
        description: "Discover open roles and our workplace culture",
        url: "#",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
      },
      {
        label: "Customer Support",
        description: "Reach out or browse community help articles",
        url: "#",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
      },
      {
        label: "Product Documentation",
        description: "In-depth guides, references, and API docs",
        url: "#",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About Our Team",
        url: "#",
        description: "Learn more about our mission and values",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      },
      {
        label: "Help & Support Center",
        url: "#",
        description: "Search our help center for quick answers",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
      },
      {
        label: "Latest News",
        url: "#",
        description: "Stay up to date with product announcements",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
      },
    ],
  },
  {
    title: "Contact",
    url: "#",
  },
];

const MOBILE_NAVIGATION: MenuItem[] = [
  {
    title: "Products",
    className: "col-span-2",
    links: [
      {
        label: "Company Blog",
        url: "#",
      },
      {
        label: "Our Platform",
        url: "#",
      },
      {
        label: "Careers at Our Company",
        url: "#",
      },
      {
        label: "Customer Support",
        url: "#",
      },
      {
        label: "Product Documentation",
        url: "#",
      },
    ],
  },
  {
    title: "Company",
    className: "",
    links: [
      {
        label: "About Our Team",
        url: "#",
      },
      {
        label: "Help & Support Center",
        url: "#",
      },
      {
        label: "Latest News",
        url: "#",
      },
    ],
  },
  {
    title: "Community",
    className: "",
    links: [
      {
        label: "Forum",
        url: "#",
      },
      {
        label: "Slack Group",
        url: "#",
      },
      {
        label: "Contributors",
        url: "#",
      },
      {
        label: "Meetups",
        url: "#",
      },
    ],
  },
];

const NAV_BUTTONS: {
  label: string;
  url: string;
  variant:
    | "ghost"
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary";
}[] = [
  {
    label: "Log in",
    url: "#",
    variant: "ghost",
  },
  {
    label: "Sign up",
    url: "#",
    variant: "default",
  },
];

const SOCIAL_LINKS = [
  {
    label: "Linkedin",
    url: "#",
  },
  {
    label: "Twitter",
    url: "#",
  },
  {
    label: "Facebook",
    url: "#",
  },
];

const MOBILE_BREAKPOINT = 1024;

const Navbar8 = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      navRef.current?.classList.toggle("bg-background", window.scrollY > 300);
      navRef.current?.classList.toggle(
        "bg-transparent",
        !(window.scrollY > 300),
      );
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleMobileMenu = () => {
    const nextOpen = !open;
    setOpen(nextOpen);
  };

  return (
    <section>
      <div
        className="z-500 fixed top-0 w-full bg-transparent transition-colors duration-500"
        ref={navRef}
      >
        <div className="container border-b">
          <div className="flex items-center justify-between gap-3.5 py-5">
            <a
              href={LOGO.url}
              className="flex max-h-8 items-center gap-2 text-lg font-semibold tracking-tighter"
            >
              <img
                src={LOGO.src}
                alt={LOGO.alt}
                className="inline-block size-8"
              />
              <span className="hidden md:inline-block">{LOGO.title}</span>
            </a>
            <NavigationMenu className="hidden lg:flex [&>div:nth-child(2)]:left-1/2 [&>div:nth-child(2)]:-translate-x-1/2">
              <NavigationMenuList>
                {NAVIGATION.map((item, index) => (
                  <DesktopMenuItem
                    key={`desktop-link-${index}`}
                    item={item}
                    index={index}
                  />
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-3.5">
              {NAV_BUTTONS.map((button, index) => (
                <Button
                  key={`nav-button-${index}`}
                  variant={button.variant}
                  asChild
                >
                  <a href={button.url}>{button.label}</a>
                </Button>
              ))}
              <div className="lg:hidden">
                <Button variant="ghost" size="icon" onClick={handleMobileMenu}>
                  <Menu className="size-5.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileNavigationMenu open={open} setOpen={setOpen} />
    </section>
  );
};

const DesktopMenuItem = ({ item, index }: DesktopMenuItemProps) => {
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    const index = Number(event.currentTarget.getAttribute("data-index"));
    if (item.links && imagesRef.current[index]) {
      imagesRef.current.forEach((img, i) => {
        img.classList.toggle("opacity-100", i === index);
        img.classList.toggle("opacity-0", i !== index);
      });
    }
  };

  const handleMouseLeave = () => {
    imagesRef.current.forEach((img) => {
      img.classList.remove("opacity-100");
      img.classList.add("opacity-0");
    });
    imagesRef.current[0].classList.add("opacity-100");
  };

  if (item.links) {
    return (
      <NavigationMenuItem key={`desktop-menu-item-${index}`} value={`${index}`}>
        <NavigationMenuTrigger className="bg-transparent">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="!rounded-2xl !p-0">
          <div className="grid min-h-[18.75rem] w-[45.25rem] grid-cols-[22.5rem_1fr] gap-4 p-3">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl">
              {item.links.map((link, index) => (
                <img
                  key={index}
                  ref={(el) => {
                    if (el) {
                      imagesRef.current[index] = el;
                    }
                  }}
                  src={link.image}
                  alt={link.label}
                  className={`absolute left-0 top-0 h-full w-full object-cover transition-opacity duration-300 ${index === 0 ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
            <div>
              <div className="p-4 font-bold leading-normal">{item.title}</div>
              <ul>
                {item.links.map((link, index) => (
                  <li key={`desktop-nav-sublink-${index}`}>
                    <a
                      href={link.url}
                      className="hover:bg-muted flex items-center gap-4 rounded-lg px-4 py-3"
                      data-index={index}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div>
                        <h3 className="font-medium leading-normal">
                          {link.label}
                        </h3>
                        <p className="text-muted-foreground leading-normal">
                          {link.description}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem
      key={`desktop-menu-item-${index}`}
      value={`${index}`}
      className={`${navigationMenuTriggerStyle()} bg-transparent`}
    >
      <NavigationMenuLink href={item.url}>{item.title}</NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const MobileNavigationMenu = ({ open, setOpen }: MobileNavigationMenuProps) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        aria-describedby={undefined}
        side="top"
        className="z-600 bg-primary text-primary-foreground inset-0 h-dvh w-full [&>button]:hidden"
      >
        <div className="flex-1 overflow-y-auto">
          <div className="container pb-12">
            <div className="mask-clip-border absolute -m-px h-px w-px overflow-hidden whitespace-nowrap text-nowrap border-0 p-0">
              <SheetTitle className="text-primary">
                Mobile Navigation
              </SheetTitle>
            </div>
            <div className="flex justify-end pt-5">
              <SheetClose asChild>
                <Button
                  size="icon"
                  className="bg-muted/20 hover:bg-muted/20 size-9 rounded-full"
                >
                  <X className="size-5.5" />
                </Button>
              </SheetClose>
            </div>
            <div className="gap-30 flex h-full flex-col justify-between pt-24">
              <div className="grid w-full grid-cols-2 gap-x-4 gap-y-10">
                {MOBILE_NAVIGATION.map((item, index) =>
                  renderMobileMenuItem(item, index),
                )}
              </div>
              <div className="col-span-2 flex flex-col gap-4">
                <div className="text-muted-2-foreground text-xs uppercase">
                  SOCIAL
                </div>
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((link, index) => (
                    <a
                      key={`social-link-${index}`}
                      href={link.url}
                      className="text-primary-foreground"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const renderMobileMenuItem = (item: MenuItem, index: number) => {
  return (
    <div
      className={`text-primary-foreground flex flex-col gap-4 ${item.className}`}
      key={`mobile-menu-item-${index}`}
    >
      <div className="text-muted-2-foreground text-xs uppercase">
        {item.title}
      </div>
      <ul className="flex flex-col gap-3">
        {item.links?.map((link, i) => (
          <li key={`mobile-nav-link-${i}`}>
            <a
              href={link.url}
              className={`text-primary-foreground ${index === 0 ? "text-2xl" : "text-base"} font-medium leading-normal`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Navbar8 };
