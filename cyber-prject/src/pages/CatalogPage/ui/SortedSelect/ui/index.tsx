import ArrowIcon from "shared/assets/images/Icon/grey_arrow_down.svg";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/hooks";
import { ProductListActions } from "widgets";

export const SortedSelect = () => {
  const { t } = useTranslation("catalogPage");

  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const { sorted } = useAppSelector((state) => state.ProductListReducer);

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
    dispatch(ProductListActions.setSortedValue(value));
  };

  return (
    <div
      ref={rootEl}
      className={`bg-white border border-solid border-[#D4D4D4] ${isOpen ? "rounded-t-lg" : "rounded-lg"} cursor-pointer relative w-full lg:w-64`}
    >
      <div
        className={
          "flex items-center justify-between gap-2 px-4 py-4 w-full sm:gap-6 lg:py-2"
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        <p
          className={
            "text-black text-left text-[15px] leading-[16px] text-nowrap whitespace-nowrap text-ellipsis overflow-hidden"
          }
        >
          {t(sorted ? `Alphabetically ${sorted}` : "Sorted By")}
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
        className={`flex flex-col absolute z-50 bg-white left-0 top-14 rounded-b-lg w-full overflow-hidden ${isOpen ? "max-h-64 border border-solid border-[#D4D4D4]" : "max-h-0"} lg:top-10 lg:left-[-1px]lg:w-64`}
      >
        <div
          onClick={() => handleAlphabet("A-Z")}
          className={
            "px-4 py-2 bg-white cursor-pointer border-b border-solid border-[#D4D4D4] w-full hover:bg-[#F6F6F6]"
          }
        >
          <p
            className={
              "text-black text-left text-[13px] leading-[16px] text-nowrap whitespace-nowrap text-ellipsis overflow-hidden sm:text-[15px]"
            }
          >
            {t("Alphabetically A-Z")}
          </p>
        </div>

        <div
          onClick={() => handleAlphabet("Z-A")}
          className={
            "px-4 py-2 bg-white cursor-pointer w-full hover:bg-[#F6F6F6]"
          }
        >
          <p
            className={
              "text-black text-left text-[13px] leading-[16px] text-nowrap whitespace-nowrap text-ellipsis overflow-hidden sm:text-[15px]"
            }
          >
            {t("Alphabetically Z-A")}
          </p>
        </div>
      </div>
    </div>
  );
};
