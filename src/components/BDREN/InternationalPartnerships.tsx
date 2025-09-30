import { Globe, Users, CheckCircle } from "lucide-react";

export default function InternationalPartnerships() {
  const internationalPartnerships = [
    "TEIN (Trans-Eurasia Information Network)",
    "Internet2 (USA)",
    "GÉANT (Europe)",
    "APAN (Asia-Pacific Advanced Network)",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            International Partnerships
          </h2>
          <p className="text-lg text-gray-600">
            Global research network connections enabling international
            collaboration
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              {internationalPartnerships.map((partnership, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <Globe className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {partnership}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Active collaboration network
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex justify-center mb-6">
                <div className="bg-indigo-100 p-4 rounded-full">
                  <Users className="h-12 w-12 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Global Connectivity
              </h3>
              <p className="text-gray-600 mb-6">
                BdREN connects Bangladesh's research community to major
                international research and education networks, enabling seamless
                global collaboration.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">
                    4
                  </div>
                  <div className="text-sm text-gray-600">Major Networks</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
