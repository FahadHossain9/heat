import { strategicObjectives } from "@/data/demoData";

export default function StrategicObjectives() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Strategic Objectives
          </h2>
        </div>
        <div className="space-y-8">
          {strategicObjectives.map((objective, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {objective.title}
                </h3>
                <span className="text-2xl font-bold text-blue-600">
                  {objective.progress}%
                </span>
              </div>
              <p className="text-gray-700 mb-4">{objective.description}</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${objective.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
