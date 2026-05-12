import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiUser, HiMail, HiLockClosed, HiBriefcase, HiUserGroup } from "react-icons/hi";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";

export default function RegisterPage() {
  const [role, setRole] = useState("freelancer");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const roles = [
    { key: "freelancer", icon: HiBriefcase, title: "Je suis Freelancer", desc: "Je cherche des projets et propose mes services." },
    { key: "client", icon: HiUserGroup, title: "Je suis Client", desc: "Je souhaite recruter des talents pour mes projets." },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-2xl">
        <Card className="p-8 md:p-12 shadow-2xl" style={{ border: "2px solid rgba(14,165,233,0.15)" }}>
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black mb-3" style={{ color: "var(--foreground)" }}>Créer un compte</h1>
            <p style={{ color: "var(--foreground)", opacity: 0.6 }}>Rejoignez la plus grande communauté de freelancers au Maroc.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Role Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {roles.map(({ key, icon: Icon, title, desc }) => (
                <button key={key} type="button" onClick={() => setRole(key)}
                  className="relative p-6 rounded-2xl text-left transition-all"
                  style={{
                    border: `2px solid ${role === key ? "#0EA5E9" : "var(--border)"}`,
                    backgroundColor: role === key ? "rgba(14,165,233,0.05)" : "var(--card)",
                    boxShadow: role === key ? "0 4px 14px rgba(14,165,233,0.1)" : "none",
                  }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors"
                    style={{ backgroundColor: role === key ? "#0EA5E9" : "rgba(14,165,233,0.1)", color: role === key ? "#fff" : "#0EA5E9" }}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: "var(--foreground)" }}>{title}</h3>
                  <p className="text-sm" style={{ color: "var(--foreground)", opacity: 0.6 }}>{desc}</p>
                  {role === key && (
                    <motion.div layoutId="check"
                      className="absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: "#0EA5E9" }}>
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Nom complet" placeholder="Prénom Nom" icon={HiUser} required />
              <Input label="Adresse Email" type="email" placeholder="nom@exemple.com" icon={HiMail} required />
              <Input label="Mot de passe" type="password" placeholder="••••••••" icon={HiLockClosed} required />
              <Input label="Confirmer le mot de passe" type="password" placeholder="••••••••" icon={HiLockClosed} required />
            </div>

            <div className="flex items-center gap-3 text-sm" style={{ color: "var(--foreground)", opacity: 0.6 }}>
              <input type="checkbox" required className="w-4 h-4 rounded" style={{ accentColor: "#0EA5E9" }} />
              <span>
                J'accepte les{" "}
                <a href="#" className="font-bold hover:underline" style={{ color: "#0EA5E9" }}>Conditions d'Utilisation</a>
                {" "}et la{" "}
                <a href="#" className="font-bold hover:underline" style={{ color: "#0EA5E9" }}>Politique de Confidentialité</a>.
              </span>
            </div>

            <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
              Créer mon compte {role === "freelancer" ? "Freelancer" : "Client"}
            </Button>
          </form>

          <p className="text-center mt-10" style={{ color: "var(--foreground)", opacity: 0.6 }}>
            Vous avez déjà un compte ?{" "}
            <Link to="/auth/login" className="font-bold hover:underline" style={{ color: "#0EA5E9" }}>Se connecter</Link>
          </p>
        </Card>
      </motion.div>
    </div>
  );
}
