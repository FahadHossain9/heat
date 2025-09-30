"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Award } from "lucide-react";
import { projectLeadership, wings, contactInfo } from "@/data/demoData";

export default function Officials() {
  const [activeWing, setActiveWing] = useState(0);

  // Separate PD/DPD from other leadership
  const pdAndDpd = projectLeadership.filter(
    (official) =>
      official.position.includes("Project Director") ||
      official.position.includes("Deputy Project Director")
  );

  const otherLeadership = projectLeadership.filter(
    (official) =>
      !official.position.includes("Project Director") &&
      !official.position.includes("Deputy Project Director")
  );
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              HEAT Project Officials Directory
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Meet our leadership team and wing coordinators driving educational
              transformation
            </p>
          </div>
        </div>
      </section>

      {/* Project Director & Deputy Project Director */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Project Leadership
            </h2>
            <p className="text-lg text-gray-600">
              Leading the HEAT project transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pdAndDpd.map((official, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow border border-blue-200"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-3xl font-bold">
                      {official.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {official.name}
                  </h3>
                  <p className="text-blue-700 font-semibold text-lg mb-4">
                    {official.position}
                  </p>

                  {official.background && (
                    <p className="text-sm text-gray-700 mb-4">
                      {official.background}
                    </p>
                  )}

                  {official.specialization && (
                    <p className="text-sm text-gray-700 mb-3">
                      <strong>Specialization:</strong> {official.specialization}
                    </p>
                  )}

                  {official.experience && (
                    <p className="text-sm text-gray-700 mb-3">
                      <strong>Experience:</strong> {official.experience}
                    </p>
                  )}

                  {official.office && (
                    <div className="flex items-center justify-center text-sm text-gray-700 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{official.office}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-center text-sm text-blue-700 font-medium">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{official.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wing Structure with Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Wing-Based Organization
            </h2>
            <p className="text-lg text-gray-600">
              Seven specialized wings managing different aspects of the HEAT
              project
            </p>
          </div>

          {/* Wing Tabs */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="flex overflow-x-auto">
                {wings.map((wing, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveWing(index)}
                    className={`flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeWing === index
                        ? "border-blue-500 text-blue-600 bg-blue-50"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <span className="mr-2">{wing.icon}</span>
                    {wing.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {wings[activeWing].name}
                </h3>
                <p className="text-gray-600">{wings[activeWing].description}</p>
              </div>

              {/* Wing Officials */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wings[activeWing].officials.map((official, officialIndex) => (
                  <div
                    key={officialIndex}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-lg font-bold">
                          {official.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {official.name}
                      </h4>
                      <p className="text-blue-600 font-medium mb-3">
                        {official.position}
                      </p>

                      {official.specialization && (
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>Specialization:</strong>{" "}
                          {official.specialization}
                        </p>
                      )}

                      {official.experience && (
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>Experience:</strong> {official.experience}
                        </p>
                      )}

                      <div className="flex items-center justify-center text-sm text-blue-600 mb-2">
                        <Mail className="h-4 w-4 mr-1" />
                        <span>{official.email}</span>
                      </div>

                      {official.phone && (
                        <div className="flex items-center justify-center text-sm text-gray-600">
                          <Phone className="h-4 w-4 mr-1" />
                          <span>{official.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wing Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Wing Specializations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Development",
                description:
                  "ATF implementation, curriculum development, quality assurance",
                icon: "🎓",
                color: "bg-blue-100",
              },
              {
                title: "Training & Capacity Building",
                description:
                  "Faculty development, professional training, skill enhancement",
                icon: "👥",
                color: "bg-green-100",
              },
              {
                title: "Infrastructure & Technology",
                description:
                  "Network infrastructure, technical systems, digital solutions",
                icon: "🔧",
                color: "bg-orange-100",
              },
              {
                title: "BdREN & International Relations",
                description:
                  "Research network, global partnerships, international collaboration",
                icon: "🌐",
                color: "bg-purple-100",
              },
              {
                title: "Project Monitoring & Evaluation",
                description:
                  "Project tracking, performance monitoring, evaluation systems",
                icon: "📊",
                color: "bg-yellow-100",
              },
              {
                title: "Emergency Response & Risk Management",
                description:
                  "Crisis management, business continuity, risk assessment",
                icon: "🚨",
                color: "bg-red-100",
              },
              {
                title: "Administration & Communication",
                description:
                  "Administrative support, public relations, stakeholder management",
                icon: "📋",
                color: "bg-indigo-100",
              },
            ].map((wing, index) => (
              <div
                key={index}
                className={`${wing.color} rounded-lg p-6 hover:shadow-lg transition-shadow`}
              >
                <div className="text-4xl mb-4">{wing.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {wing.title}
                </h3>
                <p className="text-gray-700">{wing.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Directory */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Directory
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Main Office
                </h3>
                <p className="text-gray-600">{contactInfo.mainOffice}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Emergency Hotline
                </h3>
                <p className="text-gray-600">{contactInfo.emergencyHotline}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Email
                </h3>
                <p className="text-gray-600">{contactInfo.email}</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Address
                  </h3>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Office Hours
                  </h3>
                  <p className="text-gray-600">{contactInfo.officeHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
