import { strategicObjectives } from "@/data/demoData";

export default function StrategicObjectives() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Strategic Objectives
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive goals to transform higher education in Bangladesh
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strategicObjectives.map((objective, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 hover:shadow-lg transition-shadow border border-blue-100"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {objective.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
