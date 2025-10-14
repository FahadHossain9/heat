import { DollarSign, Building2, Globe } from "lucide-react";

export default function BudgetSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Project Budget & Contributions
          </h2>
          <p className="text-lg text-gray-600">
            Financial overview and stakeholder contributions
          </p>
        </div>

        {/* Total Budget */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 mb-8 text-white text-center shadow-xl">
          <div className="flex items-center justify-center mb-4">
            <DollarSign className="h-12 w-12 mr-3" />
            <div>
              <p className="text-lg text-blue-100">Total Project Budget</p>
              <p className="text-5xl font-bold">৳4,017 Crore</p>
              <p className="text-blue-100 mt-2">(401,657 Lac Taka)</p>
            </div>
          </div>
        </div>

        {/* Contribution Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* World Bank */}
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-blue-200">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">World Bank</h3>
                <p className="text-sm text-gray-600">IDA Credit (PA)</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                ৳1,983 Crore
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">198,312 Lac Taka</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                  49.4%
                </span>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              Primary funding source through concessional lending terms
            </p>
          </div>

          {/* Government of Bangladesh */}
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-green-200">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Building2 className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Government of Bangladesh
                </h3>
                <p className="text-sm text-gray-600">GOB Contribution</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="text-4xl font-bold text-green-600 mb-2">
                ৳2,033 Crore
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">203,346 Lac Taka</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                  50.6%
                </span>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              Local implementation support and in-kind contributions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
