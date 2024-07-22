import { useTranslation } from "react-i18next";
import { Button } from "shared/ui";
import ArrowIcon from "shared/assets/images/Icon/arrow_down.svg";
import { useState } from "react";
import { useAppSelector } from "app/providers/StoreProvider/hooks";
import { ProductDetailsBlock } from "entities/ProductDetailsBlock";

export const ProductDescription = () => {
  const { t } = useTranslation("productPage");
  const [openStatus, setOpenStatus] = useState(false);

  const { details } =
    useAppSelector((state) => state.productReducer?.productData) ?? {};

  return (
    <div className={"w-full bg-[#FAFAFA] py-10 md:py-14 lg:py-16 xl:py-20"}>
      <div className={"flex justify-center w-full px-4"}>
        <div className={"max-w-[1120px] w-full"}>
          <div className={"w-full bg-white rounded-lg"}>
            <div
              className={
                "flex flex-col items-start gap-8 w-full py-12 px-6 md:px-7 lg:px-8 xl:px-10"
              }
            >
              <p className={"text-black text-2xl font-medium text-left"}>
                {t("Details")}
              </p>

              <p
                className={
                  "text-sm !leading-6 font-medium text-[#9D9D9D] text-left"
                }
              >
                {t(details?.text || "")}
              </p>

              {details && (
                <div
                  className={`flex flex-col items-start gap-10 overflow-hidden ${openStatus ? "max-h-full" : "max-h-[616px]"} transition-[max-height] duration-75 w-full h-full`}
                >
                  {details?.detailsArray ? (
                    details?.detailsArray.map(({ title, detailsArray }) => (
                      <ProductDetailsBlock
                        key={title}
                        title={title}
                        detailsArray={detailsArray}
                      />
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              )}

              <div className={"flex justify-center w-full"}>
                <Button
                  className={
                    "h-12 text-black bg-white text-nowrap whitespace-nowrap border-black px-14 hover:scale-105"
                  }
                  onClick={() => setOpenStatus(!openStatus)}
                >
                  <div className={"flex items-center gap-2 w-full"}>
                    {t(openStatus ? "Roll up" : "View More")}

                    <img
                      src={ArrowIcon}
                      className={`${openStatus ? "rotate-180" : ""} select-none`}
                      alt={"Arrow"}
                      loading={"lazy"}
                      draggable={"false"}
                    />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
