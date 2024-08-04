import ArrowIcon from "shared/assets/images/Icon/grey_arrow_down.svg";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "app/providers/StoreProvider/hooks";
import { ProductListActions } from "widgets";

export const SortedSelect = () => {
  const { t } = useTranslation("catalogPage");

  const dispatch = useAppDispatch();

  const [selectValue, setSelectValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const rootEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (rootEl.current && !rootEl.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", onClick);

    return () => document.removeEventListener("click", onClick);
  }, []);

  const handleAlphabet = (value: string) => {
    setSelectValue(`Alphabetically ${value}`);

    dispatch(ProductListActions.setSortedValue(value));
  };

  return (
    <div
      ref={rootEl}
      className={`bg-white border border-solid border-[#D4D4D4] ${isOpen ? "rounded-t-lg" : "rounded-lg"} cursor-pointer relative w-full sm:w-64`}
    >
      <div
        className={"flex items-center justify-between gap-6 px-4 py-2 w-full"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className={"text-black text-left text-[15px] leading-[16px]"}>
          {t(selectValue ? selectValue : "Sorted By")}
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
        onClick={() => setIsOpen(false)}
        className={`flex flex-col absolute z-50 bg-white left-[-1px] top-10 rounded-b-lg w-full overflow-hidden ${isOpen ? "max-h-64 border border-solid border-[#D4D4D4]" : "max-h-0"} sm:w-64`}
      >
        <div
          onClick={() => handleAlphabet("A-Z")}
          className={
            "px-4 py-2 bg-white cursor-pointer border-b border-solid border-[#D4D4D4] w-full hover:bg-[#F6F6F6]"
          }
        >
          <p className={"text-black text-left text-[15px] leading-[16px]"}>
            {t("Alphabetically A-Z")}
          </p>
        </div>

        <div
          onClick={() => handleAlphabet("Z-A")}
          className={
            "px-4 py-2 bg-white cursor-pointer w-full hover:bg-[#F6F6F6]"
          }
        >
          <p className={"text-black text-left text-[15px] leading-[16px]"}>
            {t("Alphabetically Z-A")}
          </p>
        </div>
      </div>
    </div>
  );
};
