import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "font-bold transition-colors rounded-2xl text-center cursor-pointer",
        // Variants
        variant === "primary" &&
          "bg-[#f57568] text-white hover:bg-[#f57568]/90",
        variant === "outline" &&
          "border border-[#f57568] text-[#f57568] hover:bg-[#f57568] hover:text-white",
        variant === "ghost" && "text-[#646464] hover:text-[#f57568]",
        // Sizes
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3",
        size === "lg" && "px-8 py-4 text-lg",
        // Width
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
