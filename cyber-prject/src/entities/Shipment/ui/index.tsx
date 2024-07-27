import { useTranslation } from "react-i18next";

interface ShipmentProps {
  price: string;
  description: string;
  date: string;
}

export const Shipment = ({
  price,
  description,
  date,
  isSelected,
  onSelect,
}: ShipmentProps & { isSelected: boolean; onSelect: () => void }) => {
  const { t } = useTranslation("checkoutPage");

  return (
    <div
      className={`bg-white rounded-xl border border-solid border-[#D1D1D8] cursor-pointer w-full ${isSelected ? "" : "opacity-50"}`}
      onClick={onSelect}
    >
      <div className={"flex items-center justify-between gap-6 p-6 w-full"}>
        <div
          className={
            "flex flex-col items-start gap-2 sm:gap-4 sm:flex-row sm:items-center"
          }
        >
          <label
            className={
              "flex flex-col items-start gap-2 sm:gap-4 sm:flex-row sm:items-center"
            }
          >
            <input
              className={"min-w-6 min-h-6 max-w-6 max-h-6 accent-black"}
              type={"radio"}
              checked={isSelected}
              onChange={onSelect}
            />

            <p
              className={
                "text-base text-black font-medium text-left text-nowrap whitespace-nowrap"
              }
            >
              {t(price)}
            </p>
          </label>

          <p className={"text-[#17183B] text-base text-left"}>
            {t(description)}
          </p>
        </div>

        <p
          className={
            "text-[#17183B] text-base text-right text-nowrap whitespace-nowrap"
          }
        >
          {date}
        </p>
      </div>
    </div>
  );
};
