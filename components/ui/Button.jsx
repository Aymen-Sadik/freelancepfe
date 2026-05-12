"use client";
import { motion } from "framer-motion";

const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  isLoading = false,
  ...props 
}) => {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20",
    secondary: "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
    ghost: "text-foreground hover:bg-primary/10",
    danger: "bg-danger text-white hover:bg-danger/90 shadow-lg shadow-danger/20",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2.5",
    lg: "px-8 py-3.5 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative inline-flex items-center justify-center rounded-xl font-semibold 
        transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Chargement...
        </div>
      ) : children}
    </motion.button>
  );
};

export default Button;
