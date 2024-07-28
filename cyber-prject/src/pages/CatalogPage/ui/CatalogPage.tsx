import { CatalogFilter } from "features";
import { CatalogList } from "widgets";

const CatalogPage = () => {
  return (
    <div className={"w-full h-auto py-10 lg:py-12"}>
      <div className={"flex justify-center w-full h-full px-4"}>
        <div className={"max-w-[1120px] w-full"}>
          <div
            className={
              "flex flex-col items-start gap-6 w-full lg:flex-row xl:gap-8"
            }
          >
            <CatalogFilter />

            <CatalogList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
