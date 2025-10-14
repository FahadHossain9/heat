"use client";

import { useState } from "react";
import {
  HeroSection,
  SearchFilter,
  CircularsList,
} from "@/components/Circulars";

export default function Circulars() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [statusFilter, setStatusFilter] = useState("All Status");

  return (
    <div className="min-h-screen">
      <HeroSection />
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
      <CircularsList
        searchTerm={searchTerm}
        categoryFilter={categoryFilter}
        typeFilter={typeFilter}
        statusFilter={statusFilter}
      />
    </div>
  );
}
