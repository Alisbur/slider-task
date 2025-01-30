"use client";

import React from "react";
import Slider from "@/ui/Slider/Slider";
import { SLIDER_CARDS } from "@/shared/constants/sliderCards";
import { useDeviceContext } from "@/shared/hooks/useDeviceContext";

export default function Services() {
  const { device } = useDeviceContext();

  return (
    <main className="flex flex-col gap-[40px] min-h-screen px-5 pt-2 md:pt-0 md:gap-[21px]">
      <div className="flex flex-col p-0 md:flex-row md:align-center md:m-0 md:py-3 md:border-b md:border-[#D1D1D1]">
        <h2 className="w-[119px] md:text-[40px] md:leading-[44px] md:tracking-[-0.01em]">
          1.0
        </h2>
        {device === "mobile" && (
          <span className="md:hidden my-2 w-full h-[1px] bg-[#D1D1D1]" />
        )}
        <h2 className="m-0 md:mx-auto lg:ml-[310px] md:text-[40px] md:leading-[44px] md:tracking-[-0.01em]">
          Наши услуги
        </h2>
      </div>
      <Slider cards={SLIDER_CARDS} />
    </main>
  );
}
