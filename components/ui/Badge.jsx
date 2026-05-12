const Badge = ({ 
  children, 
  variant = "primary", 
  className = "" 
}) => {
  const variants = {
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-accent/10 text-accent border-accent/20",
    success: "bg-success/10 text-success border-success/20",
    danger: "bg-danger/10 text-danger border-danger/20",
    gray: "bg-foreground/10 text-foreground/70 border-foreground/10",
  };

  return (
    <span className={`
      px-2.5 py-0.5 rounded-full text-xs font-bold border
      ${variants[variant]}
      ${className}
    `}>
      {children}
    </span>
  );
};

export default Badge;
