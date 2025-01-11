import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { SheetClose } from "@/components/ui/sheet";
import Image from "next/image";

export const NAVLINKS = [
  {
    title: "HR Consulting",
    href: `/HR_Consulting`,
  },
  {
    title: "Book Keeping Services",
    href: "/Bookkeeping",
  },
];

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background text-stone-800 dark:text-white">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center justify-between">
        {/* Left Section: Logo and Navigation */}
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="sm:flex hidden">
            <Logo />
          </div>
          <div className="lg:flex hidden items-center gap-4 text-sm font-medium">
            <NavMenu />
          </div>
        </div>

        {/* Right Section: Contact Us */}
        <div className="flex items-center gap-3 ml-auto">
          <Link
            href="/contact"
            className={buttonVariants({ variant: "ghost", size: "sm", className: "text-purple-500 hover:text-purple-600"   })}
          >
            Contact Us
          </Link>
          {/* Dark Mode Toggle */}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 text-purple">
      <Image
        src="/r2uLogo.svg"
        alt="R2U Logo"
        width={80} // Adjust size as needed
        height={80} // Adjust size as needed
        className="dark:invert" // Invert only the logo color in dark mode
      />
      <h2 className="font-sans text-base text-purple-500 hover:text-purple-600 transition">R2U Consulting</h2>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary dark:font-medium font-semibold"
            absolute
            className="flex items-center gap-1 text-stone-800 dark:text-white"
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
