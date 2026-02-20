import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "destructive";
}

export function Button({
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  const base =
    "px-4 py-2 rounded-md font-medium transition";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100",
    destructive:
      "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}