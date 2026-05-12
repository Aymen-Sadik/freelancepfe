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
        <label
          style={{ color: "var(--foreground)" }}
          className="text-sm font-semibold ml-1 opacity-80"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" style={{ color: "var(--foreground)" }}>
            <Icon size={20} />
          </div>
        )}
        <input
          style={{
            backgroundColor: "var(--card)",
            color: "var(--foreground)",
            borderColor: error ? "#EF4444" : "var(--border)",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
          className={`
            w-full rounded-xl py-2.5 px-4 outline-none transition-all
            ${Icon ? "pl-11" : ""}
            focus:border-primary
          `}
          onFocus={e => e.target.style.borderColor = "#0EA5E9"}
          onBlur={e => e.target.style.borderColor = error ? "#EF4444" : "var(--border)"}
          {...props}
        />
      </div>
      {error && (
        <span className="text-xs font-medium ml-1" style={{ color: "#EF4444" }}>
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
