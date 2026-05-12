import { motion } from "framer-motion";
import { HiSearch, HiArrowRight, HiStar } from "react-icons/hi";
import { HiCheckBadge } from "react-icons/hi2";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import { categories, topFreelancers } from "@/data/mockData";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(to bottom, rgba(14,165,233,0.05), var(--background))" }} />
        <div className="absolute top-20 -left-20 w-72 h-72 rounded-full blur-3xl animate-float" style={{ backgroundColor: "rgba(14,165,233,0.2)" }} />
        <div className="absolute bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl animate-float" style={{ backgroundColor: "rgba(245,158,11,0.1)", animationDelay: "1s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            style={{ color: "var(--foreground)" }}
          >
            Trouvez les meilleurs <br />
            <span className="text-gradient">Freelancers au Maroc</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
            className="text-xl max-w-2xl mx-auto mb-10"
            style={{ color: "var(--foreground)", opacity: 0.6 }}
          >
            La plateforme n°1 qui connecte les talents marocains avec les entreprises
            locales et internationales pour des projets d'exception.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto p-2 rounded-2xl border-2 shadow-2xl flex flex-col md:flex-row gap-2"
            style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
          >
            <div className="flex-grow flex items-center px-4 gap-3" style={{ borderRight: "1px solid var(--border)" }}>
              <HiSearch style={{ color: "var(--foreground)", opacity: 0.4 }} size={24} />
              <input type="text" placeholder="Quel service recherchez-vous ?"
                className="w-full bg-transparent py-4 outline-none"
                style={{ color: "var(--foreground)" }} />
            </div>
            <div className="flex-grow flex items-center px-4 gap-3">
              <select className="w-full bg-transparent py-4 outline-none appearance-none" style={{ color: "var(--foreground)" }}>
                <option>Toutes les villes</option>
                <option>Casablanca</option>
                <option>Rabat</option>
                <option>Marrakech</option>
              </select>
            </div>
            <Button size="lg" variant="primary" className="md:w-auto w-full">Rechercher</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium"
            style={{ color: "var(--foreground)", opacity: 0.4 }}
          >
            <span>Populaire :</span>
            {["Site Web", "Logo Design", "SEO", "Montage Vidéo"].map(tag => (
              <span key={tag} className="cursor-pointer transition-colors hover:opacity-100"
                onMouseEnter={e => e.target.style.color = "#0EA5E9"}
                onMouseLeave={e => e.target.style.color = "var(--foreground)"}>{tag}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--foreground)" }}>Parcourir par catégories</h2>
            <p style={{ color: "var(--foreground)", opacity: 0.6 }}>Trouvez le talent qu'il vous faut parmi nos expertises.</p>
          </div>
          <Button variant="ghost" className="hidden md:flex items-center gap-2">
            Toutes les catégories <HiArrowRight />
          </Button>
        </div>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <motion.div key={cat.id} variants={itemVariants}>
              <Card className="text-center group cursor-pointer" hover>
                <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-sm mb-1" style={{ color: "var(--foreground)" }}>{cat.name}</h3>
                <p className="text-xs" style={{ color: "var(--foreground)", opacity: 0.4 }}>{cat.freelancers} Freelancers</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Top Freelancers */}
      <section className="py-20 overflow-hidden" style={{ backgroundColor: "rgba(14,165,233,0.05)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--foreground)" }}>Freelancers à la une</h2>
              <p style={{ color: "var(--foreground)", opacity: 0.6 }}>Les profils les plus plébiscités cette semaine.</p>
            </div>
            <Button variant="outline" className="hidden md:flex items-center gap-2">
              Voir tout <HiArrowRight />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topFreelancers.map((f, i) => (
              <motion.div key={f.id} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <Card className="relative overflow-hidden flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <Avatar src={f.image} alt={f.name} size="lg" className="shadow-xl" />
                    {f.verified && <HiCheckBadge style={{ color: "#0EA5E9" }} size={28} />}
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-bold cursor-pointer transition-colors" style={{ color: "var(--foreground)" }}
                      onMouseEnter={e => e.target.style.color = "#0EA5E9"}
                      onMouseLeave={e => e.target.style.color = "var(--foreground)"}>{f.name}</h3>
                    <p className="text-sm" style={{ color: "var(--foreground)", opacity: 0.6 }}>{f.title}</p>
                  </div>
                  <div className="flex items-center gap-1 mb-6" style={{ color: "#F59E0B" }}>
                    <HiStar size={18} />
                    <span className="text-sm font-bold" style={{ color: "var(--foreground)" }}>{f.rating}</span>
                    <span className="text-xs" style={{ color: "var(--foreground)", opacity: 0.4 }}>({f.reviews} avis)</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {f.skills.slice(0, 3).map(skill => <Badge key={skill} variant="gray">{skill}</Badge>)}
                  </div>
                  <div className="pt-6 flex items-center justify-between" style={{ borderTop: "1px solid var(--border)" }}>
                    <div>
                      <span className="text-xs font-medium uppercase" style={{ color: "var(--foreground)", opacity: 0.4 }}>À partir de</span>
                      <p className="text-lg font-black" style={{ color: "#0EA5E9" }}>{f.price} DH<span className="text-sm font-medium" style={{ color: "var(--foreground)", opacity: 0.4 }}>/jr</span></p>
                    </div>
                    <Button variant="secondary" size="sm">Contacter</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-2 rounded-[2.5rem] p-10 md:p-20 shadow-2xl relative overflow-hidden"
          style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}>
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl -mr-16 -mt-16" style={{ backgroundColor: "rgba(14,165,233,0.1)" }} />
          {[
            { label: "Freelancers", value: "10K+" },
            { label: "Projets Réalisés", value: "45K+" },
            { label: "Villes Couvertes", value: "24" },
            { label: "Client Satisfaits", value: "99%" },
          ].map((stat, i) => (
            <div key={i} className="text-center relative z-10">
              <p className="text-4xl md:text-6xl font-black mb-2" style={{ color: "#0EA5E9" }}>{stat.value}</p>
              <p className="text-sm md:text-lg font-bold uppercase tracking-widest" style={{ color: "var(--foreground)", opacity: 0.4 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-20">
        <div className="rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden" style={{ backgroundColor: "#0EA5E9" }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }} />
          <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Prêt à lancer votre projet ?</h2>
            <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto">
              Rejoignez des milliers de clients satisfaits et trouvez le freelancer idéal dès aujourd'hui.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">Publier un Projet</Button>
              <button className="px-8 py-3.5 text-lg rounded-xl font-semibold bg-white transition-all hover:opacity-90" style={{ color: "#0EA5E9" }}>
                S'inscrire comme Freelancer
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
