import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch with the HEAT Project team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Address */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-3">Address</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              UGC Bhaban
              <br />
              Agargaon, Sher-e-Bangla Nagar
              <br />
              Dhaka-1207, Bangladesh
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-3">Phone</h3>
            <p className="text-gray-600 text-sm">
              Main Office:
              <br />
              +880-2-XXXX-XXXX
              <br />
              <br />
              Hotline:
              <br />
              +880-1XXX-XXXXXX
            </p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-3">Email</h3>
            <p className="text-gray-600 text-sm">
              General:
              <br />
              info@heat-ugc.gov.bd
              <br />
              <br />
              ATF Proposals:
              <br />
              atf@heat-ugc.gov.bd
            </p>
          </div>

          {/* Office Hours */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-3">Office Hours</h3>
            <p className="text-gray-600 text-sm">
              Sunday - Thursday:
              <br />
              9:00 AM - 5:00 PM
              <br />
              <br />
              Friday - Saturday:
              <br />
              Closed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
