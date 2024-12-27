import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <h1 className="text-4xl font-bold mb-16 text-gray-800 dark:text-gray-100">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
        {/* Office Location */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-12 text-center flex flex-col justify-between">
          <div>
            <MapPin className="text-purple-500 dark:text-purple-400 w-16 h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Office Location
            </h3>
            <div className="mb-6">
              <p className="font-semibold text-gray-800 dark:text-gray-100">
                Address:
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Montebello, CA 90640
              </p>
            </div>
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.918264967907!2d-118.12284758477937!3d34.01563492637438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c4b9c74c60f5%3A0x95b18dc18ea02ea8!2sMontebello%2C%20CA%2090640!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Call Us */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-12 text-center flex flex-col justify-between">
          <div>
            <Phone className="text-purple-500 dark:text-purple-400 w-16 h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Call Us
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              951-533-5344
            </p>
            <p className="font-semibold text-gray-800 dark:text-gray-100">
              Phone Hours:
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Monday–Friday: 6:00 am–4:00 pm PT
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Saturday & Sunday: Closed
            </p>
          </div>
        </div>

        {/* Email Us */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-12 text-center flex flex-col justify-between">
          <div>
            <Mail className="text-purple-500 dark:text-purple-400 w-16 h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Email Us
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              Submit an email, and we will get back to you as soon as possible.
            </p>
            <a
              href="mailto:ramona.ramirez@example.com"
              className="text-purple-500 hover:underline dark:text-purple-400 text-lg"
            >
              ramona.ramirez@example.com
            </a>
            <p className="font-semibold text-gray-800 dark:text-gray-100 mt-6">
              Email Hours:
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Monday–Friday: 6:00 am–4:00 pm PT
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Saturday & Sunday: 6:00 am–4:00 pm PT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
