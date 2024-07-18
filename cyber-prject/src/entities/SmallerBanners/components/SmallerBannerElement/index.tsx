import { FC, ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../../../../shared/ui";
import { LoaderTwister } from "../../../../shared/ui/Loader/LoaderTwister";
import { SmallBannersTypes } from "../../model/types";

interface Data {
  data: SmallBannersTypes;
}

export const SmallerBannerElement: FC<Data> = ({ data }) => {
  const {
    bgColor,
    hoverEffect,
    titleClass,
    subtitleClass,
    imageSize,
    smallBanner,
  } = data;

  const { t } = useTranslation();
  const [isImageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const stylesForWrap = `${bgColor} overflow-hidden ${hoverEffect ? "lg:pr-4 xl:pr-8 2xl:pr-12 relative hover:z-50 hover:scale-110 hover:shadow-custom" : "lg:pl-4 xl:pl-8 2xl:pl-12"}`;

  const content: ReactNode = (
    <div
      className={`flex flex-col-reverse items-center w-full h-full gap-6 px-4 py-10 ${hoverEffect ? "lg:flex-row-reverse lg:px-0 lg:py-0" : "lg:py-0 lg:px-0 lg:flex-row"}`}
    >
      <div className={"flex flex-col items-center gap-4 w-full lg:items-start"}>
        <h2
          className={`text-3xl font-extralight lg:text-nowrap lg:whitespace-nowrap ${titleClass}`}
        >
          {smallBanner.title}{" "}
          <span className={subtitleClass}>{smallBanner.subtitle}</span>
        </h2>

        <p
          className={
            "text-sm leading-6 text-[#909090] text-center lg:text-left"
          }
        >
          {t(smallBanner.description)}
        </p>

        {!hoverEffect && (
          <Link
            to={`/product?id=${smallBanner.id}`}
            className={"w-full lg:w-auto"}
          >
            <Button
              className={
                "w-full h-56 text-black border-black px-56 lg:w-auto hover:bg-[#353535] hover:text-white"
              }
            >
              {t("Shop Now")}
            </Button>
          </Link>
        )}
      </div>

      {smallBanner.imageSrc && (
        <div className={"flex justify-center w-full lg:block lg:w-auto"}>
          {!isImageLoaded && (
            <div className={"h-[272px]"}>
              <LoaderTwister />
            </div>
          )}
          <img
            style={isImageLoaded ? {} : { display: "none" }}
            src={smallBanner.imageSrc}
            className={`block w-full select-none ${imageSize} lg:w-auto`}
            onLoad={handleImageLoad}
            alt={smallBanner.title}
            loading={"lazy"}
            draggable={"false"}
          />
        </div>
      )}
    </div>
  );

  return hoverEffect ? (
    <Link to={`/product?id=${smallBanner.id}`} className={stylesForWrap}>
      {content}
    </Link>
  ) : (
    <div className={stylesForWrap}>{content}</div>
  );
};
