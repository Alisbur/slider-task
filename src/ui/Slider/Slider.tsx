import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  HTMLAttributes,
} from "react";
import Card from "@/ui/Card/Card";
import { type Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import PaginationBar from "@/ui/Pagination/Pagination";

import "swiper/css";
import "swiper/css/pagination";
import { TCard } from "@/shared/types/types";

type TSliderProps = {
  cards: TCard[];
} & HTMLAttributes<HTMLDivElement>;

export default function Slider({ cards, className, ...rest }: TSliderProps) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [active, setActive] = useState(0);

  const handlePagination = (idx: number) => {
    if (swiper) {
      setActive(idx);
      swiper?.slideTo(idx);
    }
  };

  return (
    <section className={`w-full flex flex-col gap-6 ${className}`} {...rest}>
      <PaginationBar
        qty={cards.length}
        active={active}
        onPaginationClick={handlePagination}
      />
      <div className="w-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          onSwiper={setSwiper}
          onSlideChange={() => {
            if (swiper) setActive(swiper.activeIndex);
          }}
          className="w-full"
          // autoplay={{
          //   delay: 5000,
          //   pauseOnMouseEnter: true,
          // }}
          breakpoints={{
            1700: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <Card ico={card.ico} title={card.title} text={card.text} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
