import { IProductDetailsBlock } from "../../types";
import { useTranslation } from "react-i18next";
import { ProductDetailsElement } from "../ProductDetailsElement";

export const ProductDetailsBlock = ({
  title,
  detailsArray,
}: IProductDetailsBlock) => {
  const { t } = useTranslation("productPage");

  return (
    <div className={"flex flex-col items-start gap-4 w-full"}>
      <p className={"text-xl text-black font-medium text-left"}>{t(title)}</p>

      <div className={"flex flex-col items-start gap-6 w-full"}>
        {detailsArray.map(({ name, values }) => (
          <ProductDetailsElement key={name} name={name} values={values} />
        ))}
      </div>
    </div>
  );
};
