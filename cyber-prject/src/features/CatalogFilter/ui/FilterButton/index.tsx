import FilterIcon from "shared/assets/images/Icon/filters.svg";
import { useTranslation } from "react-i18next";

interface FilterButtonProps {
  onClick: () => void;
}

export const FilterButton = ({ onClick }: FilterButtonProps) => {
  const { t } = useTranslation("catalogPage");

  return (
    <div
      onClick={onClick}
      className={`bg-white border border-solid border-[#D4D4D4] rounded-lg cursor-pointer relative w-full lg:w-64`}
    >
      <div
        className={
          "flex items-center justify-between gap-2 px-4 py-4 w-full sm:gap-6 lg:py-2"
        }
      >
        <p className={"text-black text-left text-[15px] leading-[16px]"}>
          {t("Filters")}
        </p>

        <img
          className={`max-w-6 max-h-6 min-w-6 min-h-6 select-none`}
          src={FilterIcon}
          alt={"Filter Icon"}
          loading={"lazy"}
          draggable={false}
        />
      </div>
    </div>
  );
};
