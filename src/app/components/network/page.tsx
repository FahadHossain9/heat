"use client";

import {
  Wifi,
  Globe,
  GraduationCap,
  Laptop,
  Database,
  Video,
  Users,
  BookOpen,
  Network as NetworkIcon,
  Monitor,
} from "lucide-react";

export default function Network() {
  // Sub-component 1.1.2: Higher Education Portal
  const portalFeatures = [
    {
      title: "Virtual Student Mobility",
      description:
        "Facilitate international student mobility through a virtual medium hosted by BdREN",
      icon: GraduationCap,
    },
    {
      title: "Cross-Border Course Credit",
      description:
        "Allow international students from participating universities to take courses for credit in Bangladeshi universities",
      icon: BookOpen,
    },
    {
      title: "Reciprocal Participation",
      description:
        "Generalized program for students outside their home country and institution on a reciprocal basis",
      icon: Globe,
    },
  ];

  // Sub-component 2.1: Business Continuity Activities
  const businessContinuityActivities = [
    {
      number: "1",
      title: "Develop National Learning Management Infrastructure (LMI)",
      description:
        "A national/central Learning Management Infrastructure (LMI) will be established to facilitate the development, management and delivery of on-line courses and digital resources.",
      icon: Database,
      color: "bg-blue-600",
    },
    {
      number: "2",
      title: "Subsidize Connectivity and Devices to Students and Staff",
      description:
        "UGC and participating universities in BdREN will offer a subsidized connectivity package (Wi-Fi router and internet credit) to students and staff.",
      icon: Wifi,
      color: "bg-green-600",
    },
    {
      number: "3",
      title: "Upgrade the Bangladesh Research and Education Network (BdREN)",
      description:
        "BdREN's capacity will be strengthened, and participation of universities will be increased to support envisioned activities and delivery of services under LMI.",
      icon: NetworkIcon,
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex gap-2 mb-6">
              <span className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                Sub-component 1.1.2
              </span>
              <span className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                Sub-component 2.1
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital Learning Infrastructure & Business Continuity
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-4xl mx-auto">
              Building a comprehensive digital ecosystem for higher education
              through portal development and COVID-19 response initiatives
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-300 mb-1">
                  <Monitor className="h-10 w-10 mx-auto" />
                </div>
                <div className="text-sm">Education Portal</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-300 mb-1">
                  <Database className="h-10 w-10 mx-auto" />
                </div>
                <div className="text-sm">National LMI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-300 mb-1">
                  <NetworkIcon className="h-10 w-10 mx-auto" />
                </div>
                <div className="text-sm">BdREN Upgrade</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-component 1.1.2: Higher Education Portal */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-purple-100 text-purple-700 rounded-full px-4 py-2 mb-4 text-sm font-semibold">
              Sub-component 1.1.2
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Higher Education Portal with Localized Content
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This sub-component finances the establishment and maintenance of a
              Higher Education Portal to be hosted by the BdREN in Bangladesh.
              The portal will help facilitate the mobility of international
              students through a &quot;virtual medium&quot;.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {portalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border-2 border-purple-100"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 border-2 border-purple-200">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Global Collaboration Framework
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  This sub-component will allow international students from
                  participating and registered universities to take courses for
                  credit in Bangladeshi universities. As other countries in the
                  region and beyond agree to participate in such programs, this
                  can be generalized to students outside their home country and
                  home institution, and on a reciprocal basis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-component 2.1: Business Continuity */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 text-green-700 rounded-full px-4 py-2 mb-4 text-sm font-semibold">
              Sub-component 2.1
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Supporting Business Continuity under COVID-19
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This sub-component supports business continuity in the wake of the
              coronavirus pandemic and to support disadvantaged students to
              disproportionately represent those unable to participate in any
              online activity. The project will strengthen the capacity of
              Bangladeshi universities to offer online and blended learning
              programs, along with increased service offers to institutions
              through the BdREN infrastructure.
            </p>
          </div>

          <div className="space-y-6">
            {businessContinuityActivities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Left sidebar */}
                    <div
                      className={`${activity.color} lg:col-span-2 p-6 flex flex-col items-center justify-center text-white`}
                    >
                      <div className="text-4xl font-bold mb-2">
                        {activity.number}
                      </div>
                      <IconComponent className="h-12 w-12" />
                    </div>

                    {/* Main content */}
                    <div className="lg:col-span-10 p-6 lg:p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {activity.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-16 bg-gradient-to-br from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Expected Outcomes & Benefits
            </h2>
            <p className="text-lg text-gray-600">
              Transformative impact on higher education in Bangladesh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                International Student Mobility
              </h3>
              <p className="text-gray-700 text-center">
                Enhanced cross-border educational opportunities through virtual
                platforms
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center">
                  <Laptop className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Digital Equity
              </h3>
              <p className="text-gray-700 text-center">
                Subsidized connectivity ensuring access for disadvantaged
                students
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                  <Database className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                National LMI Platform
              </h3>
              <p className="text-gray-700 text-center">
                Centralized infrastructure for online course delivery and
                management
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center">
                  <Video className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Online & Blended Learning
              </h3>
              <p className="text-gray-700 text-center">
                Strengthened capacity for remote teaching and hybrid education
                models
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center">
                  <NetworkIcon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Enhanced BdREN Capacity
              </h3>
              <p className="text-gray-700 text-center">
                Upgraded network infrastructure supporting increased service
                delivery
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Business Continuity
              </h3>
              <p className="text-gray-700 text-center">
                Resilient education system prepared for future disruptions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the Digital Education Revolution
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Access the Higher Education Portal and participate in online
            learning programs supported by BdREN infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center">
              <Monitor className="h-5 w-5 mr-2" />
              Access Education Portal
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center">
              <Users className="h-5 w-5 mr-2" />
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
