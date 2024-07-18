import PlusIcon from "shared/assets/images/Icon/plus.svg";
import MinusIcon from "shared/assets/images/Icon/minus.svg";
import RemoveIcon from "shared/assets/images/Icon/close.svg";
import {
  CartElementType,
  ChangeProductQnt,
  RemoveProductFromCart,
} from "../../../model";
import { useAppDispatch } from "app/providers/StoreProvider/hooks";

interface CartElementProps {
  product: CartElementType;
}

export const CartElement = ({ product }: CartElementProps) => {
  const { id, imageUrl, quantity, name, price } = product;
  const dispatch = useAppDispatch();

  const productId = id.toString();

  const onRemoveProduct = () => {
    dispatch(RemoveProductFromCart(productId));
  };

  const onIncrementProductQnt = () => {
    dispatch(ChangeProductQnt({ productId, action: "increment" }));
  };

  const onDecrementProductQnt = () => {
    dispatch(ChangeProductQnt({ productId, action: "decrement" }));
  };

  return (
    <div className={"border-b border-solid border-[#A3A3A3] pb-10 w-full"}>
      <div className={"w-full py-4"}>
        <div className={"flex items-center gap-4 w-full"}>
          <div
            className={"min-w-[90px] min-h-[90px] max-w-[90px] max-h-[90px]"}
          >
            <img
              className={"max-w-[90px] max-h-[90px] w-full"}
              src={imageUrl}
              alt={name}
              loading={"lazy"}
              draggable={"false"}
            />
          </div>

          <div
            className={
              "flex flex-col items-center gap-2 overflow-hidden w-full lg:flex-row"
            }
          >
            <div
              className={
                "flex flex-col items-start gap-2 w-full lg:max-w-[192px]"
              }
            >
              <p
                className={
                  "font-base !leading-6 font-medium text-left text-black"
                }
              >
                {name}
              </p>

              <p
                className={
                  "text-black font-normal text-sm !leading-6 w-full overflow-hidden text-ellipsis text-nowrap whitespace-nowrap"
                }
              >
                #{id}
              </p>
            </div>

            <div
              className={
                "flex items-center justify-between gap-2 w-full sm:justify-normal sm:gap-6"
              }
            >
              <div className={"flex items-center gap-2"}>
                <button
                  type={"button"}
                  className={
                    "flex items-center justify-center bg-none rounded w-6 h-6 hover:border-[#D9D9D9] hover:border hover:border-solid"
                  }
                >
                  <img
                    src={MinusIcon}
                    onClick={onDecrementProductQnt}
                    className={"w-6 h-6"}
                    alt={"Delete"}
                    loading={"lazy"}
                    draggable={"false"}
                  />
                </button>

                <div
                  className={
                    "flex items-center justify-center py-2 px-4 border border-solid border-[#D9D9D9] rounded"
                  }
                >
                  <p
                    className={
                      "text-black text-base font-medium !leading-4 text-center"
                    }
                  >
                    {quantity}
                  </p>
                </div>

                <button
                  type={"button"}
                  onClick={onIncrementProductQnt}
                  className={
                    "flex items-center justify-center bg-none rounded w-6 h-6 hover:border-[#D9D9D9] hover:border hover:border-solid"
                  }
                >
                  <img
                    src={PlusIcon}
                    className={"w-6 h-6"}
                    alt={"Delete"}
                    loading={"lazy"}
                    draggable={"false"}
                  />
                </button>
              </div>

              <p className={"text-black text-xl !leading-8 font-medium"}>
                ${price}
              </p>

              <button
                type={"button"}
                onClick={onRemoveProduct}
                className={
                  "flex items-center justify-center bg-none rounded w-7 h-7 hover:border-[#D9D9D9] hover:border hover:border-solid"
                }
              >
                <img
                  src={RemoveIcon}
                  className={"w-full h-full"}
                  alt={"Delete"}
                  loading={"lazy"}
                  draggable={"false"}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
