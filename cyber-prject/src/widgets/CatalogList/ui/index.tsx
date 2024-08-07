import { Pagination } from "features";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/hooks";
import { FetchProductQnt } from "pages/CatalogPage/model";
import { FetchErrorWrap } from "shared/FetchErrorWrap";
import { ProductCard } from "../../../entities";
import { useLocation, useNavigate } from "react-router-dom";
import { SortedSelect } from "pages/CatalogPage/ui/SortedSelect";
import { ProductListActions } from "../../ProductList";

export const CatalogList = () => {
  const { t } = useTranslation("catalogPage");

  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let currentPage = searchParams.get("page");

  currentPage = currentPage || "1";

  useEffect(() => {
    if (!currentPage || !+currentPage) {
      navigate("/not_found");
    }
  }, [navigate, currentPage]);

  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.userReducer.authData);
  const userId = user?.id;

  const {
    productsData,
    isLoading,
    error,
    sorted,
    selectedFilterSettings,
    productsCount,
  } = useAppSelector((state) => state.ProductListReducer);

  useEffect(() => {
    dispatch(FetchProductQnt()).then((response) => {
      dispatch(
        ProductListActions.setSortedProductList({
          sortedValue: sorted || "",
          currentPage: currentPage!,
          userId: userId || NaN,
          productsList: response.payload,
          selectedFilterSettings: selectedFilterSettings || [],
        }),
      );
    });
  }, [dispatch, sorted, currentPage, userId, selectedFilterSettings]);

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

            <div className={"hidden lg:block"}>
              <SortedSelect />
            </div>
          </div>

          <div className={"grid grid-cols-2 gap-4 w-full lg:grid-cols-3"}>
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className={"flex justify-center w-full"}>
          <Pagination
            productsQnt={productsCount || 0}
            currentPage={currentPage}
          />
        </div>
      </div>
    </FetchErrorWrap>
  );
};
