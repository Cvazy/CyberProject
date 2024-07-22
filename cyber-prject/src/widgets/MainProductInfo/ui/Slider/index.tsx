import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

//@ts-ignore
import { FreeMode, Autoplay, Thumbs } from "swiper/modules";
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
        rewind={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Thumbs]}
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
              className={"select-none max-h-[516px]"}
              loading={"lazy"}
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        //@ts-ignore
        rewind={true}
        loop={true}
        slidesPerView={4}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        breakpoints={{
          0: {
            direction: "horizontal",
          },
          1280: {
            direction: "vertical",
          },
        }}
        className={
          "product_slider max-h-[66px] min-h-[66px] !w-full sm:max-h-[76px] sm:min-h-[76px] md:max-h-[86px] md:min-h-[86px] lg:!max-w-[76px] lg:max-h-[456px]"
        }
      >
        {imagesGallery?.map((el) => (
          <SwiperSlide
            key={el}
            className={
              "!flex justify-center !w-fit max-w-[75px] max-h-[66px] min-h-[66px] cursor-pointer sm:max-h-[76px] sm:min-h-[76px] md:max-h-[86px] md:min-h-[86px] lg:max-h-[96px] lg:min-h-[96px]"
            }
          >
            <img
              src={el}
              alt={name}
              className={
                "max-w-[75px] select-none max-h-[66px] min-h-[auto] sm:max-h-[76px] md:max-h-[86px] lg:max-h-[96px]"
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
