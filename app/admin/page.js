"use client";
import { motion } from "framer-motion";
import { HiUsers, HiDocumentText, HiCurrencyDollar, HiShieldExclamation, HiDotsHorizontal } from "react-icons/hi";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function AdminDashboard() {
  const adminStats = [
    { label: "Utilisateurs", value: "12,450", icon: HiUsers, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Projets Actifs", value: "892", icon: HiDocumentText, color: "text-purple-500", bg: "bg-purple-500/10" },
    { label: "Chiffre d'Affaires", value: "245K DH", icon: HiCurrencyDollar, color: "text-success", bg: "bg-success/10" },
    { label: "Signalements", value: "14", icon: HiShieldExclamation, color: "text-danger", bg: "bg-danger/10" },
  ];

  const recentUsers = [
    { id: 1, name: "Mehdi Alami", role: "Freelancer", email: "mehdi@mail.com", status: "Actif" },
    { id: 2, name: "Karima Benani", role: "Client", email: "karima@corp.ma", status: "Actif" },
    { id: 3, name: "Omar Idrissi", role: "Freelancer", email: "omar@design.ma", status: "En attente" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black">Vue d'ensemble</h1>
        <p className="text-foreground/60">Contrôlez l'activité globale de la plateforme.</p>
      </div>

      {/* Admin Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminStats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="flex items-center gap-6 p-6">
              <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={32} />
              </div>
              <div>
                <p className="text-xs font-black text-foreground/40 uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-2xl font-black">{stat.value}</h3>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Management Preview */}
        <div className="lg:col-span-2">
          <Card>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black">Utilisateurs Récents</h2>
              <button className="p-2 hover:bg-foreground/5 rounded-lg"><HiDotsHorizontal /></button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border text-xs font-black text-foreground/40 uppercase tracking-wider">
                    <th className="pb-4 px-4">Utilisateur</th>
                    <th className="pb-4 px-4">Rôle</th>
                    <th className="pb-4 px-4">Email</th>
                    <th className="pb-4 px-4">Statut</th>
                    <th className="pb-4 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-foreground/5 transition-all group">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                            {user.name.charAt(0)}
                          </div>
                          <span className="font-bold text-sm">{user.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant={user.role === "Freelancer" ? "primary" : "gray"}>{user.role}</Badge>
                      </td>
                      <td className="py-4 px-4 text-sm text-foreground/60">{user.email}</td>
                      <td className="py-4 px-4">
                        <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-full ${user.status === "Actif" ? "bg-success/10 text-success" : "bg-accent/10 text-accent"}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <button className="text-xs font-black text-primary hover:underline">Modifier</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* System Health / Logs */}
        <div className="space-y-6">
          <Card>
            <h2 className="text-xl font-black mb-6">État du Système</h2>
            <div className="space-y-6">
              {[
                { label: "API Latency", value: "42ms", status: "stable" },
                { label: "DB Connection", value: "active", status: "stable" },
                { label: "Server CPU", value: "12%", status: "stable" },
                { label: "Disk Usage", value: "64%", status: "warning" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-sm font-bold text-foreground/60">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black">{item.value}</span>
                    <div className={`w-2 h-2 rounded-full ${item.status === "stable" ? "bg-success" : "bg-accent animate-pulse"}`} />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-darkBg border-border shadow-2xl">
            <h3 className="text-textLight font-black mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              Logs de sécurité
            </h3>
            <div className="space-y-2 font-mono text-[10px]">
              <p className="text-success">[OK] Login successful: ID_2344</p>
              <p className="text-danger">[WARN] Failed login: ID_9921 (IP: 196.21.XX)</p>
              <p className="text-success">[OK] Project approved: PRJ_882</p>
              <p className="text-white opacity-40">[INFO] Cron job: Cleanup cache</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
