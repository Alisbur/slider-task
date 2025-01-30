"use client";

import { useEffect } from "react";
import { useDeviceContext } from "@/shared/hooks/useDeviceContext";
import { MENU_ITEMS } from "@/shared/constants/menuItems";
import Nav from "../../ui/Nav/Nav";
import Button from "@/ui/Button/Button";
import Icon from "@/ui/Icon/Icon";
import Logo from "@/ui/Logo/Logo";
import { COMPANY_DETAILS } from "@/shared/constants/company";
import AccountLink from "@/ui/AccountLink/AccountLink";

export default function Header() {
  const { device } = useDeviceContext();

  const onClickHandler = () => {
    console.log("Button ");
  };

  return (
    <header className="w-full p-4 flex items-center justify-between border-t border-b border-[#E1E1E1]">
      <div className="flex items-center">
        <Logo
          logo={<Icon glyph="logo" />}
          name={COMPANY_DETAILS.name}
          web={COMPANY_DETAILS.web}
          variant={device !== "desktop" ? "logo" : "both"}
        />
        {device === "desktop" && (
          <Nav navItems={MENU_ITEMS} className="ml-[320px]" />
        )}
      </div>
      {device === "desktop" ? (
        <AccountLink />
      ) : (
        <Button onClick={() => onClickHandler()}>Меню</Button>
      )}
    </header>
  );
}
