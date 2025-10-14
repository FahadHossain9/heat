"use client";

import { useState } from "react";
import { Edit, Trash2, Plus, Save, X } from "lucide-react";

export default function ContentManagement() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingContent, setEditingContent] = useState<string | null>(null);

  const contentSections = [
    {
      id: "hero-title",
      title: "Hero Section Title",
      content: "Higher Education Acceleration and Transformation",
      type: "text",
    },
    {
      id: "hero-subtitle",
      title: "Hero Section Subtitle",
      content: "Continuously Transforming and Elevating Bangladesh's Higher Education Landscape",
      type: "text",
    },
    {
      id: "about-description",
      title: "About Page Description",
      content: "The Higher Education Acceleration and Transformation (HEAT) project is a comprehensive initiative...",
      type: "textarea",
    },
  ];

  const handleEdit = (id: string) => {
    setEditingContent(id);
  };

  const handleSave = (id: string) => {
    setEditingContent(null);
    // Here you would save to your backend
    console.log(`Saving content for ${id}`);
  };

  const handleCancel = () => {
    setEditingContent(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Content Management
        </h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Content
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Website Content
          </h3>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {contentSections.map((section) => (
              <div
                key={section.id}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-gray-900">
                    {section.title}
                  </h4>
                  <div className="flex space-x-2">
                    {editingContent === section.id ? (
                      <>
                        <button
                          onClick={() => handleSave(section.id)}
                          className="text-green-600 hover:text-green-800"
                        >
                          <Save className="h-4 w-4" />
                        </button>
                        <button
                          onClick={handleCancel}
                          className="text-gray-600 hover:text-gray-800"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(section.id)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
                
                {editingContent === section.id ? (
                  section.type === "textarea" ? (
                    <textarea
                      defaultValue={section.content}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <input
                      type="text"
                      defaultValue={section.content}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  )
                ) : (
                  <p className="text-gray-700">{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Content Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Add New Content
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content Title
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter content title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Text</option>
                  <option>Textarea</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter content"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Add Content
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
