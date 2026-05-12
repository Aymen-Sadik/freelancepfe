"use client";
import { useState } from "react";
import { HiSearch, HiFilter, HiDotsVertical, HiUserAdd, HiTrash, HiLockClosed, HiCheck } from "react-icons/hi";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";

export default function AdminUsers() {
  const users = [
    { id: 1, name: "Yassine El Amrani", role: "Freelancer", email: "yassine@mail.ma", status: "Actif", date: "10 Mai 2024" },
    { id: 2, name: "Sara Mansouri", role: "Freelancer", email: "sara@design.ma", status: "Actif", date: "08 Mai 2024" },
    { id: 3, name: "Amine Bennani", role: "Client", email: "amine@corp.ma", status: "Bloqué", date: "01 Mai 2024" },
    { id: 4, name: "Laila Rouissi", role: "Freelancer", email: "laila@social.ma", status: "En attente", date: "12 Mai 2024" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-foreground">Gestion des Utilisateurs</h1>
          <p className="text-foreground/60 font-medium">Gérez, modérez et supervisez tous les comptes de la plateforme.</p>
        </div>
        <Button className="gap-2">
          <HiUserAdd size={20} /> Nouvel Utilisateur
        </Button>
      </div>

      <Card className="p-0 overflow-hidden shadow-xl">
        <div className="p-6 border-b border-border bg-card/50 flex flex-col md:flex-row justify-between gap-4">
          <div className="relative md:w-96">
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
            <input 
              type="text" 
              placeholder="Rechercher par nom, email..." 
              className="w-full bg-background border-2 border-border rounded-xl py-2 pl-10 pr-4 outline-none focus:border-primary transition-all text-sm"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <HiFilter /> Filtres
            </Button>
            <Button variant="outline" size="sm">
              Exporter CSV
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-foreground/5 text-xs font-black text-foreground/40 uppercase tracking-widest">
                <th className="py-4 px-6">Utilisateur</th>
                <th className="py-4 px-6">Rôle</th>
                <th className="py-4 px-6">Date d'inscription</th>
                <th className="py-4 px-6">Statut</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-foreground/[0.02] transition-all group">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <Avatar src={`https://i.pravatar.cc/150?u=${user.id}`} size="sm" />
                      <div>
                        <p className="font-bold text-sm text-foreground">{user.name}</p>
                        <p className="text-xs text-foreground/40">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <Badge variant={user.role === "Freelancer" ? "primary" : "gray"}>{user.role}</Badge>
                  </td>
                  <td className="py-4 px-6 text-sm text-foreground/60">{user.date}</td>
                  <td className="py-4 px-6">
                    <span className={`
                      text-[10px] font-black uppercase px-2 py-1 rounded-full border
                      ${user.status === "Actif" ? "bg-success/10 text-success border-success/20" : ""}
                      ${user.status === "Bloqué" ? "bg-danger/10 text-danger border-danger/20" : ""}
                      ${user.status === "En attente" ? "bg-accent/10 text-accent border-accent/20" : ""}
                    `}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-foreground/40 hover:text-primary transition-all rounded-lg hover:bg-primary/10" title="Modifier">
                        <HiCheck size={18} />
                      </button>
                      <button className="p-2 text-foreground/40 hover:text-danger transition-all rounded-lg hover:bg-danger/10" title="Bloquer">
                        <HiLockClosed size={18} />
                      </button>
                      <button className="p-2 text-foreground/40 hover:text-danger transition-all rounded-lg hover:bg-danger/10" title="Supprimer">
                        <HiTrash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-border flex justify-between items-center text-sm font-bold text-foreground/40">
          <p>Affichage de 1-4 sur 1,240 utilisateurs</p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>Précédent</Button>
            <Button variant="outline" size="sm">Suivant</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
