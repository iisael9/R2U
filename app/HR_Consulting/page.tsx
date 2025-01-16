import Image from "next/image";

export default function HRConsultingPage() {
  return (
    <div className="relative">
      {/* Global Background */}
      <div className="absolute inset-0 -z-10 h-full w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        {/* Radial gradient */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto py-12 px-4 space-y-12">
        {/* Human Resources Outsourcing Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-4">
              Human Resources Outsourcing
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Outsourcing HR frees up your time to focus on core functions. Our team provides customized solutions to meet your unique needs...
            </p>
            <ul className="list-disc pl-6 text-base space-y-2">
              <li>Employee On-Boarding</li>
              <li>Compensation</li>
              <li>Payroll</li>
              <li>HR Compliance</li>
              <li>Benefits Administration</li>
              <li>Leave of Absence Administration</li>
              <li>Management and Employee Relations</li>
              <li>Performance Management and Training</li>
            </ul>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/6929005/pexels-photo-6929005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Human Resources Outsourcing Image 1"
                width={600}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* HR Consulting Services Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="hidden md:block rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/6929019/pexels-photo-6929019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="HR Consulting Services Image"
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-4">
              HR Consulting Services
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Companies face pressure to achieve more with less while trying to strategically manage their workforce...
            </p>
            <ul className="list-disc pl-6 text-base space-y-2">
              <li>HR Compliance Assessments</li>
              <li>HR Process Review and Improvements</li>
              <li>Employee Engagement Surveys</li>
              <li>Start-up Company HR Set Up</li>
              <li>Employee Handbooks</li>
            </ul>
          </div>
        </section>

        {/* Call-to-Action Button */}
        <div className="flex justify-center">
          <a
            href="/contact"
            className="bg-purple-500 text-white text-lg font-bold py-3 px-6 rounded-lg hover:bg-purple-600 transition"
          >
            Connect with a Consultant
          </a>
        </div>
      </div>
    </div>
  );
}
