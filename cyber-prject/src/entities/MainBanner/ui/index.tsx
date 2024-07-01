import { Swiper, SwiperSlide } from "swiper/react";
import { BannerElement } from "../components";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
// @ts-ignore
import { Autoplay, EffectCube, Pagination } from "swiper/modules";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider/hooks";
import { useEffect } from "react";
import { GetMainBanners } from "../api/GetMainBanners";
import { FetchErrorWrap } from "../../../shared/FetchErrorWrap";

export const MainBanner = () => {
  const dispatch = useAppDispatch();
  const { banners, error, isLoading } = useAppSelector(
    (state) => state.MainBannerReducer,
  );

  useEffect(() => {
    dispatch(GetMainBanners());
  }, [dispatch]);

  return (
    <div className={"w-full h-full bg-[#211C24] px-4"}>
      <div className={"flex items-center justify-center w-full h-full"}>
        <div
          className={`max-w-[1120px] ${isLoading ? "min-h-96" : ""} w-full h-full self-end relative`}
        >
          <FetchErrorWrap error={error} isLoading={isLoading}>
            <Swiper
              //@ts-ignore
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Autoplay, EffectCube, Pagination]}
            >
              {banners.map(
                ({ title, model, version, subtitle, productId, imagePath }) => (
                  <SwiperSlide key={productId}>
                    <BannerElement
                      title={title}
                      model={model}
                      version={version}
                      subtitle={subtitle}
                      productId={productId}
                      imagePath={imagePath}
                    />
                  </SwiperSlide>
                ),
              )}
            </Swiper>
          </FetchErrorWrap>
        </div>
      </div>
    </div>
  );
};
