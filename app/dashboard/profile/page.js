"use client";
import { HiCamera, HiUser, HiMail, HiPhone, HiGlobeAlt, HiPencil } from "react-icons/hi";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";

export default function ProfileSettings() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-black">Mon Profil</h1>
        <p className="text-foreground/60">Gérez vos informations personnelles et professionnelles.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Avatar & Quick info */}
        <div className="md:col-span-1 space-y-6">
          <Card className="text-center p-8">
            <div className="relative inline-block mb-6">
              <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" size="xl" className="shadow-2xl" />
              <button className="absolute bottom-2 right-2 p-2 bg-primary text-white rounded-full shadow-lg border-4 border-card hover:scale-110 transition-all">
                <HiCamera size={20} />
              </button>
            </div>
            <h3 className="text-xl font-black mb-1">Yassine El Amrani</h3>
            <p className="text-sm text-foreground/40 font-bold uppercase tracking-wider mb-6">Freelancer Pro</p>
            <div className="flex justify-center gap-2">
              <span className="text-xs bg-success/10 text-success px-3 py-1 rounded-full font-bold">Profil 95% complet</span>
            </div>
          </Card>

          <Card className="space-y-4">
            <h4 className="font-bold text-sm text-foreground/40 uppercase tracking-widest border-b border-border pb-4">Statut</h4>
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground/60">Disponibilité</span>
              <span className="font-bold text-success">Disponible</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground/60">Note moyenne</span>
              <span className="font-bold">4.9/5</span>
            </div>
          </Card>
        </div>

        {/* Right Column: Edit Form */}
        <div className="md:col-span-2 space-y-6">
          <Card className="space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-black">Informations de base</h3>
              <button className="text-primary hover:underline text-sm font-bold flex items-center gap-1">
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
              <label className="text-sm font-bold text-foreground/80 ml-1">Bio courte</label>
              <textarea 
                rows={4}
                defaultValue="Passionné par le design et le développement, je transforme vos idées en réalités numériques percutantes."
                className="w-full bg-card border-2 border-border rounded-xl py-3 px-4 outline-none focus:border-primary transition-all text-foreground"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline">Annuler</Button>
              <Button>Enregistrer les modifications</Button>
            </div>
          </Card>

          <Card className="space-y-6">
            <h3 className="text-xl font-black">Réseaux Sociaux</h3>
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
