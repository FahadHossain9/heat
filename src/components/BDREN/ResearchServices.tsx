import { Zap, Database, Video } from "lucide-react";

export default function ResearchServices() {
  const researchServices = [
    {
      title: "High-Performance Computing",
      icon: Zap,
      specifications: "500+ CPU cores, GPU acceleration",
      applications: "Weather modeling, Genomics, Engineering simulation",
      usage: "80% average utilization",
    },
    {
      title: "Research Data Management",
      icon: Database,
      storage: "500 TB research data storage",
      backup: "Multi-site replication",
      access: "Role-based permissions",
    },
    {
      title: "Collaboration Tools",
      icon: Video,
      conferencing: "Multi-point HD conferences",
      sharing: "Secure large file transfer",
      labs: "Remote access to research equipment",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Research Services
          </h2>
          <p className="text-lg text-gray-600">
            Advanced computing and collaboration infrastructure for research
            excellence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <IconComponent className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {service.specifications && (
                    <div>
                      <span className="font-medium text-gray-700">
                        Specifications:
                      </span>
                      <p className="text-gray-600 text-sm mt-1">
                        {service.specifications}
                      </p>
                    </div>
                  )}
                  {service.applications && (
                    <div>
                      <span className="font-medium text-gray-700">
                        Applications:
                      </span>
                      <p className="text-gray-600 text-sm mt-1">
                        {service.applications}
                      </p>
                    </div>
                  )}
                  {service.usage && (
                    <div>
                      <span className="font-medium text-gray-700">Usage:</span>
                      <p className="text-gray-600 text-sm mt-1">
                        {service.usage}
                      </p>
                    </div>
                  )}
                  {service.storage && (
                    <div>
                      <span className="font-medium text-gray-700">
                        Storage:
                      </span>
                      <p className="text-gray-600 text-sm mt-1">
                        {service.storage}
                      </p>
                    </div>
                  )}
                  {service.backup && (
                    <div>
                      <span className="font-medium text-gray-700">Backup:</span>
                      <p className="text-gray-600 text-sm mt-1">
                        {service.backup}
                      </p>
                    </div>
                  )}
                  {service.access && (
                    <div>
                      <span className="font-medium text-gray-700">Access:</span>
                      <p className="text-gray-600 text-sm mt-1">
                        {service.access}
                      </p>
                    </div>
                  )}
                  {service.conferencing && (
                    <div>
                      <span className="font-medium text-gray-700">
                        Conferencing:
                      </span>
                      <p className="text-gray-600 text-sm mt-1">
                        {service.conferencing}
                      </p>
                    </div>
                  )}
                  {service.sharing && (
                    <div>
                      <span className="font-medium text-gray-700">
                        Sharing:
                      </span>
                      <p className="text-gray-600 text-sm mt-1">
                        {service.sharing}
                      </p>
                    </div>
                  )}
                  {service.labs && (
                    <div>
                      <span className="font-medium text-gray-700">
                        Remote Labs:
                      </span>
                      <p className="text-gray-600 text-sm mt-1">
                        {service.labs}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
