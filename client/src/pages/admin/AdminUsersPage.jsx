import { HiSearch, HiFilter, HiUserAdd, HiTrash, HiLockClosed, HiCheck } from "react-icons/hi";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";

export default function AdminUsersPage() {
  const users = [
    { id: 1, name: "Yassine El Amrani", role: "Freelancer", email: "yassine@mail.ma", status: "Actif", date: "10 Mai 2024" },
    { id: 2, name: "Sara Mansouri", role: "Freelancer", email: "sara@design.ma", status: "Actif", date: "08 Mai 2024" },
    { id: 3, name: "Amine Bennani", role: "Client", email: "amine@corp.ma", status: "Bloqué", date: "01 Mai 2024" },
    { id: 4, name: "Laila Rouissi", role: "Freelancer", email: "laila@social.ma", status: "En attente", date: "12 Mai 2024" },
  ];

  const statusStyle = (status) => {
    if (status === "Actif") return { bg: "rgba(16,185,129,0.1)", color: "#10B981", border: "rgba(16,185,129,0.2)" };
    if (status === "Bloqué") return { bg: "rgba(239,68,68,0.1)", color: "#EF4444", border: "rgba(239,68,68,0.2)" };
    return { bg: "rgba(245,158,11,0.1)", color: "#F59E0B", border: "rgba(245,158,11,0.2)" };
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black" style={{ color: "var(--foreground)" }}>Gestion des Utilisateurs</h1>
          <p className="font-medium" style={{ color: "var(--foreground)", opacity: 0.6 }}>Gérez, modérez et supervisez tous les comptes de la plateforme.</p>
        </div>
        <Button className="gap-2" variant="primary"><HiUserAdd size={20} /> Nouvel Utilisateur</Button>
      </div>

      <Card className="p-0 overflow-hidden shadow-xl" hover={false}>
        <div className="p-6 flex flex-col md:flex-row justify-between gap-4" style={{ borderBottom: "1px solid var(--border)", backgroundColor: "rgba(14,165,233,0.02)" }}>
          <div className="relative md:w-96">
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--foreground)", opacity: 0.4 }} />
            <input type="text" placeholder="Rechercher par nom, email..."
              className="w-full rounded-xl py-2 pl-10 pr-4 outline-none transition-all text-sm"
              style={{ backgroundColor: "var(--background)", border: "2px solid var(--border)", color: "var(--foreground)" }}
              onFocus={e => e.target.style.borderColor = "#0EA5E9"}
              onBlur={e => e.target.style.borderColor = "var(--border)"}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2"><HiFilter /> Filtres</Button>
            <Button variant="outline" size="sm">Exporter CSV</Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs font-black uppercase tracking-widest" style={{ backgroundColor: "rgba(14,165,233,0.03)", color: "var(--foreground)", opacity: 0.4 }}>
                <th className="py-4 px-6">Utilisateur</th>
                <th className="py-4 px-6">Rôle</th>
                <th className="py-4 px-6">Date d'inscription</th>
                <th className="py-4 px-6">Statut</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                const s = statusStyle(user.status);
                return (
                  <tr key={user.id} className="transition-all" style={{ borderBottom: "1px solid var(--border)" }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(14,165,233,0.02)"}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <Avatar src={`https://i.pravatar.cc/150?u=${user.id}`} size="sm" />
                        <div>
                          <p className="font-bold text-sm" style={{ color: "var(--foreground)" }}>{user.name}</p>
                          <p className="text-xs" style={{ color: "var(--foreground)", opacity: 0.4 }}>{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <Badge variant={user.role === "Freelancer" ? "primary" : "gray"}>{user.role}</Badge>
                    </td>
                    <td className="py-4 px-6 text-sm" style={{ color: "var(--foreground)", opacity: 0.6 }}>{user.date}</td>
                    <td className="py-4 px-6">
                      <span className="text-[10px] font-black uppercase px-2 py-1 rounded-full border"
                        style={{ backgroundColor: s.bg, color: s.color, borderColor: s.border }}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex justify-end gap-2">
                        {[
                          { Icon: HiCheck, hoverColor: "#0EA5E9", hoverBg: "rgba(14,165,233,0.1)", title: "Valider" },
                          { Icon: HiLockClosed, hoverColor: "#EF4444", hoverBg: "rgba(239,68,68,0.1)", title: "Bloquer" },
                          { Icon: HiTrash, hoverColor: "#EF4444", hoverBg: "rgba(239,68,68,0.1)", title: "Supprimer" },
                        ].map(({ Icon, hoverColor, hoverBg, title }) => (
                          <button key={title} title={title}
                            className="p-2 rounded-lg transition-all"
                            style={{ color: "var(--foreground)", opacity: 0.4 }}
                            onMouseEnter={e => { e.currentTarget.style.backgroundColor = hoverBg; e.currentTarget.style.color = hoverColor; e.currentTarget.style.opacity = 1; }}
                            onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--foreground)"; e.currentTarget.style.opacity = 0.4; }}>
                            <Icon size={18} />
                          </button>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="p-6 flex justify-between items-center text-sm font-bold" style={{ borderTop: "1px solid var(--border)", color: "var(--foreground)", opacity: 0.4 }}>
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
