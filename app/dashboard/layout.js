"use client";
import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      
      <main className={`
        transition-all duration-300 min-h-screen
        ${isCollapsed ? "ml-20" : "ml-72"}
      `}>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
