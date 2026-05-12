"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiMail, HiLockClosed, HiEye, HiEyeOff } from "react-icons/hi";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Card className="p-8 shadow-2xl border-2 border-border/50">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black mb-2">Bon retour !</h1>
            <p className="text-foreground/60">Connectez-vous pour gérer vos projets.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Adresse Email"
              type="email"
              placeholder="nom@exemple.com"
              icon={HiMail}
              required
            />
            
            <div className="relative">
              <Input
                label="Mot de passe"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                icon={HiLockClosed}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[38px] text-foreground/40 hover:text-primary transition-colors"
              >
                {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                <span className="text-foreground/60 group-hover:text-foreground transition-colors">Se souvenir de moi</span>
              </label>
              <Link href="/auth/forgot-password" size="sm" className="text-primary font-bold hover:underline">
                Mot de passe oublié ?
              </Link>
            </div>

            <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
              Se connecter
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-foreground/40 font-bold">Ou continuer avec</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <FaGoogle className="text-red-500" /> Google
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <FaGithub /> GitHub
            </Button>
          </div>

          <p className="text-center mt-8 text-sm text-foreground/60">
            Pas encore de compte ?{" "}
            <Link href="/auth/register" className="text-primary font-bold hover:underline">
              S'inscrire gratuitement
            </Link>
          </p>
        </Card>
      </motion.div>
    </div>
  );
}
