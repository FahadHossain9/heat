"use client";

import Link from "next/link";
import { componentCards } from "@/data/demoData";
import {
  ArrowRight,
  DollarSign,
  Users,
  Network,
  Globe,
  LineChart,
  UsersRound,
  Award,
  AlertCircle,
} from "lucide-react";

const componentIcons = [
  DollarSign, // ATF
  Users, // Training
  Network, // Campus Network
  Globe, // BdREN
  LineChart, // M&E
  UsersRound, // Women's Network
  Award, // Quality Assurance
  AlertCircle, // Emergency
];

export default function ComponentsGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Explore HEAT Components
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Eight strategic pillars transforming Bangladesh's higher education
            landscape
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {componentCards.map((component, index) => {
            const Icon = componentIcons[index] || DollarSign;
            return (
              <Link
                key={index}
                href={component.link}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-300 transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {component.title}
                  </h3>
                </div>
                <p className="text-blue-600 font-semibold mb-3 text-sm">
                  {component.subtitle}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {component.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
