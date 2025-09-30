import {
  Award,
  FileText,
  Users,
  CheckCircle,
  Target,
  BookOpen,
} from "lucide-react";

export default function AccreditationSupport() {
  const accreditationTypes = [
    {
      icon: Award,
      title: "Institutional Accreditation",
      description:
        "Comprehensive assessment of overall institutional quality and effectiveness",
      criteria: [
        "Mission and governance",
        "Academic programs",
        "Faculty qualifications",
        "Student services",
        "Infrastructure",
      ],
      timeline: "18-24 months",
      support: "Full technical assistance and preparation guidance",
    },
    {
      icon: BookOpen,
      title: "Program Accreditation",
      description:
        "Specialized accreditation for specific academic programs and disciplines",
      criteria: [
        "Curriculum design",
        "Learning outcomes",
        "Faculty expertise",
        "Student assessment",
        "Industry relevance",
      ],
      timeline: "12-18 months",
      support: "Program-specific consultation and review",
    },
    {
      icon: Users,
      title: "Faculty Development for Accreditation",
      description:
        "Training programs to prepare faculty for accreditation requirements",
      criteria: [
        "Teaching methodologies",
        "Assessment practices",
        "Quality assurance",
        "Continuous improvement",
      ],
      timeline: "6-12 months",
      support: "Comprehensive training and mentoring programs",
    },
  ];

  const supportServices = [
    {
      title: "Accreditation Preparation",
      description:
        "Guidance and support in preparing for accreditation assessments",
      services: [
        "Document preparation",
        "Self-assessment support",
        "Gap analysis",
        "Action plan development",
      ],
    },
    {
      title: "Quality Enhancement",
      description:
        "Ongoing support for maintaining and improving quality standards",
      services: [
        "Regular monitoring",
        "Best practice sharing",
        "Continuous improvement",
        "Peer review programs",
      ],
    },
    {
      title: "Technical Assistance",
      description:
        "Expert consultation and technical support for quality initiatives",
      services: [
        "Expert consultations",
        "Workshop facilitation",
        "Resource development",
        "Training programs",
      ],
    },
    {
      title: "Compliance Monitoring",
      description:
        "Regular monitoring and assessment of compliance with quality standards",
      services: [
        "Compliance audits",
        "Progress tracking",
        "Performance indicators",
        "Reporting systems",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Accreditation Support
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive support for universities seeking national and
            international accreditation to enhance their academic standing and
            global recognition
          </p>
        </div>

        {/* Accreditation Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Types of Accreditation Support
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accreditationTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-indigo-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-indigo-600 to-blue-600 p-4 rounded-full mr-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {type.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 mb-4">{type.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Key Criteria:
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {type.criteria.map((criterion, criterionIndex) => (
                        <li key={criterionIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0" />
                          {criterion}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-900">
                        Timeline:
                      </span>
                      <span className="text-sm font-bold text-indigo-600">
                        {type.timeline}
                      </span>
                    </div>
                    <div className="text-sm text-gray-700">{type.support}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Support Services */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Support Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow border border-indigo-200"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-br from-indigo-100 to-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Target className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Services Include:
                  </h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
