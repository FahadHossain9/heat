"use client";

import {
  Building,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Target,
  Download,
  FileText,
} from "lucide-react";
import { atfWindows, atfSupportingDocuments } from "@/data/demoData";

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
            {atfWindows.map((window) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {atfSupportingDocuments
              .filter((doc) => doc.isActive)
              .map((doc) => (
                <div
                  key={doc.id}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      {doc.type === "PDF" && (
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                          <FileText className="h-5 w-5 text-red-600" />
                        </div>
                      )}
                      {doc.type === "Word" && (
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                      )}
                      {doc.type === "Excel" && (
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                          <FileText className="h-5 w-5 text-green-600" />
                        </div>
                      )}
                      {doc.type === "PowerPoint" && (
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                          <FileText className="h-5 w-5 text-orange-600" />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">
                          {doc.title}
                        </h3>
                        <div className="text-xs text-gray-600">
                          {doc.type} • {doc.size}
                        </div>
                      </div>
                    </div>
                  </div>

                  {doc.description && (
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                      {doc.description}
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      Uploaded: {new Date(doc.uploadDate).toLocaleDateString()}
                    </span>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-700 transition-colors">
                      <Download className="h-3 w-3 inline mr-1" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Submission Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white border border-blue-200 rounded-lg p-8 max-w-2xl mx-auto shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Ready to Submit Your ATF Proposal?
              </h3>
              <p className="text-gray-600 mb-6">
                Access the official ATF submission portal to submit your
                proposal and track your application status.
              </p>
              <a
                href="https://cfp4atf-heat.bdren.net.bd/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                <Target className="h-6 w-6 mr-3" />
                Submit ATF Proposal
              </a>
            </div>
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
            Join the ATF program and be part of Bangladesh&apos;s educational
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
