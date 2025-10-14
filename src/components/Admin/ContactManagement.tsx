"use client";

import { useState } from "react";
import { Edit, Save, Phone, Mail, MapPin, Clock } from "lucide-react";
import { contactInfo } from "@/data/demoData";

export default function ContactManagement() {
  const [isEditing, setIsEditing] = useState(false);
  const [contactData, setContactData] = useState(contactInfo);

  const handleSave = () => {
    // Here you would save to your backend
    console.log("Saving contact information:", contactData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setContactData(contactInfo); // Reset to original data
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setContactData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Contact Management</h2>
        <div className="flex space-x-3">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit Information
            </button>
          )}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Contact Information
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Address */}
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-1" />
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                {isEditing ? (
                  <textarea
                    value={contactData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <p className="text-gray-900">{contactData.address}</p>
                )}
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-gray-400 mr-3" />
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={contactData.mainOffice}
                    onChange={(e) => handleInputChange('mainOffice', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <p className="text-gray-900">{contactData.mainOffice}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-gray-400 mr-3" />
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={contactData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <p className="text-gray-900">{contactData.email}</p>
                )}
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start">
              <Clock className="h-5 w-5 text-gray-400 mr-3 mt-1" />
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Office Hours
                </label>
                {isEditing ? (
                  <textarea
                    value={contactData.officeHours}
                    onChange={(e) => handleInputChange('officeHours', e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <p className="text-gray-900">{contactData.officeHours}</p>
                )}
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Website
              </label>
              {isEditing ? (
                <input
                  type="url"
                  value=""
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter website URL"
                />
              ) : (
                <p className="text-gray-900">Not specified</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Emergency Contact
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={contactData.emergencyHotline}
                  onChange={(e) => handleInputChange('emergencyHotline', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter emergency contact"
                />
              ) : (
                <p className="text-gray-900">{contactData.emergencyHotline}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Social Media
              </label>
              {isEditing ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value=""
                    onChange={(e) => handleInputChange('facebook', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Facebook URL"
                  />
                  <input
                    type="text"
                    value=""
                    onChange={(e) => handleInputChange('twitter', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Twitter URL"
                  />
                </div>
              ) : (
                <div className="space-y-1">
                  <p className="text-gray-900">Facebook: Not specified</p>
                  <p className="text-gray-900">Twitter: Not specified</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
