import { AverageValue } from "./AverageValue";
import { MarksSchedule } from "./MarksSchedule";
import { useAppDispatch } from "../../../../app/providers/StoreProvider/hooks";
import { useEffect, useState } from "react";
import { FetchAllReviews } from "../../model/services/FetchAllReviews";

interface ReviewStatisticProps {
  productId?: number;
}

export const ReviewStatistic = ({ productId }: ReviewStatisticProps) => {
  const dispatch = useAppDispatch();
  const [reviewsData, setReviewsData] = useState(undefined);

  useEffect(() => {
    dispatch(FetchAllReviews({ productId: productId || NaN }))
      .then((response) => {
        setReviewsData(response.payload);
      })
      .catch((error) => console.log(error));
  }, [dispatch, productId]);

  return (
    <div
      className={
        "flex flex-col items-center justify-between gap-[60px] w-full md:flex-row md:gap-7 lg:gap-12 xl:gap-[60px]"
      }
    >
      <AverageValue allReviewsData={reviewsData} />

      <MarksSchedule allReviewsData={reviewsData} />
    </div>
  );
};
