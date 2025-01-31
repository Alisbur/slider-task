"use client";

import { TMenuItem } from "@/shared/types/types";
import { HTMLAttributes } from "react";
import Link from "next/link";

type TNavProps = {
  navItems: TMenuItem[];
} & HTMLAttributes<HTMLDivElement>;

export default function Nav({ navItems, className }: TNavProps) {
  return (
    <nav className={`flex align-center gap-6 ${className}`}>
      {navItems.map((l) => (
        <Link key={l.id} href={l.href} className="link" title={l.text} >
          {l.text}
        </Link>
      ))}
    </nav>
  );
}
