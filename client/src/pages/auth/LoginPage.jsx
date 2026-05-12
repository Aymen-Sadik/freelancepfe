import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMail, HiLockClosed, HiEye, HiEyeOff } from "react-icons/hi";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <Card className="p-8 shadow-2xl" style={{ border: "2px solid rgba(14,165,233,0.15)" }}>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black mb-2" style={{ color: "var(--foreground)" }}>Bon retour !</h1>
            <p style={{ color: "var(--foreground)", opacity: 0.6 }}>Connectez-vous pour gérer vos projets.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input label="Adresse Email" type="email" placeholder="nom@exemple.com" icon={HiMail} required />
            <div className="relative">
              <Input label="Mot de passe" type={showPassword ? "text" : "password"} placeholder="••••••••" icon={HiLockClosed} required />
              <button type="button" onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[38px] transition-colors"
                style={{ color: "var(--foreground)", opacity: 0.4 }}>
                {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded" style={{ accentColor: "#0EA5E9" }} />
                <span style={{ color: "var(--foreground)", opacity: 0.6 }}>Se souvenir de moi</span>
              </label>
              <a href="#" className="font-bold hover:underline" style={{ color: "#0EA5E9" }}>Mot de passe oublié ?</a>
            </div>

            <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>Se connecter</Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full" style={{ borderTop: "1px solid var(--border)" }} />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 font-bold" style={{ backgroundColor: "var(--card)", color: "var(--foreground)", opacity: 0.4 }}>Ou continuer avec</span>
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

          <p className="text-center mt-8 text-sm" style={{ color: "var(--foreground)", opacity: 0.6 }}>
            Pas encore de compte ?{" "}
            <Link to="/auth/register" className="font-bold hover:underline" style={{ color: "#0EA5E9" }}>S'inscrire gratuitement</Link>
          </p>
        </Card>
      </motion.div>
    </div>
  );
}
