import { projectOverview } from "@/data/demoData";

export default function ProjectOverview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Project Overview
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive details about the HEAT project implementation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Implementation Period
            </h3>
            <p className="text-gray-600">
              {projectOverview.implementationPeriod}
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">🏛️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Sponsoring Ministry
            </h3>
            <p className="text-gray-600">
              {projectOverview.sponsoringMinistry}
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Implementing Agency
            </h3>
            <p className="text-gray-600">
              {projectOverview.implementingAgency}
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Total Cost
            </h3>
            <p className="text-gray-600">{projectOverview.totalCost}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">🏦</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              GOB Contribution
            </h3>
            <p className="text-gray-600">{projectOverview.gobContribution}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              PA Contribution
            </h3>
            <p className="text-gray-600">{projectOverview.paContribution}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
