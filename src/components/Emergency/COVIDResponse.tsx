import {
  Shield,
  Users,
  Monitor,
  BookOpen,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

export default function COVIDResponse() {
  const covidInitiatives = [
    {
      icon: Monitor,
      title: "Digital Learning Transition",
      description:
        "Rapid deployment of online learning platforms and digital infrastructure",
      impact: "15 universities supported",
      achievements: [
        "100% online class coverage",
        "Digital content library",
        "Virtual lab access",
        "Online assessment systems",
      ],
    },
    {
      icon: Users,
      title: "Student Support Programs",
      description:
        "Comprehensive support programs for students during the pandemic",
      impact: "50,000+ students supported",
      achievements: [
        "Mental health counseling",
        "Financial assistance",
        "Digital device distribution",
        "Academic support services",
      ],
    },
    {
      icon: Shield,
      title: "Health & Safety Protocols",
      description: "Implementation of comprehensive health and safety measures",
      impact: "142 universities covered",
      achievements: [
        "Safety protocols",
        "Health monitoring",
        "Vaccination programs",
        "Emergency medical support",
      ],
    },
    {
      icon: BookOpen,
      title: "Faculty Training",
      description:
        "Training programs for faculty to adapt to online teaching methods",
      impact: "5,000+ faculty trained",
      achievements: [
        "Online teaching skills",
        "Digital tools training",
        "Student engagement techniques",
        "Assessment methodologies",
      ],
    },
  ];

  const covidMetrics = [
    {
      title: "Universities Supported",
      value: "15",
      description: "Universities receiving emergency support",
    },
    {
      title: "Students Reached",
      value: "50,000+",
      description: "Students supported during pandemic",
    },
    {
      title: "Faculty Trained",
      value: "5,000+",
      description: "Faculty members trained for online teaching",
    },
    {
      title: "Success Rate",
      value: "95%",
      description: "Successful transition to online learning",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            COVID-19 Response & Recovery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive response to the COVID-19 pandemic, ensuring continuity
            of education through digital transformation and student support
            programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {covidInitiatives.map((initiative, index) => {
            const IconComponent = initiative.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-red-200"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-br from-red-600 to-orange-600 p-4 rounded-full mr-4 flex-shrink-0">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {initiative.title}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {initiative.description}
                    </p>
                    <div className="text-lg font-bold text-red-600">
                      Impact: {initiative.impact}
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {initiative.achievements.map(
                      (achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-center"
                        >
                          <CheckCircle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* COVID Response Metrics */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            COVID-19 Response Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {covidMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-red-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-red-100 to-orange-100 p-4 rounded-full">
                    <TrendingUp className="h-8 w-8 text-red-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">
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
