"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  HiStar, HiLocationMarker, HiClock, 
  HiBriefcase, HiShare, HiHeart,
  HiChevronRight, HiGlobeAlt
} from "react-icons/hi";
import { HiCheckBadge, HiChatBubbleLeftEllipsis } from "react-icons/hi2";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import { topFreelancers } from "@/data/mockData";

export default function FreelancerProfile() {
  const { id } = useParams();
  
  // For demo, we just use the first freelancer if ID doesn't match
  const freelancer = topFreelancers.find(f => f.id === parseInt(id)) || topFreelancers[0];

  const portfolioItems = [
    { id: 1, title: "E-commerce Platform", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" },
    { id: 2, title: "Modern Brand Identity", image: "https://images.unsplash.com/photo-1541462608141-ad511a7403ac?auto=format&fit=crop&q=80&w=400" },
    { id: 3, title: "SaaS Dashboard UI", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400" },
    { id: 4, title: "Mobile Fitness App", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <div className="pb-20">
      {/* Cover Header */}
      <div className="h-64 md:h-80 w-full bg-gradient-to-r from-primary to-accent relative">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto px-4 h-full relative">
          <div className="absolute -bottom-16 left-4 md:left-8 flex flex-col md:flex-row items-end gap-6">
            <Avatar src={freelancer.image} alt={freelancer.name} size="xl" className="border-8 border-background shadow-2xl" />
            <div className="mb-4 md:mb-8 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <h1 className="text-3xl font-black text-white drop-shadow-md">{freelancer.name}</h1>
                {freelancer.verified && <HiCheckBadge className="text-white drop-shadow-md" size={32} />}
              </div>
              <p className="text-white/90 font-bold text-lg">{freelancer.title}</p>
            </div>
          </div>
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all">
              <HiShare size={20} />
            </button>
            <button className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all">
              <HiHeart size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Projets", value: "124", icon: HiBriefcase },
              { label: "Rating", value: freelancer.rating, icon: HiStar },
              { label: "Temps rép.", value: "2h", icon: HiClock },
              { label: "Localisation", value: "Casablanca", icon: HiLocationMarker },
            ].map((stat, i) => (
              <Card key={i} className="flex flex-col items-center justify-center text-center p-4">
                <stat.icon className="text-primary mb-2" size={24} />
                <p className="text-lg font-black">{stat.value}</p>
                <p className="text-xs text-foreground/40 font-bold uppercase">{stat.label}</p>
              </Card>
            ))}
          </div>

          {/* About */}
          <section>
            <h2 className="text-2xl font-black mb-4">À propos</h2>
            <Card className="leading-relaxed text-foreground/70">
              Passionné par le design et le développement, je transforme vos idées en réalités numériques percutantes. 
              Avec plus de 5 ans d'expérience dans l'écosystème tech marocain, j'accompagne les startups et les PME 
              dans leur transformation digitale.
              <br /><br />
              Mon approche est centrée sur l'utilisateur et la performance. Je m'assure que chaque pixel a sa place 
              et que chaque ligne de code est optimisée pour le futur.
            </Card>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-black mb-4">Compétences</h2>
            <div className="flex flex-wrap gap-2">
              {[...freelancer.skills, "Tailwind CSS", "Next.js", "TypeScript", "Node.js", "MongoDB", "Framer Motion"].map(skill => (
                <Badge key={skill} variant="primary" className="text-sm py-1.5 px-4">{skill}</Badge>
              ))}
            </div>
          </section>

          {/* Portfolio */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black">Portfolio</h2>
              <Button variant="ghost" size="sm" className="gap-1">Voir tout <HiChevronRight /></Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioItems.map(item => (
                <motion.div key={item.id} whileHover={{ scale: 1.02 }}>
                  <Card className="p-0 overflow-hidden group cursor-pointer">
                    <div className="h-48 relative">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <h4 className="text-white font-bold">{item.title}</h4>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Reviews */}
          <section>
            <h2 className="text-2xl font-black mb-6">Avis Clients</h2>
            <div className="space-y-6">
              {[1, 2].map(i => (
                <Card key={i}>
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar src={`https://i.pravatar.cc/150?u=${i}`} size="sm" />
                      <div>
                        <h4 className="font-bold">Client anonyme</h4>
                        <p className="text-xs text-foreground/40">Il y a 2 semaines</p>
                      </div>
                    </div>
                    <div className="flex text-accent">
                      {[1, 2, 3, 4, 5].map(s => <HiStar key={s} size={16} />)}
                    </div>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    Excellent travail ! Très réactif et à l'écoute des besoins. Je recommande vivement pour vos projets React.
                  </p>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar / Actions */}
        <div className="space-y-6">
          <Card className="sticky top-28 p-8 border-2 border-primary/20 shadow-2xl shadow-primary/5">
            <div className="text-center mb-8">
              <p className="text-foreground/40 text-sm font-bold uppercase mb-1">Tarif Journalier</p>
              <h3 className="text-4xl font-black text-primary">{freelancer.price} DH</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-sm">
                <span className="text-foreground/60 flex items-center gap-2"><HiGlobeAlt /> Langues</span>
                <span className="font-bold">FR, AR, EN</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-foreground/60 flex items-center gap-2"><HiClock /> Disponibilité</span>
                <span className="font-bold text-success">Disponible</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button size="lg" className="w-full gap-2">
                <HiChatBubbleLeftEllipsis size={20} /> Envoyer un message
              </Button>
              <Button size="lg" variant="secondary" className="w-full">
                Embaucher maintenant
              </Button>
            </div>

            <p className="mt-6 text-center text-xs text-foreground/40 italic">
              Paiement sécurisé via FreelanceHub
            </p>
          </Card>

          <Card>
            <h3 className="font-bold mb-4">Récapitulatif</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-foreground/70">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Délai moyen : 3-5 jours
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/70">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Révisions illimitées
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/70">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Support 24/7
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
