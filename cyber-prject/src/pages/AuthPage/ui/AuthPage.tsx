import { useTranslation } from "react-i18next";
import { LoginForm, RegisterForm } from "features";
import { useMatch } from "react-router-dom";

const AuthPage = () => {
  const { t } = useTranslation();
  const checkAuthPage = !!useMatch("/login");

  return (
    <div className={"w-full h-full py-10 md:py-14 lg:py-20 xl:py-28"}>
      <div className={"flex items-center justify-center w-full h-full px-4"}>
        <div className={"max-w-[1120px] w-full"}>
          <div
            className={
              "flex flex-col items-center gap-5 w-full md:gap-6 xl:gap-7"
            }
          >
            <div
              className={
                "max-w-[536px] w-full border border-solid border-[#EBEBEB] rounded-xl"
              }
            >
              <div
                className={
                  "w-full py-14 px-4 sm:px-6 md:px-9 lg:px-12 xl:px-16"
                }
              >
                <div className={"flex flex-col items-start gap-10 w-full"}>
                  <h1 className={"text-xl text-left text-black font-bold"}>
                    {t(checkAuthPage ? "Authorization" : "Registration")}
                  </h1>

                  {checkAuthPage ? <LoginForm /> : <RegisterForm />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
