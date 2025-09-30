import {
  DollarSign,
  Target,
  TrendingUp,
  Users,
  Award,
  BookOpen,
} from "lucide-react";

export default function SpecialAllocations() {
  const allocations = [
    {
      icon: DollarSign,
      title: "Leadership Development Fund",
      amount: "৳50 Crore",
      description:
        "Dedicated funding for women's leadership development programs",
      beneficiaries: "3,000 women leaders",
      programs: [
        "Executive leadership training",
        "International exchange programs",
        "Research leadership development",
      ],
    },
    {
      icon: Target,
      title: "Research Excellence Grants",
      amount: "৳30 Crore",
      description: "Special research grants exclusively for women researchers",
      beneficiaries: "1,000 women researchers",
      programs: [
        "Individual research grants",
        "Collaborative research projects",
        "International research partnerships",
      ],
    },
    {
      icon: Users,
      title: "Student Support Programs",
      amount: "৳25 Crore",
      description: "Comprehensive support programs for female students",
      beneficiaries: "12,000 female students",
      programs: [
        "Merit scholarships",
        "Leadership development",
        "Career mentoring programs",
      ],
    },
    {
      icon: Award,
      title: "Achievement Recognition Fund",
      amount: "৳10 Crore",
      description:
        "Funding for recognizing and celebrating women's achievements",
      beneficiaries: "500 annual awardees",
      programs: [
        "Excellence awards",
        "Achievement recognition",
        "Success celebration events",
      ],
    },
  ];

  const impactMetrics = [
    {
      icon: TrendingUp,
      title: "Leadership Positions",
      value: "40%",
      description: "Increase in women in senior academic positions",
    },
    {
      icon: BookOpen,
      title: "Research Output",
      value: "60%",
      description: "Increase in research publications by women",
    },
    {
      icon: Users,
      title: "Network Growth",
      value: "300%",
      description: "Growth in women's professional networks",
    },
    {
      icon: Award,
      title: "Recognition",
      value: "150%",
      description: "Increase in awards and recognition for women",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Special Allocations & Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dedicated funding and resources to ensure meaningful impact in
            women's advancement in higher education
          </p>
        </div>

        {/* Funding Allocations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Funding Allocations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allocations.map((allocation, index) => {
              const IconComponent = allocation.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 border border-pink-200"
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-gradient-to-br from-pink-600 to-purple-600 p-4 rounded-full mr-4 flex-shrink-0">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {allocation.title}
                      </h4>
                      <div className="text-2xl font-bold text-pink-600 mb-2">
                        {allocation.amount}
                      </div>
                      <p className="text-gray-700 mb-3">
                        {allocation.description}
                      </p>
                      <div className="text-sm font-semibold text-gray-900">
                        Beneficiaries: {allocation.beneficiaries}
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h5 className="font-semibold text-gray-900 mb-2">
                      Programs Include:
                    </h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {allocation.programs.map((program, programIndex) => (
                        <li key={programIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                          {program}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Impact Metrics */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Measurable Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-pink-200"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-4 rounded-full">
                      <IconComponent className="h-8 w-8 text-pink-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-pink-600 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {metric.title}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {metric.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
