import { cn } from "../utils";

export default function Button({ children, className, variant = "primary", ...props }) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background rounded-md px-6 py-3";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-md",
    outline: "border border-white/20 hover:bg-white/10 text-foreground",
    ghost: "hover:bg-white/10 text-foreground",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
