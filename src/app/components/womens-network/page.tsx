"use client";

import {
  Users,
  GraduationCap,
  Briefcase,
  Globe,
  Heart,
  Target,
  BookOpen,
  Trophy,
  ArrowRight,
  Star,
  TrendingUp,
} from "lucide-react";

export default function WomensNetwork() {
  const keyInitiatives = [
    {
      title: "Women's Leadership Development",
      icon: Trophy,
      activities: [
        "Leadership training programs for female faculty and administrators",
        "Mentorship initiatives pairing senior and junior female academics",
        "Career advancement support for women in higher education",
        "Gender-sensitive institutional policy development",
      ],
    },
    {
      title: "Student Support Programs",
      icon: GraduationCap,
      activities: [
        "Scholarships and financial support for female students",
        "Academic counseling and guidance services",
        "Skills development workshops",
        "Research opportunities for women students",
      ],
    },
    {
      title: "Faculty Development for Women",
      icon: BookOpen,
      activities: [
        "Advanced training opportunities (domestic and international)",
        "Research capacity building",
        "Professional networking events",
        "Work-life balance support initiatives",
      ],
    },
    {
      title: "Employment & Entrepreneurship",
      icon: Briefcase,
      activities: [
        "Career counseling and job placement services",
        "Industry connections and internship opportunities",
        "Entrepreneurship training and startup support",
        "Alumni network building",
      ],
    },
  ];

  const targetGroups = [
    {
      group: "Female Undergraduate Students",
      icon: Users,
      description: "Supporting academic excellence and career development",
    },
    {
      group: "Female Postgraduate Students",
      icon: GraduationCap,
      description:
        "MS, MPhil, PhD students with research and mentorship support",
    },
    {
      group: "Female Faculty Members",
      icon: BookOpen,
      description:
        "Early career to senior positions with leadership development",
    },
    {
      group: "Female Administrators",
      icon: Briefcase,
      description: "Higher education institution leaders and managers",
    },
    {
      group: "Women Researchers",
      icon: Target,
      description: "Research capacity building and collaboration opportunities",
    },
  ];

  const expectedOutcomes = [
    {
      outcome: "Increased female enrollment in postgraduate programs",
      metric: "Target: 25% increase",
      icon: TrendingUp,
    },
    {
      outcome: "Higher percentage of women in academic leadership",
      metric: "Target: 40% leadership positions",
      icon: Trophy,
    },
    {
      outcome: "Improved employment rates for female graduates",
      metric: "Target: 85% employment rate",
      icon: Briefcase,
    },
    {
      outcome: "Stronger regional/global networks",
      metric: "Target: 50+ network connections",
      icon: Globe,
    },
    {
      outcome: "Enhanced research output by women faculty",
      metric: "Target: 30% increase in publications",
      icon: BookOpen,
    },
    {
      outcome: "Greater gender equity in institutions",
      metric: "Target: 60% female participation",
      icon: Heart,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {`Women's Leadership and Network Development`}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pink-100">
              Empowering women leaders in higher education and fostering female
              participation in {`Bangladesh's`} academic and professional
              landscape
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <div className="text-3xl font-bold text-yellow-300 mb-2">
                Sub-component 1.2.2
              </div>
              <div className="text-lg">{`Women's Network Development`}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Importance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Overview & Importance
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              This component represents a core pillar of the HEAT Project,
              focusing on strengthening {`women's`} participation in higher
              education and developing female leadership in academic
              institutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 text-center">
              <Users className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Strengthening Participation
              </h3>
              <p className="text-gray-600">
                {`Women's`} participation in higher education
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 text-center">
              <Trophy className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Leadership Development
              </h3>
              <p className="text-gray-600">
                Female leadership in academic institutions
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 text-center">
              <Briefcase className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Employment Outcomes
              </h3>
              <p className="text-gray-600">
                Improved graduate employment for women
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 text-center">
              <Globe className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Global Networks
              </h3>
              <p className="text-gray-600">
                Regional and global academic networks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Initiatives
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive programs designed to support women at every stage of
              their academic and professional journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyInitiatives.map((initiative, index) => {
              const IconComponent = initiative.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-pink-100 p-3 rounded-lg mr-4">
                      <IconComponent className="h-8 w-8 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {initiative.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {initiative.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start">
                        <Star className="h-5 w-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional & Global Network Participation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Regional & Global Network Participation
            </h2>
            <p className="text-lg text-gray-600">
              Connecting Bangladeshi women academics with international networks
              for knowledge exchange and collaboration
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Objectives
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Globe className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Connect Bangladeshi women academics with regional and
                    international networks
                  </span>
                </div>
                <div className="flex items-start">
                  <Globe className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Facilitate knowledge exchange and collaboration
                  </span>
                </div>
                <div className="flex items-start">
                  <Globe className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Create platforms for sharing best practices
                  </span>
                </div>
                <div className="flex items-start">
                  <Globe className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Support participation in international conferences and
                    forums
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Network Activities
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-pink-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Regional {`women's`} academic conferences
                  </span>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-pink-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Cross-border research collaborations
                  </span>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-pink-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Exchange programs with partner institutions
                  </span>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-pink-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Virtual networking platforms
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Target Groups
            </h2>
            <p className="text-lg text-gray-600">
              Primary beneficiaries across all levels of higher education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetGroups.map((group, index) => {
              const IconComponent = group.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="bg-pink-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {group.group}
                  </h3>
                  <p className="text-gray-600 text-sm">{group.description}</p>
                </div>
              );
            })}
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
              Measurable impact indicators for {`women's`} advancement in
              higher education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expectedOutcomes.map((outcome, index) => {
              const IconComponent = outcome.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="bg-pink-100 p-2 rounded-lg mr-4 flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {outcome.outcome}
                      </h3>
                      <p className="text-pink-600 font-medium">
                        {outcome.metric}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources & Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Resources & Support
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive support services and resources for all participants
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <GraduationCap className="h-6 w-6 text-pink-600 mr-3" />
                For Female Students
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Information on scholarship applications
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Career guidance resources
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Mentorship program enrollment
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <BookOpen className="h-6 w-6 text-pink-600 mr-3" />
                For Female Faculty
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Training program calendar
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Research grant opportunities
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Leadership development resources
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Target className="h-6 w-6 text-pink-600 mr-3" />
                For Institutions
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Guidelines for gender-inclusive policies
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Best practices for supporting women in academia
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Implementation support and guidance
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the {`Women's`} Network
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Be part of the movement to empower women in higher education and
            build stronger academic networks
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors">
              Apply for Programs
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors">
              Download Resources
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
