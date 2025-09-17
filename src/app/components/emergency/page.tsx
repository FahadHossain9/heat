"use client";

import {
  Shield,
  AlertTriangle,
  Clock,
  Users,
  Phone,
  CheckCircle,
} from "lucide-react";

export default function Emergency() {
  const preparednessStats = [
    { label: "Response Time", value: "15 minutes", icon: Clock },
    { label: "Coverage", value: "100%", icon: Shield },
    { label: "Staff Trained", value: "500+", icon: Users },
    { label: "Threat Mitigation", value: "99.9%", icon: CheckCircle },
  ];

  const recentResponses = [
    {
      incident: "COVID-19 Response",
      description: "Rapid digital learning transition",
      impact: "15 universities supported",
      status: "Completed",
    },
    {
      incident: "Flood Management 2023",
      description: "15 universities supported",
      impact: "Emergency relief provided",
      status: "Completed",
    },
    {
      incident: "Cyber Security Incidents",
      description: "99.9% threat mitigation success",
      impact: "Zero data breaches",
      status: "Ongoing",
    },
    {
      incident: "Infrastructure Failures",
      description: "Average 30-minute restoration time",
      impact: "Minimal service disruption",
      status: "Ongoing",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Emergency Response System
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Comprehensive Crisis Management and Business Continuity
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <div className="text-3xl font-bold text-yellow-300 mb-2">
                24/7
              </div>
              <div className="text-lg">Emergency Response Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Management Infrastructure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Crisis Management Infrastructure
            </h2>
            <p className="text-lg text-gray-600">
              Ensuring continuity of higher education operations during
              emergencies, disasters, and crisis situations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Business Continuity Framework
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Shield className="h-4 w-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Objective:</strong> Maintain academic operations
                    during disruptions
                  </span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-4 w-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Approach:</strong> Virtual and online learning
                    support
                  </span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-4 w-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Coverage:</strong> All participating universities
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Emergency Support Systems
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Shield className="h-4 w-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Virtual Learning Continuity:</strong> LMI platform
                    utilization for remote learning
                  </span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-4 w-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Disaster Management:</strong> Emergency response
                    committee formation
                  </span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-4 w-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Communication Framework:</strong> Emergency
                    notification systems
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Strategy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Implementation Strategy
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive approach to emergency preparedness and response
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Crisis Preparedness Training
              </h3>
              <p className="text-gray-700">
                Comprehensive training programs for emergency response teams
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Emergency Response Guidelines
              </h3>
              <p className="text-gray-700">
                Standardized procedures for various emergency scenarios
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <CheckCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Infrastructure Backup Systems
              </h3>
              <p className="text-gray-700">
                Redundant systems ensuring continuous service delivery
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                National Disaster Coordination
              </h3>
              <p className="text-gray-700">
                Coordination with national disaster management authorities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preparedness Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Preparedness Statistics
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {preparednessStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="h-12 w-12 text-red-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Responses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Emergency Responses
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentResponses.map((response, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {response.incident}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      response.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {response.status}
                  </span>
                </div>
                <p className="text-gray-700 mb-3">{response.description}</p>
                <div className="flex items-center text-sm text-gray-600">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  <span>Impact: {response.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Procedures */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Emergency Procedures
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Immediate Response (0-1 hour)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">
                    Emergency assessment and threat evaluation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">
                    Activation of emergency response team
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">
                    Communication with all stakeholders
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">
                    Implementation of safety protocols
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Recovery Phase (1-72 hours)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">
                    Damage assessment and resource mobilization
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">
                    Alternative service delivery activation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">
                    Stakeholder communication and updates
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">
                    Recovery planning and implementation
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Emergency Contacts
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Emergency Hotline
              </h3>
              <p className="text-red-600 font-bold text-xl">+880-1700-000000</p>
              <p className="text-sm text-gray-600 mt-2">
                24/7 Emergency Support
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Response Team
              </h3>
              <p className="text-orange-600 font-bold text-xl">
                emergency@heat.ugc.gov.bd
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Emergency Coordination
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Security Team
              </h3>
              <p className="text-blue-600 font-bold text-xl">
                security@heat.ugc.gov.bd
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Cybersecurity Incidents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Emergency Support Available 24/7
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Our emergency response team is always ready to assist in crisis
            situations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              Report Emergency
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
              View Emergency Procedures
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
