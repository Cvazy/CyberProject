import { useTranslation } from "react-i18next";
import { ReviewStatistic } from "./ReviewStatistic";
import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/hooks";
import { useEffect } from "react";
import { FetchReviews } from "../model";
import { FetchErrorWrap } from "shared/FetchErrorWrap";
import { ReviewsList } from "./ReviewsList";
import { AddReviewOnProduct } from "features";

interface ReviewsProps {
  productId?: number;
}

export const ReviewsBlock = ({ productId }: ReviewsProps) => {
  const { t } = useTranslation("productPage");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(FetchReviews({ productId: productId || NaN }));
  }, [dispatch, productId]);

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

              <FetchErrorWrap isLoading={isLoading}>
                <ReviewStatistic />

                <AddReviewOnProduct productId={productId} />

                <ReviewsList />
              </FetchErrorWrap>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
