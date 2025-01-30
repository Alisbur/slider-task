import { useContext } from "react";
import { DeviceContext } from "../context/deviceContext";

export const useDeviceContext = () => {
  const context = useContext(DeviceContext);

  if(!context) throw new Error("Не удалось определить размер экрана");
  
  return context;
}