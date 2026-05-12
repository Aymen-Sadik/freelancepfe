"use client";
import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar"; // Reuse dashboard sidebar for admin for now
import { HiChartSquareBar, HiUsers, HiDocumentText, HiShieldCheck } from "react-icons/hi";

export default function AdminLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      
      <main className={`
        transition-all duration-300 min-h-screen
        ${isCollapsed ? "ml-20" : "ml-72"}
      `}>
        {/* Admin Header */}
        <header className="h-20 border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-30 px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="danger" className="animate-pulse">Panel Admin</Badge>
            <h2 className="font-black">FreelanceHub Morocco</h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-foreground/40">v1.0.4 - stable</span>
            <Avatar size="sm" src="https://i.pravatar.cc/150?u=admin" />
          </div>
        </header>

        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

// Helper Badge for this layout
const Badge = ({ children, variant = "primary", className = "" }) => {
  const variants = {
    primary: "bg-primary/10 text-primary border-primary/20",
    danger: "bg-danger/10 text-danger border-danger/20",
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] font-black border uppercase tracking-wider ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

const Avatar = ({ src, size = "md" }) => (
  <div className={`rounded-full border-2 border-border overflow-hidden ${size === "sm" ? "w-8 h-8" : "w-12 h-12"}`}>
    <img src={src} className="w-full h-full object-cover" />
  </div>
);
