"use client";

import {
  Calendar,
  Building,
  GraduationCap,
  DollarSign,
  Globe,
  Landmark,
} from "lucide-react";

export default function ProjectOverview() {
  const phases = [
    {
      year: "2021-2022",
      title: "Phase I - Planning & Setup",
      description:
        "Project initiation, baseline studies, and institutional setup",
      status: "completed",
    },
    {
      year: "2022-2024",
      title: "Phase II - Implementation",
      description:
        "Core component implementation and infrastructure development",
      status: "current",
    },
    {
      year: "2024-2026",
      title: "Phase III - Expansion",
      description: "Scale-up operations and nationwide rollout",
      status: "upcoming",
    },
  ];

  const projectDetails = [
    {
      icon: Calendar,
      title: "Implementation Period",
      value: "2021-2026",
      description: "5-year comprehensive transformation program",
    },
    {
      icon: Building,
      title: "Sponsoring Ministry",
      value: "Ministry of Education",
      description: "Government of Bangladesh",
    },
    {
      icon: GraduationCap,
      title: "Implementing Agency",
      value: "University Grants Commission",
      description: "Primary implementing partner",
    },
    {
      icon: DollarSign,
      title: "Total Budget",
      value: "৳5,000 Crore",
      description: "Comprehensive funding allocation",
    },
    {
      icon: Landmark,
      title: "GOB Contribution",
      value: "৳1,500 Crore",
      description: "Government of Bangladesh funding",
    },
    {
      icon: Globe,
      title: "World Bank Funding",
      value: "৳3,500 Crore",
      description: "International development assistance",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Project Overview
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Higher Education Acceleration and Transformation (HEAT) project
            is a comprehensive World Bank-funded initiative designed to
            transform Bangladesh&apos;s higher education system through
            strategic investments in digital innovation, infrastructure, and
            capacity building.
          </p>
        </div>

        {/* Timeline Visualization */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Implementation Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#225E99] to-[#F24E4B]"></div>
            <div className="space-y-8">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-[#225E99]">
                      <div className="flex items-center mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            phase.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : phase.status === "current"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {phase.status === "completed"
                            ? "Completed"
                            : phase.status === "current"
                            ? "Current"
                            : "Upcoming"}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {phase.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">{phase.year}</p>
                      <p className="text-gray-700">{phase.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-white border-4 border-[#225E99] rounded-full relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectDetails.map((detail, index) => {
            const IconComponent = detail.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-[#225E99] to-[#1a4a7a] p-4 rounded-full">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {detail.title}
                </h3>
                <p className="text-2xl font-bold text-[#225E99] mb-2">
                  {detail.value}
                </p>
                <p className="text-gray-600 text-sm">{detail.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
