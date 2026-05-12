"use client";
import { motion } from "framer-motion";
import { categories } from "@/data/mockData";
import Card from "@/components/ui/Card";
import { HiArrowRight } from "react-icons/hi";

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black mb-4">Explorez nos Catégories</h1>
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
          Trouvez l'expertise exacte dont vous avez besoin parmi nos différentes spécialités pour vos projets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <motion.div key={cat.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}>
            <Card className="p-8 hover:border-primary group cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1">
              <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center text-3xl mb-6 text-white shadow-lg`}>
                {cat.icon}
              </div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{cat.name}</h2>
              <p className="text-foreground/60 mb-6">{cat.freelancers} Freelancers disponibles</p>
              <div className="flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Voir les profils <HiArrowRight />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
