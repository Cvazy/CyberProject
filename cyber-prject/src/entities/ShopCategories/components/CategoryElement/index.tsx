import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { LoaderTwister } from "../../../../shared/ui/Loader/LoaderTwister";
import { useTranslation } from "react-i18next";

interface ICategoryElementProps {
  name: string;
  imageSrc: string;
}

export const CategoryElement: FC<ICategoryElementProps> = ({
  name,
  imageSrc,
}) => {
  const { t } = useTranslation();
  const [isImageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Link
      to={"/catalog"}
      className={"bg-[#EDEDED] rounded-2xl w-full hover:scale-90"}
    >
      <div className={"w-full p-6 h-full"}>
        <div
          className={
            "flex flex-col items-center justify-center gap-2 w-full h-full"
          }
        >
          <div className={"relative w-[48px] h-[48px]"}>
            {!isImageLoaded && (
              <div className={"w-[48px] h-[48px]"}>
                <LoaderTwister />
              </div>
            )}
            <img
              style={isImageLoaded ? {} : { display: "none" }}
              onLoad={handleImageLoad}
              className={"w-full h-full select-none"}
              src={imageSrc}
              alt={name}
              loading={"lazy"}
              draggable={"false"}
            />
          </div>

          <p
            className={
              "text-center text-nowrap whitespace-nowrap text-black font-medium text-base leading-6"
            }
          >
            {t(name)}
          </p>
        </div>
      </div>
    </Link>
  );
};
