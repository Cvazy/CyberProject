import {
  MainBanner,
  SmallerBanners,
  ShopCategories,
  FooterBanner,
} from "entities/index";
import { ProductCategoriesOnIndex } from "widgets";

const MainPage = () => {
  return (
    <div className={"w-full h-[revert]"}>
      <div className={"flex flex-col items-center w-full h-full"}>
        <MainBanner />
        <SmallerBanners />
        <ShopCategories />
        <ProductCategoriesOnIndex />
        <FooterBanner />
      </div>
    </div>
  );
};

export default MainPage;
