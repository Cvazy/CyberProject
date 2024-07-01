import { SmallerBannerElement } from "../components";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider/hooks";
import { useEffect } from "react";
import { FetchErrorWrap } from "shared/FetchErrorWrap";
import { GetSmallBanners } from "../api/GetSmallBanners";

export const SmallerBanners = () => {
  const dispatch = useAppDispatch();
  const { smallBanners, error, isLoading } = useAppSelector(
    (state) => state.SmallBannerReducer,
  );

  useEffect(() => {
    dispatch(GetSmallBanners());
  }, [dispatch]);

  return (
    <div className={`w-full h-full ${isLoading ? "min-h-[34rem]" : ""}`}>
      <FetchErrorWrap error={error} isLoading={isLoading}>
        {smallBanners && smallBanners.length > 0 && (
          <div className={"grid w-full lg:grid-cols-2"}>
            <div className={"flex flex-col-reverse w-full lg:flex-col"}>
              <SmallerBannerElement data={smallBanners[0]} />

              <div className={"flex flex-col w-full lg:grid lg:grid-cols-2"}>
                <SmallerBannerElement data={smallBanners[1]} />

                <SmallerBannerElement data={smallBanners[2]} />
              </div>
            </div>

            <SmallerBannerElement data={smallBanners[3]} />
          </div>
        )}
      </FetchErrorWrap>
    </div>
  );
};
