const Badge = ({
  children,
  variant = "primary",
  className = "",
}) => {
  const variants = {
    primary: { background: "rgba(14,165,233,0.1)", color: "#0EA5E9", borderColor: "rgba(14,165,233,0.2)" },
    secondary: { background: "rgba(245,158,11,0.1)", color: "#F59E0B", borderColor: "rgba(245,158,11,0.2)" },
    success: { background: "rgba(16,185,129,0.1)", color: "#10B981", borderColor: "rgba(16,185,129,0.2)" },
    danger: { background: "rgba(239,68,68,0.1)", color: "#EF4444", borderColor: "rgba(239,68,68,0.2)" },
    gray: { background: "rgba(100,116,139,0.1)", color: "rgba(100,116,139,0.9)", borderColor: "rgba(100,116,139,0.1)" },
  };

  const style = variants[variant] || variants.primary;

  return (
    <span
      style={{
        backgroundColor: style.background,
        color: style.color,
        borderColor: style.borderColor,
        borderWidth: "1px",
        borderStyle: "solid",
      }}
      className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
