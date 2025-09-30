"use client";

import { useState, useEffect } from "react";
import {
  Building2,
  GraduationCap,
  Users,
  UserCheck,
  BookOpen,
  Globe,
} from "lucide-react";

interface Beneficiary {
  icon: any;
  category: string;
  count: number;
  description: string;
  subcategories?: string[];
  color: string;
}

export default function TargetBeneficiaries() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("target-beneficiaries");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const beneficiaries: Beneficiary[] = [
    {
      icon: Building2,
      category: "Universities",
      count: 142,
      description: "Public and private universities across Bangladesh",
      subcategories: [
        "Group A: 50 universities",
        "Group B: 45 universities",
        "Group C: 47 universities",
      ],
      color: "blue",
    },
    {
      icon: GraduationCap,
      category: "Faculty Members",
      count: 25000,
      description: "University faculty and academic staff",
      subcategories: [
        "Professors: 5,000",
        "Associate Professors: 8,000",
        "Assistant Professors: 12,000",
      ],
      color: "green",
    },
    {
      icon: Users,
      category: "Students",
      count: 2500000,
      description: "Undergraduate and graduate students",
      subcategories: ["Undergraduate: 2,000,000", "Graduate: 500,000"],
      color: "purple",
    },
    {
      icon: UserCheck,
      category: "Women Network",
      count: 15000,
      description: "Female faculty and students in leadership programs",
      subcategories: ["Faculty Leaders: 3,000", "Student Leaders: 12,000"],
      color: "pink",
    },
    {
      icon: BookOpen,
      category: "Academic Programs",
      count: 500,
      description: "Enhanced academic programs and courses",
      subcategories: ["STEM Programs: 300", "Arts & Humanities: 200"],
      color: "orange",
    },
    {
      icon: Globe,
      category: "Research Community",
      count: 5000,
      description: "Researchers and academic collaborators",
      subcategories: [
        "International Collaborators: 1,000",
        "National Researchers: 4,000",
      ],
      color: "indigo",
    },
  ];

  const AnimatedCounter = ({
    end,
    duration = 2000,
  }: {
    end: number;
    duration?: number;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const startValue = 0;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(
          startValue + (end - startValue) * easeOutQuart
        );

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [end, duration, isVisible]);

    return <span className="text-3xl font-bold">{count.toLocaleString()}</span>;
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-50 border-blue-200 text-blue-600";
      case "green":
        return "bg-green-50 border-green-200 text-green-600";
      case "purple":
        return "bg-purple-50 border-purple-200 text-purple-600";
      case "pink":
        return "bg-pink-50 border-pink-200 text-pink-600";
      case "orange":
        return "bg-orange-50 border-orange-200 text-orange-600";
      case "indigo":
        return "bg-indigo-50 border-indigo-200 text-indigo-600";
      default:
        return "bg-gray-50 border-gray-200 text-gray-600";
    }
  };

  return (
    <section
      id="target-beneficiaries"
      className="py-16 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Target Beneficiaries
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive reach across Bangladesh&apos;s higher education
            ecosystem, ensuring inclusive transformation for all stakeholders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficiaries.map((beneficiary, index) => {
            const IconComponent = beneficiary.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 border-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${getColorClasses(
                  beneficiary.color
                )}`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-full ${getColorClasses(
                      beneficiary.color
                    )}`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">
                    {beneficiary.category}
                  </h3>
                </div>

                <div className="mb-4">
                  <AnimatedCounter
                    end={beneficiary.count}
                    duration={2000 + index * 200}
                  />
                  <p className="text-gray-600 text-sm mt-1">
                    {beneficiary.description}
                  </p>
                </div>

                {beneficiary.subcategories && (
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Breakdown:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {beneficiary.subcategories.map((sub, subIndex) => (
                        <li key={subIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-current rounded-full mr-2"></span>
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
