export default function HRConsultingPage() {
    return (
      <div className="container mx-auto py-12 px-4 space-y-12">
        {/* Human Resources Outsourcing Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-4">
            Human Resources Outsourcing
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Outsourcing HR frees up your time to focus on core functions. Our team provides customized solutions to meet
            your unique needs. We offer exceptional customer service, cost-effective HR services, and a unique combination
            of national resources and personal service. Key services include:
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
        </section>
  
        {/* HR Consulting Services Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-4">
            HR Consulting Services
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Companies face pressure to achieve more with less while managing human capital strategically and
            comprehensively. We provide guidance and best practices to address all aspects of HR for your organization.
            Whether you need to evaluate risks, improve efficiencies, manage change, or conduct a cultural assessment, we
            are here to help you achieve your organization&apos;s goals. We offer a wide range of HR services, including:
          </p>
          <ul className="list-disc pl-6 text-base space-y-2">
            <li>HR Compliance Assessments</li>
            <li>HR Process Review and Improvements</li>
            <li>Employee Engagement Surveys</li>
            <li>Human Capital Due Diligence for Mergers and Acquisitions</li>
            <li>Start-up Company HR Set Up</li>
            <li>Employee Handbooks</li>
          </ul>
          <p className="text-lg text-muted-foreground mt-6">
            Our national expertise enhances and supports our locally-delivered{" "}
            <a href="#" className="text-purple-500 underline">
              benefits consulting
            </a>
            ,{" "}
            <a href="#" className="text-purple-500 underline">
              payroll services
            </a>{" "}
            and{" "}
            <a href="#" className="text-purple-500 underline">
              HRIS technology
            </a>{" "}.
          </p>
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
  