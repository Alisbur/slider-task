import { HTMLAttributes } from "react";

export default function Button({
  children,
  onClick,
  className,
}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`h-[28px] px-2 rounded-[4px] bg-[#121212] text-[white] 
                        flex items-center justify-center ${className} link`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
