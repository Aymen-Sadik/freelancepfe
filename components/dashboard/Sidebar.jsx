"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiChartPie, HiUser, HiBriefcase, HiChatAlt2,
  HiBell, HiCog, HiLogout, HiChevronDoubleLeft
} from "react-icons/hi";
import { motion } from "framer-motion";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const pathname = usePathname();

  const isAdminPath = pathname.startsWith("/admin");

  const userMenuItems = [
    { name: "Dashboard", icon: HiChartPie, href: "/dashboard" },
    { name: "Mon Profil", icon: HiUser, href: "/dashboard/profile" },
    { name: "Mes Projets", icon: HiBriefcase, href: "/dashboard/projects" },
    { name: "Messages", icon: HiChatAlt2, href: "/dashboard/messages", badge: 3 },
    { name: "Notifications", icon: HiBell, href: "/dashboard/notifications", badge: 5 },
    { name: "Paramètres", icon: HiCog, href: "/dashboard/settings" },
  ];

  const adminMenuItems = [
    { name: "Aperçu Global", icon: HiChartPie, href: "/admin" },
    { name: "Utilisateurs", icon: HiUser, href: "/admin/users" },
    { name: "Projets", icon: HiBriefcase, href: "/admin/projects" },
    { name: "Signalements", icon: HiBell, href: "/admin/reports", badge: 2 },
    { name: "Catégories", icon: HiCog, href: "/admin/categories" },
  ];

  const menuItems = isAdminPath ? adminMenuItems : userMenuItems;

  return (
    <aside
      className={`
        fixed left-0 top-0 h-screen bg-card border-r border-border z-40 transition-all duration-300
        ${isCollapsed ? "w-20" : "w-72"}
      `}
    >
      <div className="flex flex-col h-full py-6">
        {/* Logo Area */}
        <div className={`px-6 mb-10 flex items-center justify-between ${isCollapsed ? "justify-center" : ""}`}>
          {!isCollapsed && (
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">F</div>
              <span className="font-black text-xl">FreelanceHub</span>
            </Link>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-primary/10 rounded-lg text-foreground/40 hover:text-primary transition-all"
          >
            <HiChevronDoubleLeft className={`transition-transform duration-300 ${isCollapsed ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-grow px-3 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href}>
                <div className={`
                  relative flex items-center gap-4 px-4 py-3 rounded-xl font-bold transition-all group
                  ${isActive
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "text-foreground/50 hover:bg-primary/5 hover:text-primary"}
                `}>
                  <item.icon size={22} className={isCollapsed ? "mx-auto" : ""} />
                  {!isCollapsed && (
                    <span className="flex-grow">{item.name}</span>
                  )}
                  {item.badge && !isCollapsed && (
                    <span className="bg-danger text-white text-[10px] px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {isCollapsed && item.badge && (
                    <div className="absolute top-2 right-4 w-2 h-2 bg-danger rounded-full border border-card" />
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-3 pt-6 border-t border-border">
          <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-danger hover:bg-danger/5 transition-all group">
            <HiLogout size={22} className={isCollapsed ? "mx-auto" : ""} />
            {!isCollapsed && <span>Déconnexion</span>}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
