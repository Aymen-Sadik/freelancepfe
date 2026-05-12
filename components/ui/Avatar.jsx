import Image from "next/image";

const Avatar = ({ 
  src, 
  alt = "User", 
  size = "md", 
  className = "" 
}) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-20 h-20",
    xl: "w-32 h-32",
  };

  return (
    <div className={`
      relative rounded-full overflow-hidden border-2 border-border bg-card
      ${sizes[size]}
      ${className}
    `}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-bold uppercase">
          {alt.charAt(0)}
        </div>
      )}
    </div>
  );
};

export default Avatar;
