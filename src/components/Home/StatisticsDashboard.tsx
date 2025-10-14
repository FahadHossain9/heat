"use client";

import { Building, GraduationCap, Users, Globe } from "lucide-react";
import { homeStats } from "@/data/demoData";

const iconMap = {
  Building,
  GraduationCap,
  Users,
  Globe,
};

const colorVariants = [
  {
    bg: "bg-gradient-to-br from-blue-50 to-blue-100",
    icon: "text-blue-600",
    number: "text-blue-900",
  },
  {
    bg: "bg-gradient-to-br from-green-50 to-green-100",
    icon: "text-green-600",
    number: "text-green-900",
  },
  {
    bg: "bg-gradient-to-br from-purple-50 to-purple-100",
    icon: "text-purple-600",
    number: "text-purple-900",
  },
  {
    bg: "bg-gradient-to-br from-orange-50 to-orange-100",
    icon: "text-orange-600",
    number: "text-orange-900",
  },
];

export default function StatisticsDashboard() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            HEAT Project Impact
          </h2>
          <p className="text-xl text-gray-600">
            Transforming higher education across Bangladesh
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeStats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
            const colors = colorVariants[index % colorVariants.length];
            return (
              <div
                key={index}
                className={`${colors.bg} rounded-xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1`}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                    <IconComponent className={`h-8 w-8 ${colors.icon}`} />
                  </div>
                </div>
                <div
                  className={`text-4xl font-extrabold ${colors.number} mb-2`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
