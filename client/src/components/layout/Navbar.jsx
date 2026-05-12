import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "@/context/ThemeContext";
import Button from "@/components/ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
      style={{
        backgroundColor: scrolled ? "rgba(var(--background-rgb, 248,250,252), 0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottomColor: scrolled ? "var(--border)" : "transparent",
        borderBottomWidth: scrolled ? "1px" : "0",
        borderBottomStyle: "solid",
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3 shadow-sm" : "py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg" style={{ backgroundColor: "#0EA5E9", boxShadow: "0 4px 14px rgba(14,165,233,0.3)" }}>
              F
            </div>
            <span className="text-2xl font-black tracking-tight" style={{ color: "var(--foreground)" }}>
              Freelance<span style={{ color: "#0EA5E9" }}>Hub</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="font-medium transition-colors hover:opacity-100 opacity-70"
                style={{ color: "var(--foreground)" }}
                onMouseEnter={e => e.target.style.color = "#0EA5E9"}
                onMouseLeave={e => e.target.style.color = "var(--foreground)"}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl transition-all"
              style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", color: "var(--foreground)" }}
            >
              {isDarkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
            <Link to="/auth/login"><Button variant="ghost">Connexion</Button></Link>
            <Link to="/auth/register"><Button variant="primary">Inscription</Button></Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg"
              style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", color: "var(--foreground)" }}
            >
              {isDarkMode ? <HiSun size={18} /> : <HiMoon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
              style={{ color: "var(--foreground)" }}
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
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: "var(--background)", borderBottom: "1px solid var(--border)" }}
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-3 py-3 rounded-lg text-lg font-medium transition-all"
                  style={{ color: "var(--foreground)" }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link to="/auth/login" className="w-full" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">Connexion</Button>
                </Link>
                <Link to="/auth/register" className="w-full" onClick={() => setIsOpen(false)}>
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
