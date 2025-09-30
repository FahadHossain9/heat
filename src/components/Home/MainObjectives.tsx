"use client";

import Link from "next/link";
import { Lightbulb, Users, Wifi, Briefcase } from "lucide-react";

interface Objective {
  icon: any;
  title: string;
  description: string;
  link: string;
}

export default function MainObjectives() {
  const objectives: Objective[] = [
    {
      icon: Lightbulb,
      title: "Digital Innovation",
      description:
        "Advancing digital transformation across higher education institutions with cutting-edge technology solutions.",
      link: "/components/atf",
    },
    {
      icon: Users,
      title: "Women's Leadership & Network",
      description:
        "Empowering women in academia through leadership programs and professional networking opportunities.",
      link: "/components/womens-network",
    },
    {
      icon: Wifi,
      title: "Campus Network Infrastructure",
      description:
        "Building robust digital infrastructure to connect universities and enable seamless communication.",
      link: "/components/network",
    },
    {
      icon: Briefcase,
      title: "Graduate Employability",
      description:
        "Enhancing graduate skills and focusing on female labor force participation in the workforce.",
      link: "/components/training",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Main Objectives
          </h2>
          <p className="text-lg text-gray-600">
            Strategic goals driving Bangladesh&apos;s higher education
            transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => {
            const IconComponent = objective.icon;
            return (
              <Link key={index} href={objective.link} className="group block">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-[#225E99] h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-center mb-4">
                      <div className="bg-gradient-to-br from-[#225E99] to-[#1a4a7a] p-4 rounded-full group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <div className="flex-1 text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#225E99] transition-colors duration-300">
                        {objective.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {objective.description}
                      </p>
                    </div>

                    <div className="mt-4 flex justify-center">
                      <div className="text-[#225E99] text-sm font-medium group-hover:underline">
                        Learn More →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
