"use client";
import { motion } from "framer-motion";

const Card = ({ 
  children, 
  className = "", 
  hover = true,
  glass = false,
  ...props 
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.01 } : {}}
      className={`
        rounded-2xl p-6 transition-all duration-300
        ${glass 
          ? 'glass dark:glass-dark' 
          : 'bg-card border border-border shadow-md'
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
