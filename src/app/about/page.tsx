"use client";

import {
  projectOverview,
  visionMission,
  strategicObjectives,
} from "@/data/demoData";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About HEAT Project
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Advancing Higher Education Through Strategic Innovation and
              Development
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-lg italic">
                "To transform Bangladesh's higher education sector through
                quality enhancement, infrastructure development, and capacity
                building initiatives"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Project Overview
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive details about the HEAT project implementation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Implementation Period
              </h3>
              <p className="text-gray-600">
                {projectOverview.implementationPeriod}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sponsoring Ministry
              </h3>
              <p className="text-gray-600">
                {projectOverview.sponsoringMinistry}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Implementing Agency
              </h3>
              <p className="text-gray-600">
                {projectOverview.implementingAgency}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Total Cost
              </h3>
              <p className="text-gray-600">{projectOverview.totalCost}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🏦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                GOB Contribution
              </h3>
              <p className="text-gray-600">{projectOverview.gobContribution}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                PA Contribution
              </h3>
              <p className="text-gray-600">{projectOverview.paContribution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Objectives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Main Objectives
            </h2>
            <p className="text-lg text-gray-600">
              Key goals driving the HEAT project's success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Graduate Employability
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Increase graduate employability with focus on female labor force
                participation
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Women's Leadership
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Strengthen women's leadership skills for managerial positions
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Global Partnerships
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Establish regional and global partnerships in higher education
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Digital Innovation
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Enhance digital networks and innovation capacity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Beneficiaries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Target Beneficiaries
            </h2>
            <p className="text-lg text-gray-600">
              The diverse groups that will benefit from HEAT project initiatives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Faculty Training
              </h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">
                {projectOverview.facultyTraining}
              </p>
              <p className="text-gray-600">Direct beneficiaries</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Student Impact
              </h3>
              <p className="text-2xl font-bold text-green-600 mb-2">
                {projectOverview.studentImpact}
              </p>
              <p className="text-gray-600">Students from Bangladesh</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🌏</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Regional Scope
              </h3>
              <p className="text-2xl font-bold text-purple-600 mb-2">
                {projectOverview.regionalScope}
              </p>
              <p className="text-gray-600">
                Teachers from participating countries
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Total Students
              </h3>
              <p className="text-2xl font-bold text-orange-600 mb-2">
                {projectOverview.totalStudents}
              </p>
              <p className="text-gray-600">
                Across all participating countries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {visionMission.vision}
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {visionMission.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Strategic Objectives
            </h2>
          </div>
          <div className="space-y-8">
            {strategicObjectives.map((objective, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {objective.title}
                  </h3>
                  <span className="text-2xl font-bold text-blue-600">
                    {objective.progress}%
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{objective.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${objective.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Component Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Interactive Component Overview
            </h2>
            <p className="text-lg text-gray-600">
              Six strategic components working together for educational
              transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ATF (Academic Transformation Fund)",
                purpose: "Quality enhancement and academic excellence",
                budget: "40% of total project funds",
                impact: "50 universities, 150+ programs improved",
              },
              {
                title: "Training Programs",
                purpose: "Faculty and staff professional development",
                budget: "25% of total project funds",
                impact: "2,500+ professionals trained annually",
              },
              {
                title: "Campus Network Infrastructure",
                purpose: "Digital connectivity and infrastructure development",
                budget: "20% of total project funds",
                impact: "45 institutions connected with high-speed networks",
              },
              {
                title: "BdREN Strengthening",
                purpose: "Global research network integration",
                budget: "10% of total project funds",
                impact: "100+ international network connections",
              },
              {
                title: "Project Management & Monitoring",
                purpose: "Strategic project implementation and tracking",
                budget: "3% of total project funds",
                impact: "98% project success rate",
              },
              {
                title: "Emergency Response",
                purpose: "Comprehensive crisis management and continuity",
                budget: "2% of total project funds",
                impact: "24/7 emergency coverage for all institutions",
              },
            ].map((component, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {component.title}
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-500">
                      Purpose:
                    </span>
                    <p className="text-gray-700">{component.purpose}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">
                      Budget:
                    </span>
                    <p className="text-gray-700">{component.budget}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">
                      Impact:
                    </span>
                    <p className="text-gray-700">{component.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
