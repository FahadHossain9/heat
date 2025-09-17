"use client";

import { useState } from "react";
import { Search, AlertCircle, Clock, FileText } from "lucide-react";
import { notices } from "@/data/demoData";

export default function Notices() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All Priorities");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");

  const filteredNotices = notices.filter((notice) => {
    const matchesSearch =
      notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notice.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority =
      priorityFilter === "All Priorities" || notice.priority === priorityFilter;
    const matchesCategory =
      categoryFilter === "All Categories" || notice.category === categoryFilter;

    return matchesSearch && matchesPriority && matchesCategory;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "bg-red-100 text-red-800 border-red-200";
      case "Important":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "General":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "Critical":
        return <AlertCircle className="h-4 w-4" />;
      case "Important":
        return <Clock className="h-4 w-4" />;
      case "General":
        return <FileText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Official Notices & Announcements
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Stay informed with latest HEAT project communications and updates
            </p>
          </div>
        </div>
      </section>

      {/* Priority System Legend */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">
                Critical: Urgent announcements requiring immediate attention
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">
                Important: Time-sensitive updates and announcements
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">
                General: Regular communications and updates
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search notices by title, content, or category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Priority Filter */}
              <div>
                <select
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>All Priorities</option>
                  <option>Critical</option>
                  <option>Important</option>
                  <option>General</option>
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>All Categories</option>
                  <option>Infrastructure</option>
                  <option>Training</option>
                  <option>Documentation</option>
                  <option>General</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notices List */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredNotices.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No notices found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            ) : (
              filteredNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(
                              notice.priority
                            )}`}
                          >
                            {getPriorityIcon(notice.priority)}
                            <span className="ml-1">{notice.priority}</span>
                          </span>
                          <span className="text-sm text-gray-500">
                            {notice.category}
                          </span>
                          <span className="text-sm text-gray-500">
                            {notice.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {notice.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {notice.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
