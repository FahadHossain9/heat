"use client";

import {
  Building,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Target,
  Download,
  Calendar,
  FileText,
} from "lucide-react";
import { atfWindows, supportingDocuments } from "@/data/demoData";

export default function ATF() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-800";
      case "Closed":
        return "bg-red-100 text-red-800";
      case "Upcoming":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const impactMetrics = [
    { label: "Total Investment", value: "৳1,200 Crore", icon: Building },
    {
      label: "Research Grants",
      value: "BDT 1200 Core+",
      icon: TrendingUp,
    },
    {
      label: "Windows Available",
      value: "6 Active Windows",
      icon: Users,
    },
    {
      label: "Universities Covered",
      value: "All Public Universities",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Academic Transformation Fund (ATF)
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Driving Academic Excellence Through Strategic Investment
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <div className="text-3xl font-bold text-yellow-300 mb-2">
                ৳1,200 Crore
              </div>
              <div className="text-lg">Allocated for Quality Enhancement</div>
            </div>
          </div>
        </div>
      </section>

      {/* ATF Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ATF Overview
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                The Academic Transformation Fund represents the largest
                component of the HEAT project, focusing on comprehensive quality
                enhancement across partner universities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">
                    Comprehensive quality enhancement initiatives
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">
                    Strategic investment in academic excellence
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">
                    Nationwide university transformation
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50</div>
                <div className="text-gray-600">Partner Universities</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  150+
                </div>
                <div className="text-gray-600">Programs Enhanced</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                <div className="text-gray-600">Budget Allocation</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                <div className="text-gray-600">Quality Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Windows System */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ATF Six Windows System
            </h2>
            <p className="text-lg text-gray-600">
              Competitive grant system supporting various research and
              development initiatives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {atfWindows.map((window, index) => (
              <div
                key={window.id}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {window.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      window.status
                    )}`}
                  >
                    {window.status}
                  </span>
                </div>

                <p className="text-gray-700 mb-4">{window.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Focus Areas:
                  </h4>
                  <ul className="space-y-1">
                    {window.focus.map((focus, focusIndex) => (
                      <li key={focusIndex} className="flex items-start">
                        <Target className="h-3 w-3 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-600">
                    <FileText className="h-4 w-4 mr-1" />
                    <span>{window.sppFormat}</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    <Download className="h-4 w-4 inline mr-1" />
                    Download
                  </button>
                </div>

                {window.deadline && (
                  <div className="mt-3 flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Deadline: {window.deadline}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Supporting Documents
            </h2>
            <p className="text-lg text-gray-600">
              Essential documents and templates for ATF applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportingDocuments.map((doc) => (
              <div
                key={doc.id}
                className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <FileText className="h-8 w-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {doc.title}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {doc.type} • {doc.size}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {doc.downloads} downloads
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    <Download className="h-4 w-4 inline mr-1" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Impact Metrics
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="h-12 w-12 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-600">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                University of Dhaka
              </h3>
              <p className="text-gray-700 mb-4">
                Implemented comprehensive quality assurance framework resulting
                in 95% faculty satisfaction and 30% increase in research
                publications.
              </p>
              <div className="text-sm text-blue-600 font-medium">
                Read Full Case Study →
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">BUET</h3>
              <p className="text-gray-700 mb-4">
                Enhanced engineering curriculum with industry partnerships,
                achieving 100% graduate employment rate and international
                accreditation.
              </p>
              <div className="text-sm text-blue-600 font-medium">
                Read Full Case Study →
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Jahangirnagar University
              </h3>
              <p className="text-gray-700 mb-4">
                Transformed liberal arts programs with digital integration,
                increasing student enrollment by 25% and improving learning
                outcomes.
              </p>
              <div className="text-sm text-blue-600 font-medium">
                Read Full Case Study →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the ATF program and be part of Bangladesh's educational
            transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Apply for ATF Support
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
