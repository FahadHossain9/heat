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
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Monitoring & Evaluation Framework
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Ensuring transparency, accountability, and continuous improvement
              throughout project implementation
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <div className="text-3xl font-bold text-yellow-300 mb-2">
                500+
              </div>
              <div className="text-lg">Sub-projects Monitored</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview of M&E System */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Overview of M&E System
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              The HEAT Project implements a comprehensive three-tier monitoring
              and evaluation system to track progress, measure impact, and
              ensure effective use of resources across all sub-projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Calendar className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Regular Tracking
              </h3>
              <p className="text-gray-600">
                Progress monitoring every 6 months
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Performance-Based
              </h3>
              <p className="text-gray-600">
                Evaluation using standardized frameworks
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <CheckCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Transparent Reporting
              </h3>
              <p className="text-gray-600">
                Clear communication to all stakeholders
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Data-Driven
              </h3>
              <p className="text-gray-600">
                Decision making for continuous improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Tier Monitoring System */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Three-Tier Monitoring System
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive monitoring framework ensuring accountability at
              every level
            </p>
          </div>

          {/* Tier 1 */}
          <div className="bg-white rounded-lg p-8 mb-8 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Six-Monthly Progress Monitoring
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  What We Track:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Sub-project implementation status and milestones
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Direct beneficiaries (students, faculty, researchers)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Fund utilization and budget adherence
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Equipment and facilities procurement progress
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Implementation challenges and solutions
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Metrics:
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      500+
                    </div>
                    <div className="text-sm text-gray-600">Sub-projects</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">50</div>
                    <div className="text-sm text-gray-600">Universities</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      Bi-annual
                    </div>
                    <div className="text-sm text-gray-600">Reporting</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tier 2 */}
          <div className="bg-white rounded-lg p-8 mb-8 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Result Framework Monitoring
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  PDO Level Indicators:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Target className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Universities implementing emergency response plans
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Target className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      International student enrollment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Target className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Regional/global network participation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Target className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Female graduate employment rates
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Intermediate Results:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <BarChart3 className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Student enrollment in remote learning
                    </span>
                  </li>
                  <li className="flex items-start">
                    <BarChart3 className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Faculty training completion rates
                    </span>
                  </li>
                  <li className="flex items-start">
                    <BarChart3 className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      University-industry research collaborations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <BarChart3 className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      IQAC establishment and self-assessment
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tier 3 */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Sub-Project Completion Evaluation
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Evaluation Areas:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Implementation performance vs. original timeline
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Budget utilization efficiency
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Objective achievement and milestone completion
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Research outputs and innovations
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Impact Assessment:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Direct and indirect beneficiary analysis
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Teaching and learning improvements
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Industry collaborations established
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Infrastructure quality improvements
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Performance Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Performance Areas
            </h2>
            <p className="text-lg text-gray-600">
              Critical areas monitored across all HEAT sub-projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                Academic Quality
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Curriculum updates and new courses</li>
                <li>• Teaching methodologies improvement</li>
                <li>• Student satisfaction scores</li>
                <li>• Faculty development programs</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <BarChart3 className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                Research Excellence
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Publications in peer-reviewed journals</li>
                <li>• Research collaborations</li>
                <li>• Patents and innovations</li>
                <li>• Technology commercialization</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                Infrastructure Development
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Facilities established/renovated</li>
                <li>• Equipment procurement (ICT, labs)</li>
                <li>• Campus network expansion</li>
                <li>• Digital infrastructure upgrades</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                Capacity Building
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Training programs (overseas & in-country)</li>
                <li>• Workshops and seminars</li>
                <li>• Conference participation</li>
                <li>• Study tours organized</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                Stakeholder Engagement
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• University-industry collaborations</li>
                <li>• University-university partnerships</li>
                <li>• Community engagement initiatives</li>
                <li>• International network participation</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Calendar className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                Innovation & Entrepreneurship
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Fab Lab workshops and engagement</li>
                <li>• Prototype production and models</li>
                <li>• Business proposal support</li>
                <li>• International Fab Lab networking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Transparency Dashboard */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Data Transparency Dashboard
            </h2>
            <p className="text-lg text-gray-600">
              Aggregated project health indicators and performance metrics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">Sub-projects Monitored</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">50</div>
              <div className="text-gray-600">Participating Universities</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600">Overall Success Rate</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                100%
              </div>
              <div className="text-gray-600">Reporting Compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Accountability & Transparency */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Accountability & Transparency
            </h2>
            <p className="text-lg text-gray-600">
              How we ensure transparency and maintain accountability across all
              projects
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Transparency Mechanisms
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Regular monitoring reports compiled from 500+ sub-projects
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Standardized evaluation criteria applied uniformly across
                    all projects
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Independent verification mechanisms and third-party
                    assessments
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Public disclosure of aggregated results and performance data
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Stakeholder feedback integration and continuous improvement
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Data Verification Methods
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Comprehensive document review and audit trails
                  </span>
                </div>
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Regular site visits and on-ground verification
                  </span>
                </div>
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Beneficiary surveys and feedback collection
                  </span>
                </div>
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Financial audits and budget utilization tracking
                  </span>
                </div>
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Cross-referencing with multiple data sources
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for M&E Queries */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Contact for M&E Queries
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            For monitoring and evaluation related questions, reporting
            guidelines, or data clarification requests
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              M&E Support Request
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Download M&E Guidelines
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
