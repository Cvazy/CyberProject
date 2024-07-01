import { Button, Input } from "../../../shared/ui";
import { PasswordInput } from "../../AuthByLogin/components";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/hooks";
import { useCallback, useEffect } from "react";
import { regFormScheme, registerActions, RegisterNewUser } from "../model";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      repeatPassword: "",
    },
    resolver: yupResolver(regFormScheme),
  });

  const { t } = useTranslation();
  const navigate = useNavigate();
  const authData = useAppSelector((state) => state.userReducer.authData);

  const dispatch = useAppDispatch();
  const { username, password, repeatPassword, error, isLoading } =
    useAppSelector((state) => state.registerReducer);

  const onChangeLogin = useCallback(
    (value: string) => {
      dispatch(registerActions.setLogin(value));
      setValue("username", value);
    },
    [dispatch, setValue],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(registerActions.setPassword(value));
      setValue("password", value);
    },
    [dispatch, setValue],
  );

  const onChangeRepeatPassword = useCallback(
    (value: string) => {
      dispatch(registerActions.setRepeatPassword(value));
      setValue("repeatPassword", value);
    },
    [dispatch, setValue],
  );

  const onSubmitRegister = useCallback(() => {
    dispatch(RegisterNewUser({ username, password }));
  }, [dispatch, username, password]);

  useEffect(() => {
    if (authData) {
      navigate("/");
    }
  }, [authData, navigate]);

  const formError =
    errors?.username?.message ||
    errors?.password?.message ||
    errors?.repeatPassword?.message;

  const errorMessage = formError || error;

  return (
    <form
      onSubmit={handleSubmit(onSubmitRegister)}
      className={"flex flex-col gap-12 w-full"}
    >
      <div className={"flex flex-col gap-6 w-full"}>
        {errorMessage && (
          <p className={"text-base font-medium text-[#c73131]"}>
            {t(errorMessage)}
          </p>
        )}

        <label
          className={
            "flex flex-col items-start gap-2 w-full text-sm font-medium text-[#545454]"
          }
        >
          {t("Enter your login")}
          <Input
            icon={false}
            // name={"login"}
            placeholder={"Login..."}
            className={"bg-white py-4 pl-12 pr-3 h-[56px]"}
            value={username}
            {...register("username")}
            onChange={onChangeLogin}
          />
        </label>

        <label
          className={
            "flex flex-col items-start gap-2 w-full text-sm font-medium text-[#545454]"
          }
        >
          {t("Enter your password")}
          <PasswordInput
            // name={"password"}
            value={password}
            {...register("password")}
            onChange={onChangePassword}
          />
        </label>

        <label
          className={
            "flex flex-col items-start gap-2 w-full text-sm font-medium text-[#545454]"
          }
        >
          {t("Repeat your password")}
          <PasswordInput
            // name={"repeatPassword"}
            repeatPass={true}
            value={repeatPassword}
            {...register("repeatPassword")}
            onChange={onChangeRepeatPassword}
          />
        </label>
      </div>

      <div className={"flex flex-col items-center gap-4 w-full"}>
        <Button
          type={"submit"}
          className={
            "h-56 text-white bg-black border-black px-56 w-full hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-no-drop"
          }
          disabled={isLoading}
        >
          {t("Register")}
        </Button>

        <p
          className={
            "flex justify-center text-[#545454] font-normal text-sm text-center w-full"
          }
        >
          {t("Already have an account")}?&nbsp;
          <Link to={"/login"} className={"font-medium hover:scale-105"}>
            {t("Authorization")}
          </Link>
        </p>
      </div>
    </form>
  );
};
