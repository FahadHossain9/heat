"use client";

import { useState } from "react";
import {
  Users,
  FileText,
  BarChart3,
  Edit,
  Trash2,
  Plus,
  Save,
  Calendar,
  Eye,
  Download,
  Upload,
  ToggleLeft,
  ToggleRight,
  X,
} from "lucide-react";
import {
  notices,
  featuredEvents,
  wings,
  wingStructure,
  atfSupportingDocuments,
  recentCirculars,
  contactInfo,
} from "@/data/demoData";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", name: "Dashboard", icon: BarChart3 },
    { id: "content", name: "Content Management", icon: FileText },
    { id: "atf-docs", name: "ATF Documents", icon: FileText },
    { id: "notices", name: "Notices", icon: FileText },
    { id: "events", name: "Events", icon: Calendar },
    { id: "circulars", name: "Circulars", icon: FileText },
    { id: "wings", name: "Wing Management", icon: Users },
    { id: "contact", name: "Contact Management", icon: FileText },
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

  // Notice Management State
  const [showAddNoticeModal, setShowAddNoticeModal] = useState(false);
  const [newNotice, setNewNotice] = useState({
    name: "",
    description: "",
    date: "",
    pdf: null as File | null,
    priority: "General" as "Critical" | "Important" | "General",
    category: "",
  });

  // Event Management State
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    name: "",
    description: "",
    date: "",
    image: null as File | null,
    images: [] as File[],
    location: "",
    status: "Coming Soon",
    type: "",
    registration: "",
    capacity: "",
    organizer: "",
    contact: "",
    agenda: [] as string[],
    requirements: [] as string[],
  });

  // Circular Management State
  const [showAddCircularModal, setShowAddCircularModal] = useState(false);
  const [newCircular, setNewCircular] = useState({
    type: "Circular" as "Tender" | "Circular" | "EOI" | "Notice",
    name: "",
    description: "",
    deadline: "",
    publishDate: "",
    pdf: "",
    category: "",
    authority: "",
    status: "Active",
  });

  // Wing Management State
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

  // Contact Management State
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactDetails, setContactDetails] = useState({
    mainOffice: contactInfo.mainOffice,
    emergencyHotline: contactInfo.emergencyHotline,
    email: contactInfo.email,
    address: contactInfo.address,
    officeHours: contactInfo.officeHours,
  });

  const renderATFManagement = () => null; // Removed function
  const renderATFManagementOld = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">
          ATF Supporting Files
        </h2>
        <button
          onClick={() => setShowAddNoticeModal(true)}
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
      {showAddNoticeModal && (
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
                  value={newNotice.name}
                  onChange={(e) =>
                    setNewNotice({ ...newNotice, name: e.target.value })
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
                    setNewNotice({
                      ...newNotice,
                      pdf: e.target.files?.[0] || null,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowAddNoticeModal(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle file upload logic here
                  setShowAddNoticeModal(false);
                  setNewNotice({
                    name: "",
                    description: "",
                    date: "",
                    pdf: null,
                    priority: "General",
                    category: "",
                  });
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

  const renderNoticesManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Notices Management</h2>
        <button
          onClick={() => setShowAddNoticeModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 inline mr-2" />
          Add Notice
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Notice
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {notices.map((notice) => (
                <tr key={notice.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {notice.name}
                      </div>
                      <div className="text-sm text-gray-500 truncate max-w-xs">
                        {notice.description}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {notice.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        notice.priority === "Critical"
                          ? "bg-red-100 text-red-800"
                          : notice.priority === "Important"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {notice.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {notice.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderEventsManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Events Management</h2>
        <button
          onClick={() => setShowAddEventModal(true)}
          className="btn-primary btn-icon"
        >
          <Plus className="h-4 w-4 inline mr-2 flex-shrink-0" />
          <span>Add Event</span>
        </button>
      </div>

      <div className="card-enhanced overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {featuredEvents.map((event) => (
                <tr key={event.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        className="h-10 w-10 rounded-lg object-cover mr-3"
                        src={event.image}
                        alt={event.name}
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://via.placeholder.com/40x40/4F46E5/FFFFFF?text=E";
                        }}
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {event.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                      {event.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {event.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        event.status === "Registration Open"
                          ? "bg-green-100 text-green-800"
                          : event.status === "Applications Under Review"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {event.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderATFDocumentManagementNew = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">
          ATF Supporting Documents
        </h2>
        <button
          onClick={() => setShowAddNoticeModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 inline mr-2" />
          Add Document
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Current Supporting Documents
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
                    <p className="text-sm text-gray-600">{doc.description}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-xs text-gray-500">
                        {doc.type} • {doc.size}
                      </span>
                      <span className="text-xs text-gray-500">
                        Downloads: {doc.downloads}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(doc.uploadDate).toLocaleDateString()}
                      </span>
                    </div>
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
    </div>
  );

  const renderCircularManagement = () => {
    const isExpired = (deadline: string) => {
      return new Date(deadline) < new Date();
    };

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Tenders & Circulars Management
          </h2>
          <button
            onClick={() => setShowAddCircularModal(true)}
            className="btn-primary btn-icon"
          >
            <Plus className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>Add Circular/Tender</span>
          </button>
        </div>

        <div className="card-enhanced overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Deadline
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentCirculars.map((circular) => {
                  const expired = isExpired(circular.deadline);
                  const currentStatus = expired ? "Expired" : circular.status;

                  return (
                    <tr key={circular.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            circular.type === "Tender"
                              ? "bg-purple-100 text-purple-800"
                              : circular.type === "EOI"
                              ? "bg-yellow-100 text-yellow-800"
                              : circular.type === "Notice"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {circular.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {circular.name}
                          </div>
                          <div className="text-sm text-gray-500 truncate max-w-xs">
                            {circular.description}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(circular.deadline).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            currentStatus === "Active"
                              ? "bg-green-100 text-green-800"
                              : currentStatus === "Expired"
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {currentStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                          {circular.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const renderContactManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Contact Information Management
        </h2>
        <button
          onClick={() => setShowContactModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Edit className="h-4 w-4 inline mr-2" />
          Edit Contact Details
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Main Office
              </h3>
              <p className="text-gray-600">{contactDetails.mainOffice}</p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Emergency Hotline
              </h3>
              <p className="text-gray-600">{contactDetails.emergencyHotline}</p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Email
              </h3>
              <p className="text-gray-600">{contactDetails.email}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Address
              </h3>
              <p className="text-gray-600">{contactDetails.address}</p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Office Hours
              </h3>
              <p className="text-gray-600">{contactDetails.officeHours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Edit Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Edit Contact Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Main Office
                </label>
                <input
                  type="text"
                  value={contactDetails.mainOffice}
                  onChange={(e) =>
                    setContactDetails({
                      ...contactDetails,
                      mainOffice: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Emergency Hotline
                </label>
                <input
                  type="text"
                  value={contactDetails.emergencyHotline}
                  onChange={(e) =>
                    setContactDetails({
                      ...contactDetails,
                      emergencyHotline: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={contactDetails.email}
                  onChange={(e) =>
                    setContactDetails({
                      ...contactDetails,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <textarea
                  value={contactDetails.address}
                  onChange={(e) =>
                    setContactDetails({
                      ...contactDetails,
                      address: e.target.value,
                    })
                  }
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Office Hours
                </label>
                <input
                  type="text"
                  value={contactDetails.officeHours}
                  onChange={(e) =>
                    setContactDetails({
                      ...contactDetails,
                      officeHours: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowContactModal(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle contact update logic here
                  setShowContactModal(false);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return renderDashboard();
      case "content":
        return renderContentManagement();
      case "atf-docs":
        return renderATFDocumentManagementNew();
      case "notices":
        return renderNoticesManagement();
      case "events":
        return renderEventsManagement();
      case "circulars":
        return renderCircularManagement();
      case "wings":
        return renderWingManagement();
      case "contact":
        return renderContactManagement();
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

      {/* Add Circular Modal */}
      {showAddCircularModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Add New Circular/Tender
              </h3>
              <button
                onClick={() => setShowAddCircularModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type
                </label>
                <select
                  value={newCircular.type}
                  onChange={(e) =>
                    setNewCircular({
                      ...newCircular,
                      type: e.target.value as
                        | "Tender"
                        | "Circular"
                        | "EOI"
                        | "Notice",
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Circular">Circular</option>
                  <option value="Tender">Tender</option>
                  <option value="EOI">Expression of Interest</option>
                  <option value="Notice">Notice</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={newCircular.name}
                  onChange={(e) =>
                    setNewCircular({ ...newCircular, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter circular/tender name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={newCircular.description}
                  onChange={(e) =>
                    setNewCircular({
                      ...newCircular,
                      description: e.target.value,
                    })
                  }
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter description"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Deadline
                  </label>
                  <input
                    type="date"
                    value={newCircular.deadline}
                    onChange={(e) =>
                      setNewCircular({
                        ...newCircular,
                        deadline: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Publish Date
                  </label>
                  <input
                    type="date"
                    value={newCircular.publishDate}
                    onChange={(e) =>
                      setNewCircular({
                        ...newCircular,
                        publishDate: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  PDF File URL
                </label>
                <input
                  type="url"
                  value={newCircular.pdf}
                  onChange={(e) =>
                    setNewCircular({ ...newCircular, pdf: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter PDF file URL"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    value={newCircular.category}
                    onChange={(e) =>
                      setNewCircular({
                        ...newCircular,
                        category: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Category</option>
                    <option value="Administrative">Administrative</option>
                    <option value="Technical">Technical</option>
                    <option value="Financial">Financial</option>
                    <option value="Training">Training</option>
                    <option value="Academic">Academic</option>
                    <option value="HR">HR</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Authority
                  </label>
                  <input
                    type="text"
                    value={newCircular.authority}
                    onChange={(e) =>
                      setNewCircular({
                        ...newCircular,
                        authority: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Issuing authority"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowAddCircularModal(false)}
                className="btn-secondary btn-icon"
              >
                <span>Cancel</span>
              </button>
              <button
                onClick={() => {
                  // Handle circular creation logic here
                  console.log("New circular:", newCircular);
                  setNewCircular({
                    type: "Circular",
                    name: "",
                    description: "",
                    deadline: "",
                    publishDate: "",
                    pdf: "",
                    category: "",
                    authority: "",
                    status: "Active",
                  });
                  setShowAddCircularModal(false);
                }}
                className="btn-primary btn-icon"
              >
                <span>Add Circular/Tender</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Event Modal */}
      {showAddEventModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Add New Event
              </h3>
              <button
                onClick={() => setShowAddEventModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Event Name
                  </label>
                  <input
                    type="text"
                    value={newEvent.name}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter event name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={newEvent.description}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, description: e.target.value })
                    }
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter event description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="text"
                    value={newEvent.date}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, date: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., March 25-27, 2025"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={newEvent.location}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, location: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter event location"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Event Type
                  </label>
                  <select
                    value={newEvent.type}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, type: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select event type</option>
                    <option value="Conference">Conference</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Seminar">Seminar</option>
                    <option value="Training">Training</option>
                    <option value="Summit">Summit</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Webinar">Webinar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    value={newEvent.status}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, status: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="Coming Soon">Coming Soon</option>
                    <option value="Open">Open</option>
                    <option value="Applications Under Review">
                      Applications Under Review
                    </option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Capacity
                  </label>
                  <input
                    type="text"
                    value={newEvent.capacity}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, capacity: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., 300 participants"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Registration Info
                  </label>
                  <input
                    type="text"
                    value={newEvent.registration}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, registration: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Open (245/300 registered)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Organizer
                  </label>
                  <input
                    type="text"
                    value={newEvent.organizer}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, organizer: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., HEAT Project & University"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    value={newEvent.contact}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, contact: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="contact@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Main Event Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setNewEvent({
                        ...newEvent,
                        image: e.target.files?.[0] || null,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Images (Multiple)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => {
                      const files = Array.from(e.target.files || []);
                      setNewEvent({
                        ...newEvent,
                        images: [...newEvent.images, ...files],
                      });
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {newEvent.images.length > 0 && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-600 mb-2">
                        Selected images:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {newEvent.images.map((file, index) => (
                          <div
                            key={index}
                            className="bg-gray-100 px-2 py-1 rounded text-xs"
                          >
                            {file.name}
                            <button
                              onClick={() => {
                                const newImages = newEvent.images.filter(
                                  (_, i) => i !== index
                                );
                                setNewEvent({ ...newEvent, images: newImages });
                              }}
                              className="ml-1 text-red-600 hover:text-red-800"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowAddEventModal(false)}
                className="btn-secondary btn-icon"
              >
                <span>Cancel</span>
              </button>
              <button
                onClick={() => {
                  // Add event logic here
                  setNewEvent({
                    name: "",
                    description: "",
                    date: "",
                    image: null,
                    images: [],
                    location: "",
                    status: "Coming Soon",
                    type: "",
                    registration: "",
                    capacity: "",
                    organizer: "",
                    contact: "",
                    agenda: [],
                    requirements: [],
                  });
                  setShowAddEventModal(false);
                }}
                className="btn-primary btn-icon"
              >
                <span>Add Event</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
