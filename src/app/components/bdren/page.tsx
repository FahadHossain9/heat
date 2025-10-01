"use client";

import { Globe, Zap, Database, Video, Users, CheckCircle } from "lucide-react";

export default function BdREN() {
  const internationalPartnerships = [
    "TEIN (Trans-Eurasia Information Network)",
    "Internet2 (USA)",
    "GÉANT (Europe)",
    "APAN (Asia-Pacific Advanced Network)",
  ];

  const researchServices = [
    {
      title: "High-Performance Computing",
      specifications: "500+ CPU cores, GPU acceleration",
      applications: "Weather modeling, Genomics, Engineering simulation",
      usage: "80% average utilization",
    },
    {
      title: "Research Data Management",
      storage: "500 TB research data storage",
      backup: "Multi-site replication",
      access: "Role-based permissions",
    },
    {
      title: "Collaboration Tools",
      conferencing: "Multi-point HD conferences",
      sharing: "Secure large file transfer",
      labs: "Remote access to research equipment",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              BdREN Strengthening
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Actively Connecting Bangladesh to Global Research Networks
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <div className="text-3xl font-bold text-yellow-300 mb-2">
                100+
              </div>
              <div className="text-lg">
                International Research Networks Connected
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Expansion Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Network Expansion Overview
            </h2>
            <p className="text-lg text-gray-600">
              Ongoing strategic enhancement of Bangladesh Research and Education
              Network (BdREN) infrastructure, currently supporting advanced
              digital services nationwide
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Investment Areas
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Digital Library Initiative
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Total Investment:</span>
                      <span className="font-semibold text-indigo-600">
                        40 crore Taka
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Current Status:</span>
                      <span className="font-semibold text-green-600">
                        20 crore in processing
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Content:</span>
                      <span className="font-semibold text-gray-600">
                        Academic journals, research databases, educational
                        materials
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Infrastructure Development
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                      <span className="text-gray-700">
                        Data center expansion and modernization
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                      <span className="text-gray-700">
                        Advanced server and storage solutions
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                      <span className="text-gray-700">
                        Enhanced bandwidth and redundancy
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  International Partnerships
                </h3>
                <ul className="space-y-2">
                  {internationalPartnerships.map((partnership, index) => (
                    <li key={index} className="flex items-center">
                      <Globe className="h-4 w-4 text-indigo-600 mr-3" />
                      <span className="text-gray-700">{partnership}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Bandwidth Allocation
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">International:</span>
                    <span className="font-semibold text-indigo-600">
                      20 Gbps
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Domestic:</span>
                    <span className="font-semibold text-indigo-600">
                      30 Gbps
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Research Traffic:</span>
                    <span className="font-semibold text-indigo-600">
                      10 Gbps dedicated
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Service Offerings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Service Offerings
            </h2>
            <p className="text-lg text-gray-600">
              Advanced digital services supporting research and education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Virtual Desktop Infrastructure (VDI)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Centralized computing resources for universities
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Licensed educational and research software access
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Cost-effective standardized computing environment
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                University VDI Labs
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    20-25 specialized computer laboratories
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Industry-standard applications for various disciplines
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Scheduled and on-demand student access
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Learning Management Infrastructure (LMI)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Centralized learning management system
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Faculty-created educational materials from across Bangladesh
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Course management and collaboration tools
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Long-term Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Long-term Vision
            </h2>
            <p className="text-lg text-gray-600">
              Building a sustainable digital education ecosystem
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Globe className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Self-sustaining Ecosystem
              </h3>
              <p className="text-gray-700">
                Self-sustaining digital education ecosystem
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Zap className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Innovation Hub
              </h3>
              <p className="text-gray-700">
                Regional educational technology innovation hub
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Global Collaboration
              </h3>
              <p className="text-gray-700">
                Platform for international academic collaboration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Research Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <div className="space-y-3">
                  {service.specifications && (
                    <div>
                      <span className="text-sm font-medium text-gray-500">
                        Specifications:
                      </span>
                      <p className="text-gray-700">{service.specifications}</p>
                    </div>
                  )}
                  {service.applications && (
                    <div>
                      <span className="text-sm font-medium text-gray-500">
                        Applications:
                      </span>
                      <p className="text-gray-700">{service.applications}</p>
                    </div>
                  )}
                  {service.usage && (
                    <div>
                      <span className="text-sm font-medium text-gray-500">
                        Usage:
                      </span>
                      <p className="text-gray-700">{service.usage}</p>
                    </div>
                  )}
                  {service.storage && (
                    <div>
                      <span className="text-sm font-medium text-gray-500">
                        Storage:
                      </span>
                      <p className="text-gray-700">{service.storage}</p>
                    </div>
                  )}
                  {service.backup && (
                    <div>
                      <span className="text-sm font-medium text-gray-500">
                        Backup:
                      </span>
                      <p className="text-gray-700">{service.backup}</p>
                    </div>
                  )}
                  {service.access && (
                    <div>
                      <span className="text-sm font-medium text-gray-500">
                        Access:
                      </span>
                      <p className="text-gray-700">{service.access}</p>
                    </div>
                  )}
                  {service.conferencing && (
                    <div>
                      <span className="text-sm font-medium text-gray-500">
                        Video Conferencing:
                      </span>
                      <p className="text-gray-700">{service.conferencing}</p>
                    </div>
                  )}
                  {service.sharing && (
                    <div>
                      <span className="text-sm font-medium text-gray-500">
                        File Sharing:
                      </span>
                      <p className="text-gray-700">{service.sharing}</p>
                    </div>
                  )}
                  {service.labs && (
                    <div>
                      <span className="text-sm font-medium text-gray-500">
                        Virtual Labs:
                      </span>
                      <p className="text-gray-700">{service.labs}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Research Impact
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Active Research Projects</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">International Networks</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">HD Conferences</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50</div>
              <div className="text-gray-600">Gbps Total Bandwidth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Research Success Stories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Climate Research Collaboration
              </h3>
              <p className="text-gray-700 mb-4">
                Partnered with European research institutions for climate
                modeling using high-performance computing resources.
              </p>
              <div className="text-sm text-indigo-600 font-medium">
                Read Full Case Study →
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Genomics Research Network
              </h3>
              <p className="text-gray-700 mb-4">
                Connected with international genomics research networks,
                enabling large-scale DNA sequencing projects.
              </p>
              <div className="text-sm text-indigo-600 font-medium">
                Read Full Case Study →
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Engineering Simulation Hub
              </h3>
              <p className="text-gray-700 mb-4">
                Established virtual engineering labs with remote access to
                advanced simulation software and computational resources.
              </p>
              <div className="text-sm text-indigo-600 font-medium">
                Read Full Case Study →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Connect Globally?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join BdREN and access world-class research networks and resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              Apply for BdREN Access
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              View Available Resources
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
