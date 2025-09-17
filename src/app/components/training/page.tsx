"use client";

import {
  Clock,
  Award,
  MapPin,
  CheckCircle,
  TrendingUp,
  Globe,
  BookOpen,
  GraduationCap,
} from "lucide-react";

export default function Training() {
  const programCategories = [
    {
      title: "Local Expert Programs",
      duration: "Short-term intensive programs",
      focus:
        "Teaching methodologies and pedagogical skills, Research techniques and supervision, Administrative and leadership skills",
      participants: 2500,
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

  const geographicDistribution = [
    { division: "Dhaka Division", percentage: 35 },
    { division: "Chittagong Division", percentage: 22 },
    { division: "Sylhet Division", percentage: 18 },
    { division: "Other Divisions", percentage: 25 },
  ];

  const successStories = [
    {
      university: "University of Chittagong",
      achievement: "150% research publication increase",
      description: "Through comprehensive faculty development programs",
    },
    {
      university: "Jahangirnagar University",
      achievement: "Digital transformation success",
      description: "Complete modernization of teaching methodologies",
    },
    {
      university: "BUET",
      achievement: "Industry collaboration expansion",
      description: "Enhanced partnerships with leading technology companies",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Training Programs
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Building Excellence Through Professional Development
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <div className="text-3xl font-bold text-yellow-300 mb-2">
                2,500+
              </div>
              <div className="text-lg">Professionals Trained Annually</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Categories */}
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
                      <Award className="h-4 w-4 text-green-600 mr-3 mt-1" />
                      <span className="text-gray-700">
                        <strong>Focus:</strong> {program.focus}
                      </span>
                    </div>

                    {program.support && (
                      <div className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1" />
                        <span className="text-gray-700">
                          <strong>Support:</strong> {program.support}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {program.participants.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Participants</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {program.completionRate}%
                      </div>
                      <div className="text-sm text-gray-600">
                        Completion Rate
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Geographic Distribution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Geographic Distribution
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {geographicDistribution.map((region, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {region.percentage}%
                </div>
                <div className="text-gray-600">{region.division}</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${region.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {story.university}
                </h3>
                <div className="flex items-center mb-3">
                  <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-600 font-semibold">
                    {story.achievement}
                  </span>
                </div>
                <p className="text-gray-700">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Training Impact Statistics
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive professional development targeting 5,000+ university
              faculty members
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <GraduationCap className="h-12 w-12 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                5,000+
              </div>
              <div className="text-gray-600">Faculty Members Targeted</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Globe className="h-12 w-12 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                All Public
              </div>
              <div className="text-gray-600">Universities Covered</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <BookOpen className="h-12 w-12 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-gray-600">Program Categories</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">91%</div>
              <div className="text-gray-600">Average Completion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Enhance Your Skills?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join our comprehensive training programs and advance your
            professional development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Register for Training
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              View Program Schedule
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
