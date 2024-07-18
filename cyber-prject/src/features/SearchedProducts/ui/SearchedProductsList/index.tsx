import { SearchedElement } from "../SearchedElement";
import { ISearchedProducts } from "../../model";

export const SearchedProductsList = ({
  searchedProducts,
}: ISearchedProducts) => {
  return (
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
  );
};
