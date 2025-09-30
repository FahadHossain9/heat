import { Building, Users, Award, TrendingUp } from "lucide-react";

export default function ImpactMetrics() {
  const impactMetrics = [
    { label: "Total Investment", value: "৳1,200 Crore", icon: Building },
    {
      label: "Research Grants",
      value: "BDT 1200 Core+",
      icon: TrendingUp,
    },
    {
      label: "Windows Available",
      value: "6 Active Windows",
      icon: Users,
    },
    {
      label: "Universities Covered",
      value: "All Public Universities",
      icon: Award,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ATF Impact Metrics
          </h2>
          <p className="text-lg text-gray-600">
            Measurable outcomes and achievements of the Academic Transformation
            Fund
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
