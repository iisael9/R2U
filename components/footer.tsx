import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { MapPin, Phone, Linkedin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t w-full py-8 bg-background">
      <div className="container flex flex-col items-center gap-8 sm:gap-12 sm:flex-row sm:justify-between">
        {/* Left Section */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h4 className="text-lg font-semibold">Contact Information</h4>
          <p className="text-muted-foreground text-sm">
            Montebello, CA 90640 <br />
            <Link href="tel:6267342190" className="text-purple-500 hover:underline">
              (626) 734-2190
            </Link> <br />
            <Link href="mailto:ramonanoel27@gmail.com" className="text-purple-500 hover:underline">
              ramonanoel27@gmail.com
            </Link>
          </p>
        </div>

        {/* Middle Section: Footer Buttons */}
        <div className="flex gap-4">
          <FooterButtons />
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} R2U Consulting. <br />All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <Linkedin className="h-4 w-4 mr-2 text-blue-600 fill-current" />
        LinkedIn
      </Link>
      {/* Facebook Section */}
      <Link
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <Image
          src="/facebook.svg"
          alt="Facebook"
          width={16}
          height={16}
          className="mr-2"
        />
        Facebook
      </Link>
      <Link
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <Image
          src="/brand-instagram.svg" // Ensure this file exists in the public folder
          alt="Instagram"
          width={16}
          height={16}
          className="mr-2"
        />
        Instagram
      </Link>
      <Link
        href="https://goo.gl/maps/example" // Replace with your actual Google Maps link
        target="_blank"
        rel="noopener noreferrer"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <MapPin className="h-4 w-4 mr-2 text-green-600 fill-current" />
        Montebello, CA 90640
      </Link>
      <Link
        href="tel:6267342190"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <Phone className="h-4 w-4 mr-2 text-purple-600 fill-current" />
        Call Us
      </Link>
      
    </>
  );
}
