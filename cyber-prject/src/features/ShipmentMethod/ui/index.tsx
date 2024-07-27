import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useAppDispatch } from "../../../app/providers/StoreProvider/hooks";
import { cartActions } from "../../../pages/CartPage/model";
import { ShipmentMethodsList } from "../model";
import { Shipment } from "../../../entities";

export const ShipmentMethod = () => {
  const { t } = useTranslation("checkoutPage");

  const dispatch = useAppDispatch();

  const [selectedShipmentMethod, setSelectedShipmentMethod] = useState<
    string | null
  >("Free");

  const onSelectShipmentMethod = (price: string) => {
    setSelectedShipmentMethod(price);

    if (price !== "Free") {
      dispatch(cartActions.setShipmentPrice(price.slice(1)));
    } else {
      dispatch(cartActions.setShipmentPrice("0"));
    }
  };

  const currentDate = new Date();

  const dateAfterTwoWeeks = new Date();
  dateAfterTwoWeeks.setDate(currentDate.getDate() + 14);
  const formattedDateAfterTwoWeeks = dateAfterTwoWeeks.toLocaleDateString(
    "en-GB",
    { day: "numeric", month: "short", year: "numeric" },
  );

  const dateAfterFourDays = new Date();
  dateAfterFourDays.setDate(currentDate.getDate() + 4);
  const formattedDateAfterFourDays = dateAfterFourDays.toLocaleDateString(
    "en-GB",
    { day: "numeric", month: "short", year: "numeric" },
  );

  return (
    <div className={"flex flex-col items-start gap-8 w-full"}>
      <p className={"text-[#17183B] text-xl font-semibold text-left"}>
        {t("Shipment Method")}
      </p>

      <div className={"flex flex-col gap-4 w-full"}>
        {ShipmentMethodsList.map(({ price, description }) => (
          <Shipment
            key={price}
            price={price}
            description={description}
            date={
              price === "Free"
                ? formattedDateAfterTwoWeeks
                : formattedDateAfterFourDays
            }
            isSelected={price === selectedShipmentMethod}
            onSelect={() => onSelectShipmentMethod(price)}
          />
        ))}
      </div>
    </div>
  );
};
