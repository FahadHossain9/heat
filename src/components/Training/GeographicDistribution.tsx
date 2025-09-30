import { MapPin, Globe } from "lucide-react";

export default function GeographicDistribution() {
  const geographicDistribution = [
    { division: "Dhaka Division", percentage: 35 },
    { division: "Chittagong Division", percentage: 22 },
    { division: "Sylhet Division", percentage: 18 },
    { division: "Other Divisions", percentage: 25 },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Geographic Distribution
          </h2>
          <p className="text-lg text-gray-600">
            Training programs reaching universities across Bangladesh
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              {geographicDistribution.map((region, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">
                        {region.division}
                      </span>
                      <span className="text-lg font-bold text-green-600">
                        {region.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${region.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <Globe className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nationwide Coverage
              </h3>
              <p className="text-gray-600 mb-6">
                Our training programs have successfully reached all major
                divisions of Bangladesh, ensuring comprehensive coverage and
                equal access to professional development opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    8
                  </div>
                  <div className="text-sm text-gray-600">Divisions Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">Universities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
