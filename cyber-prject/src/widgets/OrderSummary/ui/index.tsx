import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../app/providers/StoreProvider/hooks";

export const OrderSummary = () => {
  const { t } = useTranslation("checkoutPage");

  const { fullAddress, shipment, priceSum } = useAppSelector(
    (state) => state.cartReducer,
  );

  let finalTotalPrice = priceSum?.totalSum;

  if (shipment && priceSum?.totalSum) {
    finalTotalPrice = priceSum?.totalSum + Number(shipment);
  }

  return (
    <div className={"flex justify-center w-full"}>
      <div
        className={
          "bg-white border border-solid border-[#EBEBEB] rounded-xl w-full lg:w-auto lg:min-w-[50%]"
        }
      >
        <div className={"flex flex-col items-start gap-6 py-8 px-6 w-full"}>
          <p className={"text-[#17183B] text-xl font-semibold text-left"}>
            {t("Summary")}
          </p>

          <div className={"flex flex-col gap-4 w-full"}>
            <div className={"flex flex-col items-start gap-2 w-full"}>
              <p className={"text-[#545454] text-sm font-medium text-left"}>
                {t("Address")}
              </p>

              <p className={"text-base text-black text-left"}>{fullAddress}</p>
            </div>

            <div className={"flex flex-col items-start gap-2 w-full"}>
              <p className={"text-[#545454] text-sm font-medium text-left"}>
                {t("Shipment Method")}
              </p>

              <p className={"text-base text-black text-left"}>
                {`${shipment === "0" || shipment === undefined ? "Free" : `$${shipment}`}`}
              </p>
            </div>
          </div>

          <div className={"flex flex-col gap-4 w-full"}>
            <div className={"flex items-center justify-between gap-4 w-full"}>
              <p className={"text-base text-black text-left font-medium"}>
                {t("Subtotal")}
              </p>

              <p className={"text-base text-black text-left font-medium"}>
                {`$${priceSum?.subtotalSum}`}
              </p>
            </div>

            <div className={"flex flex-col gap-2 w-full"}>
              <div className={"flex items-center justify-between gap-4 w-full"}>
                <p className={"text-base text-[#545454] text-left font-medium"}>
                  {t("Estimated Tax")}
                </p>

                <p className={"text-base text-black text-left font-medium"}>
                  {`$${priceSum?.estimatedTax}`}
                </p>
              </div>

              <div className={"flex items-center justify-between gap-4 w-full"}>
                <p className={"text-base text-[#545454] text-left font-medium"}>
                  {t("Estimated shipping & Handling")}
                </p>

                <p className={"text-base text-black text-left font-medium"}>
                  {`$${priceSum?.deliveryPrice}`}
                </p>
              </div>

              {!!priceSum?.promoCode && (
                <div
                  className={"flex items-center justify-between gap-4 w-full"}
                >
                  <p
                    className={"text-base text-[#545454] text-left font-medium"}
                  >
                    {t("Discount code / Promo code")}
                  </p>

                  <p className={"text-base text-black text-left font-medium"}>
                    {`-$${priceSum?.promoCode}`}
                  </p>
                </div>
              )}
            </div>

            <div className={"flex items-center justify-between gap-4 w-full"}>
              <p className={"text-base text-black text-left font-medium"}>
                {t("Total")}
              </p>

              <p className={"text-base text-black text-left font-medium"}>
                {`$${finalTotalPrice}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
