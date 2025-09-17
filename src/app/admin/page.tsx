"use client";

import { useState } from "react";
import {
  Settings,
  Users,
  FileText,
  BarChart3,
  Upload,
  Edit,
  Trash2,
  Plus,
  Save,
  Calendar,
} from "lucide-react";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", name: "Dashboard", icon: BarChart3 },
    { id: "content", name: "Content Management", icon: FileText },
    { id: "atf", name: "ATF Management", icon: Settings },
    { id: "notices", name: "Notices", icon: FileText },
    { id: "events", name: "Events", icon: Calendar },
    { id: "officials", name: "Officials", icon: Users },
    { id: "documents", name: "Documents", icon: Upload },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Notices</p>
              <p className="text-2xl font-semibold text-gray-900">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Events</p>
              <p className="text-2xl font-semibold text-gray-900">8</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Upload className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Documents</p>
              <p className="text-2xl font-semibold text-gray-900">156</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <BarChart3 className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Page Views</p>
              <p className="text-2xl font-semibold text-gray-900">12,456</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Activity
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-600">
                New notice published: &ldquo;ATF Window 1 Deadline
                Extended&rdquo;
              </span>
            </div>
            <span className="text-xs text-gray-500">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-600">
                Event updated: &ldquo;Faculty Development Workshop&rdquo;
              </span>
            </div>
            <span className="text-xs text-gray-500">4 hours ago</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-600">
                Document uploaded: &ldquo;ATF Guidelines v2.1&rdquo;
              </span>
            </div>
            <span className="text-xs text-gray-500">1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContentManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Content Management</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4 inline mr-2" />
          Add Content
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Homepage Statistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Investment
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                defaultValue="৳401,657"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Students Impacted
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                defaultValue="600,000+"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Faculty Trained
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                defaultValue="5,000+"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Universities Covered
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                defaultValue="All Public"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              <Save className="h-4 w-4 inline mr-2" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderATFManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">ATF Management</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4 inline mr-2" />
          Add Window
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            ATF Windows
          </h3>
          <div className="space-y-4">
            {[
              {
                title: "Window 1: Pandemic Readiness",
                status: "Open",
                deadline: "March 31, 2025",
              },
              {
                title: "Window 2: Teaching-Learning Infrastructure",
                status: "Open",
                deadline: "April 15, 2025",
              },
              {
                title: "Window 3a: Advanced Research",
                status: "Open",
                deadline: "May 30, 2025",
              },
              {
                title: "Window 3b: Collaborative Research",
                status: "Open",
                deadline: "June 15, 2025",
              },
              {
                title: "Window 4: Innovation Support Facilities",
                status: "Open",
                deadline: "July 31, 2025",
              },
              {
                title: "Window 5: Technology Transfer Office",
                status: "Open",
                deadline: "August 30, 2025",
              },
            ].map((window, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
              >
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {window.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    Deadline: {window.deadline}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      window.status === "Open"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {window.status}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderDocumentManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Document Management
        </h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Upload className="h-4 w-4 inline mr-2" />
          Upload Document
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Documents
          </h3>
          <div className="space-y-4">
            {[
              {
                name: "ATF Application Guidelines",
                category: "ATF",
                size: "2.3 MB",
                downloads: 245,
              },
              {
                name: "Evaluation Criteria",
                category: "ATF",
                size: "1.8 MB",
                downloads: 189,
              },
              {
                name: "Budget Templates",
                category: "ATF",
                size: "0.5 MB",
                downloads: 312,
              },
              {
                name: "Environmental Checklist",
                category: "Compliance",
                size: "1.2 MB",
                downloads: 156,
              },
            ].map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
              >
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-blue-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{doc.name}</h4>
                    <p className="text-sm text-gray-600">
                      {doc.category} • {doc.size} • {doc.downloads} downloads
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return renderDashboard();
      case "content":
        return renderContentManagement();
      case "atf":
        return renderATFManagement();
      case "documents":
        return renderDocumentManagement();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg">
          <div className="p-6">
            <h1 className="text-xl font-bold text-gray-900">HEAT Admin</h1>
          </div>
          <nav className="mt-6">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 ${
                    activeTab === tab.id
                      ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  <IconComponent className="h-5 w-5 mr-3" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">{renderTabContent()}</div>
      </div>
    </div>
  );
}
