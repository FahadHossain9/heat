"use client";

import {
  Users,
  Target,
  TrendingUp,
  BookOpen,
  Award,
  Briefcase,
  DollarSign,
  CheckCircle,
} from "lucide-react";

export default function Training() {
  const trainingCategories = [
    {
      title: "Professional Development Training",
      icon: Users,
      description:
        "Comprehensive professional development programs designed to enhance faculty teaching methodologies, research capabilities, and academic excellence across all disciplines.",
      color: "blue",
      objectives: [
        "Enhance teaching effectiveness and pedagogical skills",
        "Develop innovative curriculum design capabilities",
        "Improve student engagement and learning outcomes",
        "Strengthen assessment and evaluation techniques",
        "Foster collaborative learning environments",
        "Build digital literacy for modern education",
      ],
      outcomes: [
        "Faculty equipped with modern teaching methodologies",
        "Improved student satisfaction and academic performance",
        "Enhanced classroom management skills",
        "Increased adoption of learner-centered approaches",
        "Better integration of technology in teaching",
        "Development of reflective teaching practices",
      ],
      activities: [
        "Interactive workshops and hands-on training sessions",
        "Peer learning and collaborative teaching demonstrations",
        "Online and blended learning modules",
        "Mentorship programs with experienced educators",
      ],
    },
    {
      title: "Professional Development Training for Senior Faculty",
      icon: Award,
      description:
        "Specialized leadership and advanced academic programs targeting senior faculty members to strengthen institutional management, strategic planning, and academic leadership capabilities.",
      color: "purple",
      objectives: [
        "Develop strategic leadership and management skills",
        "Enhance research supervision and mentoring capabilities",
        "Build institutional governance expertise",
        "Strengthen academic quality assurance knowledge",
        "Foster innovation in higher education administration",
        "Cultivate change management competencies",
      ],
      outcomes: [
        "Senior faculty prepared for leadership roles",
        "Improved institutional governance practices",
        "Enhanced research supervision quality",
        "Stronger academic program management",
        "Better strategic planning capabilities",
        "Effective change leadership in universities",
      ],
      activities: [
        "Executive leadership development programs",
        "Strategic planning workshops and simulations",
        "Research leadership and supervision training",
        "International study tours and exposure visits",
      ],
    },
    {
      title: "Project Processing and Management System (PPMS)",
      icon: Target,
      description:
        "Technical training on the comprehensive project management system for processing, monitoring, and evaluating ATF proposals and implementation across all partner universities.",
      color: "green",
      objectives: [
        "Master PPMS platform navigation and functionality",
        "Understand proposal submission and review processes",
        "Learn project monitoring and reporting mechanisms",
        "Develop data management and documentation skills",
        "Build capacity for transparent project tracking",
        "Ensure compliance with project guidelines",
      ],
      outcomes: [
        "Efficient use of PPMS by all stakeholders",
        "Streamlined proposal submission processes",
        "Improved project monitoring and oversight",
        "Better data quality and reporting accuracy",
        "Enhanced transparency in fund allocation",
        "Reduced processing time for proposals",
      ],
      activities: [
        "Hands-on PPMS software training sessions",
        "Step-by-step proposal processing demonstrations",
        "Data entry and validation workshops",
        "Continuous technical support and helpdesk services",
      ],
    },
    {
      title: "Project Management Training for Sub-Project Managers",
      icon: Briefcase,
      description:
        "Focused training program equipping sub-project managers with essential skills for effective project planning, execution, monitoring, and completion within ATF framework.",
      color: "orange",
      objectives: [
        "Develop comprehensive project planning skills",
        "Master project implementation and execution techniques",
        "Build effective team coordination capabilities",
        "Understand budget management and financial controls",
        "Learn risk management and mitigation strategies",
        "Strengthen monitoring and evaluation competencies",
      ],
      outcomes: [
        "Sub-project managers capable of independent project delivery",
        "Improved project completion rates and quality",
        "Better resource utilization and time management",
        "Enhanced stakeholder communication and coordination",
        "Reduced project delays and cost overruns",
        "Successful achievement of project objectives",
      ],
      activities: [
        "Project management fundamentals workshops",
        "Case studies and real-world scenario analysis",
        "Tools and techniques training (Gantt charts, risk matrices)",
        "Peer learning and experience sharing sessions",
      ],
    },
    {
      title: "Project Management Training for Sub-Project Management Team",
      icon: TrendingUp,
      description:
        "Collaborative training designed for entire sub-project management teams to ensure coordinated implementation, effective communication, and collective responsibility for project success.",
      color: "indigo",
      objectives: [
        "Foster team collaboration and coordination",
        "Align team members on project goals and deliverables",
        "Develop shared understanding of roles and responsibilities",
        "Build effective communication within project teams",
        "Enhance collective problem-solving capabilities",
        "Promote accountability and ownership culture",
      ],
      outcomes: [
        "Cohesive and well-coordinated project teams",
        "Clear role definition and responsibility distribution",
        "Improved internal communication and collaboration",
        "Enhanced team productivity and efficiency",
        "Better conflict resolution and decision-making",
        "Stronger team commitment to project success",
      ],
      activities: [
        "Team building and coordination workshops",
        "Role clarification and responsibility mapping exercises",
        "Communication and collaboration skills training",
        "Group problem-solving and decision-making simulations",
      ],
    },
    {
      title: "Financial Management Training",
      icon: DollarSign,
      description:
        "Specialized financial management training ensuring proper fund utilization, compliance with financial regulations, accurate reporting, and transparent accounting for all ATF-funded projects.",
      color: "pink",
      objectives: [
        "Understand financial guidelines and compliance requirements",
        "Master budget preparation and fund allocation",
        "Develop financial reporting and documentation skills",
        "Learn audit preparation and financial accountability",
        "Build capacity for transparent financial management",
        "Ensure adherence to World Bank procurement guidelines",
      ],
      outcomes: [
        "Proper financial management across all projects",
        "Timely and accurate financial reporting",
        "Compliance with all financial regulations",
        "Reduced financial irregularities and audit queries",
        "Transparent and accountable fund utilization",
        "Successful audit completions without major findings",
      ],
      activities: [
        "Financial guidelines and compliance training",
        "Budget preparation and management workshops",
        "Financial reporting and documentation sessions",
        "Audit preparation and best practices training",
      ],
    },
  ];

  const colorVariants = {
    blue: {
      bg: "from-blue-50 to-blue-100",
      icon: "bg-blue-100 text-blue-600",
      border: "border-blue-200",
    },
    purple: {
      bg: "from-purple-50 to-purple-100",
      icon: "bg-purple-100 text-purple-600",
      border: "border-purple-200",
    },
    green: {
      bg: "from-green-50 to-green-100",
      icon: "bg-green-100 text-green-600",
      border: "border-green-200",
    },
    orange: {
      bg: "from-orange-50 to-orange-100",
      icon: "bg-orange-100 text-orange-600",
      border: "border-orange-200",
    },
    indigo: {
      bg: "from-indigo-50 to-indigo-100",
      icon: "bg-indigo-100 text-indigo-600",
      border: "border-indigo-200",
    },
    pink: {
      bg: "from-pink-50 to-pink-100",
      icon: "bg-pink-100 text-pink-600",
      border: "border-pink-200",
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Training & Professional Development
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Building Capacity, Transforming Educators
            </p>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              Comprehensive training programs empowering faculty and staff
              {`across Bangladesh's universities to excel in teaching, research,`}
              and institutional management
            </p>
          </div>
        </div>
      </section>

      {/* Training Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Training Program Categories
            </h2>
            <p className="text-lg text-gray-600">
              Six specialized training tracks for comprehensive capacity
              building
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingCategories.map((category, index) => {
              const Icon = category.icon;
              const colors =
                colorVariants[category.color as keyof typeof colorVariants];

              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-xl p-8 hover:shadow-xl transition-all`}
                >
                  {/* Header */}
                  <div className="flex items-start mb-6">
                    <div
                      className={`w-14 h-14 ${colors.icon} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Objectives */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-gray-700" />
                      Objectives
                    </h4>
                    <ul className="space-y-2">
                      {category.objectives.map((objective, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-gray-700" />
                      Expected Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {category.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Activities */}
                  <div className="bg-white/50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-gray-700" />
                      Key Activities
                    </h4>
                    <ul className="space-y-2">
                      {category.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Training Approach
            </h2>
            <p className="text-lg text-gray-600">
              Multi-faceted methodology ensuring effective learning and skill
              transfer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Domestic Training
              </h3>
              <p className="text-gray-700">
                Local expert-led programs focusing on contextual needs and
                {`practical implementation within Bangladesh's education system`}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-8 border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                International Collaboration
              </h3>
              <p className="text-gray-700">
                Partnerships with leading global institutions bringing
                international best practices and cutting-edge methodologies
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-8 border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Digital & Blended Learning
              </h3>
              <p className="text-gray-700">
                Flexible online and hybrid training formats ensuring
                accessibility and continuous professional development
                opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Enhance Your Professional Skills?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join our comprehensive training programs and advance your career in
            higher education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              View Training Calendar
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Contact Training Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
