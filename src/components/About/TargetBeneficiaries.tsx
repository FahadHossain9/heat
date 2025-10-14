import { GraduationCap, Users, Building2, UsersRound } from "lucide-react";

export default function TargetBeneficiaries() {
  const beneficiaries = [
    {
      icon: GraduationCap,
      title: "Students",
      count: "500,000+",
      description: "Students across 50 universities",
      details: "Access to modern facilities and quality education",
      color: "blue",
    },
    {
      icon: Users,
      title: "Faculty Members",
      count: "25,000+",
      description: "Teachers and researchers",
      details: "Professional development and research opportunities",
      color: "green",
    },
    {
      icon: Building2,
      title: "Universities",
      count: "50",
      description: "Partner institutions nationwide",
      details: "Infrastructure modernization and quality systems",
      color: "purple",
    },
    {
      icon: UsersRound,
      title: "Women Leaders",
      count: "1,000+",
      description: "Women professionals",
      details: "Leadership training and mentorship",
      color: "orange",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Who Benefits from HEAT?
          </h2>
          <p className="text-lg text-gray-600">
            Direct impact across Bangladesh's higher education ecosystem
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficiaries.map((beneficiary, index) => {
            const IconComponent = beneficiary.icon;
            const colorClasses = {
              blue: "bg-blue-50 text-blue-600 border-blue-200",
              green: "bg-green-50 text-green-600 border-green-200",
              purple: "bg-purple-50 text-purple-600 border-purple-200",
              orange: "bg-orange-50 text-orange-600 border-orange-200",
            };

            return (
              <div
                key={index}
                className={`${
                  colorClasses[
                    beneficiary.color as keyof typeof colorClasses
                  ].split(" ")[0]
                } rounded-lg p-6 text-center hover:shadow-lg transition-all border ${
                  colorClasses[
                    beneficiary.color as keyof typeof colorClasses
                  ].split(" ")[2]
                }`}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-16 h-16 ${
                      colorClasses[
                        beneficiary.color as keyof typeof colorClasses
                      ]
                    } rounded-full flex items-center justify-center`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {beneficiary.title}
                </h3>
                <p
                  className={`text-3xl font-bold ${
                    colorClasses[
                      beneficiary.color as keyof typeof colorClasses
                    ].split(" ")[1]
                  } mb-2`}
                >
                  {beneficiary.count}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  {beneficiary.description}
                </p>
                <p className="text-gray-500 text-xs">{beneficiary.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
