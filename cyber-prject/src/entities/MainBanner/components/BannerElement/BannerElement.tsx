import { Link } from "react-router-dom";
import { Button } from "shared/ui";
import { useTranslation } from "react-i18next";
import { FC } from "react";

type BannerElementProps = {
  title: string;
  model: string;
  version?: string;
  subtitle: string;
  productId: string;
  imagePath: string;
};

export const BannerElement: FC<BannerElementProps> = ({
  title,
  model,
  version,
  subtitle,
  productId,
  imagePath,
}) => {
  const { t } = useTranslation("mainPage");

  return (
    <div
      className={
        "flex flex-col items-center justify-between gap-12 w-full pt-[88px] lg:flex-row"
      }
    >
      <div className={"flex flex-col items-center gap-6 lg:items-start"}>
        <p
          className={
            "text-xl text-[#7A777C] font-semibold text-center lg:text-2xl lg:text-left"
          }
        >
          {title}
        </p>

        <h1
          className={
            "text-6xl font-extralight text-white text-center md:text-7xl lg:text-left lg:text-8xl"
          }
        >
          {model + " "}
          {version && <span className={"font-semibold"}>{version}</span>}
        </h1>

        <p
          className={
            "text-lg text-[#7A777C] font-medium text-center lg:text-left"
          }
        >
          {t(`${subtitle}`)}
        </p>

        <Link to={`/product?id=${productId}`}>
          <Button
            className={
              "h-56 text-white border-white px-56 hover:bg-white hover:text-[#211C24]"
            }
          >
            Shop Now
          </Button>
        </Link>
      </div>

      <div
        className={
          "block relative w-auto max-h-[380px] overflow-y-hidden md:w-1/2 md:max-h-[632px]"
        }
      >
        <div className={"relative w-full"}>
          <img
            className={"w-full"}
            src={imagePath}
            loading={"lazy"}
            draggable={"false"}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};
