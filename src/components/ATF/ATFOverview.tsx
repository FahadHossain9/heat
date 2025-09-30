import { CheckCircle } from "lucide-react";

export default function ATFOverview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ATF Overview
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              The Academic Transformation Fund represents the largest component
              of the HEAT project, focusing on comprehensive quality enhancement
              across partner universities.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-gray-700">
                  Comprehensive quality enhancement initiatives
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-gray-700">
                  Strategic investment in academic excellence
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-gray-700">
                  Nationwide university transformation
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50</div>
              <div className="text-gray-600">Partner Universities</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Programs Enhanced</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-gray-600">Budget Allocation</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-gray-600">Quality Improvement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
