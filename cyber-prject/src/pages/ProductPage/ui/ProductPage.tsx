import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/hooks";
import { useEffect } from "react";
import { FetchProductData, FetchModificationProducts } from "../model";
import { useLocation, useNavigate } from "react-router-dom";
import { FetchErrorWrap } from "shared/FetchErrorWrap";
import {
  MainProductInfo,
  RelatedProducts,
  ProductDescription,
  ReviewsBlock,
} from "widgets";

const ProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("id");

  const { productData, isLoading, error } = useAppSelector(
    (state) => state.productReducer,
  );

  useEffect(() => {
    if (productId) {
      dispatch(FetchProductData({ productId }));
    } else {
      navigate("/");
    }
  }, [dispatch, productId, navigate]);

  useEffect(() => {
    dispatch(
      FetchModificationProducts({
        deviceFamily: productData?.deviceFamily || "",
      }),
    );
  }, [dispatch, productData?.deviceFamily]);

  useEffect(() => {
    if (!productId || !+productId) {
      navigate("/not_found");
    }
  }, [navigate, productId]);

  return (
    <div className={"w-full h-auto"}>
      <div className={"flex justify-center w-full h-full"}>
        <div className={"w-full"}>
          <div className={"flex flex-col w-full h-full"}>
            <FetchErrorWrap isLoading={isLoading} error={error}>
              <MainProductInfo />

              {productData?.details && <ProductDescription />}

              <ReviewsBlock productId={productData?.id} />

              <RelatedProducts />
            </FetchErrorWrap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
