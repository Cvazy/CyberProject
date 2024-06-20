import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// @ts-ignore
import { Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { CategoryElement } from "../components";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider/hooks";
import { useEffect } from "react";
import { GetCategories } from "../api/GetCategories";
import { FetchErrorWrap } from "../../../shared/FetchErrorWrap";

export const ShopCategories = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { categories, error, isLoading } = useAppSelector(
    (state) => state.CategoriesReducer,
  );

  useEffect(() => {
    dispatch(GetCategories());
  }, [dispatch]);

  return (
    <div className={"w-full bg-[#FAFAFA] h-full px-4"}>
      <div className={"flex justify-center w-full"}>
        <div className={"max-w-[1120px] w-full py-16 lg:py-20"}>
          <div
            className={
              "flex flex-col items-start gap-12 relative w-full lg:gap-8"
            }
          >
            <p className={"text-2xl text-black font-medium text-left"}>
              {t("Browse By Category")}
            </p>

            <FetchErrorWrap error={error} isLoading={isLoading}>
              <Swiper
                // @ts-ignore
                slidesPerView={2}
                spaceBetween={16}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                  600: {
                    slidesPerView: 3,
                  },
                  767: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                  1280: {
                    slidesPerView: 6,
                    spaceBetween: 32,
                  },
                }}
                className={"w-full !static !overflow-y-visible"}
              >
                {categories.map(({ id, name, imageSrc }) => (
                  <SwiperSlide key={id} className={"!mt-0"}>
                    <CategoryElement name={name} imageSrc={imageSrc} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </FetchErrorWrap>
          </div>
        </div>
      </div>
    </div>
  );
};
