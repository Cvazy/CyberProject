import { Button } from "shared/ui";
import MinusIcon from "shared/assets/images/Icon/minus.svg";
import PlusIcon from "shared/assets/images/Icon/plus.svg";
import { IProductData, productActions } from "pages/ProductPage/model";
import { useEffect } from "react";
import { ChangeProductQnt, FetchUserCart } from "pages/CartPage/model";
import { AddToCart } from "pages/ProductPage/model/services";
import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/hooks";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ProductActionsBlockProps {
  productId: number | undefined;
}

export const ProductActionsBlock = ({
  productId,
}: ProductActionsBlockProps) => {
  const { t } = useTranslation("productPage");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { authData } = useAppSelector((state) => state.userReducer);
  const userId = authData?.id || NaN;
  const cartData = authData?.cart;

  let favoriteProducts =
    JSON.parse(localStorage.getItem(`favoriteProducts-${userId}`) || "[]") ||
    [];

  const checkFavorite = favoriteProducts.find(
    (el: IProductData) => el.id === productId,
  );

  useEffect(() => {
    dispatch(FetchUserCart());
  }, [dispatch]);

  const checkBasket = cartData?.find(
    (el) => Object.keys(el)[0] === productId?.toString(),
  );

  const onAddToCart = (itemId: string) => {
    dispatch(AddToCart({ productId: itemId, userId }));
  };

  const onFavoriteClick = (productId: number | undefined) => {
    if (productId === undefined) {
      console.error("productId is undefined");
      return;
    }

    if (userId === undefined) {
      console.error("userId is undefined");
      navigate("/login");
      return;
    }

    dispatch(productActions.addProductInWishlist({ userId }));
  };

  const onIncrementProductQnt = () => {
    dispatch(
      ChangeProductQnt({
        productId: productId?.toString() || "",
        action: "increment",
      }),
    );
  };

  const onDecrementProductQnt = () => {
    dispatch(
      ChangeProductQnt({
        productId: productId?.toString() || "",
        action: "decrement",
      }),
    );
  };

  return (
    <div className={"grid gap-4 w-full sm:grid-cols-2"}>
      <Button
        className={
          "h-56 w-full text-black bg-white border-black px-4 flex-grow hover:bg-black hover:text-white"
        }
        onClick={
          checkFavorite
            ? () => navigate("/wishlist")
            : () => onFavoriteClick(productId)
        }
      >
        {t(checkFavorite ? "Already in Wishlist" : "Add to Wishlist")}
      </Button>

      {!!checkBasket ? (
        <div
          className={"h-56 w-full border border-solid border-black rounded-lg"}
        >
          <div
            className={"flex justify-center items-center px-4 w-full h-full"}
          >
            <div className={"flex items-center justify-center gap-4 w-full"}>
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
                  {Object.values(checkBasket)[0]}
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
          </div>
        </div>
      ) : (
        <Button
          className={
            "h-56 w-full text-white bg-black border-black px-4 flex-grow hover:bg-white hover:text-black"
          }
          onClick={() => onAddToCart(productId?.toString() || "")}
        >
          {t("Add to cart")}
        </Button>
      )}
    </div>
  );
};
