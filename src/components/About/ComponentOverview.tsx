import {
  Building2,
  Users,
  Network,
  Globe,
  LineChart,
  UsersRound,
  Award,
  AlertCircle,
} from "lucide-react";

export default function ComponentOverview() {
  const components = [
    {
      title: "ATF",
      subtitle: "Academic Transformation Fund",
      value: "৳1,224 Cr",
      description: "Quality enhancement and academic excellence",
      icon: Building2,
    },
    {
      title: "Training",
      subtitle: "Professional Development",
      value: "5,000+",
      description: "Faculty and staff trained annually",
      icon: Users,
    },
    {
      title: "Network",
      subtitle: "Campus Infrastructure",
      value: "50 Gbps",
      description: "High-speed network connectivity",
      icon: Network,
    },
    {
      title: "BdREN",
      subtitle: "Research Network",
      value: "100+",
      description: "International network connections",
      icon: Globe,
    },
    {
      title: "M&E",
      subtitle: "Monitoring & Evaluation",
      value: "98%",
      description: "Project success rate",
      icon: LineChart,
    },
    {
      title: "Women's Network",
      subtitle: "Leadership Development",
      value: "1,000+",
      description: "Women leaders empowered",
      icon: UsersRound,
    },
    {
      title: "Quality Assurance",
      subtitle: "Accreditation",
      value: "30+",
      description: "Programs accredited",
      icon: Award,
    },
    {
      title: "Emergency",
      subtitle: "Crisis Management",
      value: "24/7",
      description: "Emergency coverage",
      icon: AlertCircle,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Component Overview
          </h2>
          <p className="text-lg text-gray-600">
            Eight strategic components working together for educational
            transformation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {components.map((component, index) => {
            const IconComponent = component.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-center mb-1">
                  {component.title}
                </h3>
                <p className="text-sm text-blue-600 font-medium text-center mb-4">
                  {component.subtitle}
                </p>
                <div className="text-center mb-3">
                  <span className="text-3xl font-bold text-blue-600">
                    {component.value}
                  </span>
                </div>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {component.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
