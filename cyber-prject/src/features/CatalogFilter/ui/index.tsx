import { useAppSelector } from "app/providers/StoreProvider/hooks";
import { FilterSelect } from "../../../entities";
import ArrowIcon from "../../../shared/assets/images/Icon/arrow_down.svg";
import { useTranslation } from "react-i18next";

interface CatalogFilterProps {
  onClick: () => void;
}

export const CatalogFilter = ({ onClick }: CatalogFilterProps) => {
  const { t } = useTranslation("catalogPage");

  const { productFilters } = useAppSelector(
    (state) => state.ProductListReducer,
  );

  return (
    <div
      className={"flex flex-col gap-6 bg-white pb-4 w-full lg:pb-0 lg:max-w-64"}
    >
      <button
        type={"button"}
        onClick={onClick}
        className={"flex items-center justify-start gap-4 w-full lg:hidden"}
      >
        <img
          className={"max-w-6 max-h-6 min-w-6 min-h-6 select-none rotate-90"}
          src={ArrowIcon}
          alt={"Arrow Icon"}
          loading={"lazy"}
          draggable={false}
        />

        <p className={"text-2xl text-black font-medium text-left"}>
          {t("Filters")}
        </p>
      </button>

      {productFilters?.map(({ title, values }) => (
        <FilterSelect key={title} title={title} values={values} />
      ))}
    </div>
  );
};
