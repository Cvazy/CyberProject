import { useTranslation } from "react-i18next";
import { useAppSelector } from "app/providers/StoreProvider/hooks";
import { useMemo } from "react";
import GoldStar from "shared/assets/images/Icon/gold_star.svg";

export const AverageValue = () => {
  const { t } = useTranslation("productPage");
  const { reviewsData } = useAppSelector((state) => state.reviewsReducer);

  const averageValue = useMemo(() => {
    let value = 0;

    reviewsData?.forEach((review) => {
      value += review.mark;
    });

    return reviewsData ? (value / reviewsData?.length).toFixed(1) : 0;
  }, [reviewsData]);

  return (
    <div
      className={"bg-[#FAFAFA] rounded-3xl w-full md:w-auto md:min-w-[184px]"}
    >
      <div className={"p-8 w-full"}>
        <div className={"flex flex-col items-center justify-center gap-4"}>
          <div className={"flex items-center gap-1 flex-nowrap"}>
            <p
              className={
                "text-[56px] leading-none text-black text-center font-medium w-full"
              }
            >
              {averageValue}
            </p>

            <img
              className={"select-none w-10 h-10"}
              src={GoldStar}
              alt={"Star"}
              loading={"lazy"}
              draggable={"false"}
            />
          </div>

          <p
            className={
              "text-base !leading-none text-[#AFAFAF] text-nowrap whitespace-nowrap text-center font-medium w-full"
            }
          >
            <span>{t("of")}</span>{" "}
            {reviewsData?.length ? reviewsData?.length : 0}{" "}
            <span>{t("reviews")}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
