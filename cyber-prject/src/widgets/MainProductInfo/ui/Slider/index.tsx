import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

//@ts-ignore
import { FreeMode, Thumbs } from "swiper/modules";
import { useState } from "react";
import { useAppSelector } from "../../../../app/providers/StoreProvider/hooks";

export const ProductSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { name = "", imagesGallery = [] } =
    useAppSelector((state) => state.productReducer?.productData) ?? {};

  return (
    <div
      className={
        "flex flex-col overflow-hidden items-center justify-center gap-8 w-full lg:gap-10 lg:flex-row-reverse xl:gap-12"
      }
    >
      <Swiper
        //@ts-ignore
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        rewind={true}
        className={"max-h-[516px] w-full max-w-[413px] sm:max-w-full"}
      >
        {imagesGallery?.map((el) => (
          <SwiperSlide
            key={el}
            className={
              "!flex justify-center max-w-[413px] max-h-[516px] !h-auto sm:max-w-full"
            }
          >
            <img
              src={el}
              alt={name}
              className={"max-h-[516px]"}
              loading={"lazy"}
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        //@ts-ignore
        slidesPerView={4}
        rewind={true}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className={
          "product_slider max-h-[66px] !w-full sm:max-h-[76px] md:max-h-[86px] lg:!max-w-[76px] lg:max-h-full"
        }
      >
        {imagesGallery?.map((el) => (
          <SwiperSlide
            key={el}
            className={
              "!flex justify-center !w-fit max-w-[75px] max-h-[66px] cursor-pointer sm:max-h-[76px] md:max-h-[86px] lg:max-h-[96px]"
            }
          >
            <img
              src={el}
              alt={name}
              className={
                "max-w-[75px] max-h-[66px] sm:max-h-[76px] md:max-h-[86px] lg:max-h-[96px]"
              }
              loading={"lazy"}
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
