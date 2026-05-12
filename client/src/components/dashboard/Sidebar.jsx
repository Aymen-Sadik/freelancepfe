import { Link, useLocation } from "react-router-dom";
import {
  HiChartPie, HiUser, HiBriefcase, HiChatAlt2,
  HiBell, HiCog, HiLogout, HiChevronDoubleLeft
} from "react-icons/hi";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();
  const pathname = location.pathname;
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
      style={{ backgroundColor: "var(--card)", borderRight: "1px solid var(--border)" }}
      className={`fixed left-0 top-0 h-screen z-40 transition-all duration-300 ${isCollapsed ? "w-20" : "w-72"}`}
    >
      <div className="flex flex-col h-full py-6">
        {/* Logo */}
        <div className={`px-6 mb-10 flex items-center ${isCollapsed ? "justify-center" : "justify-between"}`}>
          {!isCollapsed && (
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold" style={{ backgroundColor: "#0EA5E9" }}>F</div>
              <span className="font-black text-xl" style={{ color: "var(--foreground)" }}>FreelanceHub</span>
            </Link>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg transition-all"
            style={{ color: "var(--foreground)" }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = "rgba(14,165,233,0.1)"; e.currentTarget.style.color = "#0EA5E9"; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--foreground)"; }}
          >
            <HiChevronDoubleLeft
              className="transition-transform duration-300"
              style={{ transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-grow px-3 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} to={item.href}>
                <div
                  className="relative flex items-center gap-4 px-4 py-3 rounded-xl font-bold transition-all"
                  style={{
                    backgroundColor: isActive ? "#0EA5E9" : "transparent",
                    color: isActive ? "#fff" : "var(--foreground)",
                    opacity: isActive ? 1 : 0.5,
                    boxShadow: isActive ? "0 4px 14px rgba(14,165,233,0.2)" : "none",
                  }}
                  onMouseEnter={e => { if (!isActive) { e.currentTarget.style.backgroundColor = "rgba(14,165,233,0.05)"; e.currentTarget.style.color = "#0EA5E9"; e.currentTarget.style.opacity = 1; }}}
                  onMouseLeave={e => { if (!isActive) { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--foreground)"; e.currentTarget.style.opacity = 0.5; }}}
                >
                  <item.icon size={22} className={isCollapsed ? "mx-auto" : ""} />
                  {!isCollapsed && <span className="flex-grow">{item.name}</span>}
                  {item.badge && !isCollapsed && (
                    <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {isCollapsed && item.badge && (
                    <div className="absolute top-2 right-4 w-2 h-2 bg-red-500 rounded-full border-2" style={{ borderColor: "var(--card)" }} />
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-3 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
          <button
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold transition-all"
            style={{ color: "#EF4444" }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(239,68,68,0.05)"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
          >
            <HiLogout size={22} className={isCollapsed ? "mx-auto" : ""} />
            {!isCollapsed && <span>Déconnexion</span>}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
