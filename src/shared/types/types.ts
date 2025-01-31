import icons from "@public/icons"

export type TDevice ="desktop" | "tablet" | "mobile";

export type TIcon = keyof typeof icons;

export type TCard = {
  id: number;
  ico: TIcon;
  title: string;
  text: string;
  href: string;
}

export type TMenuItem = {
  id: number;
  text: string;
  href: string;
};

export type TCompany = {
  name: string;
  logo: TIcon;
  web: string;
}