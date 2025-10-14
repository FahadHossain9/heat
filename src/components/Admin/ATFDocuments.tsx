"use client";

import { useState } from "react";
import { FileText, Edit, Trash2, Plus, Eye, Download, ToggleLeft, ToggleRight } from "lucide-react";
import { atfSupportingDocuments } from "@/data/demoData";

export default function ATFDocuments() {
  const [showAddModal, setShowAddModal] = useState(false);

  const handleToggleActive = (docId: string) => {
    // Here you would update the document status
    console.log(`Toggling active status for document ${docId}`);
  };

  const handlePreview = (docId: string) => {
    // Here you would open document preview
    console.log(`Previewing document ${docId}`);
  };

  const handleDownload = (docId: string) => {
    // Here you would trigger download
    console.log(`Downloading document ${docId}`);
  };

  const handleEdit = (docId: string) => {
    // Here you would open edit modal
    console.log(`Editing document ${docId}`);
  };

  const handleDelete = (docId: string) => {
    // Here you would delete document
    console.log(`Deleting document ${docId}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">
          ATF Supporting Documents
        </h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Document
        </button>
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

      {/* Documents List */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Supporting Documents
          </h3>
        </div>
        <div className="p-6">
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
                    onClick={() => handlePreview(doc.id)}
                    className="text-blue-600 hover:text-blue-800"
                    title="Preview"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDownload(doc.id)}
                    className="text-green-600 hover:text-green-800"
                    title="Download"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleEdit(doc.id)}
                    className="text-blue-600 hover:text-blue-800"
                    title="Edit"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleToggleActive(doc.id)}
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
                    onClick={() => handleDelete(doc.id)}
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

      {/* Add Document Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Add Supporting Document
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Document Title
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter document title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Guidelines</option>
                  <option>Templates</option>
                  <option>Forms</option>
                  <option>Procedures</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Document Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>PDF</option>
                  <option>Word</option>
                  <option>Excel</option>
                  <option>PowerPoint</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter document description"
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
                Add Document
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
