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
  Building2,
  DollarSign,
  Database,
  Clipboard,
} from "lucide-react";

export default function QualityAssurance() {
  // Three main pillars based on Sub-component 2.3
  const threePillars = [
    {
      number: "i",
      title: "Improving Higher Education Management",
      icon: TrendingUp,
      description:
        "Development and initiation of innovative management system for the higher education of Bangladesh",
      color: "bg-blue-600",
      initiatives: [
        {
          name: "Performance Based Financing Scheme",
          description:
            "Design and implementation of performance-based funding mechanisms to incentivize quality and excellence",
          icon: DollarSign,
        },
        {
          name: "Centralized Admission System",
          description:
            "Development of a unified admission platform for streamlined and transparent student enrollment",
          icon: Clipboard,
        },
        {
          name: "Higher Education Management Information System",
          description:
            "Further development of comprehensive HEMIS for data-driven decision making and sector monitoring",
          icon: Database,
        },
      ],
    },
    {
      number: "ii",
      title: "Enhanced Quality Assurance Mechanisms",
      icon: Shield,
      description:
        "Institutional Quality Assurance Cells (IQACs) will be scaled up and extended to all 153 universities in Bangladesh",
      color: "bg-green-600",
      keyActivities: [
        "IQAC establishment in all 153 universities",
        "Capacity building and training for IQAC members",
        "Development of quality assurance frameworks and guidelines",
        "Implementation of self-assessment processes",
        "Regular monitoring and evaluation systems",
        "Quality culture development within institutions",
        "Peer review and external quality audit mechanisms",
      ],
      impact: [
        "Comprehensive quality coverage across all universities",
        "Standardized quality assurance practices",
        "Enhanced institutional accountability",
        "Improved teaching-learning outcomes",
        "Data-driven quality improvement",
      ],
    },
    {
      number: "iii",
      title: "Strengthening of Institutional and Program Accreditation",
      icon: Award,
      description:
        "Support the full operationalization of Bangladesh Accreditation Council (BAC) and program accreditations of universities by BAC",
      color: "bg-purple-600",
      targets: [
        {
          metric: "At least 30 programs",
          description:
            "will be accredited in universities under BAC during implementation",
        },
      ],
      activities: [
        "Full operationalization of Bangladesh Accreditation Council (BAC)",
        "Development of accreditation standards and criteria",
        "Capacity building for accreditation assessors",
        "Pre-accreditation support for universities",
        "Program accreditation processes and procedures",
        "Post-accreditation monitoring and follow-up",
        "International accreditation alignment",
      ],
      benefits: [
        "International recognition of programs",
        "Enhanced program quality and credibility",
        "Improved graduate employability",
        "Benchmarking against global standards",
        "Increased stakeholder confidence",
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
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-yellow-300 font-semibold">
                Sub-Component 2.3
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              QA & Accreditation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Improving the Governance and Quality of the Higher Education
              Sector through strengthened management capacity, quality assurance
              mechanisms, and institutional accreditation
            </p>
            <div className="flex items-center justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">153</div>
                <div className="text-sm text-blue-100 mt-1">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">30+</div>
                <div className="text-sm text-blue-100 mt-1">
                  Programs to Accredit
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">3</div>
                <div className="text-sm text-blue-100 mt-1">
                  Key Focus Areas
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
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              The objective of this sub-component is to support activities to
              enhance the overall management capacity of the higher education
              sector in Bangladesh. Technical assistance will be provided to
              support implementation of improved management systems, enhanced
              quality assurance mechanisms, and strengthened accreditation
              processes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 text-center">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Higher Education Management
              </h3>
              <p className="text-gray-600">
                Innovative management systems for the sector
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                IQACs scaled to all 153 universities
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-6 text-center">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Accreditation
              </h3>
              <p className="text-gray-600">
                BAC operationalization and program accreditation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Focus Areas
            </h2>
            <p className="text-lg text-gray-600">
              Technical assistance will be provided to support implementation
              across three strategic areas
            </p>
          </div>
          <div className="space-y-8">
            {threePillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                >
                  {/* Header */}
                  <div className={`${pillar.color} text-white p-6`}>
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold">
                            ({pillar.number})
                          </span>
                          <h3 className="text-2xl font-bold">{pillar.title}</h3>
                        </div>
                        <p className="text-white/90 text-lg">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Management Initiatives */}
                    {pillar.initiatives && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {pillar.initiatives.map((initiative, initIndex) => {
                          const InitIcon = initiative.icon;
                          return (
                            <div
                              key={initIndex}
                              className="bg-gray-50 rounded-lg p-6"
                            >
                              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                                <InitIcon className="h-6 w-6 text-blue-600" />
                              </div>
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                {initiative.name}
                              </h4>
                              <p className="text-gray-600">
                                {initiative.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Key Activities & Impact (for IQAC) */}
                    {pillar.keyActivities && (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">
                            Key Activities:
                          </h4>
                          <ul className="space-y-3">
                            {pillar.keyActivities.map((activity, actIndex) => (
                              <li key={actIndex} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">
                                  {activity}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">
                            Expected Impact:
                          </h4>
                          <ul className="space-y-3">
                            {pillar.impact?.map((impact, impIndex) => (
                              <li key={impIndex} className="flex items-start">
                                <Star className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{impact}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Accreditation Activities & Benefits */}
                    {pillar.activities && (
                      <>
                        {/* Targets */}
                        {pillar.targets && (
                          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 mb-6">
                            <div className="flex items-center gap-3">
                              <Target className="h-8 w-8 text-purple-600" />
                              <div>
                                <span className="text-2xl font-bold text-purple-600">
                                  {pillar.targets[0].metric}
                                </span>
                                <span className="text-gray-700 ml-2">
                                  {pillar.targets[0].description}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">
                              Key Activities:
                            </h4>
                            <ul className="space-y-3">
                              {pillar.activities.map((activity, actIndex) => (
                                <li key={actIndex} className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                                  <span className="text-gray-700">
                                    {activity}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">
                              Benefits:
                            </h4>
                            <ul className="space-y-3">
                              {pillar.benefits?.map((benefit, benIndex) => (
                                <li key={benIndex} className="flex items-start">
                                  <Star className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                                  <span className="text-gray-700">
                                    {benefit}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </>
                    )}
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
