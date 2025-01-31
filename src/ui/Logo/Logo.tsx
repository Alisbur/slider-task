import { ReactElement } from "react";
import Link from "next/link";

type TLogoProps = {
  name: string;
  logo: ReactElement;
  href: string;
  title?: string;
};

export default function Logo({ name, logo, href, title }: TLogoProps) {
  return (
    <Link href={href} className="flex items-center gap-4 link" title={title}>
      <div className="h-[28px] p-[7px] rounded-[4px] bg-[#121212] text-[white] flex items-center justify-center">
        {logo}
      </div>
      <span className="hidden lg:inline-block">{name}</span>
    </Link>
  );
}
