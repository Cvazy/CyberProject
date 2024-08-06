import { CatalogFilter } from "features";
import { CatalogList } from "widgets";
import { SortedSelect } from "./SortedSelect";
import { FilterButton } from "../../../features/CatalogFilter/ui/FilterButton";
import { useState } from "react";

const CatalogPage = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  return (
    <div className={"w-full h-auto py-10 lg:py-12"}>
      <div className={"flex justify-center w-full h-full px-4"}>
        <div className={"max-w-[1120px] w-full"}>
          <div
            className={
              "flex flex-col items-start gap-6 w-full relative lg:flex-row xl:gap-8"
            }
          >
            <div className={"grid grid-cols-2 gap-4 w-full lg:hidden"}>
              <FilterButton onClick={() => setIsOpenFilter(true)} />

              <SortedSelect />
            </div>

            <div
              className={`absolute left-0 right-0 top-0 bottom-0 bg-[#ffffffa6] z-50 overflow-hidden !duration-700 ${isOpenFilter ? "max-h-screen" : "max-h-0"} w-full lg:!max-h-none lg:max-w-64 lg:bg-none lg:static`}
            >
              <CatalogFilter onClick={() => setIsOpenFilter(false)} />
            </div>

            <CatalogList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
