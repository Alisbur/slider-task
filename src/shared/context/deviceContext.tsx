"use client";

import { createContext, FC, PropsWithChildren } from "react";
import { TDevice } from "../types/types";
import { useDevice } from "../hooks/useDevice";

type TDeviceContext = {
  device: TDevice;
};

export const DeviceContext = createContext<TDeviceContext | null>(null);

export const DeviceProvider: FC<PropsWithChildren> = ({ children }) => {
  const device = useDevice();
  return (
    <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>
  );
};
