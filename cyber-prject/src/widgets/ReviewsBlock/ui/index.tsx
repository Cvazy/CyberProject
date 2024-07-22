import { useTranslation } from "react-i18next";
import { ReviewStatistic } from "./ReviewStatistic";
import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/hooks";
import { useEffect, useState } from "react";
import { FetchReviews } from "../model";
import { FetchErrorWrap } from "shared/FetchErrorWrap";
import { ReviewsList } from "./ReviewsList";
import { AddReviewOnProduct } from "features";
import { Button } from "shared/ui";
import ArrowIcon from "shared/assets/images/Icon/arrow_down.svg";

interface ReviewsProps {
  productId?: number;
}

export const ReviewsBlock = ({ productId }: ReviewsProps) => {
  const { t } = useTranslation("productPage");
  const dispatch = useAppDispatch();
  const [limit, setLimit] = useState(2);
  const [isMoreData, setIsMoreData] = useState(true);

  useEffect(() => {
    if (productId) {
      dispatch(FetchReviews({ productId: productId || NaN, limit }))
        .then((response) => {
          if (response.payload.length < limit) {
            setIsMoreData(false);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [dispatch, productId, limit]);

  const { isLoading } = useAppSelector((state) => state.reviewsReducer);

  return (
    <div className={"flex justify-center w-full px-4"}>
      <div className={"max-w-[1120px] w-full"}>
        <div className={"w-full py-10 md:py-14 lg:py-16 xl:py-20"}>
          <div className={"flex flex-col items-start gap-8 w-full"}>
            <div className={"flex flex-col items-start gap-12 w-full"}>
              <p
                className={
                  "text-2xl text-left text-nowrap whitespace-nowrap text-black font-medium"
                }
              >
                {t("Reviews")}
              </p>

              <ReviewStatistic productId={productId} />

              <FetchErrorWrap isLoading={isLoading}>
                <AddReviewOnProduct productId={productId} />

                <div className={"flex flex-col items-center gap-4 w-full"}>
                  <ReviewsList />

                  {isMoreData && (
                    <Button
                      className={
                        "h-12 text-black bg-white text-nowrap whitespace-nowrap border-black px-14 hover:scale-105"
                      }
                      onClick={() => setLimit(limit + 2)}
                    >
                      <div className={"flex items-center gap-2 w-full"}>
                        {t("View More")}

                        <img
                          src={ArrowIcon}
                          className={"select-none"}
                          alt={"Arrow"}
                          loading={"lazy"}
                          draggable={"false"}
                        />
                      </div>
                    </Button>
                  )}
                </div>
              </FetchErrorWrap>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
