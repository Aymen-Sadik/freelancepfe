"use client";
import { motion } from "framer-motion";
import { HiSearch, HiArrowRight, HiStar } from "react-icons/hi";
import { HiCheckBadge } from "react-icons/hi2";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import { categories, topFreelancers } from "@/data/mockData";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background z-0" />
        
        {/* Animated Background Shapes */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight"
          >
            Trouvez les meilleurs <br />
            <span className="text-gradient">Freelancers au Maroc</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/60 max-w-2xl mx-auto mb-10"
          >
            La plateforme n°1 qui connecte les talents marocains avec les entreprises 
            locales et internationales pour des projets d'exception.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto bg-card p-2 rounded-2xl border-2 border-border shadow-2xl flex flex-col md:flex-row gap-2"
          >
            <div className="flex-grow flex items-center px-4 gap-3 border-b md:border-b-0 md:border-r border-border">
              <HiSearch className="text-foreground/40" size={24} />
              <input 
                type="text" 
                placeholder="Quel service recherchez-vous ?" 
                className="w-full bg-transparent py-4 outline-none text-foreground"
              />
            </div>
            <div className="flex-grow flex items-center px-4 gap-3 border-b md:border-b-0 md:border-r border-border">
              <select className="w-full bg-transparent py-4 outline-none text-foreground appearance-none">
                <option>Toutes les villes</option>
                <option>Casablanca</option>
                <option>Rabat</option>
                <option>Marrakech</option>
              </select>
            </div>
            <Button size="lg" className="md:w-auto w-full">Rechercher</Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium text-foreground/40"
          >
            <span>Populaire :</span>
            {["Site Web", "Logo Design", "SEO", "Montage Vidéo"].map(tag => (
              <span key={tag} className="hover:text-primary cursor-pointer transition-colors">{tag}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Parcourir par catégories</h2>
            <p className="text-foreground/60">Trouvez le talent qu'il vous faut parmi nos expertises.</p>
          </div>
          <Button variant="ghost" className="hidden md:flex items-center gap-2 group">
            Toutes les catégories <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {categories.map((cat) => (
            <motion.div key={cat.id} variants={itemVariants}>
              <Card className="text-center group cursor-pointer hover:border-primary">
                <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-sm mb-1">{cat.name}</h3>
                <p className="text-xs text-foreground/40">{cat.freelancers} Freelancers</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Top Freelancers */}
      <section className="bg-primary/5 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Freelancers à la une</h2>
              <p className="text-foreground/60">Les profils les plus plébiscités cette semaine.</p>
            </div>
            <Button variant="outline" className="hidden md:flex items-center gap-2 group">
              Voir tout <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topFreelancers.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden flex flex-col h-full bg-card">
                  <div className="flex items-start justify-between mb-6">
                    <Avatar src={f.image} alt={f.name} size="lg" className="shadow-xl" />
                    {f.verified && <HiCheckBadge className="text-primary" size={28} title="Vérifié" />}
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-bold hover:text-primary transition-colors cursor-pointer">{f.name}</h3>
                    <p className="text-sm text-foreground/60">{f.title}</p>
                  </div>

                  <div className="flex items-center gap-1 mb-6 text-accent">
                    <HiStar size={18} />
                    <span className="text-sm font-bold text-foreground">{f.rating}</span>
                    <span className="text-xs text-foreground/40 font-medium">({f.reviews} avis)</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {f.skills.slice(0, 3).map(skill => (
                      <Badge key={skill} variant="gray">{skill}</Badge>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border flex items-center justify-between">
                    <div>
                      <span className="text-xs text-foreground/40 font-medium uppercase">À partir de</span>
                      <p className="text-lg font-black text-primary">{f.price} DH<span className="text-sm text-foreground/40 font-medium">/jr</span></p>
                    </div>
                    <Button variant="secondary" size="sm">Contacter</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-card border-2 border-border rounded-[2.5rem] p-10 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-16 -mt-16" />
          
          {[
            { label: "Freelancers", value: "10K+" },
            { label: "Projets Réalisés", value: "45K+" },
            { label: "Villes Couvertes", value: "24" },
            { label: "Client Satisfaits", value: "99%" },
          ].map((stat, i) => (
            <div key={i} className="text-center relative z-10">
              <p className="text-4xl md:text-6xl font-black text-primary mb-2">{stat.value}</p>
              <p className="text-sm md:text-lg font-bold text-foreground/40 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-20">
        <div className="bg-primary rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8">Prêt à lancer votre projet ?</h2>
            <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto">
              Rejoignez des milliers de clients satisfaits et trouvez le freelancer idéal dès aujourd'hui.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-white border-white/20">
                Publier un Projet
              </Button>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                S'inscrire comme Freelancer
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
