import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/hooks";
import { useEffect } from "react";
import { FetchProductData } from "../model";
import { useLocation, useNavigate } from "react-router-dom";
import { FetchErrorWrap } from "shared/FetchErrorWrap";
import { MainProductInfo } from "../../../widgets";

const ProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("id");

  const { isLoading, error } = useAppSelector((state) => state.productReducer);

  useEffect(() => {
    if (productId) {
      dispatch(FetchProductData({ productId }));
    } else {
      navigate("/");
    }
  }, [dispatch, productId, navigate]);

  return (
    <div className={"w-full h-auto"}>
      <div className={"flex justify-center w-full h-full px-4"}>
        <div className={"max-w-[1120px] w-full"}>
          <div className={"flex flex-col w-full h-full"}>
            <FetchErrorWrap isLoading={isLoading} error={error}>
              <MainProductInfo />
            </FetchErrorWrap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
