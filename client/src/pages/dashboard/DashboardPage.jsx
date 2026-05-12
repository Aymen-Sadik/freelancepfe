import { motion } from "framer-motion";
import { HiBriefcase, HiCurrencyDollar, HiChatAlt2, HiBell } from "react-icons/hi";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";

export default function DashboardPage() {
  const stats = [
    { label: "Projets Actifs", value: "12", icon: HiBriefcase, trend: "+2", color: "#3B82F6", bg: "rgba(59,130,246,0.1)" },
    { label: "Revenus (Mai)", value: "14,500 DH", icon: HiCurrencyDollar, trend: "+15%", color: "#10B981", bg: "rgba(16,185,129,0.1)" },
    { label: "Messages", value: "3", icon: HiChatAlt2, trend: "Nouveau", color: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
    { label: "Notifications", value: "5", icon: HiBell, trend: "", color: "#8B5CF6", bg: "rgba(139,92,246,0.1)" },
  ];

  const recentActivity = [
    { id: 1, type: "order", title: "Nouveau projet : E-commerce App", time: "Il y a 2 heures", status: "Nouveau" },
    { id: 2, type: "payment", title: "Paiement reçu : 4,200 DH", time: "Il y a 5 heures", status: "Complété" },
    { id: 3, type: "message", title: "Message de Ahmed Bennani", time: "Hier", status: "Lu" },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black" style={{ color: "var(--foreground)" }}>Bonjour, Yassine 👋</h1>
          <p className="font-medium" style={{ color: "var(--foreground)", opacity: 0.6 }}>Voici ce qui se passe sur votre compte aujourd'hui.</p>
        </div>
        <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" size="md" className="shadow-lg" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Card className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl" style={{ backgroundColor: stat.bg, color: stat.color }}>
                  <stat.icon size={24} />
                </div>
                {stat.trend && (
                  <Badge variant={stat.trend.includes("+") ? "success" : "primary"}>{stat.trend}</Badge>
                )}
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--foreground)", opacity: 0.4 }}>{stat.label}</p>
                <h3 className="text-2xl font-black mt-1" style={{ color: "var(--foreground)" }}>{stat.value}</h3>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Feed */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black" style={{ color: "var(--foreground)" }}>Activité Récente</h2>
              <button className="text-sm font-bold hover:underline" style={{ color: "#0EA5E9" }}>Voir tout</button>
            </div>
            <div className="space-y-6">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all group"
                  style={{ backgroundColor: "transparent" }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(14,165,233,0.03)"}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all"
                    style={{ backgroundColor: "var(--card)", border: "2px solid var(--border)" }}>
                    {activity.type === "order" && <HiBriefcase size={20} style={{ color: "#0EA5E9" }} />}
                    {activity.type === "payment" && <HiCurrencyDollar size={20} style={{ color: "#10B981" }} />}
                    {activity.type === "message" && <HiChatAlt2 size={20} style={{ color: "#F59E0B" }} />}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-sm" style={{ color: "var(--foreground)" }}>{activity.title}</h4>
                    <p className="text-xs" style={{ color: "var(--foreground)", opacity: 0.4 }}>{activity.time}</p>
                  </div>
                  <Badge variant={activity.status === "Nouveau" ? "primary" : "gray"}>{activity.status}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Profile Visibility */}
        <div className="space-y-6">
          <Card>
            <h2 className="text-xl font-black mb-6" style={{ color: "var(--foreground)" }}>Visibilité du Profil</h2>
            <div className="space-y-6">
              {[
                { label: "Vues (7 jours)", value: "1,240", pct: 70, color: "#0EA5E9" },
                { label: "Taux de conversion", value: "4.8%", pct: 45, color: "#F59E0B" },
              ].map(({ label, value, pct, color }) => (
                <div key={label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold" style={{ color: "var(--foreground)", opacity: 0.6 }}>{label}</span>
                    <span className="text-sm font-black" style={{ color: "var(--foreground)" }}>{value}</span>
                  </div>
                  <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(14,165,233,0.1)" }}>
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: color }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="border-none shadow-xl text-white" style={{ backgroundColor: "#0EA5E9", boxShadow: "0 10px 40px rgba(14,165,233,0.2)" }}>
            <h3 className="text-lg font-black mb-2">Boostez votre profil !</h3>
            <p className="text-sm opacity-80 mb-6">Passez au compte Premium pour apparaître en haut des recherches.</p>
            <button className="w-full py-3 bg-white rounded-xl font-black hover:opacity-90 transition-all shadow-lg" style={{ color: "#0EA5E9" }}>
              En savoir plus
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
}
