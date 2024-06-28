import { CategoryMenuButton } from "./CategoryMenuButton";

interface CategoriesMenuTypes {
  newArrivalStatus: boolean;
  bestsellerStatus: boolean;
  featuredStatus: boolean;
  onLoadNewArrival: () => void;
  onLoadBestseller: () => void;
  onLoadFeatured: () => void;
}

export const CategoriesMenu = ({
  newArrivalStatus,
  bestsellerStatus,
  featuredStatus,
  onLoadNewArrival,
  onLoadBestseller,
  onLoadFeatured,
}: CategoriesMenuTypes) => {
  return (
    <div
      className={
        "flex items-center justify-between gap-4 flex-nowrap w-full sm:justify-normal sm:gap-8"
      }
    >
      <CategoryMenuButton
        title={"New Arrival"}
        categoryStatus={newArrivalStatus}
        onLoadFunc={onLoadNewArrival}
      />

      <CategoryMenuButton
        title={"Bestseller"}
        categoryStatus={bestsellerStatus}
        onLoadFunc={onLoadBestseller}
      />

      <CategoryMenuButton
        title={"Featured Products"}
        categoryStatus={featuredStatus}
        onLoadFunc={onLoadFeatured}
      />
    </div>
  );
};
