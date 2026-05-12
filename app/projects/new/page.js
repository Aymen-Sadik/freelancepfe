"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiArrowRight, HiArrowLeft, HiCheckCircle, HiCloudUpload } from "react-icons/hi";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";

export default function NewProject() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    budget: "",
    deadline: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      {/* Progress Stepper */}
      <div className="flex justify-between mb-12 relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 z-0" />
        <div 
          className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 z-0 transition-all duration-500" 
          style={{ width: `${((step - 1) / 2) * 100}%` }}
        />
        {[1, 2, 3].map((s) => (
          <div 
            key={s}
            className={`
              relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-black transition-all duration-300
              ${step >= s ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-card border-2 border-border text-foreground/40"}
            `}
          >
            {step > s ? <HiCheckCircle size={24} /> : s}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-3xl font-black mb-2">Décrivez votre projet</h1>
              <p className="text-foreground/60">Commencez par les bases pour attirer les bons talents.</p>
            </div>
            
            <Card className="space-y-6">
              <Input 
                label="Titre du projet" 
                placeholder="Ex: Création d'un site e-commerce Next.js"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-foreground/80 ml-1">Description détaillée</label>
                <textarea 
                  rows={6}
                  placeholder="Décrivez les objectifs, les livrables et les attentes..."
                  className="w-full bg-card border-2 border-border rounded-xl py-3 px-4 outline-none focus:border-primary transition-all text-foreground"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Catégorie" placeholder="Sélectionnez une catégorie" />
                <Input label="Compétences requises" placeholder="React, UI/UX, etc." />
              </div>
            </Card>

            <div className="flex justify-end">
              <Button onClick={nextStep} size="lg" className="gap-2">
                Suivant <HiArrowRight />
              </Button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-3xl font-black mb-2">Budget et Délai</h1>
              <p className="text-foreground/60">Définissez vos limites pour filtrer les propositions.</p>
            </div>

            <Card className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-sm font-bold text-foreground/80">Type de budget</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="p-4 rounded-xl border-2 border-primary bg-primary/5 text-primary font-black text-sm">Prix Fixe</button>
                    <button className="p-4 rounded-xl border-2 border-border hover:border-primary/50 font-black text-sm text-foreground/60">Taux Horaire</button>
                  </div>
                </div>
                <Input label="Budget estimé (DH)" placeholder="Ex: 5000" type="number" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input label="Délai estimé" type="date" />
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/80">Fichiers joints</label>
                  <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center gap-2 hover:border-primary cursor-pointer transition-all">
                    <HiCloudUpload size={32} className="text-foreground/20" />
                    <p className="text-sm font-bold text-foreground/40">Glissez vos fichiers ici</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline" onClick={prevStep} size="lg" className="gap-2">
                <HiArrowLeft /> Précédent
              </Button>
              <Button onClick={nextStep} size="lg" className="gap-2">
                Suivant <HiArrowRight />
              </Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10"
          >
            <div className="w-24 h-24 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-8">
              <HiCheckCircle size={64} />
            </div>
            <h1 className="text-4xl font-black mb-4">Prêt à publier !</h1>
            <p className="text-foreground/60 max-w-md mx-auto mb-12">
              Vérifiez une dernière fois les détails avant de rendre votre projet public. 
              Vous recevrez les premières propositions d'ici quelques minutes.
            </p>
            <Card className="text-left mb-12 bg-primary/5 border-primary/20">
              <h3 className="font-black mb-2">{formData.title || "Titre du projet e-commerce"}</h3>
              <p className="text-sm text-foreground/60 mb-4 line-clamp-2">Description du projet...</p>
              <div className="flex gap-4 border-t border-primary/10 pt-4">
                <div className="text-xs font-black uppercase text-foreground/40 tracking-wider">Budget: 5000 DH</div>
                <div className="text-xs font-black uppercase text-foreground/40 tracking-wider">Catégorie: Web</div>
              </div>
            </Card>
            <div className="flex flex-col gap-4 max-w-xs mx-auto">
              <Button size="lg" className="w-full shadow-xl shadow-primary/30">Publier le projet</Button>
              <Button variant="outline" onClick={prevStep} size="lg" className="w-full">Modifier les détails</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
