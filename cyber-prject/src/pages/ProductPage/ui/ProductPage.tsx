import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/hooks";
import { useEffect } from "react";
import { FetchProductData } from "../model";
import { useLocation, useNavigate } from "react-router-dom";
import { FetchErrorWrap } from "shared/FetchErrorWrap";
import { Button } from "shared/ui";
import { AddToCart } from "../model/services/AddToCart";

const ProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("id");

  const { productData, isLoading, error } = useAppSelector(
    (state) => state.productReducer,
  );

  const { authData } = useAppSelector((state) => state.userReducer);
  const userId = authData?.id || NaN;

  useEffect(() => {
    if (productId) {
      dispatch(FetchProductData({ productId }));
    } else {
      navigate("/");
    }
  }, [dispatch, productId, navigate]);

  const onAddToCart = (itemId: string) => {
    dispatch(AddToCart({ productId: itemId, userId }));
  };

  return (
    <div className={"w-full h-auto"}>
      <div className={"flex justify-center w-full h-full px-4"}>
        <div
          className={"max-w-[1120px] w-full py-10 md:py-14 lg:py-20 xl:py-28"}
        >
          <FetchErrorWrap isLoading={isLoading} error={error}>
            <div>
              <p>{productData?.id}</p>
              <p>{productData?.name}</p>
              <p>{productData?.favorite}</p>
              <p>{productData?.state}</p>
              <p>{productData?.price}</p>
              <p>{productData?.imageUrl}</p>
              <p>{productData?.sale}</p>

              <Button
                className={
                  "h-56 w-full text-black border-black px-56 flex-grow hover:bg-black hover:text-white"
                }
                onClick={() => onAddToCart(productId || "")}
              >
                Add to cart
              </Button>
            </div>
          </FetchErrorWrap>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
