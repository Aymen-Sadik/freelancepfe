"use client";
import { HiBell, HiCheck, HiDotsHorizontal, HiTrash } from "react-icons/hi";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function Notifications() {
  const notifications = [
    { id: 1, title: "Nouveau message", desc: "Amine Bennani vous a envoyé un message.", time: "Il y a 5 min", unread: true, type: "message" },
    { id: 2, title: "Paiement reçu", desc: "Votre paiement de 4,200 DH a été validé.", time: "Il y a 2 heures", unread: true, type: "payment" },
    { id: 3, title: "Projet terminé", desc: "Le projet 'Site Web' a été marqué comme terminé.", time: "Hier", unread: false, type: "project" },
    { id: 4, title: "Nouveau projet", desc: "Un nouveau projet correspond à vos compétences.", time: "Il y a 2 jours", unread: false, type: "alert" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black">Notifications</h1>
          <p className="text-foreground/60">Gérez vos alertes et mises à jour.</p>
        </div>
        <button className="text-primary font-bold text-sm hover:underline flex items-center gap-2">
          <HiCheck /> Marquer tout comme lu
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((n) => (
          <Card 
            key={n.id} 
            className={`
              p-6 hover:bg-foreground/5 cursor-pointer transition-all border-l-4
              ${n.unread ? "border-primary bg-primary/5" : "border-transparent"}
            `}
          >
            <div className="flex gap-4">
              <div className={`
                w-12 h-12 rounded-xl flex items-center justify-center shrink-0
                ${n.unread ? "bg-primary text-white" : "bg-card border-2 border-border text-foreground/40"}
              `}>
                <HiBell size={24} />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg">{n.title}</h3>
                  <span className="text-xs font-bold text-foreground/40">{n.time}</span>
                </div>
                <p className="text-foreground/60 text-sm">{n.desc}</p>
                <div className="mt-4 flex gap-4">
                  <button className="text-xs font-black text-primary hover:underline">Voir les détails</button>
                  <button className="text-xs font-black text-danger hover:underline">Supprimer</button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
