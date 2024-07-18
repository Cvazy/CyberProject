import { Input } from "shared/ui";
import { SearchedProductsList } from "./SearchedProductsList";
import { useEffect, useMemo, useState } from "react";
import { debounce } from "../utils";
import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/hooks";
import { FetchSearchedProducts } from "../model/services";
import { useTranslation } from "react-i18next";

interface SearchedProductsProps {
  setMobileMenuVisible?: (value: boolean) => void;
}

export const SearchedProducts = ({
  setMobileMenuVisible,
}: SearchedProductsProps) => {
  const { t } = useTranslation();

  const [searchedValue, setSearchedValue] = useState("");
  const [searchedFlag, setSearchedFlag] = useState(false);
  const [visibleSearchedList, setVisibleSearchedList] = useState(false);

  const dispatch = useAppDispatch();
  const { searchedProducts } = useAppSelector(
    (state) => state.SearchedProductsReducer,
  );

  useEffect(() => {
    dispatch(FetchSearchedProducts(searchedValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedFlag]);

  const startSearchedFetching = useMemo(
    () => debounce((value) => setSearchedFlag(value), 1000),
    [],
  );

  const onChangeSearched = (value: string) => {
    setSearchedValue(value);
    startSearchedFetching(!searchedFlag);
  };

  return (
    <div
      className={"w-full relative lg:max-w-[372px]"}
      onFocus={() => setVisibleSearchedList(true)}
      onBlur={() => {
        setTimeout(() => {
          setVisibleSearchedList(false);
        }, 150);
      }}
    >
      <Input
        icon={true}
        placeholder={"Search"}
        className={"bg-[#F5F5F5] pl-12 pr-3 py-[19px] h-[56px]"}
        paddingForIcon={"top-5 left-5"}
        onChange={onChangeSearched}
        value={searchedValue}
      />

      {visibleSearchedList && (
        <div
          className={"z-10 absolute w-full top-[50px]"}
          onClick={() => {
            setVisibleSearchedList(false);

            if (setMobileMenuVisible) {
              setMobileMenuVisible(false);
            }
          }}
        >
          <div
            className={
              "w-full bg-[#F5F5F5] border border-t-0 border-solid border-[#B5B5B5] rounded-b-lg max-h-72 overflow-y-scroll"
            }
          >
            {searchedProducts?.length ? (
              <SearchedProductsList searchedProducts={searchedProducts} />
            ) : (
              <div className={"flex justify-center items-center p-3 w-full"}>
                <p className={"text-sm text-black text-center font-medium"}>
                  {t("Nothing was found")}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
