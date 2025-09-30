import {
  Shield,
  Users,
  FileText,
  TrendingUp,
  CheckCircle,
  Target,
} from "lucide-react";

export default function GovernanceImprovement() {
  const governanceAreas = [
    {
      icon: Shield,
      title: "Policy Development",
      description:
        "Supporting universities in developing comprehensive governance policies and procedures",
      improvements: [
        "Academic policies",
        "Administrative procedures",
        "Quality assurance frameworks",
        "Ethics and compliance",
      ],
      impact: "Enhanced institutional governance structures",
    },
    {
      icon: Users,
      title: "Leadership Development",
      description:
        "Training programs for university leadership to enhance governance capabilities",
      improvements: [
        "Strategic planning",
        "Decision-making processes",
        "Stakeholder management",
        "Change management",
      ],
      impact: "Improved leadership effectiveness",
    },
    {
      icon: FileText,
      title: "Compliance Framework",
      description: "Establishing robust compliance and monitoring systems",
      improvements: [
        "Regulatory compliance",
        "Audit procedures",
        "Risk management",
        "Performance monitoring",
      ],
      impact: "Better regulatory adherence",
    },
  ];

  const improvementMetrics = [
    {
      title: "Policy Implementation",
      value: "90%",
      description: "Universities with comprehensive governance policies",
    },
    {
      title: "Leadership Training",
      value: "85%",
      description: "University leaders completing governance training",
    },
    {
      title: "Compliance Rate",
      value: "95%",
      description: "Universities meeting compliance requirements",
    },
    {
      title: "Governance Score",
      value: "4.2/5",
      description: "Average governance effectiveness rating",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Governance Improvement
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strengthening institutional governance through policy development,
            leadership training, and compliance frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {governanceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-indigo-200"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-indigo-600 to-blue-600 p-4 rounded-full mr-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {area.title}
                  </h3>
                </div>

                <p className="text-gray-700 mb-4">{area.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Key Improvements:
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {area.improvements.map((improvement, improvementIndex) => (
                      <li key={improvementIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0" />
                        {improvement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-indigo-200">
                  <div className="text-sm font-semibold text-gray-900 mb-1">
                    Impact:
                  </div>
                  <div className="text-sm text-gray-700">{area.impact}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Improvement Metrics */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Governance Improvement Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {improvementMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-indigo-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-indigo-100 to-blue-100 p-4 rounded-full">
                    <TrendingUp className="h-8 w-8 text-indigo-600" />
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
