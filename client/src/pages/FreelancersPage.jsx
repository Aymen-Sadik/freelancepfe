import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiFilter, HiSearch, HiStar } from "react-icons/hi";
import { HiCheckBadge, HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import { categories, topFreelancers } from "@/data/mockData";

export default function FreelancersPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Tous");

  const allFreelancers = [...topFreelancers, ...topFreelancers, ...topFreelancers].map((f, i) => ({ ...f, id: i + 1 }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black mb-2" style={{ color: "var(--foreground)" }}>Nos Freelancers</h1>
            <p style={{ color: "var(--foreground)", opacity: 0.6 }}>Trouvez l'expert idéal parmi {allFreelancers.length} talents qualifiés.</p>
          </div>
          <div className="flex gap-3">
            <div className="relative flex-grow md:w-80">
              <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "var(--foreground)", opacity: 0.4 }} size={20} />
              <input type="text" placeholder="Rechercher par compétence..."
                className="w-full rounded-xl py-2.5 pl-12 pr-4 outline-none transition-all shadow-sm"
                style={{ backgroundColor: "var(--card)", border: "2px solid var(--border)", color: "var(--foreground)" }}
                onFocus={e => e.target.style.borderColor = "#0EA5E9"}
                onBlur={e => e.target.style.borderColor = "var(--border)"}
              />
            </div>
            <Button variant="outline" className="md:hidden" onClick={() => setShowFilters(!showFilters)}>
              <HiFilter size={20} />
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <aside className={`lg:w-72 space-y-8 lg:block ${showFilters ? "block" : "hidden"}`}>
            <div>
              <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: "var(--foreground)" }}>
                <HiOutlineAdjustmentsHorizontal size={20} style={{ color: "#0EA5E9" }} /> Catégories
              </h3>
              <div className="flex flex-col gap-2">
                {["Tous", ...categories.map(c => c.name)].map(cat => (
                  <button key={cat} onClick={() => setActiveCategory(cat)}
                    className="text-left px-4 py-2 rounded-lg text-sm font-medium transition-all"
                    style={{
                      backgroundColor: activeCategory === cat ? "#0EA5E9" : "transparent",
                      color: activeCategory === cat ? "#fff" : "var(--foreground)",
                      opacity: activeCategory === cat ? 1 : 0.6,
                    }}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4" style={{ color: "var(--foreground)" }}>Budget Journalier</h3>
              <input type="range" className="w-full" min="0" max="5000" step="100" style={{ accentColor: "#0EA5E9" }} />
              <div className="flex justify-between text-xs font-bold" style={{ color: "var(--foreground)", opacity: 0.4 }}>
                <span>0 DH</span><span>5000+ DH</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4" style={{ color: "var(--foreground)" }}>Note minimale</h3>
              <div className="flex flex-col gap-2">
                {[4.5, 4.0, 3.5, 3.0].map(rating => (
                  <label key={rating} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded" style={{ accentColor: "#0EA5E9" }} />
                    <div className="flex items-center gap-1" style={{ color: "#F59E0B" }}>
                      <HiStar size={16} />
                      <span className="text-sm font-bold" style={{ color: "var(--foreground)" }}>{rating}+</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            <Button variant="primary" className="w-full">Appliquer les filtres</Button>
          </aside>

          {/* Grid */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence>
                {allFreelancers.map((f, i) => (
                  <motion.div key={f.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (i % 9) * 0.05 }}>
                    <Card className="h-full flex flex-col p-5">
                      <div className="flex items-center gap-4 mb-6">
                        <Avatar src={f.image} alt={f.name} size="md" />
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center gap-1">
                            <h3 className="font-bold truncate cursor-pointer" style={{ color: "var(--foreground)" }}>{f.name}</h3>
                            {f.verified && <HiCheckBadge style={{ color: "#0EA5E9" }} size={18} />}
                          </div>
                          <p className="text-xs truncate" style={{ color: "var(--foreground)", opacity: 0.6 }}>{f.title}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-1" style={{ color: "#F59E0B" }}>
                          <HiStar size={16} />
                          <span className="text-sm font-bold" style={{ color: "var(--foreground)" }}>{f.rating}</span>
                        </div>
                        <span className="text-xs font-medium" style={{ color: "var(--foreground)", opacity: 0.4 }}>{f.reviews} avis</span>
                        <div className="ml-auto text-right">
                          <span className="text-xs font-medium block" style={{ color: "var(--foreground)", opacity: 0.4 }}>Tarif</span>
                          <span className="font-black" style={{ color: "#0EA5E9" }}>{f.price} DH</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {f.skills.map(skill => <Badge key={skill} variant="gray" className="text-[10px] py-0 px-2">{skill}</Badge>)}
                      </div>
                      <div className="mt-auto flex gap-2">
                        <Button variant="outline" size="sm" className="flex-grow">Profil</Button>
                        <Button variant="primary" size="sm" className="flex-grow">Message</Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center items-center gap-2">
              <Button variant="outline" size="sm" disabled>Précédent</Button>
              <div className="flex gap-1">
                {[1, 2, 3, "...", 12].map((p, i) => (
                  <button key={i}
                    className="w-10 h-10 rounded-xl font-bold text-sm transition-all"
                    style={{
                      backgroundColor: p === 1 ? "#0EA5E9" : "transparent",
                      color: p === 1 ? "#fff" : "var(--foreground)",
                      opacity: p === 1 ? 1 : 0.6,
                    }}>
                    {p}
                  </button>
                ))}
              </div>
              <Button variant="outline" size="sm">Suivant</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
