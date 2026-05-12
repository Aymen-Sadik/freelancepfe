"use client";
import { useState } from "react";
import { HiSearch, HiCheckCircle, HiXCircle, HiEye, HiCurrencyDollar, HiClock } from "react-icons/hi";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function AdminProjects() {
  const projects = [
    { id: 1, title: "Refonte Site E-commerce", client: "StartupX", budget: "12,000 DH", category: "Web", status: "En attente", date: "12 Mai 2024" },
    { id: 2, title: "Logo & Branding", client: "Hotel Atlas", budget: "3,500 DH", category: "Design", status: "Validé", date: "10 Mai 2024" },
    { id: 3, title: "App Mobile Livraison", client: "FastDeliver", budget: "25,000 DH", category: "Mobile", status: "Validé", date: "09 Mai 2024" },
    { id: 4, title: "Campagne SEO", client: "Bakery Casa", budget: "5,000 DH", category: "Marketing", status: "Rejeté", date: "05 Mai 2024" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-foreground">Gestion des Projets</h1>
        <p className="text-foreground/60 font-medium">Validez les nouveaux projets et gérez les publications en cours.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "En attente", value: "14", color: "text-accent", bg: "bg-accent/10" },
          { label: "Validés (Ce mois)", value: "156", color: "text-success", bg: "bg-success/10" },
          { label: "Total Projets", value: "892", color: "text-primary", bg: "bg-primary/10" },
        ].map((stat, i) => (
          <Card key={i} className="flex items-center gap-4 p-6 border-none bg-card shadow-lg">
            <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
              <HiClock size={24} />
            </div>
            <div>
              <p className="text-xs font-black text-foreground/40 uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-2xl font-black">{stat.value}</h3>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-0 overflow-hidden shadow-xl">
        <div className="p-6 border-b border-border bg-card/50 flex flex-col md:flex-row justify-between gap-4">
          <div className="relative md:w-96">
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
            <input 
              type="text" 
              placeholder="Rechercher un projet..." 
              className="w-full bg-background border-2 border-border rounded-xl py-2 pl-10 pr-4 outline-none focus:border-primary transition-all text-sm"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-foreground/5 text-xs font-black text-foreground/40 uppercase tracking-widest">
                <th className="py-4 px-6">Projet</th>
                <th className="py-4 px-6">Client</th>
                <th className="py-4 px-6">Budget</th>
                <th className="py-4 px-6">Statut</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {projects.map((prj) => (
                <tr key={prj.id} className="hover:bg-foreground/[0.02] transition-all group">
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-bold text-sm text-foreground">{prj.title}</p>
                      <p className="text-xs text-foreground/40">{prj.category}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm font-bold text-foreground/60">{prj.client}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1 text-primary font-black text-sm">
                      <HiCurrencyDollar /> {prj.budget}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`
                      text-[10px] font-black uppercase px-2 py-1 rounded-full border
                      ${prj.status === "Validé" ? "bg-success/10 text-success border-success/20" : ""}
                      ${prj.status === "Rejeté" ? "bg-danger/10 text-danger border-danger/20" : ""}
                      ${prj.status === "En attente" ? "bg-accent/10 text-accent border-accent/20" : ""}
                    `}>
                      {prj.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-foreground/40 hover:text-primary transition-all rounded-lg hover:bg-primary/10" title="Voir">
                        <HiEye size={18} />
                      </button>
                      <button className="p-2 text-foreground/40 hover:text-success transition-all rounded-lg hover:bg-success/10" title="Valider">
                        <HiCheckCircle size={18} />
                      </button>
                      <button className="p-2 text-foreground/40 hover:text-danger transition-all rounded-lg hover:bg-danger/10" title="Rejeter">
                        <HiXCircle size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
