import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)" }}>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main
        className="transition-all duration-300 min-h-screen"
        style={{ marginLeft: isCollapsed ? "5rem" : "18rem" }}
      >
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
