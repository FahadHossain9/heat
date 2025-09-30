import {
  Users,
  Award,
  BookOpen,
  Globe,
  Target,
  TrendingUp,
} from "lucide-react";

export default function LeadershipPrograms() {
  const programs = [
    {
      icon: Users,
      title: "Faculty Leadership Development",
      description:
        "Comprehensive leadership training for female faculty members across all universities",
      participants: 3000,
      duration: "6 months",
      focus:
        "Administrative leadership, academic management, and institutional governance",
      outcomes: [
        "Enhanced leadership skills",
        "Increased representation in senior positions",
        "Improved institutional policies",
      ],
    },
    {
      icon: Award,
      title: "Student Leadership Programs",
      description:
        "Empowering female students to take leadership roles in academic and extracurricular activities",
      participants: 12000,
      duration: "1 year",
      focus:
        "Student government, academic clubs, community engagement, and career development",
      outcomes: [
        "Increased student participation",
        "Enhanced career readiness",
        "Stronger peer networks",
      ],
    },
    {
      icon: BookOpen,
      title: "Research Mentorship Network",
      description:
        "Connecting female researchers with senior mentors for career advancement and research excellence",
      participants: 2000,
      duration: "2 years",
      focus:
        "Research methodology, publication strategies, grant writing, and academic networking",
      outcomes: [
        "Higher research output",
        "Improved grant success rates",
        "Enhanced international collaboration",
      ],
    },
    {
      icon: Globe,
      title: "International Exchange Programs",
      description:
        "Global networking opportunities for women in academia through international partnerships",
      participants: 500,
      duration: "3-6 months",
      focus:
        "International collaboration, cultural exchange, and global academic networks",
      outcomes: [
        "Global perspective",
        "International partnerships",
        "Enhanced academic reputation",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Leadership Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to develop and empower women leaders
            in Bangladesh&apos;s higher education sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-pink-200"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-br from-pink-600 to-purple-600 p-4 rounded-full mr-4 flex-shrink-0">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{program.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-pink-600 mb-1">
                      {program.participants.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Participants</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {program.duration}
                    </div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Target className="h-4 w-4 mr-2 text-pink-600" />
                    Focus Areas:
                  </h4>
                  <p className="text-gray-700 text-sm">{program.focus}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-purple-600" />
                    Expected Outcomes:
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {program.outcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
