import { FilterItem, ProductListActions } from "widgets";
import { useTranslation } from "react-i18next";
import ArrowIcon from "../../../shared/assets/images/Icon/arrow_down.svg";
import { useState } from "react";
import { useAppDispatch } from "../../../app/providers/StoreProvider/hooks";

export const FilterSelect = ({ title, values }: FilterItem) => {
  const { t } = useTranslation("catalogPage");

  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const onSelectFilter = (value: string) => {
    dispatch(
      ProductListActions.setFilterSettings({ title: title, values: [value] }),
    );
  };

  return (
    <div className={"flex flex-col w-full"}>
      <div
        className={`flex items-center justify-between gap-6 py-3 border-b border-solid border-[#B5B5B5] cursor-pointer w-full ${isOpen ? "mb-4" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p
          className={
            "text-black text-lg font-medium text-left whitespace-nowrap text-nowrap"
          }
        >
          {t(title)}
        </p>

        <img
          className={`max-w-6 max-h-6 min-w-6 min-h-6 select-none ${isOpen ? "rotate-180" : ""}`}
          src={ArrowIcon}
          alt={"Arrow Icon"}
          loading={"lazy"}
          draggable={false}
        />
      </div>

      <div
        className={`flex flex-col items-start gap-2 overflow-hidden w-full ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        {values.map((value) => (
          <label
            key={value}
            className={
              "flex items-center justify-start gap-2 cursor-pointer w-full"
            }
          >
            <input
              className={"min-w-4 min-h-4 grayscale"}
              type={"checkbox"}
              name={value}
              onChange={() => onSelectFilter(value)}
            />

            <span
              className={"block text-black text-base font-medium text-left"}
            >
              {value}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
