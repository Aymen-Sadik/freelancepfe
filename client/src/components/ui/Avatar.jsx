const Avatar = ({
  src,
  alt = "User",
  size = "md",
  className = "",
}) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-20 h-20",
    xl: "w-32 h-32",
  };

  return (
    <div
      style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
      className={`
        relative rounded-full overflow-hidden border-2
        ${sizes[size]}
        ${className}
      `}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-primary/10 font-bold uppercase" style={{ color: "var(--primary)" }}>
          {alt.charAt(0)}
        </div>
      )}
    </div>
  );
};

export default Avatar;
