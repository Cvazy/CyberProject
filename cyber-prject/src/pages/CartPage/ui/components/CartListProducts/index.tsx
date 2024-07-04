import { useTranslation } from "react-i18next";
import { CartElement } from "./CartElement";
import { CartElementType } from "../../../model";

interface CartListProductsProps {
  productsData?: CartElementType[];
}

export const CartListProducts = ({ productsData }: CartListProductsProps) => {
  const { t } = useTranslation("cartPage");

  return (
    <div className={"flex flex-col items-start overflow-hidden gap-10 w-full"}>
      <p className={"text-2xl !leading-6 text-black font-semibold text-left"}>
        {t("Shopping Cart")}
      </p>

      <div className={"flex flex-col gap-10 w-full"}>
        {productsData?.map((product, index) => (
          <CartElement key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
