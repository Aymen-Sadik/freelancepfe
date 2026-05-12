"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiMoon, HiSun, HiSearch } from "react-icons/hi";
import { useTheme } from "@/context/ThemeContext";
import Button from "@/components/ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Freelancers", href: "/freelancers" },
    { name: "Projets", href: "/projects" },
    { name: "Catégories", href: "/categories" },
    { name: "À propos", href: "/about" },
  ];

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border py-3 shadow-sm" : "bg-transparent py-5"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
              F
            </div>
            <span className="text-2xl font-black text-foreground tracking-tight">
              Freelance<span className="text-primary">Hub</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-foreground/70 hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-card border border-border text-foreground/70 hover:text-primary transition-all"
            >
              {isDarkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
            <Link href="/auth/login">
              <Button variant="ghost">Connexion</Button>
            </Link>
            <Link href="/auth/register">
              <Button variant="primary">Inscription</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-card border border-border text-foreground"
            >
              {isDarkMode ? <HiSun size={18} /> : <HiMoon size={18} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 rounded-lg text-lg font-medium text-foreground/70 hover:bg-primary/10 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link href="/auth/login" className="w-full">
                  <Button variant="outline" className="w-full">Connexion</Button>
                </Link>
                <Link href="/auth/register" className="w-full">
                  <Button variant="primary" className="w-full">Inscription</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
