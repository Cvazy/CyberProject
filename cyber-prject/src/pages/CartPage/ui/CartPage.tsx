import React, { useEffect, useMemo, useState } from "react";
import { CartListProducts, OrderInfo } from "./components";
import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/hooks";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "shared/ui";
import { FetchUserCart, FetchProductsInfo } from "../model";
import { ProductSchema } from "widgets/ProductList/model";
import { FetchErrorWrap } from "../../../shared/FetchErrorWrap";

const CartPage = () => {
  const [productsData, setProductsData] = useState<any>();
  const [subtotalSum, setSubtotalSum] = useState(0);

  const { t } = useTranslation("cartPage");
  const authData = useAppSelector((state) => state.userReducer.authData);
  const cartData = authData?.cart;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { error, isLoading } = useAppSelector((state) => state.cartReducer);

  const productsIds: string[] = useMemo(() => {
    if (cartData) {
      const allKeys = cartData.flatMap((item) => Object.keys(item));
      return [...new Set(allKeys)];
    } else {
      console.log("Cart data is undefined");
      return [];
    }
  }, [cartData]);

  useEffect(() => {
    dispatch(FetchUserCart());
  }, [dispatch]);

  useEffect(() => {
    if (productsIds.length) {
      dispatch(FetchProductsInfo({ productsIds })).then((request: any) => {
        const updatedProductsData = request.payload.map(
          (product: ProductSchema) => {
            const cartItem = cartData?.find(
              (item) => +Object.keys(item) === product.id,
            );

            return {
              ...product,
              quantity: cartItem ? Object.values(cartItem)[0] : 0,
            };
          },
        );

        setProductsData(updatedProductsData);

        let total = 0;

        updatedProductsData.forEach(
          (product: { price: number; quantity: number }) => {
            total += product.price * product.quantity;
          },
        );

        setSubtotalSum(total);
      });
    }
  }, [dispatch, cartData, productsIds]);

  useEffect(() => {
    if (!authData) {
      navigate("/login");
    }
  }, [authData, navigate]);

  return (
    <div className={"w-full h-auto py-10 md:py-14 lg:py-20 xl:py-28"}>
      <div className={"flex justify-center w-full h-full px-4"}>
        <div className={"max-w-[1120px] w-full"}>
          <FetchErrorWrap isLoading={isLoading} error={error}>
            {cartData ? (
              <div
                className={
                  "grid w-full gap-10 overflow-hidden lg:gap-12 lg:grid-cols-2"
                }
              >
                <CartListProducts productsData={productsData} />
                <OrderInfo subtotalSum={subtotalSum} />
              </div>
            ) : (
              <div
                className={
                  "flex flex-col items-center justify-center gap-6 w-full h-full"
                }
              >
                <p
                  className={
                    "text-black font-medium text-center text-xl md:text-2xl lg:text-3xl"
                  }
                >
                  {t("Your shopping cart is still empty")}
                </p>

                <Link to={"/catalog"}>
                  <Button
                    className={
                      "h-48 w-full text-black border-black px-6 min-w-60 flex-grow hover:bg-black hover:text-white sm:w-auto sm:min-w-80"
                    }
                  >
                    {t("Ready for shopping")}
                  </Button>
                </Link>
              </div>
            )}
          </FetchErrorWrap>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
