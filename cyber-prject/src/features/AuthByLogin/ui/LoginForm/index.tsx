import { memo, useCallback, useEffect } from "react";
import { Button, Input } from "../../../../shared/ui";
import { PasswordInput } from "../../components";
import { useTranslation } from "react-i18next";
import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/hooks";
import { loginActions } from "../../model";
import { LoginByUsername } from "../../model/services";
import { useNavigate } from "react-router-dom";

export const LoginForm = memo(() => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const authData = useAppSelector((state) => state.userReducer.authData);

  const dispatch = useAppDispatch();
  const { username, password, error, isLoading } = useAppSelector(
    (state) => state.loginReducer,
  );

  const onChangeLogin = useCallback(
    (value: string) => {
      dispatch(loginActions.setLogin(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    dispatch(LoginByUsername({ username, password }));
  }, [dispatch, username, password]);

  useEffect(() => {
    if (authData) {
      navigate("/");
    }
  }, [authData, navigate]);

  return (
    <div className={"flex flex-col gap-12 w-full"}>
      <div className={"flex flex-col gap-6 w-full"}>
        {error && (
          <p className={"text-base font-medium text-[#c73131]"}>{t(error)}</p>
        )}

        <label
          className={
            "flex flex-col items-start gap-2 w-full text-sm font-medium text-[#545454]"
          }
        >
          {t("Enter your login")}
          <Input
            icon={false}
            name={"login"}
            placeholder={"Login..."}
            className={"bg-white py-4 pl-12 pr-3 h-[56px]"}
            onChange={onChangeLogin}
            value={username}
          />
        </label>

        <label
          className={
            "flex flex-col items-start gap-2 w-full text-sm font-medium text-[#545454]"
          }
        >
          {t("Enter your password")}
          <PasswordInput onChange={onChangePassword} value={password} />
        </label>
      </div>

      <Button
        type={"submit"}
        className={
          "h-56 text-white bg-black border-black px-56 w-full hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-no-drop"
        }
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t("Login")}
      </Button>
    </div>
  );
});
