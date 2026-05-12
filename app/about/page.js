"use client";
import { motion } from "framer-motion";
import { HiCheckBadge } from "react-icons/hi2";
import { HiGlobeAlt, HiUsers, HiLightningBolt } from "react-icons/hi";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="bg-primary/5 py-20 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-6">À propos de <span className="text-primary">FreelanceHub</span></h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            La première plateforme au Maroc dédiée à connecter les meilleurs talents locaux avec des entreprises ambitieuses du monde entier.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
            <p className="text-foreground/70 mb-4 text-lg leading-relaxed">
              Nous avons créé FreelanceHub avec une conviction simple : le talent est partout, mais les opportunités ne le sont pas toujours. 
              Notre mission est de démocratiser l'accès au travail indépendant au Maroc et de valoriser l'expertise de nos freelances.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Que vous soyez une startup à la recherche d'un développeur génial ou un designer cherchant son prochain grand projet, 
              nous facilitons la mise en relation dans un environnement sécurisé et professionnel.
            </p>
            <ul className="space-y-4">
              {[
                "Paiement 100% sécurisé",
                "Profils vérifiés rigoureusement",
                "Support client dédié 24/7"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  <HiCheckBadge className="text-primary" size={24} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-primary text-white text-center p-8 border-none transform translate-y-8">
              <HiUsers size={48} className="mx-auto mb-4 opacity-80" />
              <h3 className="text-3xl font-black mb-2">10K+</h3>
              <p className="opacity-80">Freelancers</p>
            </Card>
            <Card className="text-center p-8 border-primary/20 shadow-xl shadow-primary/5">
              <HiGlobeAlt size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-black text-primary mb-2">24</h3>
              <p className="text-foreground/60">Villes couvertes</p>
            </Card>
            <Card className="text-center p-8 border-accent/20 shadow-xl shadow-accent/5 translate-y-8">
              <HiLightningBolt size={48} className="mx-auto mb-4 text-accent" />
              <h3 className="text-3xl font-black text-accent mb-2">45K+</h3>
              <p className="text-foreground/60">Projets réalisés</p>
            </Card>
            <Card className="bg-card text-center p-8">
              <h3 className="text-3xl font-black text-success mb-2">99%</h3>
              <p className="text-foreground/60">Clients satisfaits</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="text-center py-20 bg-card border-t border-border mt-10">
        <h2 className="text-3xl font-bold mb-6">Prêt à nous rejoindre ?</h2>
        <div className="flex justify-center gap-4">
          <Button size="lg" variant="primary">Trouver un talent</Button>
          <Button size="lg" variant="outline">Devenir Freelance</Button>
        </div>
      </section>
    </div>
  );
}
