import Image from "next/image";

export default function HRConsultingPage() {
  return (
    <div className="container mx-auto py-12 px-4 space-y-12">
      {/* Human Resources Outsourcing Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-4">
            Human Resources Outsourcing
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Outsourcing HR frees up your time to focus on core functions. Our team provides customized solutions to meet
            your unique needs. We offer exceptional customer service, cost-effective HR services, and a unique and personal service. Key services include:
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
              src="https://images.pexels.com/photos/6929005/pexels-photo-6929005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your image path
              alt="Human Resources Outsourcing Image 1"
              width={600}
              height={400}
              style={{ objectFit: "cover" }} // Styling applied here
            />
          </div>
          
        </div>
      </section>

      {/* HR Consulting Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="hidden md:block rounded-lg shadow-lg overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/6929019/pexels-photo-6929019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your image path
            alt="HR Consulting Services Image"
            width={600}
            height={400}
            style={{ objectFit: "cover" }} // Styling applied here
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-4">
            HR Consulting Services
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Companies face pressure to achieve more with less while trying to strategically manage their workforce. We provide guidance and best practices to address all aspects of HR for your organization.
            Whether you need to evaluate risks, improve efficiencies, manage change, or conduct a cultural assessment, we
            are here to help you achieve your organization&apos;s goals. We offer a wide range of HR services, including:
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
  );
}
