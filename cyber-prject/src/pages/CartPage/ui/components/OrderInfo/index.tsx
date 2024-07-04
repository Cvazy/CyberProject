import { useTranslation } from "react-i18next";
import { ESTIMATED_TAX_PERCENT, DELIVERY_PERCENT } from "shared/const";
import { Button, Input } from "../../../../../shared/ui";
import React from "react";

interface OrderInfoProps {
  subtotalSum: number;
}

export const OrderInfo = ({ subtotalSum }: OrderInfoProps) => {
  const { t } = useTranslation("cartPage");
  const estimatedTax = Math.round((subtotalSum / 100) * ESTIMATED_TAX_PERCENT);
  const deliveryPrice = Math.round((subtotalSum / 100) * DELIVERY_PERCENT);

  const totalSum = subtotalSum + estimatedTax + deliveryPrice;

  return (
    <div
      className={"rounded-xl h-fit border border-solid border-[#EBEBEB] w-full"}
    >
      <div
        className={
          "flex flex-col items-start gap-10 py-14 px-4 w-full sm:px-7 md:px-10 lg:px-14 xl:px-16"
        }
      >
        <p className={"text-xl !leading-4 text-black font-semibold text-left"}>
          {t("Order Summary")}
        </p>

        <form className={"flex flex-col gap-14 w-full"}>
          <div className={"flex flex-col gap-6 w-full"}>
            <label
              className={
                "flex flex-col items-start gap-2 w-full text-sm font-medium text-[#545454]"
              }
            >
              {t("Discount code / Promo code")}
              <Input
                icon={false}
                name={"discount_code"}
                placeholder={t("Code")}
                className={"bg-white py-4 pl-12 pr-3 h-14 md:h-16"}
              />
            </label>

            <label
              className={
                "flex flex-col items-start gap-2 w-full text-sm font-medium text-[#545454]"
              }
            >
              {t("Your bonus card number")}
              <div className={"relative w-full"}>
                <Input
                  icon={false}
                  name={"card_number"}
                  placeholder={t("Enter Card Number")}
                  className={"bg-white py-4 pl-12 pr-28 h-14 md:h-16"}
                />

                <Button
                  type={"button"}
                  className={
                    "absolute right-4 top-[11px] bg-white text-xs text-black border-black py-2 px-3 hover:bg-black hover:text-white md:top-[15px]"
                  }
                >
                  {t("Apply")}
                </Button>
              </div>
            </label>

            <div className={"flex flex-col gap-4 w-full"}>
              <div className={"flex justify-between items-center gap-4 w-full"}>
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

                  <p className={"text-base font-medium text-black !leading-8"}>
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

                  <p className={"text-base font-medium text-black !leading-8"}>
                    ${deliveryPrice}
                  </p>
                </div>
              </div>

              <div className={"flex justify-between items-center gap-4 w-full"}>
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
            type={"submit"}
            className={
              "h-56 w-full bg-black text-white border-black px-6 flex-grow hover:bg-white hover:text-black"
            }
          >
            {t("Checkout")}
          </Button>
        </form>
      </div>
    </div>
  );
};
