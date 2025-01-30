import { useEffect, useState } from "react";
import { TDevice } from "../types/types";
import { defineDevice } from "../helpers/defineDevice";

export function useDevice() {

  let initWidth;

  try {
    initWidth = window.innerWidth;
  } catch {
    initWidth = 0;
  }

  const [device, setDevice] = useState<TDevice>(defineDevice(initWidth));

  useEffect(() => {

    const handleResize = () => {
      setDevice(defineDevice(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [])

  return { device }
}