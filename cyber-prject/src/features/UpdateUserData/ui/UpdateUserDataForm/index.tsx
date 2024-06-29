import { Button, Input } from "shared/ui";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../../../app/providers/StoreProvider/hooks";
import { updateUserDataActions } from "../../model";
import { ProfileSchema, UpdateUserData } from "../../model";

interface UpdateUserDataFormProps {
  formData?: ProfileSchema;
}

export const UpdateUserDataForm = ({ formData }: UpdateUserDataFormProps) => {
  const { t } = useTranslation("profilePage");
  const { username, name, surname, patronymic } = formData || {};

  const [editInputsStatus, setEditInputsStatus] = useState(true);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const setEnableEditInput = useCallback(() => {
    setEditInputsStatus(false);
  }, []);

  const onChangeUserLogin = useCallback(
    (value: string) => {
      dispatch(updateUserDataActions.setProfileData({ username: value || "" }));
    },
    [dispatch],
  );

  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(updateUserDataActions.setProfileData({ name: value || "" }));
    },
    [dispatch],
  );

  const onChangeUserSurname = useCallback(
    (value: string) => {
      dispatch(updateUserDataActions.setProfileData({ surname: value || "" }));
    },
    [dispatch],
  );

  const onChangeUserPatronymic = useCallback(
    (value: string) => {
      dispatch(
        updateUserDataActions.setProfileData({ patronymic: value || "" }),
      );
    },
    [dispatch],
  );

  useEffect(() => {
    if (!editInputsStatus && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [editInputsStatus]);

  const sendNewUserData = useCallback(() => {
    setEditInputsStatus(true);
    dispatch(UpdateUserData());
  }, [dispatch]);

  const cancelNewUserData = useCallback(() => {
    setEditInputsStatus(true);
    dispatch(updateUserDataActions.setInitialData());
  }, [dispatch]);

  return (
    <div className={"grid gap-3 w-full items-end lg:grid-cols-2"}>
      <label
        className={
          "flex flex-col items-start gap-1.5 w-full text-sm font-medium text-[#545454]"
        }
      >
        {t("Your login")}
        <Input
          icon={false}
          name={"login"}
          placeholder={"Login..."}
          className={
            "bg-white text-black py-4 pl-12 pr-3 h-[56px] focus:border-black"
          }
          onChange={onChangeUserLogin}
          value={username}
          disabled={editInputsStatus}
          ref={firstInputRef}
        />
      </label>

      <label
        className={
          "flex flex-col items-start gap-1.5 w-full text-sm font-medium text-[#545454]"
        }
      >
        {t("Your name")}
        <Input
          icon={false}
          name={"login"}
          placeholder={"Name..."}
          className={
            "bg-white text-black py-4 pl-12 pr-3 h-[56px] focus:border-black"
          }
          onChange={onChangeUserName}
          value={name}
          disabled={editInputsStatus}
        />
      </label>

      <label
        className={
          "flex flex-col items-start gap-1.5 w-full text-sm font-medium text-[#545454]"
        }
      >
        {t("Your surname")}
        <Input
          icon={false}
          name={"login"}
          placeholder={"Surname..."}
          className={
            "bg-white text-black py-4 pl-12 pr-3 h-[56px] focus:border-black"
          }
          onChange={onChangeUserSurname}
          value={surname}
          disabled={editInputsStatus}
        />
      </label>

      <label
        className={
          "flex flex-col items-start gap-1.5 w-full text-sm font-medium text-[#545454]"
        }
      >
        {t("Your patronymic")}
        <Input
          icon={false}
          name={"login"}
          placeholder={"Patronymic..."}
          className={
            "bg-white text-black py-4 pl-12 pr-3 h-[56px] focus:border-black"
          }
          onChange={onChangeUserPatronymic}
          value={patronymic}
          disabled={editInputsStatus}
        />
      </label>

      <div
        className={
          "flex flex-col items-center gap-4 w-full md:flex-row lg:col-span-2"
        }
      >
        <Button
          className={
            "h-56 w-full text-black border-black px-56 flex-grow hover:bg-black hover:text-white"
          }
          onClick={editInputsStatus ? setEnableEditInput : sendNewUserData}
        >
          {t(editInputsStatus ? "Change your data" : "Save")}
        </Button>

        {!editInputsStatus && (
          <Button
            className={
              "h-56 w-full text-[#d64b4b] border-[#d64b4b] flex-grow px-56 hover:bg-[#d64b4b] hover:text-white"
            }
            onClick={cancelNewUserData}
          >
            {t("Cancel")}
          </Button>
        )}
      </div>
    </div>
  );
};
