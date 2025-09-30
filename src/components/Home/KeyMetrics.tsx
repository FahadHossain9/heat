"use client";

import { useState, useEffect } from "react";
import { Building2, DollarSign, Users, Calendar } from "lucide-react";

interface Metric {
  icon: any;
  value: number;
  label: string;
  suffix?: string;
}

export default function KeyMetrics() {
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

    const element = document.getElementById("key-metrics");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const metrics: Metric[] = [
    {
      icon: Building2,
      value: 142,
      label: "Total Universities",
    },
    {
      icon: DollarSign,
      value: 5000,
      label: "Budget (Crore BDT)",
      suffix: " Cr",
    },
    {
      icon: Users,
      value: 2500000,
      label: "Beneficiaries",
    },
    {
      icon: Calendar,
      value: 5,
      label: "Project Years",
      suffix: " Years",
    },
  ];

  const AnimatedCounter = ({
    end,
    duration = 2000,
    suffix = "",
  }: {
    end: number;
    duration?: number;
    suffix?: string;
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

    return (
      <span className="text-3xl md:text-4xl font-bold text-[#225E99]">
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section
      id="key-metrics"
      className="py-16 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Project Key Metrics
          </h2>
          <p className="text-lg text-gray-600">
            Transforming Bangladesh&apos;s higher education landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-[#225E99] to-[#1a4a7a] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mb-2">
                  <AnimatedCounter
                    end={metric.value}
                    duration={2000 + index * 200}
                    suffix={metric.suffix}
                  />
                </div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
