import {
  GraduationCap,
  Users,
  Globe,
  Laptop,
  Calendar,
  Award,
  Lightbulb,
} from "lucide-react";

export default function MainObjectives() {
  const objectives = [
    {
      title: "Enhance Graduate Employability",
      description:
        "Improve job readiness of university graduates through industry-aligned curricula with special focus on increasing female participation in the labor force",
      icon: GraduationCap,
      timeline: "2023 - 2028",
      target: "30% increase in employment rate",
    },
    {
      title: "Strengthen Women's Leadership",
      description:
        "Develop women leaders for senior academic and administrative positions through specialized leadership training and mentorship programs",
      icon: Users,
      timeline: "2023 - 2028",
      target: "1,000+ women leaders trained",
    },
    {
      title: "Build Global Partnerships",
      description:
        "Establish collaborations with leading international universities to enable knowledge exchange and joint research initiatives",
      icon: Globe,
      timeline: "2023 - 2028",
      target: "50+ international partnerships",
    },
    {
      title: "Modernize Digital Infrastructure",
      description:
        "Create high-speed campus networks across universities to enable seamless connectivity for research and learning",
      icon: Laptop,
      timeline: "2023 - 2028",
      target: "50 Gbps network capacity",
    },
    {
      title: "Improve Quality Standards",
      description:
        "Implement international quality assurance frameworks and establish Institutional Quality Assurance Cells (IQACs)",
      icon: Award,
      timeline: "2023 - 2028",
      target: "30+ programs accredited",
    },
    {
      title: "Foster Innovation",
      description:
        "Support research commercialization through Technology Transfer Offices and create innovation hubs",
      icon: Lightbulb,
      timeline: "2023 - 2028",
      target: "15+ innovation centers",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Main Objectives
          </h2>
          <p className="text-lg text-gray-600">
            Strategic goals driving transformational change in higher education
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => {
            const IconComponent = objective.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all border border-gray-200"
              >
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {objective.title}
                    </h3>
                    <div className="flex items-center text-sm text-blue-600 font-medium mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {objective.timeline}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  {objective.description}
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">
                      Target
                    </span>
                    <span className="text-base font-bold text-blue-600">
                      {objective.target}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Timeline */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 border border-blue-100">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Project Timeline
            </h3>
            <p className="text-gray-600">HEAT project implementation period</p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">2023</div>
              <div className="text-sm text-gray-600 mt-1">Project Launch</div>
            </div>
            <div className="flex-1 max-w-md">
              <div className="h-2 bg-blue-600 rounded-full relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-800 rounded-full"></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">2028</div>
              <div className="text-sm text-gray-600 mt-1">
                Target Completion
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-700 font-medium">
              5 Years of Transformational Impact
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
