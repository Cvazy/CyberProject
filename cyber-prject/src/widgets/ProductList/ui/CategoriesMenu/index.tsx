import { useTranslation } from "react-i18next";

interface CategoriesMenuTypes {
  newArrivalStatus: boolean;
  bestsellerStatus: boolean;
  featuredStatus: boolean;
  onLoadNewArrival: () => void;
  onLoadBestseller: () => void;
  onLoadFeatured: () => void;
}

export const CategoriesMenu = ({
  newArrivalStatus,
  bestsellerStatus,
  featuredStatus,
  onLoadNewArrival,
  onLoadBestseller,
  onLoadFeatured,
}: CategoriesMenuTypes) => {
  const { t } = useTranslation("mainPage");

  return (
    <div className={"flex items-center gap-8 flex-nowrap w-full"}>
      <button
        type={"button"}
        className={`text-base font-medium ${newArrivalStatus ? "text-black border-b-2" : "text-[#8B8B8B]"} border-solid border-black !leading-8 md:text-lg hover:text-black`}
        onClick={onLoadNewArrival}
      >
        {t("New Arrival")}
      </button>

      <button
        type={"button"}
        className={`text-base font-medium ${bestsellerStatus ? "text-black border-b-2" : "text-[#8B8B8B]"} border-solid border-black !leading-8 md:text-lg hover:text-black`}
        onClick={onLoadBestseller}
      >
        {t("Bestseller")}
      </button>

      <button
        type={"button"}
        className={`text-base font-medium ${featuredStatus ? "text-black border-b-2" : "text-[#8B8B8B]"} border-solid border-black !leading-8 md:text-lg hover:text-black`}
        onClick={onLoadFeatured}
      >
        {t("Featured Products")}
      </button>
    </div>
  );
};
