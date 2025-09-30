import { Clock, Award, CheckCircle, TrendingUp } from "lucide-react";

export default function ProgramCategories() {
  const programCategories = [
    {
      title: "Local Expert Programs",
      duration: "Short-term intensive programs",
      focus:
        "Teaching methodologies and pedagogical skills, Research techniques and supervision, Administrative and leadership skills",
      participants: 5000,
      completionRate: 92,
      type: "Local",
    },
    {
      title: "International Expert Collaborations",
      duration: "Extended collaboration periods",
      focus:
        "Global partnerships with renowned institutions, Advanced research methods and practices, Faculty exchange programs",
      participants: 800,
      completionRate: 95,
      type: "International",
    },
    {
      title: "Digital Skills Development",
      duration: "Certification programs across disciplines",
      focus:
        "Educational technology integration, Online teaching platform training, Digital content creation workshops",
      participants: 1200,
      completionRate: 88,
      type: "Digital",
    },
    {
      title: "Research Capacity Building",
      duration: "Advanced research supervision methodology",
      focus:
        "Grant writing and funding acquisition, Publication strategies and academic writing, Research ethics and integrity",
      support: "Mentorship programs with international experts",
      participants: 600,
      completionRate: 89,
      type: "Research",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Training Program Categories
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programCategories.map((program, index) => {
            const getTypeColor = (type: string) => {
              switch (type) {
                case "Local":
                  return "bg-blue-100 text-blue-800";
                case "International":
                  return "bg-purple-100 text-purple-800";
                case "Digital":
                  return "bg-green-100 text-green-800";
                case "Research":
                  return "bg-orange-100 text-orange-800";
                default:
                  return "bg-gray-100 text-gray-800";
              }
            };

            return (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {program.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(
                      program.type
                    )}`}
                  >
                    {program.type}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-gray-700">
                      <strong>Duration:</strong> {program.duration}
                    </span>
                  </div>

                  <div className="flex items-start">
                    <Award className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-700">Focus Areas:</strong>
                      <p className="text-gray-600 text-sm mt-1">
                        {program.focus}
                      </p>
                    </div>
                  </div>

                  {program.support && (
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-700">
                          Additional Support:
                        </strong>
                        <p className="text-gray-600 text-sm mt-1">
                          {program.support}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-2xl font-bold text-gray-900">
                        {program.participants.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">Participants</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Award className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-2xl font-bold text-gray-900">
                        {program.completionRate}%
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">Completion Rate</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
