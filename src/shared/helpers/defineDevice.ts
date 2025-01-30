import { SCREEN_TYPES } from "../constants/screens";
import { TDevice } from "../types/types";

export const defineDevice = (size: number): TDevice => {
  if(size >= SCREEN_TYPES.MIN_DESKTOP) return "desktop";
  else if (size >= SCREEN_TYPES.MIN_TABLET) return "tablet";
  return "mobile";     
}