"use client";

import {
  Globe,
  Database,
  Users,
  Network,
  Wifi,
  Laptop,
  Headphones,
  Building2,
  ArrowRight,
} from "lucide-react";

export default function BdREN() {
  // Key Activities under Sub-component 1.1.4
  const keyActivities = [
    {
      number: "i",
      title: "Standard Package of Services",
      description:
        "Development of a standard package of services that NRENs in South Asia can offer students and higher education institutions",
      services: [
        "Learning Management System (LMS)",
        "Video-conferencing solutions",
        "Data storage infrastructure",
        "Note-taking solutions",
      ],
      icon: Database,
      color: "bg-blue-600",
    },
    {
      number: "ii",
      title: "APAN & SAR RENs Cooperation",
      description:
        "Work closely to support working groups of professionals in Asia-Pacific Advanced Network (APAN) and strengthen cooperation across SAR RENs",
      services: [
        "Professional working groups support",
        "Regional network collaboration",
        "Knowledge sharing initiatives",
        "Best practices exchange",
      ],
      icon: Network,
      color: "bg-indigo-600",
    },
    {
      number: "iii",
      title: "Last-Mile Connectivity",
      description:
        "Put in place the last-mile connectivity for participating colleges, institutions and universities in Bangladesh through institutional grants",
      services: [
        "Institutional connectivity grants",
        "Campus network infrastructure",
        "High-speed internet access",
        "Network equipment provision",
      ],
      icon: Wifi,
      color: "bg-purple-600",
    },
    {
      number: "iv",
      title: "Digital Inclusion Policies",
      description:
        "Support the development and implementation of policies and strategies to ensure connectivity of the most disadvantaged students",
      services: [
        "Means-tested device access programs",
        "Subsidized broadband access",
        "Digital equity initiatives",
        "Student support schemes",
      ],
      icon: Laptop,
      color: "bg-green-600",
    },
    {
      number: "v",
      title: "24/7 Help Desk Support",
      description:
        "Establishment of a 24/7 help desk to support remote teaching and learning (in alignment with the desk established under 1.1.1 and the help desk created under Sub-component 1.1.3)",
      services: [
        "Round-the-clock technical support",
        "Remote learning assistance",
        "Teaching support services",
        "Integrated helpdesk system",
      ],
      icon: Headphones,
      color: "bg-orange-600",
    },
  ];

  const internationalPartnerships = [
    {
      name: "APAN",
      fullName: "Asia-Pacific Advanced Network",
      description: "Primary regional network partner",
    },
    {
      name: "SAR RENs",
      fullName: "South Asian Research and Education Networks",
      description: "Regional collaboration framework",
    },
    {
      name: "TEIN",
      fullName: "Trans-Eurasia Information Network",
      description: "Trans-continental connectivity",
    },
    {
      name: "GÉANT",
      fullName: "European Research Network",
      description: "European network integration",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold">Sub-component 1.1.4</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Efforts to Improve Connectivity across National Research and
              Education Networks
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-4xl mx-auto">
              Strengthening Bangladesh Research and Education Network (BdREN)
              through enhanced connectivity and comprehensive digital services
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-300 mb-1">
                  50+
                </div>
                <div className="text-sm">Partner Institutions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-300 mb-1">5</div>
                <div className="text-sm">Key Activity Areas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-300 mb-1">
                  24/7
                </div>
                <div className="text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Component Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This component finances key activities aimed at strengthening
              Bangladesh&apos;s research and education network infrastructure,
              enhancing connectivity, and ensuring equitable access to digital
              resources for all students and institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Activities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Activities
            </h2>
            <p className="text-lg text-gray-600">
              Five strategic initiatives to transform national research and
              education connectivity
            </p>
          </div>

          <div className="space-y-6">
            {keyActivities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Left sidebar with number and icon */}
                    <div
                      className={`${activity.color} lg:col-span-2 p-6 flex flex-col items-center justify-center text-white`}
                    >
                      <div className="text-4xl font-bold mb-2">
                        ({activity.number})
                      </div>
                      <IconComponent className="h-12 w-12" />
                    </div>

                    {/* Main content */}
                    <div className="lg:col-span-10 p-6 lg:p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {activity.title}
                      </h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {activity.description}
                      </p>

                      {/* Services list */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {activity.services.map((service, serviceIndex) => (
                          <div
                            key={serviceIndex}
                            className="flex items-start bg-gray-50 rounded-lg p-3"
                          >
                            <ArrowRight className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* International Partnerships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              International Network Partnerships
            </h2>
            <p className="text-lg text-gray-600">
              Connecting Bangladesh to global research and education networks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internationalPartnerships.map((partnership, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 border-2 border-indigo-100 hover:border-indigo-300 transition-all hover:shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {partnership.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 text-center">
                  {partnership.fullName}
                </p>
                <p className="text-sm text-gray-700 text-center">
                  {partnership.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Expected Outcomes
            </h2>
            <p className="text-lg text-gray-600">
              Transformative impact on Bangladesh&apos;s higher education
              landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                  <Network className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Enhanced Connectivity
              </h3>
              <p className="text-gray-700 text-center">
                Seamless last-mile connectivity for all participating
                institutions across Bangladesh
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Digital Equity
              </h3>
              <p className="text-gray-700 text-center">
                Improved access to digital resources for disadvantaged students
                through targeted support programs
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
                  <Globe className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Global Integration
              </h3>
              <p className="text-gray-700 text-center">
                Strengthened collaboration with regional and international
                research networks
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center">
                  <Database className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Service Standardization
              </h3>
              <p className="text-gray-700 text-center">
                Uniform digital services across South Asian research and
                education networks
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center">
                  <Headphones className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Continuous Support
              </h3>
              <p className="text-gray-700 text-center">
                24/7 helpdesk ensuring uninterrupted support for remote teaching
                and learning
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Institutional Capacity
              </h3>
              <p className="text-gray-700 text-center">
                Enhanced institutional capabilities through infrastructure
                development and grants
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Impact Statistics
            </h2>
            <p className="text-lg text-gray-600">
              Measuring progress in connectivity and digital access
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-700 font-medium">
                Partner Institutions
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 border-2 border-indigo-100 text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4</div>
              <div className="text-gray-700 font-medium">
                International Networks
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border-2 border-purple-100 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-700 font-medium">
                Students Supported
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border-2 border-green-100 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Help Desk Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Connect to the Future of Education
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join Bangladesh Research and Education Network (BdREN) and access
            world-class connectivity, digital services, and global partnerships
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center justify-center">
              <Network className="h-5 w-5 mr-2" />
              Learn More About BdREN
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center justify-center">
              <Headphones className="h-5 w-5 mr-2" />
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
