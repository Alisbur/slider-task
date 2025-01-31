"use client";

import { MENU_ITEMS } from "@/shared/constants/menuItems";
import Nav from "../../ui/Nav/Nav";
import Button from "@/ui/Button/Button";
import Icon from "@/ui/Icon/Icon";
import Logo from "@/ui/Logo/Logo";
import { COMPANY_DETAILS } from "@/shared/constants/company";
import AccountLink from "@/ui/AccountLink/AccountLink";

export default function Header() {
  const onClickHandler = () => {
    alert("Button pressed");
  };

  return (
    <header className="w-full p-4 flex items-center justify-between border-t border-b border-[#E1E1E1]">
      <div className="flex items-center">
        <Logo
          logo={<Icon glyph="logo" />}
          name={COMPANY_DETAILS.name}
          href={COMPANY_DETAILS.web}
          title="Логотип компании"
        />
        <Nav
          navItems={MENU_ITEMS}
          className="hidden ml-[320px] lg:flex"
        />
      </div>
      <AccountLink href="/" className="hidden lg:flex" />
      <Button
        type="button"
        title="Меню"
        className="lg:hidden"
        onClick={() => onClickHandler()}
      >
        Меню
      </Button>
    </header>
  );
}
