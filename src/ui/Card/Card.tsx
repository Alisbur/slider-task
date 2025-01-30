import Link from "next/link";
import { TCard } from "@/shared/types/types";
import { HTMLAttributes } from "react";
import Icon from "../Icon/Icon";
import Image from "next/image";
import icons from "@public/icons";

type TCardProps = Omit<TCard, "id"> & HTMLAttributes<HTMLDivElement>;

export default function Card({ ico, title, text, href = '/'}: TCardProps) {

  console.log(icons[ico])

  return (
    <Link href={href}
      className="min-w-[358px] md:min-w-[360px] flex flex-col justify-between 
                    min-h-[212px] md:min-h-[256px] p-4 md:p-6 rounded-lg bg-[#F0F0F0]"
    >
      <div className="w-full flex items-center gap-[24px] md:h-full md:flex-col md:gap-[unset] md:items-start">
        <div className="h-[60px] md:h-[80px]">
          <Icon glyph={ico} />
        </div>
        <h3 className="md:hidden text-ellipsis line-clamp-3 whitespace-pre-line">
          {title}
        </h3>
      </div>
      <h3 className="text-[32px]/[36px] hidden md:block whitespace-pre-line text-ellipsis line-clamp-3">
        {title}
      </h3>
      <p className="text-ellipsis line-clamp-6 whitespace-pre-line md:hidden">
        {text}
      </p>
    </Link>
  );
}
