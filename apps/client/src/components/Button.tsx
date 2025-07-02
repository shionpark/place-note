import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonCustomProps {
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline";
  disabled?: boolean;
  wide?: boolean;
}

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonCustomProps {
  children: ReactNode;
}

export default function Button({
  size = "md",
  variant = "solid",
  disabled = false,
  wide = false,
  children,
  ...rest
}: ButtonProps) {
  const sizeVariants = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const styleVariants = {
    solid:
      "bg-amber-500 text-white border-amber-500 hover:bg-amber-600 transition ease-in-out",
    outline:
      "text-bold text-amber-500 border border-amber-500 hover:border-amber-600 hover:text-amber-600 bg-white transition ease-in-out",
  };

  return (
    <button
      className={`button ${styleVariants[variant]} ${sizeVariants[size]} ${disabled && "disabled"} ${wide && "w-full"}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
