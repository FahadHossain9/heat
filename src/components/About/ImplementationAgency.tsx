import { Building, Users, Target, FileCheck } from "lucide-react";

export default function ImplementationAgency() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Implementation Agency
          </h2>
          <p className="text-lg text-gray-600">
            Who manages and oversees the HEAT project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Agency Info */}
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border border-blue-100">
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Building className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  University Grants Commission of Bangladesh
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  Primary Implementation Agency
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The University Grants Commission (UGC) is responsible for
                  overall project coordination, management, and quality
                  assurance across all 50 partner universities.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start">
                <Target className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Established
                  </h4>
                  <p className="text-gray-600 text-sm">1973</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Partner Universities
                  </h4>
                  <p className="text-gray-600 text-sm">
                    50+ universities nationwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Responsibilities */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-6">
              <FileCheck className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-bold text-gray-900">
                Key Responsibilities
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                "Project coordination",
                "Fund allocation & oversight",
                "Quality assurance",
                "Stakeholder management",
                "Progress monitoring",
                "Reporting to stakeholders",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
