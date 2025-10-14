export default function ProjectPartners() {
  const partners = [
    {
      logo: "https://heat.ugc.gov.bd/images/logo_2.png",
      role: "Sponsored by",
      name: "World Bank",
      description:
        "Primary funding source providing ৳1,983 crore through IDA credit (49.4%)",
      bgColor: "from-blue-50 to-white",
      borderColor: "border-blue-100",
    },
    {
      logo: "https://heat.ugc.gov.bd/images/logo_3.png",
      role: "Implemented by",
      name: "University Grants Commission",
      description:
        "Primary implementing agency coordinating all project activities nationwide",
      bgColor: "from-green-50 to-white",
      borderColor: "border-green-100",
    },
    {
      logo: "https://heat.ugc.gov.bd/images/logo_1.png",
      role: "In partnership with",
      name: "Government of Bangladesh",
      description:
        "Providing ৳2,033 crore counterpart funding and local implementation support (50.6%)",
      bgColor: "from-orange-50 to-white",
      borderColor: "border-orange-100",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Project Partners
          </h2>
          <p className="text-lg text-gray-600">
            Key stakeholders driving the transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${partner.bgColor} rounded-lg p-8 border ${partner.borderColor} hover:shadow-lg transition-shadow`}
            >
              <div className="flex justify-center mb-6">
                <div className="h-24 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">{partner.role}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {partner.name}
                </h3>
                <p className="text-gray-700 text-sm">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
