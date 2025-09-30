import {
  Building,
  Users,
  CheckCircle,
  Target,
  TrendingUp,
  Award,
} from "lucide-react";

export default function IQCSystem() {
  const iqcFeatures = [
    {
      icon: Building,
      title: "Institutional Quality Cells",
      description:
        "Establishing dedicated quality assurance units within each university",
      features: [
        "Quality policy development",
        "Internal audit systems",
        "Continuous improvement processes",
        "Performance monitoring",
      ],
      universities: 142,
      status: "Active",
    },
    {
      icon: Users,
      title: "Quality Assurance Teams",
      description:
        "Trained personnel responsible for maintaining and improving institutional quality standards",
      features: [
        "Quality coordinators",
        "Assessment teams",
        "Review committees",
        "Training programs",
      ],
      universities: 142,
      status: "Implemented",
    },
    {
      icon: CheckCircle,
      title: "Quality Standards Framework",
      description:
        "Comprehensive framework for evaluating and maintaining quality across all academic programs",
      features: [
        "Academic standards",
        "Research quality",
        "Student services",
        "Administrative excellence",
      ],
      universities: 142,
      status: "Operational",
    },
  ];

  const qualityMetrics = [
    {
      title: "IQC Establishment",
      value: "100%",
      description: "All participating universities have established IQCs",
    },
    {
      title: "Quality Standards",
      value: "95%",
      description: "Universities meeting minimum quality standards",
    },
    {
      title: "Improvement Rate",
      value: "85%",
      description: "Universities showing quality improvements",
    },
    {
      title: "Accreditation Progress",
      value: "70%",
      description: "Universities progressing toward accreditation",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Internal Quality Cells (IQC) System
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Establishing robust internal quality assurance mechanisms to ensure
            continuous improvement in higher education institutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {iqcFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-indigo-200"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-indigo-600 to-blue-600 p-4 rounded-full mr-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        feature.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : feature.status === "Implemented"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {feature.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{feature.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Key Features:
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-indigo-600">
                    {feature.universities}
                  </div>
                  <div className="text-sm text-gray-600">Universities</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Metrics */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Quality Enhancement Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-indigo-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-indigo-100 to-blue-100 p-4 rounded-full">
                    <Target className="h-8 w-8 text-indigo-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {metric.title}
                </div>
                <div className="text-gray-600 text-sm">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
