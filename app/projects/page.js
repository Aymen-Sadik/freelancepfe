"use client";
import { motion } from "framer-motion";
import { HiSearch, HiFilter, HiBriefcase, HiClock } from "react-icons/hi";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const projects = [
  { id: 1, title: "Développement d'une application E-commerce", client: "TechCorp", budget: "15,000 DH", type: "Fixe", time: "Publié il y a 2h", skills: ["React Native", "Node.js", "Stripe"] },
  { id: 2, title: "Refonte de l'identité visuelle", client: "Startup XYZ", budget: "5,000 DH", type: "Fixe", time: "Publié il y a 5h", skills: ["Figma", "Branding", "Illustrator"] },
  { id: 3, title: "Optimisation SEO du site web", client: "Agence Voyage", budget: "2,000 DH", type: "Horaire", time: "Publié il y a 1j", skills: ["SEO", "Google Analytics", "Content"] },
  { id: 4, title: "Création d'une Landing Page pour un événement", client: "EventPro", budget: "3,500 DH", type: "Fixe", time: "Publié il y a 2j", skills: ["Next.js", "Tailwind CSS"] },
  { id: 5, title: "Montage vidéo pour YouTube", client: "Content Creator", budget: "1,500 DH", type: "Fixe", time: "Publié il y a 2j", skills: ["Premiere Pro", "After Effects"] },
  { id: 6, title: "Création de contenu pour les réseaux sociaux", client: "Mode Boutique", budget: "2,500 DH", type: "Fixe", time: "Publié il y a 3j", skills: ["Social Media", "Canva", "Copywriting"] },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black mb-2">Projets Récents</h1>
            <p className="text-foreground/60">Découvrez les dernières opportunités et trouvez votre prochain défi.</p>
          </div>
          <div className="flex gap-3">
            <div className="relative flex-grow md:w-80">
              <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
              <input 
                type="text" 
                placeholder="Rechercher un projet..." 
                className="w-full bg-card border-2 border-border rounded-xl py-2.5 pl-12 pr-4 outline-none focus:border-primary transition-all shadow-sm"
              />
            </div>
            <Button variant="outline" className="md:hidden"><HiFilter size={20} /></Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Card className="h-full flex flex-col p-6 hover:border-primary transition-all cursor-pointer shadow-sm hover:shadow-xl">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="primary">{project.type}</Badge>
                  <span className="text-xs text-foreground/40 flex items-center gap-1"><HiClock /> {project.time}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-foreground/60 mb-6 flex items-center gap-2">
                  <HiBriefcase className="text-primary" /> Client: <span className="font-medium text-foreground">{project.client}</span>
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.skills.map(skill => (
                    <Badge key={skill} variant="gray" className="text-xs py-0.5 px-2">{skill}</Badge>
                  ))}
                </div>
                <div className="mt-auto pt-4 border-t border-border flex justify-between items-center">
                  <div>
                    <p className="text-xs text-foreground/40 font-medium">Budget</p>
                    <p className="text-lg font-black text-primary">{project.budget}</p>
                  </div>
                  <Button size="sm">Postuler</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
