import { useAppSelector } from "app/providers/StoreProvider/hooks";
import { FilterSelect } from "../../../entities";

export const CatalogFilter = () => {
  const { productFilters } = useAppSelector(
    (state) => state.ProductListReducer,
  );

  return (
    <div className={"flex flex-col gap-6 w-full max-w-64"}>
      {productFilters?.map(({ title, values }) => (
        <FilterSelect key={title} title={title} values={values} />
      ))}
    </div>
  );
};
