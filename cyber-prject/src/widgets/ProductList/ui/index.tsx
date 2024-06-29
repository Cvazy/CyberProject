import { CategoriesMenu } from "./CategoriesMenu";
import { ProductContainer } from "./ProductContainer";
import { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider/hooks";
import {
  FetchBestsellerProducts,
  FetchFeaturedProducts,
  FetchNewArrivalProducts,
} from "../model";
import { FetchErrorWrap } from "shared/FetchErrorWrap";

export const ProductCategoriesOnIndex = () => {
  const dispatch = useAppDispatch();

  const { productsData, error, isLoading } = useAppSelector(
    (state) => state.ProductListReducer,
  );

  const user = useAppSelector((state) => state.userReducer.authData);
  const userId = user?.id;

  const [newArrivalStatus, setNewArrivalStatus] = useState(true);
  const [bestsellerStatus, setBestsellerStatus] = useState(false);
  const [featuredStatus, setFeaturedStatus] = useState(false);

  useEffect(() => {
    dispatch(FetchNewArrivalProducts(userId || NaN));
  }, [dispatch, userId]);

  const onLoadNewArrival = () => {
    dispatch(FetchNewArrivalProducts(userId || NaN));

    setNewArrivalStatus(true);
    setBestsellerStatus(false);
    setFeaturedStatus(false);
  };

  const onLoadBestseller = () => {
    dispatch(FetchBestsellerProducts(userId || NaN));

    setNewArrivalStatus(false);
    setBestsellerStatus(true);
    setFeaturedStatus(false);
  };

  const onLoadFeatured = () => {
    dispatch(FetchFeaturedProducts(userId || NaN));

    setNewArrivalStatus(false);
    setBestsellerStatus(false);
    setFeaturedStatus(true);
  };

  return (
    <div className={"w-full h-full px-4"}>
      <div className={"flex justify-center w-full"}>
        <div className={"max-w-[1120px] w-full py-14"}>
          <div className={"flex flex-col items-start gap-8 w-full"}>
            <CategoriesMenu
              newArrivalStatus={newArrivalStatus}
              bestsellerStatus={bestsellerStatus}
              featuredStatus={featuredStatus}
              onLoadNewArrival={onLoadNewArrival}
              onLoadBestseller={onLoadBestseller}
              onLoadFeatured={onLoadFeatured}
            />

            <div className={"flex items-center w-full min-h-[400px]"}>
              <FetchErrorWrap error={error} isLoading={isLoading}>
                <ProductContainer productsData={productsData} />
              </FetchErrorWrap>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
