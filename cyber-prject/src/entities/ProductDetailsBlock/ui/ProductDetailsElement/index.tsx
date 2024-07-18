import { IProductDetailsElement } from "../../types";
import { useTranslation } from "react-i18next";

export const ProductDetailsElement = ({
  name,
  values,
}: IProductDetailsElement) => {
  const { t } = useTranslation("productPage");

  return (
    <div className={"pb-2 border-b border-solid border-[#CDCDCD] w-full"}>
      <div className={"flex items-start justify-between gap-6 w-full"}>
        <p
          className={
            "text-base !leading-6 text-black text-left text-nowrap whitespace-nowrap"
          }
        >
          {t(name)}
        </p>

        <div className={"flex flex-col items-end"}>
          {values.map((el) => (
            <p
              key={el}
              className={
                "text-base !leading-6 text-black text-left text-nowrap whitespace-nowrap"
              }
            >
              {t(el)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
