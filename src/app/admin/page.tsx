"use client";

import { useState } from "react";
import {
  AdminLayout,
  Dashboard,
  ContentManagement,
  ATFDocuments,
  Notices,
  Events,
  Circulars,
  WingManagement,
  ContactManagement,
} from "@/components/Admin";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "content":
        return <ContentManagement />;
      case "atf-docs":
        return <ATFDocuments />;
      case "notices":
        return <Notices />;
      case "events":
        return <Events />;
      case "circulars":
        return <Circulars />;
      case "wings":
        return <WingManagement />;
      case "contact":
        return <ContactManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AdminLayout
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {renderContent()}
    </AdminLayout>
  );
}