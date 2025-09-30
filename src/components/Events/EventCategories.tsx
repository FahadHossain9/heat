import { eventCategories } from "@/data/demoData";
import {
  Users,
  BookOpen,
  Calendar,
  GraduationCap,
  Briefcase,
  Trophy,
  Megaphone,
  Wrench,
} from "lucide-react";

export default function EventCategories() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Conference":
        return <Users className="h-8 w-8 text-[#225E99]" />;
      case "Workshop":
        return <Wrench className="h-8 w-8 text-[#225E99]" />;
      case "Training":
        return <BookOpen className="h-8 w-8 text-[#225E99]" />;
      case "Seminar":
        return <GraduationCap className="h-8 w-8 text-[#225E99]" />;
      case "Meeting":
        return <Briefcase className="h-8 w-8 text-[#225E99]" />;
      case "Summit":
        return <Trophy className="h-8 w-8 text-[#225E99]" />;
      case "Webinar":
        return <Megaphone className="h-8 w-8 text-[#225E99]" />;
      default:
        return <Calendar className="h-8 w-8 text-[#225E99]" />;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Event Categories
          </h2>
          <p className="text-lg text-gray-600">
            Discover various types of events and activities
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(eventCategories).map(([category, count], index) => (
            <div
              key={index}
              className="card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {getCategoryIcon(category)}
              </div>
              <div className="text-3xl font-bold text-[#225E99] mb-2">
                {count}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {category}
              </div>
              <div className="text-sm text-gray-600">events</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
