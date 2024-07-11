import { useTranslation } from "react-i18next";
import { useAppSelector } from "app/providers/StoreProvider/hooks";
import { ShortDescCard } from "./ShortDescCard";
import { ConditionsCard } from "./ConditionsCard";
import ShopIcon from "shared/assets/images/Icon/shop.svg";
import VerifyIcon from "shared/assets/images/Icon/verify.svg";
import DeliveryIcon from "shared/assets/images/Icon/delivery-truck.svg";
import { ProductActionsBlock } from "./ProductActionsBlock";
import { Link } from "react-router-dom";
import { MemoryModificationBlock } from "./MemoryModificationBlock";

export const ProductMenu = () => {
  const { t } = useTranslation("productPage");

  const {
    id,
    name = "",
    color = "",
    price = 0,
    sale = undefined,
    shortProperties = [],
    modification = "",
  } = useAppSelector((state) => state.productReducer?.productData) ?? {};

  const { modifications } = useAppSelector((state) => state.productReducer);

  let colorMap = new Map();

  modifications?.forEach((product) => {
    if (!colorMap.has(product.color)) {
      colorMap.set(product.color, { id: product.id, color: product.color });
    }
  });

  let uniqueColorArray = Array.from(colorMap.values());

  const memoryModification = modifications?.filter(
    (product) => product.color === color,
  );

  return (
    <div className={"flex flex-col items-start gap-8 w-full"}>
      <div className={"flex flex-col items-start gap-4 w-full"}>
        <div className={"flex flex-col items-start gap-6 w-full"}>
          <h1
            className={"text-[40px] leading-10 font-bold text-black text-left"}
          >
            {name}
          </h1>

          <div className={"flex items-center justify-start gap-4 w-full"}>
            <p className="text-black text-3xl !leading-normal font-medium">
              ${price}
            </p>

            {sale && (
              <p className="text-[#909090] line-through text-2xl font-medium">
                ${(price * ((100 - sale) / 100)).toFixed(2)}
              </p>
            )}
          </div>
        </div>

        <div className={"flex flex-col items-start gap-6 w-full"}>
          <div className={"flex items-center gap-6 w-full"}>
            <p
              className={
                "text-[#0C0C0C] text-nowrap whitespace-nowrap text-base font-normal text-left"
              }
            >
              {t("Select color")}:
            </p>

            <div className={"flex items-center gap-2 w-full"}>
              {uniqueColorArray?.map((product) => (
                <Link
                  key={product.id}
                  to={`/product?id=${product.id}`}
                  className={`w-8 h-8 rounded-full bg-[${product.color}] ${product.color === color ? "border-2 border-solid border-[#ff0000]" : ""}`}
                ></Link>
              ))}
            </div>
          </div>

          <div className={"grid grid-cols-4 gap-2 w-full sm:gap-4"}>
            {memoryModification?.map(
              (product) =>
                !!product.modification && (
                  <MemoryModificationBlock
                    key={product.id}
                    productId={product.id}
                    currentModification={modification}
                    memoryValue={product.modification || ""}
                  />
                ),
            )}
          </div>

          <div className={"grid gap-2 w-full sm:grid-cols-2 xl:grid-cols-3"}>
            {shortProperties?.[0] &&
              Object.keys(shortProperties[0]).length > 0 &&
              shortProperties.map(({ name, iconUrl, value }) => (
                <ShortDescCard
                  key={iconUrl}
                  name={name}
                  value={value}
                  iconUrl={iconUrl}
                />
              ))}
          </div>
        </div>
      </div>

      <ProductActionsBlock productId={id} />

      <div className={"grid grid-cols-3 gap-8 w-full sm:gap-6"}>
        <ConditionsCard
          icon={DeliveryIcon}
          name={"Free Delivery"}
          value={"1-2 day"}
        />

        <ConditionsCard icon={ShopIcon} name={"In Stock"} value={"Today"} />

        <ConditionsCard
          icon={VerifyIcon}
          name={"Guaranteed"}
          value={"1 year"}
        />
      </div>
    </div>
  );
};
