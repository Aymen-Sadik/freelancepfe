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
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      style={glass ? {} : {
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
      }}
      className={`
        rounded-2xl p-6 transition-all duration-300
        ${glass ? "glass" : "border shadow-md"}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
