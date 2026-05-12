import { motion } from "framer-motion";
import { HiUsers, HiDocumentText, HiCurrencyDollar, HiShieldExclamation, HiDotsHorizontal } from "react-icons/hi";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function AdminPage() {
  const adminStats = [
    { label: "Utilisateurs", value: "12,450", icon: HiUsers, color: "#3B82F6", bg: "rgba(59,130,246,0.1)" },
    { label: "Projets Actifs", value: "892", icon: HiDocumentText, color: "#8B5CF6", bg: "rgba(139,92,246,0.1)" },
    { label: "Chiffre d'Affaires", value: "245K DH", icon: HiCurrencyDollar, color: "#10B981", bg: "rgba(16,185,129,0.1)" },
    { label: "Signalements", value: "14", icon: HiShieldExclamation, color: "#EF4444", bg: "rgba(239,68,68,0.1)" },
  ];

  const recentUsers = [
    { id: 1, name: "Mehdi Alami", role: "Freelancer", email: "mehdi@mail.com", status: "Actif" },
    { id: 2, name: "Karima Benani", role: "Client", email: "karima@corp.ma", status: "Actif" },
    { id: 3, name: "Omar Idrissi", role: "Freelancer", email: "omar@design.ma", status: "En attente" },
  ];

  const statusStyle = {
    "Actif": { bg: "rgba(16,185,129,0.1)", color: "#10B981", border: "rgba(16,185,129,0.2)" },
    "En attente": { bg: "rgba(245,158,11,0.1)", color: "#F59E0B", border: "rgba(245,158,11,0.2)" },
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black" style={{ color: "var(--foreground)" }}>Vue d'ensemble</h1>
        <p style={{ color: "var(--foreground)", opacity: 0.6 }}>Contrôlez l'activité globale de la plateforme.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminStats.map((stat, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}>
            <Card className="flex items-center gap-6 p-6">
              <div className="p-4 rounded-2xl" style={{ backgroundColor: stat.bg, color: stat.color }}>
                <stat.icon size={32} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest" style={{ color: "var(--foreground)", opacity: 0.4 }}>{stat.label}</p>
                <h3 className="text-2xl font-black" style={{ color: "var(--foreground)" }}>{stat.value}</h3>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Users table */}
        <div className="lg:col-span-2">
          <Card>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black" style={{ color: "var(--foreground)" }}>Utilisateurs Récents</h2>
              <button className="p-2 rounded-lg transition-all" style={{ color: "var(--foreground)" }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(14,165,233,0.05)"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}>
                <HiDotsHorizontal />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-xs font-black uppercase tracking-wider" style={{ borderBottom: "1px solid var(--border)", color: "var(--foreground)", opacity: 0.4 }}>
                    <th className="pb-4 px-4">Utilisateur</th>
                    <th className="pb-4 px-4">Rôle</th>
                    <th className="pb-4 px-4">Email</th>
                    <th className="pb-4 px-4">Statut</th>
                    <th className="pb-4 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody style={{ opacity: 1 }}>
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="transition-all group" style={{ borderBottom: "1px solid var(--border)" }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(14,165,233,0.02)"}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs"
                            style={{ backgroundColor: "rgba(14,165,233,0.1)", color: "#0EA5E9" }}>
                            {user.name.charAt(0)}
                          </div>
                          <span className="font-bold text-sm" style={{ color: "var(--foreground)" }}>{user.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant={user.role === "Freelancer" ? "primary" : "gray"}>{user.role}</Badge>
                      </td>
                      <td className="py-4 px-4 text-sm" style={{ color: "var(--foreground)", opacity: 0.6 }}>{user.email}</td>
                      <td className="py-4 px-4">
                        <span className="text-[10px] font-black uppercase px-2 py-1 rounded-full border"
                          style={statusStyle[user.status] ? {
                            backgroundColor: statusStyle[user.status].bg,
                            color: statusStyle[user.status].color,
                            borderColor: statusStyle[user.status].border,
                          } : {}}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <button className="text-xs font-black hover:underline" style={{ color: "#0EA5E9" }}>Modifier</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* System Health */}
        <div className="space-y-6">
          <Card>
            <h2 className="text-xl font-black mb-6" style={{ color: "var(--foreground)" }}>État du Système</h2>
            <div className="space-y-6">
              {[
                { label: "API Latency", value: "42ms", status: "stable" },
                { label: "DB Connection", value: "active", status: "stable" },
                { label: "Server CPU", value: "12%", status: "stable" },
                { label: "Disk Usage", value: "64%", status: "warning" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-sm font-bold" style={{ color: "var(--foreground)", opacity: 0.6 }}>{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black" style={{ color: "var(--foreground)" }}>{item.value}</span>
                    <div className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: item.status === "stable" ? "#10B981" : "#F59E0B",
                        animation: item.status === "warning" ? "pulse 1s infinite" : "none",
                      }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card style={{ backgroundColor: "#0F172A", border: "1px solid var(--border)" }}>
            <h3 className="font-black mb-4 flex items-center gap-2" style={{ color: "#F8FAFC" }}>
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              Logs de sécurité
            </h3>
            <div className="space-y-2 font-mono text-[10px]">
              <p style={{ color: "#10B981" }}>[OK] Login successful: ID_2344</p>
              <p style={{ color: "#EF4444" }}>[WARN] Failed login: ID_9921 (IP: 196.21.XX)</p>
              <p style={{ color: "#10B981" }}>[OK] Project approved: PRJ_882</p>
              <p style={{ color: "#F8FAFC", opacity: 0.4 }}>[INFO] Cron job: Cleanup cache</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
