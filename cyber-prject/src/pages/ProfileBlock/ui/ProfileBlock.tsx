import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { UpdateUserDataForm } from "features";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider/hooks";
import { FetchUserData } from "features/UpdateUserData/model/services";
import { FetchErrorWrap } from "shared/FetchErrorWrap";

const ProfileBlock = () => {
  const { t } = useTranslation("profilePage");
  const dispatch = useAppDispatch();
  const { formData, isLoading, error } = useAppSelector(
    (state) => state.updateUserDataReducer,
  );

  useEffect(() => {
    dispatch(FetchUserData());
  }, [dispatch]);

  return (
    <div className={"flex flex-col gap-8 w-full"}>
      <h1 className={"text-2xl text-black font-medium md:text-3xl lg:text-4xl"}>
        {t(error ? error : "Your Profile")}
      </h1>

      {error && (
        <p className={"text-base text-black font-medium md:text-lg lg:text-xl"}>
          {t("Try to repeat the action a little later")}
        </p>
      )}

      <FetchErrorWrap isLoading={isLoading}>
        {!error && (
          <div className={"w-full"}>
            <div className={"flex flex-col gap-5 w-full"}>
              <p className={"text-black"}>
                {t(
                  "On this page you can change your personal data, your username and your password",
                )}
              </p>

              <UpdateUserDataForm formData={formData} />
            </div>
          </div>
        )}
      </FetchErrorWrap>
    </div>
  );
};

export default ProfileBlock;
