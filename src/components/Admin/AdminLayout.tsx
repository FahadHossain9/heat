"use client";

import { ReactNode } from "react";
import {
  BarChart3,
  FileText,
  Calendar,
  Users,
} from "lucide-react";

interface Tab {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface AdminLayoutProps {
  children: ReactNode;
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function AdminLayout({
  children,
  activeTab,
  onTabChange,
}: AdminLayoutProps) {
  const tabs: Tab[] = [
    { id: "dashboard", name: "Dashboard", icon: BarChart3 },
    { id: "content", name: "Content Management", icon: FileText },
    { id: "atf-docs", name: "ATF Documents", icon: FileText },
    { id: "notices", name: "Notices", icon: FileText },
    { id: "events", name: "Events", icon: Calendar },
    { id: "circulars", name: "Circulars", icon: FileText },
    { id: "wings", name: "Wing Management", icon: Users },
    { id: "contact", name: "Contact Management", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-gray-600 text-sm">HEAT Project Management</p>
          </div>
          
          <nav className="mt-6">
            <div className="px-3">
              <div className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => onTabChange(tab.id)}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        activeTab === tab.id
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <Icon className="mr-3 h-5 w-5" />
                      {tab.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
