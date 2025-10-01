"use client";

import { Wifi, Server, Shield, Zap, Globe, CheckCircle } from "lucide-react";

export default function Network() {
  const infrastructureComponents = [
    {
      title: "Core Network",
      features: [
        "Fiber Optic Backbone: 2,500 km of dedicated fiber",
        "Network Operations Center: 24/7 monitoring facility in Dhaka",
        "Redundancy Systems: Multiple backup paths",
        "Security: Enterprise-grade firewalls",
      ],
    },
    {
      title: "Campus Connectivity",
      features: [
        "Last-Mile Solutions: Fiber and microwave connections",
        "Wi-Fi Coverage: Campus-wide wireless infrastructure",
        "Network Management: Centralized monitoring",
        "Technical Support: On-site and remote assistance",
      ],
    },
    {
      title: "Cloud Integration",
      features: [
        "Data Centers: 3 primary locations with backup facilities",
        "Cloud Services: Storage, computing, application hosting",
        "Backup Systems: Automated daily backups",
        "Disaster Recovery: Comprehensive continuity planning",
      ],
    },
  ];

  const performanceStats = [
    { label: "Uptime", value: "99.7%", icon: Zap },
    { label: "Response Time", value: "<2ms", icon: Globe },
    { label: "Data Transfer", value: "50 TB daily", icon: Server },
    { label: "Security Incidents", value: "<0.1%", icon: Shield },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Campus Network Infrastructure
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Continuously Connecting Universities Through Advanced Digital
              Networks
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <div className="text-3xl font-bold text-yellow-300 mb-2">
                50 Gbps
              </div>
              <div className="text-lg">National Network Capacity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Connectivity Initiative */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Universal Connectivity Initiative
            </h2>
            <p className="text-lg text-gray-600">
              Working to ensure every public university student has access to
              high-speed internet through ongoing comprehensive network
              infrastructure development
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Network Architecture
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">
                    <strong>Coverage:</strong> All public universities in
                    Bangladesh
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">
                    <strong>Technology:</strong> Modern fiber optic backbone
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">
                    <strong>Capacity:</strong> High-speed simultaneous
                    multi-user access
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">
                    <strong>Reliability:</strong> 24/7 connectivity with backup
                    systems
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  All Public
                </div>
                <div className="text-gray-600">Universities Connected</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  High-Speed
                </div>
                <div className="text-gray-600">Multi-User Access</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600">Connectivity</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  Modern
                </div>
                <div className="text-gray-600">Fiber Technology</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Implementation Features
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive features ensuring reliable and secure network
              connectivity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <Wifi className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Comprehensive Wi-Fi Coverage
              </h3>
              <p className="text-gray-600">
                Campus-wide wireless infrastructure ensuring seamless
                connectivity for all users
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Secure Access Control
              </h3>
              <p className="text-gray-600">
                Advanced monitoring and access control systems for secure
                network usage
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <Server className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Technical Support
              </h3>
              <p className="text-gray-600">
                On-site and remote technical support ensuring optimal network
                performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Network Benefits
            </h2>
            <p className="text-lg text-gray-600">
              How our network infrastructure transforms higher education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Educational Access
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Equal opportunity for digital learning resources
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Support for online and blended learning models
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Access to international databases and journals
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Research Enhancement
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Improved collaboration capabilities
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Global research network access
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Enhanced data sharing and analysis
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Digital Equity
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Bridge urban-rural connectivity gaps
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Support diverse socioeconomic backgrounds
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Enable global educational participation
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Components */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Network Infrastructure Components
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infrastructureComponents.map((component, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {component.title}
                </h3>
                <ul className="space-y-3">
                  {component.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Wifi className="h-4 w-4 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Performance Statistics
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="h-12 w-12 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Network Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Network Coverage Map
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive coverage across all divisions
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  division: "Dhaka",
                  universities: 15,
                  status: "Fully Connected",
                },
                {
                  division: "Chittagong",
                  universities: 8,
                  status: "Fully Connected",
                },
                {
                  division: "Sylhet",
                  universities: 6,
                  status: "Fully Connected",
                },
                {
                  division: "Rajshahi",
                  universities: 5,
                  status: "Fully Connected",
                },
                {
                  division: "Khulna",
                  universities: 4,
                  status: "Fully Connected",
                },
                {
                  division: "Barisal",
                  universities: 3,
                  status: "Fully Connected",
                },
                {
                  division: "Rangpur",
                  universities: 3,
                  status: "Fully Connected",
                },
                {
                  division: "Mymensingh",
                  universities: 1,
                  status: "Fully Connected",
                },
              ].map((region, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {region.division}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    {region.universities} Universities
                  </p>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {region.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Network Support?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Our technical team is available 24/7 to ensure seamless connectivity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Request Support
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              View Network Status
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
