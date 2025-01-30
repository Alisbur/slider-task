import { ReactElement } from "react";
import { COMPANY_DETAILS } from "@/shared/constants/company";
import Link from "next/link";

type TLogoProps = {
  name: string;
  logo: ReactElement;
  web: string;
  variant: "logo" | "both";
};

export default function Logo({ name, logo, variant, web }: TLogoProps) {
  return (
    <Link href={web} className="flex items-center gap-4 link">
      <div className="h-[28px] p-[7px] rounded-[4px] bg-[#121212] text-[white] flex items-center justify-center">
        {logo}
      </div>
      {variant === "both" && COMPANY_DETAILS.name}
    </Link>
  );
}
