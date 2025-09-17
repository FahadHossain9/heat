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
  Eye,
  Download,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";
import { atfSupportingDocuments, wings, wingStructure } from "@/data/demoData";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", name: "Dashboard", icon: BarChart3 },
    { id: "content", name: "Content Management", icon: FileText },
    { id: "atf", name: "ATF Management", icon: Settings },
    { id: "atf-docs", name: "ATF Documents", icon: FileText },
    { id: "notices", name: "Notices", icon: FileText },
    { id: "events", name: "Events", icon: Calendar },
    { id: "wings", name: "Wing Management", icon: Users },
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

  const [showAddFileModal, setShowAddFileModal] = useState(false);
  const [newFile, setNewFile] = useState({
    name: "",
    file: null as File | null,
  });
  const [showAddWingModal, setShowAddWingModal] = useState(false);
  const [showAddWingPersonModal, setShowAddWingPersonModal] = useState(false);
  const [newWing, setNewWing] = useState({ name: "", description: "" });
  const [newWingPerson, setNewWingPerson] = useState({
    name: "",
    position: "",
    email: "",
    phone: "",
    wing: "",
    background: "",
  });

  const renderATFManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">
          ATF Supporting Files
        </h2>
        <button
          onClick={() => setShowAddFileModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 inline mr-2" />
          Add Supporting File
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Current Supporting Files
          </h3>
          <div className="space-y-4">
            {atfSupportingDocuments.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
              >
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-blue-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{doc.title}</h4>
                    <p className="text-sm text-gray-600">
                      {doc.type} • {doc.size}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      doc.isActive
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {doc.isActive ? "Active" : "Inactive"}
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

      {/* Add File Modal */}
      {showAddFileModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Add Supporting File
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  File Name
                </label>
                <input
                  type="text"
                  value={newFile.name}
                  onChange={(e) =>
                    setNewFile({ ...newFile, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter file name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  File
                </label>
                <input
                  type="file"
                  onChange={(e) =>
                    setNewFile({
                      ...newFile,
                      file: e.target.files?.[0] || null,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowAddFileModal(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle file upload logic here
                  setShowAddFileModal(false);
                  setNewFile({ name: "", file: null });
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add File
              </button>
            </div>
          </div>
        </div>
      )}
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

  const renderWingManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Wing Management</h2>
        <div className="space-x-2">
          <button
            onClick={() => setShowAddWingModal(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            <Plus className="h-4 w-4 inline mr-2" />
            Add Wing
          </button>
          <button
            onClick={() => setShowAddWingPersonModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <Users className="h-4 w-4 inline mr-2" />
            Add Wing Person
          </button>
        </div>
      </div>

      {/* Wings List */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Wings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {wings.map((wing) => (
              <div
                key={wing.name}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  {wing.name}
                </h4>
                <p className="text-sm text-gray-600 mb-3">{wing.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    {
                      wingStructure.filter(
                        (person) => person.wing === wing.name
                      ).length
                    }{" "}
                    members
                  </span>
                  <div className="space-x-1">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wing People List */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Wing Members
          </h3>
          <div className="space-y-4">
            {wingStructure.map((person) => (
              <div
                key={person.name}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
              >
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-blue-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {person.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {person.position} • {person.wing}
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

      {/* Add Wing Modal */}
      {showAddWingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Add New Wing
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wing Name
                </label>
                <input
                  type="text"
                  value={newWing.name}
                  onChange={(e) =>
                    setNewWing({ ...newWing, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter wing name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={newWing.description}
                  onChange={(e) =>
                    setNewWing({ ...newWing, description: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter wing description"
                  rows={3}
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowAddWingModal(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle wing creation logic here
                  setShowAddWingModal(false);
                  setNewWing({ name: "", description: "" });
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Add Wing
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Wing Person Modal */}
      {showAddWingPersonModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Add Wing Member
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={newWingPerson.name}
                  onChange={(e) =>
                    setNewWingPerson({ ...newWingPerson, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position
                </label>
                <input
                  type="text"
                  value={newWingPerson.position}
                  onChange={(e) =>
                    setNewWingPerson({
                      ...newWingPerson,
                      position: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter position"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={newWingPerson.email}
                  onChange={(e) =>
                    setNewWingPerson({
                      ...newWingPerson,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={newWingPerson.phone}
                  onChange={(e) =>
                    setNewWingPerson({
                      ...newWingPerson,
                      phone: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wing
                </label>
                <select
                  value={newWingPerson.wing}
                  onChange={(e) =>
                    setNewWingPerson({ ...newWingPerson, wing: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Wing</option>
                  {wings.map((wing) => (
                    <option key={wing.name} value={wing.name}>
                      {wing.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Background
                </label>
                <textarea
                  value={newWingPerson.background}
                  onChange={(e) =>
                    setNewWingPerson({
                      ...newWingPerson,
                      background: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter background information"
                  rows={3}
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowAddWingPersonModal(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle wing person creation logic here
                  setShowAddWingPersonModal(false);
                  setNewWingPerson({
                    name: "",
                    position: "",
                    email: "",
                    phone: "",
                    wing: "",
                    background: "",
                  });
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Member
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderATFDocumentManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">
          ATF Supporting Documents Management
        </h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4 inline mr-2" />
          Add Document
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Supporting Documents
          </h3>
          <div className="space-y-4">
            {atfSupportingDocuments.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center flex-1">
                  <div className="mr-4">
                    {doc.type === "PDF" && (
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-red-600" />
                      </div>
                    )}
                    {doc.type === "Word" && (
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                    )}
                    {doc.type === "Excel" && (
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-green-600" />
                      </div>
                    )}
                    {doc.type === "PowerPoint" && (
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-orange-600" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{doc.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                        {doc.category}
                      </span>
                      <span>{doc.type}</span>
                      <span>{doc.size}</span>
                      <span>{doc.downloads} downloads</span>
                      <span>{doc.uploadDate}</span>
                    </div>
                    {doc.description && (
                      <p className="text-sm text-gray-500 mt-1">
                        {doc.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    title="Preview"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button
                    className="text-green-600 hover:text-green-800"
                    title="Download"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    title="Edit"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    className={`hover:opacity-80 ${
                      doc.isActive ? "text-green-600" : "text-gray-400"
                    }`}
                    title={doc.isActive ? "Deactivate" : "Activate"}
                  >
                    {doc.isActive ? (
                      <ToggleRight className="h-4 w-4" />
                    ) : (
                      <ToggleLeft className="h-4 w-4" />
                    )}
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    title="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Document Categories Summary */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Document Categories Summary
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(
            atfSupportingDocuments.reduce((acc, doc) => {
              acc[doc.category] = (acc[doc.category] || 0) + 1;
              return acc;
            }, {} as Record<string, number>)
          ).map(([category, count]) => (
            <div
              key={category}
              className="bg-gray-50 rounded-lg p-4 text-center"
            >
              <div className="text-2xl font-bold text-blue-600">{count}</div>
              <div className="text-sm text-gray-600">{category}</div>
            </div>
          ))}
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
      case "atf-docs":
        return renderATFDocumentManagement();
      case "wings":
        return renderWingManagement();
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
