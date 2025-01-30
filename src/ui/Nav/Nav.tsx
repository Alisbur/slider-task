"use client";

import { TMenuItem } from "@/shared/types/types";
import { HTMLAttributes } from "react";
import Link from "next/link";

type TNavProps = {
  navItems: TMenuItem[];
} & HTMLAttributes<HTMLDivElement>;

export default function Nav({ navItems, className, ...rest }: TNavProps) {
  return (
    <nav className={`flex align-center gap-6 ${className}`}>
      {navItems.map((l, i) => (
        <Link key={l.id} href={l.path} className="link">
          {l.text}
        </Link>
      ))}
    </nav>
  );
}
