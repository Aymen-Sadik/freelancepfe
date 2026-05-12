"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiUser, HiMail, HiLockClosed, HiBriefcase, HiUserGroup } from "react-icons/hi";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";

export default function Register() {
  const [role, setRole] = useState("freelancer"); // "freelancer" or "client"
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl"
      >
        <Card className="p-8 md:p-12 shadow-2xl border-2 border-border/50">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black mb-3">Créer un compte</h1>
            <p className="text-foreground/60">Rejoignez la plus grande communauté de freelancers au Maroc.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Role Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setRole("freelancer")}
                className={`
                  relative p-6 rounded-2xl border-2 transition-all text-left group
                  ${role === "freelancer" 
                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/10" 
                    : "border-border hover:border-primary/50 bg-card"}
                `}
              >
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors
                  ${role === "freelancer" ? "bg-primary text-white" : "bg-primary/10 text-primary"}
                `}>
                  <HiBriefcase size={24} />
                </div>
                <h3 className="font-bold text-lg mb-1">Je suis Freelancer</h3>
                <p className="text-sm text-foreground/60">Je cherche des projets et propose mes services.</p>
                {role === "freelancer" && (
                  <motion.div layoutId="check" className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                    <svg size={16} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                )}
              </button>

              <button
                type="button"
                onClick={() => setRole("client")}
                className={`
                  relative p-6 rounded-2xl border-2 transition-all text-left group
                  ${role === "client" 
                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/10" 
                    : "border-border hover:border-primary/50 bg-card"}
                `}
              >
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors
                  ${role === "client" ? "bg-primary text-white" : "bg-primary/10 text-primary"}
                `}>
                  <HiUserGroup size={24} />
                </div>
                <h3 className="font-bold text-lg mb-1">Je suis Client</h3>
                <p className="text-sm text-foreground/60">Je souhaite recruter des talents pour mes projets.</p>
                {role === "client" && (
                  <motion.div layoutId="check" className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                    <svg size={16} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Nom complet"
                placeholder="Prénom Nom"
                icon={HiUser}
                required
              />
              <Input
                label="Adresse Email"
                type="email"
                placeholder="nom@exemple.com"
                icon={HiMail}
                required
              />
              <Input
                label="Mot de passe"
                type="password"
                placeholder="••••••••"
                icon={HiLockClosed}
                required
              />
              <Input
                label="Confirmer le mot de passe"
                type="password"
                placeholder="••••••••"
                icon={HiLockClosed}
                required
              />
            </div>

            <div className="flex items-center gap-3 text-sm text-foreground/60">
              <input type="checkbox" required className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
              <span>
                J'accepte les{" "}
                <Link href="/terms" className="text-primary font-bold hover:underline">Conditions d'Utilisation</Link>
                {" "}et la{" "}
                <Link href="/privacy" className="text-primary font-bold hover:underline">Politique de Confidentialité</Link>.
              </span>
            </div>

            <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
              Créer mon compte {role === "freelancer" ? "Freelancer" : "Client"}
            </Button>
          </form>

          <p className="text-center mt-10 text-foreground/60">
            Vous avez déjà un compte ?{" "}
            <Link href="/auth/login" className="text-primary font-bold hover:underline">
              Se connecter
            </Link>
          </p>
        </Card>
      </motion.div>
    </div>
  );
}
