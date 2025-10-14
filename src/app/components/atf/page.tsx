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
  DollarSign,
  BarChart3,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import { atfWindows, atfSupportingDocuments } from "@/data/demoData";

interface AllocationData {
  window: string;
  totalFund: number;
  groupA: {
    allocation: number;
    used: number;
    projects: number;
  };
  groupB: {
    allocation: number;
    used: number;
    projects: number;
  };
  groupC: {
    allocation: number;
    used: number;
    projects: number;
  };
}

export default function ATF() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Upcoming":
        return "bg-blue-100 text-blue-800";
      case "Ongoing":
        return "bg-green-100 text-green-800";
      case "Completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Fund Allocation Data (in Lakh BDT) - From Table 2 of ATF Operational Manual
  const allocationData: AllocationData[] = [
    {
      window: "Window 1: Pandemic Related Research and Development",
      totalFund: 6000,
      groupA: { allocation: 3882, used: 0, projects: 0 },
      groupB: { allocation: 2118, used: 0, projects: 0 },
      groupC: { allocation: 0, used: 0, projects: 0 },
    },
    {
      window: "Window 2: Improvement of Teaching-Learning Infrastructure",
      totalFund: 24200,
      groupA: { allocation: 13310, used: 0, projects: 0 },
      groupB: { allocation: 7260, used: 0, projects: 0 },
      groupC: { allocation: 3630, used: 0, projects: 0 },
    },
    {
      window: "Window 3: Advanced Research (STEM/STAGE, AHSBL)",
      totalFund: 62960,
      groupA: { allocation: 34628, used: 0, projects: 0 },
      groupB: { allocation: 18888, used: 0, projects: 0 },
      groupC: { allocation: 9444, used: 0, projects: 0 },
    },
    {
      window: "Window 3: Industry Collaboration",
      totalFund: 20000,
      groupA: { allocation: 11000, used: 0, projects: 0 },
      groupB: { allocation: 6000, used: 0, projects: 0 },
      groupC: { allocation: 3000, used: 0, projects: 0 },
    },
    {
      window: "Window 4: Innovation Support Facilities",
      totalFund: 5740,
      groupA: { allocation: 5740, used: 0, projects: 0 },
      groupB: { allocation: 0, used: 0, projects: 0 },
      groupC: { allocation: 0, used: 0, projects: 0 },
    },
    {
      window: "Window 5: Technology Transfer Office",
      totalFund: 3500,
      groupA: { allocation: 3500, used: 0, projects: 0 },
      groupB: { allocation: 0, used: 0, projects: 0 },
      groupC: { allocation: 0, used: 0, projects: 0 },
    },
  ];

  // Calculate totals
  const totalAllocation = allocationData.reduce(
    (sum, item) => sum + item.totalFund,
    0
  );
  // const totalUsed = allocationData.reduce(
  //   (sum, item) => sum + item.groupA.used + item.groupB.used + item.groupC.used,
  //   0
  // );
  const totalProjects = allocationData.reduce(
    (sum, item) =>
      sum + item.groupA.projects + item.groupB.projects + item.groupC.projects,
    0
  );

  const impactMetrics = [
    { label: "Total Investment", value: "৳1,224 Crore", icon: Building },
    {
      label: "Total Projects Awarded",
      value: `${totalProjects}+`,
      icon: Award,
    },
    {
      label: "Windows Available",
      value: "6 Active Windows",
      icon: Users,
    },
    {
      label: "Universities Awarded",
      value: "50+",
      icon: TrendingUp,
    },
  ];

  const activities = [
    {
      title: "Competitive Grant System",
      description:
        "Merit-based funding allocation across six strategic windows supporting diverse academic initiatives from pandemic research to technology transfer.",
    },
    {
      title: "Quality Enhancement Programs",
      description:
        "Comprehensive infrastructure development for teaching and learning, including laboratory upgrades, digital resources, and modern learning spaces.",
    },
    {
      title: "Research & Innovation",
      description:
        "Support for advanced research in STEM/STAGE and AHSBL fields, industry collaborations, and establishment of innovation support facilities.",
    },
    {
      title: "Institutional Capacity Building",
      description:
        "Development of Technology Transfer Offices (TTO) and Innovation Support Facilities (ISF) including Fab-Labs, i-Labs, and Business Incubators.",
    },
  ];

  const outcomes = [
    {
      title: "Enhanced Research Output",
      description:
        "Significant increase in quality research publications, patents, and innovations emerging from supported projects.",
      impact: "150+ research projects",
    },
    {
      title: "Infrastructure Modernization",
      description:
        "State-of-the-art laboratories, classrooms, and digital infrastructure across participating universities.",
      impact: "50+ institutions",
    },
    {
      title: "Industry-Academia Linkage",
      description:
        "Strengthened partnerships between universities and industries leading to practical applications and technology commercialization.",
      impact: "30+ partnerships",
    },
    {
      title: "Innovation Ecosystem",
      description:
        "Established innovation hubs fostering entrepreneurship and startup culture within academic institutions.",
      impact: "15+ innovation centers",
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
              Continuously Driving Academic Excellence Through Strategic
              Investment
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
                  {totalProjects}+
                </div>
                <div className="text-gray-600">Projects Awarded</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  ৳{(totalAllocation / 100).toFixed(0)} Cr
                </div>
                <div className="text-gray-600">Total Fund Allocation</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Universities Awarded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fund Allocation Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fund Allocation by Window & University Group
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive allocation and utilization across all ATF windows
              (BDT in Lakh)
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Window Name
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold">
                      Total Fund
                    </th>
                    <th
                      className="px-4 py-4 text-center text-sm font-semibold border-l border-blue-500"
                      colSpan={2}
                    >
                      Group A (55%)
                    </th>
                    <th
                      className="px-4 py-4 text-center text-sm font-semibold border-l border-blue-500"
                      colSpan={2}
                    >
                      Group B (30%)
                    </th>
                    <th
                      className="px-4 py-4 text-center text-sm font-semibold border-l border-blue-500"
                      colSpan={2}
                    >
                      Group C (15%)
                    </th>
                  </tr>
                  <tr className="bg-blue-700">
                    <th className="px-6 py-3 text-left text-xs font-medium"></th>
                    <th className="px-4 py-3 text-center text-xs font-medium"></th>
                    <th className="px-3 py-3 text-center text-xs font-medium border-l border-blue-600">
                      Allocation
                    </th>
                    <th className="px-3 py-3 text-center text-xs font-medium">
                      Used
                    </th>
                    <th className="px-3 py-3 text-center text-xs font-medium border-l border-blue-600">
                      Allocation
                    </th>
                    <th className="px-3 py-3 text-center text-xs font-medium">
                      Used
                    </th>
                    <th className="px-3 py-3 text-center text-xs font-medium border-l border-blue-600">
                      Allocation
                    </th>
                    <th className="px-3 py-3 text-center text-xs font-medium">
                      Used
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {allocationData.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {row.window}
                      </td>
                      <td className="px-4 py-4 text-center text-sm font-semibold text-blue-600">
                        ৳{row.totalFund.toLocaleString()}
                      </td>
                      {/* Group A */}
                      <td className="px-3 py-4 text-center text-sm text-gray-900 border-l border-gray-200">
                        {row.groupA.allocation > 0
                          ? `৳${row.groupA.allocation.toLocaleString()}`
                          : "-"}
                      </td>
                      <td className="px-3 py-4 text-center text-sm text-green-600 font-medium">
                        {row.groupA.used > 0
                          ? `৳${row.groupA.used.toLocaleString()}`
                          : "-"}
                      </td>
                      {/* Group B */}
                      <td className="px-3 py-4 text-center text-sm text-gray-900 border-l border-gray-200">
                        {row.groupB.allocation > 0
                          ? `৳${row.groupB.allocation.toLocaleString()}`
                          : "-"}
                      </td>
                      <td className="px-3 py-4 text-center text-sm text-green-600 font-medium">
                        {row.groupB.used > 0
                          ? `৳${row.groupB.used.toLocaleString()}`
                          : "-"}
                      </td>
                      {/* Group C */}
                      <td className="px-3 py-4 text-center text-sm text-gray-900 border-l border-gray-200">
                        {row.groupC.allocation > 0
                          ? `৳${row.groupC.allocation.toLocaleString()}`
                          : "-"}
                      </td>
                      <td className="px-3 py-4 text-center text-sm text-green-600 font-medium">
                        {row.groupC.used > 0
                          ? `৳${row.groupC.used.toLocaleString()}`
                          : "-"}
                      </td>
                    </tr>
                  ))}
                  {/* Total Row */}
                  <tr className="bg-blue-100 font-semibold">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Total Allocation (All Windows)
                    </td>
                    <td className="px-4 py-4 text-center text-sm text-blue-700">
                      ৳{totalAllocation.toLocaleString()}
                    </td>
                    <td className="px-3 py-4 text-center text-sm text-gray-900 border-l border-gray-300">
                      ৳
                      {allocationData
                        .reduce((sum, row) => sum + row.groupA.allocation, 0)
                        .toLocaleString()}
                    </td>
                    <td className="px-3 py-4 text-center text-sm text-green-700">
                      ৳
                      {allocationData
                        .reduce((sum, row) => sum + row.groupA.used, 0)
                        .toLocaleString()}
                    </td>
                    <td className="px-3 py-4 text-center text-sm text-gray-900 border-l border-gray-300">
                      ৳
                      {allocationData
                        .reduce((sum, row) => sum + row.groupB.allocation, 0)
                        .toLocaleString()}
                    </td>
                    <td className="px-3 py-4 text-center text-sm text-green-700">
                      ৳
                      {allocationData
                        .reduce((sum, row) => sum + row.groupB.used, 0)
                        .toLocaleString()}
                    </td>
                    <td className="px-3 py-4 text-center text-sm text-gray-900 border-l border-gray-300">
                      ৳
                      {allocationData
                        .reduce((sum, row) => sum + row.groupC.allocation, 0)
                        .toLocaleString()}
                    </td>
                    <td className="px-3 py-4 text-center text-sm text-green-700">
                      ৳
                      {allocationData
                        .reduce((sum, row) => sum + row.groupC.used, 0)
                        .toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Legend */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded mr-2"></div>
                  <span className="text-gray-700">
                    University Group A (55% allocation)
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-600 rounded mr-2"></div>
                  <span className="text-gray-700">
                    University Group B (30% allocation)
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-orange-600 rounded mr-2"></div>
                  <span className="text-gray-700">
                    University Group C (15% allocation)
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3">
                Note: All amounts are in BDT Lakh. &quot;Used&quot; represents
                already allocated funds to approved projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Under ATF */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Activities Under ATF
            </h2>
            <p className="text-lg text-gray-600">
              Strategic initiatives driving academic transformation across
              universities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow border border-blue-100"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {activity.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Expected Outcomes
            </h2>
            <p className="text-lg text-gray-600">
              Measurable impacts and achievements from ATF investments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                    <BarChart3 className="h-7 w-7 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                  {outcome.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-center leading-relaxed">
                  {outcome.description}
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {outcome.impact}
                    </span>
                  </div>
                </div>
              </div>
            ))}
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

      {/* ATF Outcomes Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Expected Outcomes & Impact
            </h2>
            <p className="text-lg text-gray-600">
              Transformational results from ATF investments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all border border-green-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Enhanced Research Output
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Significant increase in quality research publications,
                    patents, and innovations emerging from supported projects
                    across all windows.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all border border-blue-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Infrastructure Modernization
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    State-of-the-art laboratories, classrooms, and digital
                    infrastructure developed across 50 participating
                    universities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all border border-purple-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Faculty Capacity Development
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Enhanced teaching and research capabilities through training
                    programs, international collaborations, and advanced
                    resources.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all border border-orange-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Innovation Ecosystem Growth
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Established innovation hubs, technology transfer offices,
                    and business incubators fostering entrepreneurship culture.
                  </p>
                </div>
              </div>
            </div>
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
                Access Application Portal
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
