"use client";

import {
  BarChart3,
  Target,
  CheckCircle,
  TrendingUp,
  Users,
  Calendar,
} from "lucide-react";

export default function Monitoring() {
  const projectCategories = [
    {
      category: "Infrastructure Development",
      percentage: 40,
      color: "bg-blue-500",
    },
    { category: "Capacity Building", percentage: 30, color: "bg-green-500" },
    {
      category: "Technology Integration",
      percentage: 20,
      color: "bg-purple-500",
    },
    { category: "Policy Development", percentage: 10, color: "bg-orange-500" },
  ];

  const projectLifecycle = [
    {
      phase: "Planning Phase",
      activities: [
        "Stakeholder analysis and comprehensive mapping",
        "Risk assessment with multi-criteria evaluation",
        "Resource planning and optimal allocation strategies",
        "Timeline development using critical path analysis",
      ],
    },
    {
      phase: "Implementation Phase",
      activities: [
        "Progress monitoring with real-time tracking systems",
        "Quality assurance through regular milestone reviews",
        "Change management with structured approval processes",
        "Communication via stakeholder updates and reporting",
      ],
    },
    {
      phase: "Evaluation Phase",
      activities: [
        "Impact assessment using quantitative and qualitative metrics",
        "Lessons learned through knowledge capture and sharing",
        "Sustainability planning for long-term maintenance",
        "Documentation with comprehensive project archives",
      ],
    },
  ];

  const successMetrics = [
    { label: "On-Time Delivery", value: "98%", icon: Calendar },
    { label: "Budget Adherence", value: "95%", icon: BarChart3 },
    { label: "Quality Compliance", value: "100%", icon: CheckCircle },
    { label: "Stakeholder Satisfaction", value: "92%", icon: Users },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Monitoring and Evaluation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Continuously Ensuring Excellence Through Systematic Tracking
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <div className="text-3xl font-bold text-yellow-300 mb-2">98%</div>
              <div className="text-lg">Project Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Monitoring Framework */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enhanced Monitoring Framework
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive system for tracking project progress, results, and
              impact across all HEAT components
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Core Activities
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Results monitoring and evaluation systems
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Communication framework coordination
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Project management tool implementation
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Performance tracking and reporting
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Stakeholder engagement management
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  25
                </div>
                <div className="text-gray-600">Active Projects</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  150+
                </div>
                <div className="text-gray-600">Completed Projects</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  ৳500
                </div>
                <div className="text-gray-600">Crore Budget</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  98%
                </div>
                <div className="text-gray-600">On-Time Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Performance Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Performance Areas
            </h2>
            <p className="text-lg text-gray-600">
              Critical areas of focus for monitoring and evaluation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                Project Milestone Tracking
              </h3>
              <p className="text-gray-700 text-center">
                Real-time monitoring of project milestones and deliverables
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <BarChart3 className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                Budget Monitoring
              </h3>
              <p className="text-gray-700 text-center">
                Financial oversight and budget utilization tracking
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                Quality Assurance
              </h3>
              <p className="text-gray-700 text-center">
                Implementation of quality standards and compliance monitoring
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                Risk Management
              </h3>
              <p className="text-gray-700 text-center">
                Proactive risk identification and mitigation strategies
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                Impact Assessment
              </h3>
              <p className="text-gray-700 text-center">
                Evaluation of project outcomes and stakeholder impact
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Calendar className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                Timeline Management
              </h3>
              <p className="text-gray-700 text-center">
                Schedule adherence and timeline optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Project Categories
            </h2>
          </div>
          <div className="space-y-6">
            {projectCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {category.category}
                  </h3>
                  <span className="text-2xl font-bold text-gray-900">
                    {category.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`${category.color} h-3 rounded-full transition-all duration-1000`}
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Lifecycle */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Project Lifecycle
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectLifecycle.map((phase, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {phase.phase}
                </h3>
                <ul className="space-y-3">
                  {phase.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-start">
                      <Target className="h-4 w-4 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Metrics
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="h-12 w-12 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-600">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Monitoring Dashboard Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real-Time Monitoring Dashboard
            </h2>
            <p className="text-lg text-gray-600">
              Live project status and performance indicators
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Project Status
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">On Track</span>
                    <span className="text-green-600 font-semibold">22</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">At Risk</span>
                    <span className="text-yellow-600 font-semibold">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delayed</span>
                    <span className="text-red-600 font-semibold">1</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Budget Utilization
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Used</span>
                    <span className="text-orange-600 font-semibold">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Remaining</span>
                    <span className="text-green-600 font-semibold">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-600 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quality Score
                </h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    98%
                  </div>
                  <div className="text-gray-600">Average Quality Score</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "98%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Project Management Support?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Our expert team provides comprehensive project monitoring and
            management services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              Request Project Support
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              View Project Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
