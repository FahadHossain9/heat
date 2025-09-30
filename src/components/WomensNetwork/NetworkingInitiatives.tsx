import {
  Network,
  Calendar,
  Users,
  MessageSquare,
  Globe,
  Award,
} from "lucide-react";

export default function NetworkingInitiatives() {
  const initiatives = [
    {
      icon: Network,
      title: "National Women's Academic Network",
      description:
        "A comprehensive network connecting women academics across all universities in Bangladesh",
      features: [
        "Monthly virtual meetings",
        "Resource sharing platform",
        "Mentorship matching",
        "Research collaboration opportunities",
      ],
      membership: "2,500+ active members",
    },
    {
      icon: Calendar,
      title: "Annual Women's Leadership Summit",
      description:
        "Premier annual event bringing together women leaders from academia, industry, and government",
      features: [
        "Keynote presentations",
        "Panel discussions",
        "Workshop sessions",
        "Networking events",
      ],
      membership: "500+ annual participants",
    },
    {
      icon: Users,
      title: "Regional Women's Chapters",
      description:
        "Local chapters in major cities to facilitate face-to-face networking and collaboration",
      features: [
        "Regional meetups",
        "Local mentorship programs",
        "Community outreach",
        "Professional development",
      ],
      membership: "8 regional chapters",
    },
    {
      icon: MessageSquare,
      title: "Digital Mentorship Platform",
      description:
        "Online platform connecting experienced women leaders with emerging professionals",
      features: [
        "One-on-one mentorship",
        "Group mentoring sessions",
        "Career guidance",
        "Skill development",
      ],
      membership: "1,000+ mentor-mentee pairs",
    },
    {
      icon: Globe,
      title: "International Women's Network",
      description:
        "Global connections with women's networks in other countries for international collaboration",
      features: [
        "International conferences",
        "Exchange programs",
        "Joint research projects",
        "Cultural exchange",
      ],
      membership: "50+ international partners",
    },
    {
      icon: Award,
      title: "Recognition & Awards Program",
      description:
        "Annual recognition program celebrating achievements of women in higher education",
      features: [
        "Excellence awards",
        "Leadership recognition",
        "Research achievements",
        "Community impact",
      ],
      membership: "100+ annual awardees",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Networking Initiatives
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Building strong professional networks and communities to support
            women's advancement in higher education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => {
            const IconComponent = initiative.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-pink-200"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-pink-600 to-purple-600 p-3 rounded-full mr-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {initiative.title}
                  </h3>
                </div>

                <p className="text-gray-700 text-sm mb-4">
                  {initiative.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                    Key Features:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {initiative.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-3">
                  <div className="text-sm font-semibold text-gray-900">
                    Membership:
                  </div>
                  <div className="text-sm text-gray-700">
                    {initiative.membership}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
