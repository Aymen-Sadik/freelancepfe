import { HiCamera, HiMail, HiPhone, HiGlobeAlt, HiPencil } from "react-icons/hi";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-black" style={{ color: "var(--foreground)" }}>Mon Profil</h1>
        <p style={{ color: "var(--foreground)", opacity: 0.6 }}>Gérez vos informations personnelles et professionnelles.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column */}
        <div className="md:col-span-1 space-y-6">
          <Card className="text-center p-8">
            <div className="relative inline-block mb-6">
              <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" size="xl" className="shadow-2xl" />
              <button className="absolute bottom-2 right-2 p-2 text-white rounded-full shadow-lg border-4 hover:scale-110 transition-all"
                style={{ backgroundColor: "#0EA5E9", borderColor: "var(--card)" }}>
                <HiCamera size={20} />
              </button>
            </div>
            <h3 className="text-xl font-black mb-1" style={{ color: "var(--foreground)" }}>Yassine El Amrani</h3>
            <p className="text-sm font-bold uppercase tracking-wider mb-6" style={{ color: "var(--foreground)", opacity: 0.4 }}>Freelancer Pro</p>
            <span className="text-xs px-3 py-1 rounded-full font-bold" style={{ backgroundColor: "rgba(16,185,129,0.1)", color: "#10B981" }}>
              Profil 95% complet
            </span>
          </Card>

          <Card className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest pb-4" style={{ color: "var(--foreground)", opacity: 0.4, borderBottom: "1px solid var(--border)" }}>Statut</h4>
            <div className="flex items-center justify-between text-sm">
              <span style={{ color: "var(--foreground)", opacity: 0.6 }}>Disponibilité</span>
              <span className="font-bold" style={{ color: "#10B981" }}>Disponible</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span style={{ color: "var(--foreground)", opacity: 0.6 }}>Note moyenne</span>
              <span className="font-bold" style={{ color: "var(--foreground)" }}>4.9/5</span>
            </div>
          </Card>
        </div>

        {/* Right column */}
        <div className="md:col-span-2 space-y-6">
          <Card className="space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-black" style={{ color: "var(--foreground)" }}>Informations de base</h3>
              <button className="text-sm font-bold flex items-center gap-1 hover:underline" style={{ color: "#0EA5E9" }}>
                <HiPencil /> Modifier
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Prénom" defaultValue="Yassine" />
              <Input label="Nom" defaultValue="El Amrani" />
              <Input label="Email" defaultValue="yassine@example.com" icon={HiMail} />
              <Input label="Téléphone" defaultValue="+212 600 000 000" icon={HiPhone} />
              <div className="md:col-span-2">
                <Input label="Titre Professionnel" defaultValue="Expert Full-Stack Developer & UI/UX" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold ml-1" style={{ color: "var(--foreground)", opacity: 0.8 }}>Bio courte</label>
              <textarea rows={4}
                defaultValue="Passionné par le design et le développement, je transforme vos idées en réalités numériques percutantes."
                className="w-full rounded-xl py-3 px-4 outline-none transition-all resize-none"
                style={{ backgroundColor: "var(--card)", border: "2px solid var(--border)", color: "var(--foreground)" }}
                onFocus={e => e.target.style.borderColor = "#0EA5E9"}
                onBlur={e => e.target.style.borderColor = "var(--border)"}
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline">Annuler</Button>
              <Button variant="primary">Enregistrer les modifications</Button>
            </div>
          </Card>

          <Card className="space-y-6">
            <h3 className="text-xl font-black" style={{ color: "var(--foreground)" }}>Réseaux Sociaux</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="LinkedIn" placeholder="linkedin.com/in/..." />
              <Input label="Portfolio" placeholder="votre-portfolio.ma" icon={HiGlobeAlt} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
