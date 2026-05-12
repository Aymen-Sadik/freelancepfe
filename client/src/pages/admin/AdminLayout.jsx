import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/dashboard/Sidebar";
import Avatar from "@/components/ui/Avatar";

export default function AdminLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <main className="transition-all duration-300 min-h-screen" style={{ marginLeft: isCollapsed ? "5rem" : "18rem" }}>
        {/* Admin Header */}
        <header className="h-20 sticky top-0 z-30 px-8 flex items-center justify-between"
          style={{ borderBottom: "1px solid var(--border)", backgroundColor: "rgba(30,41,59,0.5)", backdropFilter: "blur(12px)" }}>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-black border uppercase tracking-wider animate-pulse"
              style={{ backgroundColor: "rgba(239,68,68,0.1)", color: "#EF4444", borderColor: "rgba(239,68,68,0.2)" }}>
              Panel Admin
            </span>
            <h2 className="font-black" style={{ color: "var(--foreground)" }}>FreelanceHub Morocco</h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold" style={{ color: "var(--foreground)", opacity: 0.4 }}>v1.0.4 - stable</span>
            <Avatar size="sm" src="https://i.pravatar.cc/150?u=admin" />
          </div>
        </header>

        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
