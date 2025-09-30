import { projectOverview } from "@/data/demoData";

export default function TargetBeneficiaries() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Target Beneficiaries
          </h2>
          <p className="text-lg text-gray-600">
            The diverse groups that will benefit from HEAT project initiatives
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">👨‍🏫</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Faculty Training
            </h3>
            <p className="text-2xl font-bold text-blue-600 mb-2">
              {projectOverview.facultyTraining}
            </p>
            <p className="text-gray-600">Direct beneficiaries</p>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Student Impact
            </h3>
            <p className="text-2xl font-bold text-green-600 mb-2">
              {projectOverview.studentImpact}
            </p>
            <p className="text-gray-600">Students from Bangladesh</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">🌏</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Regional Scope
            </h3>
            <p className="text-2xl font-bold text-purple-600 mb-2">
              {projectOverview.regionalScope}
            </p>
            <p className="text-gray-600">
              Teachers from participating countries
            </p>
          </div>
          <div className="bg-orange-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Total Students
            </h3>
            <p className="text-2xl font-bold text-orange-600 mb-2">
              {projectOverview.totalStudents}
            </p>
            <p className="text-gray-600">Across all participating countries</p>
          </div>
        </div>
      </div>
    </section>
  );
}
