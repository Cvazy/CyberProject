import { Button } from "shared/ui";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/hooks";
import { AddNewReview } from "../model";
import { FetchErrorWrap } from "shared/FetchErrorWrap";
import GoldStarIcon from "../../../shared/assets/images/Icon/gold_star.svg";
import WhiteStarIcon from "../../../shared/assets/images/Icon/white_star.svg";

interface AddReviewOnProductProps {
  productId?: number;
}

export const AddReviewOnProduct = ({ productId }: AddReviewOnProductProps) => {
  const { t } = useTranslation("productPage");
  const dispatch = useAppDispatch();
  const [visibleReviewForm, setVisibleReviewForm] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [reviewMark, setReviewMark] = useState(5);
  const { isLoading } = useAppSelector((state) => state.reviewsReducer);

  const onChangeReviewText = (value: string) => {
    setReviewText(value);
  };

  const onSubmitReview = () => {
    dispatch(
      AddNewReview({
        productId: productId || NaN,
        text: reviewText,
        mark: reviewMark,
      }),
    );
  };

  return (
    <FetchErrorWrap isLoading={isLoading}>
      <div className={"flex flex-col gap-8 w-full"}>
        <Button
          className={`${visibleReviewForm ? "hidden" : "block"} h-14 w-full text-[#979797] text-sm text-left border-[#CECECE] px-4 hover:scale-105`}
          onClick={() => setVisibleReviewForm(true)}
        >
          {t("Leave Comment")}
        </Button>

        <div
          className={`${visibleReviewForm ? "flex" : "hidden"} flex-col items-end gap-6 w-full`}
        >
          <textarea
            className={
              "border border-solid border-[#CDCDCD] w-full p-3 rounded-lg min-h-20"
            }
            placeholder={t("Your feedback")}
            value={reviewText}
            onChange={(event) => onChangeReviewText(event.target.value)}
          ></textarea>

          <div
            className={
              "flex flex-col items-center justify-between gap-4 w-full md:flex-row"
            }
          >
            <div
              className={
                "flex items-center justify-between flex-nowrap w-full md:justify-normal"
              }
            >
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  className={
                    "select-none w-8 h-8 cursor-pointer hover:scale-110"
                  }
                  src={i < reviewMark ? GoldStarIcon : WhiteStarIcon}
                  alt={"Star"}
                  loading={"lazy"}
                  draggable={"false"}
                  onClick={() => setReviewMark(i + 1)}
                />
              ))}
            </div>

            <div
              className={
                "flex flex-col gap-4 w-full md:justify-end md:flex-row"
              }
            >
              <Button
                className={
                  "h-12 w-full text-[#d64b4b] border-[#d64b4b] px-8 hover:bg-[#d64b4b] hover:text-white md:w-auto"
                }
                onClick={() => setVisibleReviewForm(false)}
              >
                {t("Cancel")}
              </Button>

              <Button
                className={
                  "h-12 w-full text-black border-black px-8 hover:bg-black hover:text-white md:w-auto"
                }
                onClick={onSubmitReview}
              >
                {t("Send")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </FetchErrorWrap>
  );
};
