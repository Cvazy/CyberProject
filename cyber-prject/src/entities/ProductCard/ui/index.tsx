import { ProductSchema } from "widgets/ProductCategoriesOnIndex/model";
import { Button, Icon } from "shared/ui";
import ProductWishlistIcon from "shared/assets/images/Icon/product_wishlist.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

interface ProductCardType {
  product: ProductSchema;
}

export const ProductCard = ({ product }: ProductCardType) => {
  const { id, name, price, sale, imageUrl } = product;

  const { t } = useTranslation();
  const nameRef = useRef(null);

  const clamp = (element: HTMLElement, lines: number) => {
    let text = element?.innerText;
    let lineHeight = parseInt(window.getComputedStyle(element).lineHeight);
    let height = element.clientHeight;
    let textLines = Math.round(height / lineHeight);

    while (textLines > lines) {
      text = text.slice(0, -1);
      element.innerText = text + "...";
      height = element.clientHeight;
      textLines = Math.round(height / lineHeight);
    }
  };

  useEffect(() => {
    if (nameRef.current) {
      clamp(nameRef.current, 2);
    }
  }, [name]);

  return (
    <div className={"w-full h-full rounded-lg bg-[#F6F6F6]"}>
      <div className={"py-6 px-3 w-full h-full md:px-4"}>
        <div className={"flex flex-col items-center gap-4 w-full h-full"}>
          <div className={"flex justify-end w-full"}>
            <button type={"button"} className={"hover:scale-110"}>
              <Icon src={ProductWishlistIcon} alt={"Wishlist"} />
            </button>
          </div>

          <div
            className={
              "flex justify-center items-center w-[104px] h-[104px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px]"
            }
          >
            <img
              src={imageUrl}
              className={
                "block select-none w-full h-auto max-h-[104px] sm:max-h-[140px] lg:max-h-[160px]"
              }
              alt={name}
              loading={"lazy"}
              draggable={"false"}
            />
          </div>

          <div
            className={
              "flex flex-col items-center justify-between flex-grow gap-4 w-full"
            }
          >
            <p
              ref={nameRef}
              className={
                "text-black text-base !leading-6 font-medium text-center"
              }
            >
              {name}
            </p>

            <div className={"flex flex-col items-center gap-6 w-full"}>
              <div className={"flex flex-nowrap justify-center w-full"}>
                <div
                  className={"flex justify-center items-center gap-1.5 w-full"}
                >
                  <p
                    className={
                      "text-black text-xl !leading-6 font-medium sm:text-2xl"
                    }
                  >
                    ${price}
                  </p>

                  {sale && (
                    <p
                      className={
                        "text-[#909090] line-through text-base !leading-6 font-medium sm:text-lg"
                      }
                    >
                      ${(price * ((100 - sale) / 100)).toFixed(2)}
                    </p>
                  )}
                </div>
              </div>

              <div className={"w-full md:px-6"}>
                <Link to={`/product?id=${id}`} className={"w-full"}>
                  <Button
                    className={
                      "h-12 w-full text-white bg-black border-black px-6 hover:bg-white hover:text-black"
                    }
                  >
                    {t("Buy Now")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
