import {
  AlertTriangle,
  Clock,
  Shield,
  Users,
  Phone,
  CheckCircle,
} from "lucide-react";

export default function CrisisManagement() {
  const crisisTypes = [
    {
      icon: AlertTriangle,
      title: "Natural Disasters",
      description:
        "Response protocols for floods, cyclones, earthquakes, and other natural disasters",
      responseTime: "15 minutes",
      coverage: "100%",
      protocols: [
        "Early warning systems",
        "Evacuation procedures",
        "Emergency shelters",
        "Communication networks",
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity Incidents",
      description:
        "Protection against cyber attacks, data breaches, and digital threats",
      responseTime: "30 minutes",
      coverage: "99.9%",
      protocols: [
        "Threat detection",
        "Incident response",
        "Data recovery",
        "Security updates",
      ],
    },
    {
      icon: Users,
      title: "Public Health Emergencies",
      description:
        "Response to pandemics, disease outbreaks, and health emergencies",
      responseTime: "20 minutes",
      coverage: "100%",
      protocols: [
        "Health monitoring",
        "Quarantine procedures",
        "Medical support",
        "Communication systems",
      ],
    },
    {
      icon: Phone,
      title: "Infrastructure Failures",
      description:
        "Handling power outages, network failures, and infrastructure breakdowns",
      responseTime: "45 minutes",
      coverage: "95%",
      protocols: [
        "Backup systems",
        "Alternative power",
        "Network redundancy",
        "Maintenance teams",
      ],
    },
  ];

  const responseMetrics = [
    {
      title: "Response Time",
      value: "15 min",
      description: "Average emergency response time",
    },
    {
      title: "Coverage",
      value: "100%",
      description: "Universities covered by emergency systems",
    },
    {
      title: "Staff Trained",
      value: "500+",
      description: "Emergency response personnel trained",
    },
    {
      title: "Success Rate",
      value: "99.9%",
      description: "Threat mitigation success rate",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Crisis Management System
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive crisis management framework ensuring rapid response
            and effective handling of various emergency situations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {crisisTypes.map((crisis, index) => {
            const IconComponent = crisis.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-red-200"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-br from-red-600 to-orange-600 p-4 rounded-full mr-4 flex-shrink-0">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {crisis.title}
                    </h3>
                    <p className="text-gray-700 mb-3">{crisis.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-red-600 mb-1">
                      {crisis.responseTime}
                    </div>
                    <div className="text-xs text-gray-600">Response Time</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-orange-600 mb-1">
                      {crisis.coverage}
                    </div>
                    <div className="text-xs text-gray-600">Coverage</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Response Protocols:
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {crisis.protocols.map((protocol, protocolIndex) => (
                      <li key={protocolIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                        {protocol}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Response Metrics */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Emergency Response Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responseMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-red-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-red-100 to-orange-100 p-4 rounded-full">
                    <Clock className="h-8 w-8 text-red-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {metric.title}
                </div>
                <div className="text-gray-600 text-sm">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
