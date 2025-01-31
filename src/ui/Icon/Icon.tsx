import { SVGProps } from "react";

import icons from "@public/icons/index";

export type IconGlyphProps = keyof typeof icons;

export const iconTypes: IconGlyphProps[] = Object.keys(icons) as IconGlyphProps[];

export type IconProps = {
  glyph: IconGlyphProps;
} & SVGProps<SVGSVGElement>;

export default function Icon (props: IconProps) {
  const { glyph, ...restIconProps } = props;

  const IconComponent = icons[glyph];

  return <IconComponent {...restIconProps} width="100%" height="100%" />
};

