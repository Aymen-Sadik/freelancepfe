import { HiBell, HiCheck } from "react-icons/hi";
import Card from "@/components/ui/Card";

export default function NotificationsPage() {
  const notifications = [
    { id: 1, title: "Nouveau message", desc: "Amine Bennani vous a envoyé un message.", time: "Il y a 5 min", unread: true },
    { id: 2, title: "Paiement reçu", desc: "Votre paiement de 4,200 DH a été validé.", time: "Il y a 2 heures", unread: true },
    { id: 3, title: "Projet terminé", desc: "Le projet 'Site Web' a été marqué comme terminé.", time: "Hier", unread: false },
    { id: 4, title: "Nouveau projet", desc: "Un nouveau projet correspond à vos compétences.", time: "Il y a 2 jours", unread: false },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black" style={{ color: "var(--foreground)" }}>Notifications</h1>
          <p style={{ color: "var(--foreground)", opacity: 0.6 }}>Gérez vos alertes et mises à jour.</p>
        </div>
        <button className="text-sm font-bold flex items-center gap-2 hover:underline" style={{ color: "#0EA5E9" }}>
          <HiCheck /> Marquer tout comme lu
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((n) => (
          <Card key={n.id} hover={false}
            className="p-6 cursor-pointer transition-all"
            style={{
              borderLeft: `4px solid ${n.unread ? "#0EA5E9" : "transparent"}`,
              backgroundColor: n.unread ? "rgba(14,165,233,0.05)" : "var(--card)",
            }}>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: n.unread ? "#0EA5E9" : "var(--card)",
                  border: n.unread ? "none" : "2px solid var(--border)",
                  color: n.unread ? "#fff" : "var(--foreground)",
                }}>
                <HiBell size={24} />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg" style={{ color: "var(--foreground)" }}>{n.title}</h3>
                  <span className="text-xs font-bold" style={{ color: "var(--foreground)", opacity: 0.4 }}>{n.time}</span>
                </div>
                <p className="text-sm" style={{ color: "var(--foreground)", opacity: 0.6 }}>{n.desc}</p>
                <div className="mt-4 flex gap-4">
                  <button className="text-xs font-black hover:underline" style={{ color: "#0EA5E9" }}>Voir les détails</button>
                  <button className="text-xs font-black hover:underline" style={{ color: "#EF4444" }}>Supprimer</button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
