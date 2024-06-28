import React, { FC } from "react";
import { UserSchema } from "entities/User/model/types";
import { useTranslation } from "react-i18next";
import { ProductCard } from "../../../entities";
import { ProductSchema } from "../../../widgets/ProductList/model";
import { useLocalStorage } from "app/hooks";

const WishlistBlock: FC<UserSchema> = ({ authData }) => {
  const { t } = useTranslation("profilePage");
  const [productsData, removeProduct] = useLocalStorage("favoriteProducts", []);

  return (
    <div className={"flex flex-col gap-6 w-full"}>
      <h1 className={"text-2xl text-black font-medium md:text-3xl lg:text-4xl"}>
        {t("Your Wishlist")}
      </h1>

      <div className={"w-full"}>
        <div className={"grid grid-cols-2 gap-4 w-full lg::grid-cols-3"}>
          {productsData.map((product: ProductSchema) => (
            <ProductCard
              key={product.id}
              product={product}
              onRemove={removeProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistBlock;
