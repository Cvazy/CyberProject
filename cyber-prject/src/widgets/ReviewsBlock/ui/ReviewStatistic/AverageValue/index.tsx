import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import GoldStar from "shared/assets/images/Icon/gold_star.svg";
import { ReviewBlockTypes } from "../../../model";

interface AverageValueProps {
  allReviewsData?: ReviewBlockTypes[];
}

export const AverageValue = ({ allReviewsData }: AverageValueProps) => {
  const { t } = useTranslation("productPage");

  const averageValue = useMemo(() => {
    let value = 0;

    allReviewsData?.forEach((review) => {
      value += review.mark;
    });

    return allReviewsData ? (value / allReviewsData?.length).toFixed(1) : 0;
  }, [allReviewsData]);

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
              {allReviewsData?.length ? averageValue : 0}
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
            {allReviewsData?.length ? allReviewsData?.length : 0}{" "}
            <span>{t("reviews")}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
