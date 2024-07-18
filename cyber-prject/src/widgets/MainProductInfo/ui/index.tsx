import { ProductSlider } from "./Slider";
import { ProductMenu } from "./ProductMenu";

export const MainProductInfo = () => {
  return (
    <div className={"flex justify-center w-full px-4"}>
      <div className={"max-w-[1120px]"}>
        <div
          className={
            "grid gap-12 w-full py-10 md:py-14 md:grid-cols-2 md:gap-6 lg:py-20 lg:gap-8 xl:py-28 xl:gap-10 2xl:gap-12"
          }
        >
          <ProductSlider />

          <ProductMenu />
        </div>
      </div>
    </div>
  );
};
