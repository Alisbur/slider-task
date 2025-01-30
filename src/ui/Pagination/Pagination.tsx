import { HTMLAttributes } from "react";

type TPaginationProps = {
  qty: number;
  active: number;
  onPaginationClick: (i: number) => void;
} & HTMLAttributes<HTMLDivElement>;

const activeThumbAfterStyles = "";

export default function PaginationBar({
  qty,
  active,
  onPaginationClick,
  className,
  ...rest
}: TPaginationProps) {
  return (
    <div className={`flex gap-2 inline-block md:hidden ${className}`} {...rest}>
      {new Array(qty).fill(undefined).map((bullet, i) => (
        <span
          key={i}
          onClick={() => onPaginationClick(i)}
          className={`relative cursor-pointer h-2 rounded-lg bg-[#CCCCCC] 
            transition-all duration-300 ${active === i ? "w-10" : "w-2"}
            after:content-[''] after:absolute after:top-0 after:left-0 
            after:h-2 after:rounded-lg after:bg-[#000000] after:transition-all 
            after:duration-300 ${active === i ? "after:w-5" : "after:w-0"}`}
        />
      ))}
    </div>
  );
}