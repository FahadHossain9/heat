"use client";

import { useState } from "react";
import { HeroSection, SearchFilter, NoticesList } from "@/components/Notices";

export default function Notices() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All Priorities");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");

  return (
    <div className="min-h-screen">
      <HeroSection />
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
      <NoticesList
        searchTerm={searchTerm}
        priorityFilter={priorityFilter}
        categoryFilter={categoryFilter}
      />
    </div>
  );
}
