import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdVerified, MdOutlineSupportAgent } from "react-icons/md";
import { HiOutlineLightningBolt } from "react-icons/hi";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center px-2 sm:py-8 py-12">
      {/* Global Background */}
      <div className="absolute inset-0 -z-10 h-full w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      
        {/* Radial gradient */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Main Content */}
      <div className="sm:min-h-[85.5vh] min-h-[85vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semi-bold mb-4 sm:text-7xl lg:text-8xl">
          <span className="text-purple-500">Reliable</span> outsourcing services
        </h1>

        <p className="mb-8 sm:text-lg max-w-[800px] text-muted-foreground">
          We provide
          <span className="text-purple-500"> Industry Leading </span>
          consulting services
        </p>

        <div className="flex flex-row items-center gap-5">
          {/* HR Consulting Button */}
          <Link
            href={`/HR_Consulting`}
            className={buttonVariants({ className: "px-6 bg-purple-500 text-white hover:bg-purple-600 flex items-center gap-2", size: "lg" })}
          >
            <FaPeopleGroup className="text-2xl" />
            HR consulting
          </Link>

          {/* Book Keeping Services Button */}
          <Link
            href="/Bookkeeping"
            className={buttonVariants({
              variant: "secondary",
              className: "px-6 flex items-center gap-2",
              size: "lg",
            })}
          >
            <Image
              src="/qb.svg"
              alt=""
              width={30} // Adjust icon width
              height={30} // Adjust icon height
            />
            Book Keeping Services
          </Link>
        </div>
      </div>

      {/* Divider Section */}
      <div className="w-full h-[2px] bg-gradient-to-r from-purple-500 via-transparent to-purple-500 my-12"></div>

      {/* Feature Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12 text-center">
        <div className="flex flex-col items-center">
          <MdVerified className="text-purple-500 text-4xl mb-4" />
          <h3 className="text-lg font-bold mb-2">Trusted Expertise</h3>
          <p className="text-sm text-muted-foreground">
            Our team is backed by years of proven experience and client trust.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <HiOutlineLightningBolt className="text-purple-500 text-4xl mb-4" />
          <h3 className="text-lg font-bold mb-2">Efficient Solutions</h3>
          <p className="text-sm text-muted-foreground">
            We deliver fast, tailored solutions to meet your unique needs.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <MdOutlineSupportAgent className="text-purple-500 text-4xl mb-4" />
          <h3 className="text-lg font-bold mb-2">Dedicated Support</h3>
          <p className="text-sm text-muted-foreground">
            Our support team is here to assist you every step of the way.
          </p>
        </div>
      </div>

      {/* Divider Section */}
      <div className="w-full h-[2px] bg-gradient-to-r from-purple-500 via-transparent to-purple-500 my-32"></div>

      {/* Call-to-Action Section */}
      <div className="mt-0 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-muted-foreground mb-6">
          Let us help you streamline your operations and grow your business.
        </p>
        <Link href="/contact">
          <button className="px-6 py-3 bg-purple-500 text-white text-lg font-bold rounded-lg hover:bg-purple-600 transition">
            Schedule a Free Consultation
          </button>
        </Link>
      </div>
    </div>
  );
}
