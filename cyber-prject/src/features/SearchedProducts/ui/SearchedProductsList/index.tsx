import { SearchedElement } from "../SearchedElement";
import { ISearchedProducts } from "../../model";

export const SearchedProductsList = ({
  searchedProducts,
}: ISearchedProducts) => {
  return (
    <div className={"z-10 absolute w-full top-[50px]"}>
      <div
        className={
          "w-full bg-[#F5F5F5] border border-t-0 border-solid rounded-b-lg max-h-72 overflow-y-scroll"
        }
      >
        <div className={"flex flex-col w-full"}>
          {searchedProducts?.map(({ id, name, imageUrl, price }) => (
            <SearchedElement
              key={id}
              id={id}
              name={name}
              imageUrl={imageUrl}
              price={price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
