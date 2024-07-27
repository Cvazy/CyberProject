import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { LoaderTwister } from "../ui/Loader/LoaderTwister";

type FetchErrorWrapProps = {
  children: ReactNode;
  isLoading?: boolean;
  error?: string;
};

export const FetchErrorWrap: FC<FetchErrorWrapProps> = ({
  children,
  isLoading,
  error,
}) => {
  const { t } = useTranslation();

  return (
    <>
      {isLoading && <LoaderTwister />}
      {error && (
        <div className={"bg-[#DFDFDF] w-full h-full min-h-96"}>
          <div
            className={
              "flex items-center justify-center w-full h-full min-h-96"
            }
          >
            <p
              className={
                "text-3xl text-black font-medium text-center lg:text-4xl 2xl:text-5xl"
              }
            >
              {t(error)}
            </p>
          </div>
        </div>
      )}
      {!error && !isLoading && children}
    </>
  );
};
