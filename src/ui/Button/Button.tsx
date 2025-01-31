import { ButtonHTMLAttributes } from "react";

export default function Button({
  children,
  onClick,
  className,
  type = "button",
  title = "",
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={`h-[28px] px-2 rounded-[4px] bg-[#121212] text-[white] 
                        flex items-center justify-center ${className} link`}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
}
