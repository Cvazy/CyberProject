import { Pagination } from "features";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/hooks";
import {
  FetchPaginationProducts,
  FetchProductQnt,
} from "pages/CatalogPage/model";
import { FetchErrorWrap } from "shared/FetchErrorWrap";
import { ProductCard } from "../../../entities";
import { useLocation } from "react-router-dom";

export const CatalogList = () => {
  const { t } = useTranslation("catalogPage");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let currentPage = searchParams.get("page");

  currentPage = currentPage || "1";

  const dispatch = useAppDispatch();

  let [productsCount, setProductsCount] = useState(0);

  const user = useAppSelector((state) => state.userReducer.authData);
  const userId = user?.id;

  const { productsData, isLoading, error } = useAppSelector(
    (state) => state.ProductListReducer,
  );

  useEffect(() => {
    dispatch(
      FetchPaginationProducts({
        currentPage: currentPage!,
        userId: userId || NaN,
      }),
    );
  }, [dispatch, userId, currentPage]);

  useEffect(() => {
    dispatch(FetchProductQnt()).then((response) =>
      setProductsCount(response.payload.length),
    );
  }, [dispatch]);

  return (
    <FetchErrorWrap error={error} isLoading={isLoading}>
      <div className={"flex flex-col items-center gap-10 w-full"}>
        <div className={"flex flex-col items-start gap-6 w-full"}>
          <div className={"flex items-center justify-between gap-6 w-full"}>
            <div className={"flex items-center gap-1.5 flex-nowrap"}>
              <p
                className={
                  "text-[#6C6C6C] text-base font-medium text-nowrap whitespace-nowrap"
                }
              >
                {t("Selected Products")}:
              </p>

              <p
                className={
                  "text-black text-xl font-medium text-nowrap whitespace-nowrap"
                }
              >
                {productsCount}
              </p>
            </div>
          </div>

          <div className={"grid grid-cols-2 gap-4 w-full lg:grid-cols-3"}>
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className={"flex justify-center w-full"}>
          <Pagination productsQnt={productsCount} currentPage={currentPage} />
        </div>
      </div>
    </FetchErrorWrap>
  );
};
