"use client";

import {
  GraduationCap,
  Globe,
  BookOpen,
  Microscope,
  Lightbulb,
  Building2,
  CheckCircle,
  Award,
} from "lucide-react";

export default function WomensNetwork() {
  // Institutional Grant Packages
  const institutionalPackages = [
    {
      number: "i",
      title: "Capacity Building and Training",
      icon: GraduationCap,
      description:
        "Comprehensive capacity building for academics and students through multiple channels",
      color: "bg-pink-600",
      activities: [
        "E-learning platforms and digital training",
        "Fellowships for advanced study and research",
        "Internship opportunities (domestic and international)",
        "Workshops on specialized topics",
        "Seminars and academic conferences",
        "Cross-institutional training programs",
      ],
    },
    {
      number: "ii",
      title: "Research Collaboration",
      icon: Microscope,
      description:
        "Fostering research collaboration among women within sub-regional, regional, and cross-country areas",
      color: "bg-purple-600",
      activities: [
        "Sub-regional research partnerships",
        "Regional collaboration networks",
        "Cross-country research initiatives",
        "Joint research projects with international partners",
        "Collaborative publication opportunities",
        "Research mentorship programs",
      ],
    },
    {
      number: "iii",
      title: "Faculty and Staff Capacity Building",
      icon: BookOpen,
      description:
        "Building support for faculty and staff capacity and knowledge by strengthening their teaching, learning, and research opportunities",
      color: "bg-indigo-600",
      activities: [
        "Teaching methodology enhancement programs",
        "Advanced pedagogical training",
        "Research skills development",
        "Publication and writing workshops",
        "Academic leadership training",
        "Professional development pathways",
      ],
    },
    {
      number: "iv",
      title: "STEM Promotion and Participation",
      icon: Lightbulb,
      description:
        "Promoting mechanisms for encouraging female participation in STEM and other academic programs",
      color: "bg-blue-600",
      activities: [
        "STEM awareness and outreach programs",
        "Female-focused STEM scholarships",
        "Mentorship in STEM fields",
        "Career guidance in technical disciplines",
        "Industry partnerships for STEM programs",
        "Support for women in non-traditional fields",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-yellow-300 font-semibold">
                Sub-Component 1.2.2
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              International Network of {`Women's`} Universities and Colleges
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pink-100 max-w-4xl mx-auto">
              Supporting overall access of women to higher education,
              particularly STEM, through institutional grants and capacity
              building programs
            </p>
            <div className="flex items-center justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">4</div>
                <div className="text-sm text-pink-100 mt-1">
                  Key Focus Areas
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">2</div>
                <div className="text-sm text-pink-100 mt-1">
                  Participating Institutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Component Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              The sub-component will support the overall access of women to
              higher education, particularly STEM. This will be facilitated
              through institutional grants to participating institutions for
              capacity building, research collaboration, and promotion of female
              participation in STEM and other academic programs.
            </p>
          </div>

          {/* Institutional Support Overview */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-pink-600 p-3 rounded-lg">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Institutional Grants
                </h3>
                <p className="text-lg text-gray-700">
                  Both institutions in Bangladesh will receive institutional
                  grants to implement comprehensive packages for capacity
                  building, research collaboration, and promotion of female
                  participation in STEM and other academic programs.
                </p>
              </div>
            </div>
          </div>

          {/* Key Focus Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 text-center">
              <GraduationCap className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Capacity Building
              </h3>
              <p className="text-gray-600">
                Training for academics and students
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 text-center">
              <Microscope className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Research Collaboration
              </h3>
              <p className="text-gray-600">
                Regional and cross-country partnerships
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 text-center">
              <BookOpen className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Faculty Development
              </h3>
              <p className="text-gray-600">
                Teaching, learning, and research opportunities
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 text-center">
              <Lightbulb className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                STEM Promotion
              </h3>
              <p className="text-gray-600">
                Encouraging female participation in STEM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Grant Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Institutional Grant Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Each institution will receive an institutional grant to implement
              packages for comprehensive support to academics and students
            </p>
          </div>
          <div className="space-y-8">
            {institutionalPackages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                >
                  {/* Header */}
                  <div className={`${pkg.color} text-white p-6`}>
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold">
                            ({pkg.number})
                          </span>
                          <h3 className="text-2xl font-bold">{pkg.title}</h3>
                        </div>
                        <p className="text-white/90 text-lg">
                          {pkg.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Activities */}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Key Activities:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {pkg.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Primary Beneficiaries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Primary Beneficiaries
            </h2>
            <p className="text-lg text-gray-600">
              Supporting women academics and students at all levels
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm text-center">
              <div className="bg-pink-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <GraduationCap className="h-10 w-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Students
              </h3>
              <p className="text-gray-600">
                Female students across undergraduate and postgraduate programs,
                especially in STEM fields
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm text-center">
              <div className="bg-purple-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Academics & Staff
              </h3>
              <p className="text-gray-600">
                Female faculty and staff members seeking to enhance their
                teaching, learning, and research capacity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Expected Outcomes
            </h2>
            <p className="text-lg text-gray-600">
              Measurable impact on {`women's`} participation and advancement in
              higher education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-pink-100 p-2 rounded-lg mr-4 flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Increased Female Enrollment
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Higher participation of women in higher education,
                    especially in STEM programs
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-lg mr-4 flex-shrink-0">
                  <Microscope className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Enhanced Research Capacity
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Strengthened research collaboration and publication output
                    among women academics
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-lg mr-4 flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Improved Teaching Quality
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Enhanced teaching and learning capabilities of female
                    faculty and staff
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Regional Network Integration
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Stronger connections with regional and international
                    academic networks
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4 flex-shrink-0">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Professional Development
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Increased opportunities for fellowships, internships, and
                    advanced training
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-lg mr-4 flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    STEM Excellence
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Greater female representation and achievement in STEM
                    disciplines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Empowering {`Women's`} Higher Education
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Supporting access to higher education for women through centers of
            excellence, regional networks, and comprehensive capacity building
            programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors">
              Apply for Programs
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors">
              Institutional Grant Information
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
