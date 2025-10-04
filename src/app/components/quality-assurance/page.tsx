"use client";

import {
  Award,
  CheckCircle,
  Target,
  Users,
  Globe,
  TrendingUp,
  Shield,
  Star,
  ArrowRight,
  FileText,
  GraduationCap,
  BarChart3,
} from "lucide-react";

export default function QualityAssurance() {
  const threePillars = [
    {
      title: "Quality Assurance Systems",
      icon: Shield,
      description:
        "Establish and strengthen institutional quality assurance mechanisms",
      activities: [
        "Development of quality assurance frameworks",
        "Implementation of assessment and evaluation systems",
        "Regular monitoring of academic quality",
        "Continuous improvement processes",
        "Quality culture development within institutions",
      ],
      focus: [
        "Curriculum quality and relevance",
        "Teaching and learning effectiveness",
        "Research quality and output",
        "Faculty qualifications and development",
        "Infrastructure and facilities adequacy",
        "Student support services",
        "Governance and management",
      ],
    },
    {
      title: "International Quality Assurance Collaboration (IQAC)",
      icon: Globe,
      description:
        "Framework for international collaboration bringing global quality standards to Bangladeshi institutions",
      requirements: [
        "Number of foreign students enrolled",
        "International collaboration agreements in place",
        "Number of collaborative research projects",
        "Faculty exchange programs",
        "Joint degree programs or partnerships",
      ],
      activities: [
        "IQAC establishment in participating universities",
        "Regular IQAC meetings and coordination",
        "Quality assurance training and workshops",
        "Self-assessment processes",
        "Peer review mechanisms",
      ],
      metrics: [
        "Total entities eligible for self-assessment",
        "Entities assessed per year",
        "Self-assessment committees formed",
        "Approved assessment committees (SAC)",
        "SARs peer reviewed",
        "Peer review reports completed",
      ],
    },
    {
      title: "Accreditation Support",
      icon: Award,
      description:
        "Support 30 academic programs to achieve accreditation through Bangladesh Accreditation Council",
      process: [
        "Pre-accreditation readiness assessment",
        "Documentation preparation assistance",
        "Quality improvement planning",
        "Accreditation application support",
        "Post-accreditation sustainability planning",
      ],
      benefits: [
        "International recognition",
        "Enhanced credibility and reputation",
        "Improved student outcomes",
        "Quality benchmarking",
        "Employer confidence",
        "Student mobility opportunities",
      ],
    },
  ];

  const implementationPhases = [
    {
      phase: "Phase 1: Capacity Building",
      icon: Users,
      description: "Foundation setting and team preparation",
      activities: [
        "IQAC establishment",
        "Committee formation",
        "Initial training programs",
      ],
    },
    {
      phase: "Phase 2: Assessment",
      icon: FileText,
      description: "Data collection and analysis",
      activities: [
        "Self-assessment processes",
        "Data collection and analysis",
        "Report preparation",
      ],
    },
    {
      phase: "Phase 3: Peer Review",
      icon: CheckCircle,
      description: "External evaluation and feedback",
      activities: [
        "Peer reviewer training",
        "Review processes",
        "Feedback and recommendations",
      ],
    },
    {
      phase: "Phase 4: Improvement",
      icon: TrendingUp,
      description: "Implementation of enhancements",
      activities: [
        "Action plan development",
        "Implementation of improvements",
        "Follow-up assessments",
      ],
    },
    {
      phase: "Phase 5: Accreditation",
      icon: Award,
      description: "Achievement of accreditation status",
      activities: [
        "Accreditation readiness",
        "Application processes",
        "Accreditation achievement",
      ],
    },
  ];

  const expectedOutcomes = [
    {
      category: "Institutional Level",
      icon: GraduationCap,
      outcomes: [
        "Improved governance structures",
        "Enhanced quality culture",
        "Better student learning outcomes",
        "Increased accountability and transparency",
        "Stronger stakeholder confidence",
      ],
    },
    {
      category: "System Level",
      icon: Globe,
      outcomes: [
        "Elevated national higher education standards",
        "International recognition of Bangladeshi institutions",
        "Competitive advantage for graduates",
        "Alignment with global quality benchmarks",
      ],
    },
  ];

  const quantitativeTargets = [
    { target: "30 programs accredited", icon: Award },
    { target: "Universities with functional IQAC", icon: Users },
    { target: "Self-assessment reports completed", icon: FileText },
    { target: "Peer reviews conducted", icon: CheckCircle },
    { target: "Quality improvement plans implemented", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Improving Governance and Quality of Higher Education Sector
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Elevating academic standards through international quality
              frameworks and accreditation support
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <div className="text-3xl font-bold text-yellow-300 mb-2">
                Sub-component 2.3
              </div>
              <div className="text-lg">Quality Assurance & Accreditation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              This component strengthens the quality and governance of
              {`Bangladesh's`} higher education institutions through
              implementation of international quality standards, support for
              program accreditation, and capacity building for quality
              assurance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                International quality standards implementation
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 text-center">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">IQAC</h3>
              <p className="text-gray-600">
                International Quality Assurance Collaboration
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Accreditation
              </h3>
              <p className="text-gray-600">Program accreditation support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Three Pillars of Quality Enhancement
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive approach to quality improvement across all aspects
              of higher education
            </p>
          </div>
          <div className="space-y-12">
            {threePillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-600">{pillar.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Key Activities:
                      </h4>
                      <ul className="space-y-2">
                        {pillar.activities?.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      {pillar.focus && (
                        <>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">
                            Quality Standards Focus:
                          </h4>
                          <ul className="space-y-2">
                            {pillar.focus.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start">
                                <Star className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {pillar.requirements && (
                        <>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">
                            Participation Requirements:
                          </h4>
                          <ul className="space-y-2">
                            {pillar.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start">
                                <Target className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {pillar.process && (
                        <>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">
                            Accreditation Process:
                          </h4>
                          <ul className="space-y-2">
                            {pillar.process.map((step, stepIndex) => (
                              <li key={stepIndex} className="flex items-start">
                                <ArrowRight className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{step}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {pillar.benefits && (
                        <>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">
                            Benefits of Accreditation:
                          </h4>
                          <ul className="space-y-2">
                            {pillar.benefits.map((benefit, benefitIndex) => (
                              <li
                                key={benefitIndex}
                                className="flex items-start"
                              >
                                <Award className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {pillar.metrics && (
                        <>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">
                            Tracking Metrics:
                          </h4>
                          <ul className="space-y-2">
                            {pillar.metrics.map((metric, metricIndex) => (
                              <li
                                key={metricIndex}
                                className="flex items-start"
                              >
                                <BarChart3 className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{metric}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Process & Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Implementation Process & Timeline
            </h2>
            <p className="text-lg text-gray-600">
              Structured approach to quality assurance implementation across all
              participating institutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {implementationPhases.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {phase.phase}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">
                          {activity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Expected Outcomes
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive impact across institutional and system levels
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {expectedOutcomes.map((outcome, index) => {
              const IconComponent = outcome.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {outcome.category}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {outcome.outcomes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <Star className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quantitative Targets */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quantitative Targets
            </h2>
            <p className="text-lg text-gray-600">
              Measurable goals for quality assurance implementation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quantitativeTargets.map((target, index) => {
              const IconComponent = target.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {target.target}
                  </h3>
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
              Comprehensive support materials and guidance for all stakeholders
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
                For Institutions
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    IQAC establishment guidelines
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Self-assessment toolkits
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Quality assurance frameworks
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Training materials</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Accreditation preparation guides
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="h-6 w-6 text-blue-600 mr-3" />
                For IQAC Members
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Training program schedules
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Best practice resources</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Networking opportunities
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    International collaboration platforms
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 text-blue-600 mr-3" />
                Downloadable Resources
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Quality assurance manual
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Self-assessment templates
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Peer review guidelines</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Accreditation checklists
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Contact & Support
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            For quality assurance queries, IQAC coordination, and accreditation
            support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              IQAC Coordination Office
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Guidelines
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
