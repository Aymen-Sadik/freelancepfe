"use client";
import { motion } from "framer-motion";
import { HiTrendingUp, HiTrendingDown, HiBriefcase, HiCurrencyDollar, HiChatAlt2, HiBell } from "react-icons/hi";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";

export default function Dashboard() {
  const stats = [
    { label: "Projets Actifs", value: "12", icon: HiBriefcase, trend: "+2", color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Revenus (Mai)", value: "14,500 DH", icon: HiCurrencyDollar, trend: "+15%", color: "text-success", bg: "bg-success/10" },
    { label: "Messages", value: "3", icon: HiChatAlt2, trend: "Nouveau", color: "text-accent", bg: "bg-accent/10" },
    { label: "Notifications", value: "5", icon: HiBell, trend: "", color: "text-purple-500", bg: "bg-purple-500/10" },
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
          <h1 className="text-3xl font-black">Bonjour, Yassine 👋</h1>
          <p className="text-foreground/60 font-medium">Voici ce qui se passe sur votre compte aujourd'hui.</p>
        </div>
        <div className="flex gap-3">
          <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" size="md" className="shadow-lg" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                {stat.trend && (
                  <Badge variant={stat.trend.includes("+") ? "success" : "primary"}>
                    {stat.trend}
                  </Badge>
                )}
              </div>
              <div>
                <p className="text-sm font-bold text-foreground/40 uppercase tracking-wider">{stat.label}</p>
                <h3 className="text-2xl font-black mt-1">{stat.value}</h3>
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
              <h2 className="text-xl font-black">Activité Récente</h2>
              <button className="text-primary text-sm font-bold hover:underline">Voir tout</button>
            </div>
            <div className="space-y-6">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-foreground/5 transition-all cursor-pointer group">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-card border-2 border-border group-hover:border-primary transition-all`}>
                    {activity.type === "order" && <HiBriefcase size={20} className="text-primary" />}
                    {activity.type === "payment" && <HiCurrencyDollar size={20} className="text-success" />}
                    {activity.type === "message" && <HiChatAlt2 size={20} className="text-accent" />}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-sm">{activity.title}</h4>
                    <p className="text-xs text-foreground/40">{activity.time}</p>
                  </div>
                  <Badge variant={activity.status === "Nouveau" ? "primary" : "gray"}>{activity.status}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Quick Profile Stats */}
        <div className="space-y-6">
          <Card>
            <h2 className="text-xl font-black mb-6">Visibilité du Profil</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-bold text-foreground/60">Vues (7 jours)</span>
                  <span className="text-sm font-black">1,240</span>
                </div>
                <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div className="w-[70%] h-full bg-primary" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-bold text-foreground/60">Taux de conversion</span>
                  <span className="text-sm font-black">4.8%</span>
                </div>
                <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div className="w-[45%] h-full bg-accent" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-primary text-white border-none shadow-xl shadow-primary/20">
            <h3 className="text-lg font-black mb-2">Boostez votre profil !</h3>
            <p className="text-sm opacity-80 mb-6">Passez au compte Premium pour apparaître en haut des recherches.</p>
            <button className="w-full py-3 bg-white text-primary rounded-xl font-black hover:bg-white/90 transition-all shadow-lg">
              En savoir plus
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
}
