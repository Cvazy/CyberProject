import { useEffect } from "react";
import { FetchRandomProducts } from "pages/ProductPage/model";
import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/hooks";
import { useTranslation } from "react-i18next";
import { ProductCard } from "../../../entities";

export const RelatedProducts = () => {
  const { t } = useTranslation("productPage");
  const dispatch = useAppDispatch();
  const { randomProducts } = useAppSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(FetchRandomProducts());
  }, [dispatch]);

  return (
    <div className={"flex justify-center w-full px-4"}>
      <div className={"max-w-[1120px] w-full"}>
        <div className={"w-full py-10 md:py-14 lg:py-16 xl:py-20"}>
          <div className={"flex flex-col items-start gap-8 w-full"}>
            <p
              className={
                "text-2xl text-left text-nowrap whitespace-nowrap text-black font-medium"
              }
            >
              {t("Related Products")}
            </p>

            <div className={"grid grid-cols-2 gap-4 w-full lg:grid-cols-4"}>
              {randomProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  favoriteIcon={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
