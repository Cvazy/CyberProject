import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className={"w-full h-auto"}>
      <div className={"flex justify-center w-full h-full px-4"}>
        <div className={"max-w-[1120px] w-full py-10 md:py-14 lg:py-20"}>
          <div
            className={
              "flex flex-col gap-4 items-center justify-center w-full h-full"
            }
          >
            <h2
              className={
                "text-9xl text-black font-bold text-center md:text-[168px] lg:text-[200px] xl:text-[256px]"
              }
            >
              404
            </h2>

            <p
              className={
                "text-black text-base font-medium text-center sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl"
              }
            >
              {t("Page not found")}
            </p>

            <Link
              to={"/"}
              className="main_button cursor-pointer flex items-center justify-center h-12 bg-white border-black px-14 hover:scale-105"
            >
              <p
                className={
                  "text-black text-center align-middle font-medium text-nowrap whitespace-nowrap"
                }
              >
                {t("Main page")}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
