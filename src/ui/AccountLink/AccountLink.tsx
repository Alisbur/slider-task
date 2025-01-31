import Link, { LinkProps } from "next/link";
import Icon from "../Icon/Icon";
import { HTMLProps } from "react";

export default function AccountLink({
  className,
  href,
}: LinkProps & HTMLProps<HTMLAnchorElement>) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-4 link ${className}`}
      title="Войти в аккаунт"
    >
      <span>Вход</span>
      <div className="w-[25px] h-[28px] relative rounded-[4px] bg-[#121212]">
        <Icon
          glyph="arrow"
          className="absolute top-[50%] translate-y-[-50%] left-[-5px] mix-blend-difference"
        />
      </div>
    </Link>
  );
}
