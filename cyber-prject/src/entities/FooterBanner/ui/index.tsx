import { Button } from "shared/ui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const FooterBanner = () => {
  const { t } = useTranslation();

  return (
    <div className={"w-full"}>
      <div
        className={
          "flex items-center min-h-[440px] bg-no-repeat bg-center bg-cover bg-mobile-footer-banner w-full px-4 py-28 sm:min-h-[500px] lg:bg-desktop-footer-banner 2xl:min-h-[650px]"
        }
      >
        <div className={"flex justify-center items-center w-full h-full"}>
          <div className={"flex flex-col items-center gap-10"}>
            <div className={"flex flex-col items-center"}>
              <h2
                className={
                  "text-4xl !leading-tight font-extralight text-center text-white sm:text-5xl md:text-6xl lg:text-7xl"
                }
              >
                {t("Big Summer")}&nbsp;
                <span className={"font-bold"}>{t("Sale")}</span>
              </h2>

              <p className={"text-base !leading-8 text-center text-[#787878]"}>
                {t(
                  "Tempus habent novas electronicas mercandi cum delectamento infringo et naviculas liberas.",
                )}
              </p>
            </div>

            <Link to={"/catalog"}>
              <Button
                className={
                  "h-56 text-white border-white px-56 hover:bg-white hover:text-[#211C24]"
                }
              >
                {t("Shop Now")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
