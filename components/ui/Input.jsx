"use client";

const Input = ({ 
  label, 
  error, 
  icon: Icon,
  className = "", 
  ...props 
}) => {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label className="text-sm font-semibold text-foreground/80 ml-1">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40">
            <Icon size={20} />
          </div>
        )}
        <input
          className={`
            w-full bg-card border-2 rounded-xl py-2.5 px-4 outline-none transition-all
            ${Icon ? 'pl-11' : ''}
            ${error 
              ? 'border-danger/50 focus:border-danger' 
              : 'border-border focus:border-primary shadow-sm'
            }
            text-foreground placeholder:text-foreground/30
          `}
          {...props}
        />
      </div>
      {error && (
        <span className="text-xs text-danger font-medium ml-1">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
