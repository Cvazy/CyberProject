import { useTranslation } from "react-i18next";
import { ESTIMATED_TAX_PERCENT, DELIVERY_PERCENT } from "shared/const";
import { Button, Input } from "shared/ui";
import React, { useCallback, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/hooks";
import { cartActions, FetchPromoCode } from "../../../model";
import { FetchErrorWrap } from "shared/FetchErrorWrap";
import { useNavigate } from "react-router-dom";

interface OrderInfoProps {
  subtotalSum: number;
}

export const OrderInfo = ({ subtotalSum }: OrderInfoProps) => {
  const { t } = useTranslation("cartPage");
  const { promoCodeIsLoading, promoCodeError, promoCodeSale } = useAppSelector(
    (state) => state.cartReducer,
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [promoCodeValue, setPromoCodeValue] = useState("");

  const estimatedTax = Math.round((subtotalSum / 100) * ESTIMATED_TAX_PERCENT);
  const deliveryPrice = Math.round((subtotalSum / 100) * DELIVERY_PERCENT);
  const promoCode = Math.round((subtotalSum / 100) * (promoCodeSale || 0));

  const totalSum = subtotalSum + estimatedTax + deliveryPrice - promoCode;

  const onEnterPromoCode = () => {
    dispatch(FetchPromoCode(promoCodeValue));
  };

  const onChangePromoCodeValue = useCallback((value: string) => {
    setPromoCodeValue(value);
  }, []);

  const onClickCheckout = () => {
    dispatch(
      cartActions.setCheckoutData({
        estimatedTax,
        promoCode,
        deliveryPrice,
        subtotalSum,
        totalSum,
      }),
    );
    navigate("/checkout?step=1");
  };

  return (
    <div
      className={"rounded-xl h-fit border border-solid border-[#EBEBEB] w-full"}
    >
      <FetchErrorWrap isLoading={promoCodeIsLoading}>
        <div
          className={
            "flex flex-col items-start gap-10 py-14 px-4 w-full sm:px-7 md:px-10 lg:px-14 xl:px-16"
          }
        >
          <p
            className={"text-xl !leading-4 text-black font-semibold text-left"}
          >
            {t("Order Summary")}
          </p>

          <div className={"flex flex-col gap-14 w-full"}>
            <div className={"flex flex-col gap-6 w-full"}>
              <div className={"flex flex-col items-start gap-2 w-full"}>
                <label
                  className={
                    "flex flex-col items-start gap-2 w-full text-sm font-medium text-[#545454]"
                  }
                >
                  {t("Discount code / Promo code")}
                  <div className={"relative w-full"}>
                    <Input
                      icon={false}
                      name={"card_number"}
                      placeholder={t("Code")}
                      className={"bg-white py-4 pl-12 pr-28 h-14 md:h-16"}
                      onChange={onChangePromoCodeValue}
                      value={promoCodeValue}
                    />

                    <Button
                      type={"button"}
                      onClick={onEnterPromoCode}
                      className={
                        "absolute right-4 top-[11px] bg-white text-xs text-black border-black py-2 px-3 hover:bg-black hover:text-white md:top-[15px]"
                      }
                    >
                      {t("Apply")}
                    </Button>
                  </div>
                </label>

                {promoCodeError && (
                  <p className={"text-sm font-medium text-[#d64b4b] text-left"}>
                    {t(`${promoCodeError}`)}
                  </p>
                )}
              </div>

              <div className={"flex flex-col gap-4 w-full"}>
                <div
                  className={"flex justify-between items-center gap-4 w-full"}
                >
                  <p className={"text-base font-medium text-black !leading-6"}>
                    {t("Subtotal")}
                  </p>

                  <p className={"text-base font-medium text-black !leading-8"}>
                    ${subtotalSum}
                  </p>
                </div>

                <div className={"flex flex-col gap-2 w-full"}>
                  <div
                    className={"flex justify-between items-center gap-4 w-full"}
                  >
                    <p
                      className={
                        "text-base font-normal text-[#545454] !leading-6"
                      }
                    >
                      {t("Estimated Tax")}
                    </p>

                    <p
                      className={"text-base font-medium text-black !leading-8"}
                    >
                      ${estimatedTax}
                    </p>
                  </div>

                  <div
                    className={"flex justify-between items-center gap-4 w-full"}
                  >
                    <p
                      className={
                        "text-base font-normal text-[#545454] !leading-6"
                      }
                    >
                      {t("Estimated shipping & Handling")}
                    </p>

                    <p
                      className={"text-base font-medium text-black !leading-8"}
                    >
                      ${deliveryPrice}
                    </p>
                  </div>

                  {promoCodeSale && (
                    <div
                      className={
                        "flex justify-between items-center gap-4 w-full"
                      }
                    >
                      <p
                        className={
                          "text-base font-normal text-[#545454] !leading-6"
                        }
                      >
                        {t("Discount code / Promo code")}
                      </p>

                      <p
                        className={
                          "text-base font-medium text-black !leading-8"
                        }
                      >
                        -${promoCode}
                      </p>
                    </div>
                  )}
                </div>

                <div
                  className={"flex justify-between items-center gap-4 w-full"}
                >
                  <p className={"text-base font-medium text-black !leading-6"}>
                    {t("Total")}
                  </p>

                  <p className={"text-base font-medium text-black !leading-8"}>
                    ${totalSum}
                  </p>
                </div>
              </div>
            </div>

            <Button
              className={
                "h-56 w-full bg-black text-white border-black px-6 flex-grow hover:bg-white hover:text-black"
              }
              onClick={onClickCheckout}
            >
              {t("Checkout")}
            </Button>
          </div>
        </div>
      </FetchErrorWrap>
    </div>
  );
};
