import logoLight from "shared/assets/images/Logo_light.svg";
import Facebook from "shared/assets/images/Network/Facebook.svg";
import Instagram from "shared/assets/images/Network/Instagram.svg";
import Tiktok from "shared/assets/images/Network/Tiktok.svg";
import Twitter from "shared/assets/images/Network/Twitter.svg";
import { Link } from "react-router-dom";
import { Icon } from "../Icon";
import { SERVICES_LINKS, ASSISTANCE_LINKS } from "./linksBlocks";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={"w-full bg-black"}>
      <div className={"w-full h-full px-8 py-12 md:py-16 lg:py-20 xl:py-24"}>
        <div className={"flex items-center justify-center w-full h-full"}>
          <div className={"max-w-[1120px] w-full"}>
            <div className={"flex flex-col items-start gap-8 w-full md:gap-6"}>
              <div className={"grid gap-8 w-full md:grid-cols-2"}>
                <div
                  className={
                    "flex flex-col items-center gap-8 w-full md:items-start md:gap-6"
                  }
                >
                  <Link to={"/"}>
                    <img
                      className={"block select-none hover:scale-110"}
                      src={logoLight}
                      alt={"Logotype"}
                      loading={"lazy"}
                      draggable={"false"}
                    />
                  </Link>

                  <p
                    className={
                      "text-sm font-medium text-white text-center w-full md:text-left"
                    }
                  >
                    {t(
                      "We are an online store of premium electronics. Our boutique is based in New Zealand, we will be glad to see you there",
                    )}
                  </p>
                </div>

                <div
                  className={
                    "flex flex-col items-center justify-between gap-4 w-full sm:flex-row sm:items-start"
                  }
                >
                  <div
                    className={
                      "flex flex-col items-center gap-2 w-full sm:items-start"
                    }
                  >
                    <p
                      className={
                        "text-base text-white font-semibold text-nowrap whitespace-nowrap"
                      }
                    >
                      {t("Services")}
                    </p>

                    {SERVICES_LINKS.map(({ key, link }) => {
                      return (
                        <Link
                          key={key}
                          to={link}
                          className={
                            "text-white text-sm leading-8 font-normal hover:font-medium"
                          }
                        >
                          {t(`${key}`)}
                        </Link>
                      );
                    })}
                  </div>

                  <div
                    className={
                      "flex flex-col items-center gap-2 w-full sm:items-start"
                    }
                  >
                    <p
                      className={
                        "text-base text-white font-semibold text-nowrap whitespace-nowrap"
                      }
                    >
                      {t("Assistance to the buyer")}
                    </p>

                    {ASSISTANCE_LINKS.map(({ key, link }) => {
                      return (
                        <Link
                          key={key}
                          to={link}
                          className={
                            "text-white text-sm leading-8 font-normal hover:font-medium"
                          }
                        >
                          {t(`${key}`)}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div
                className={
                  "flex justify-center items-center gap-9 flex-nowrap w-full sm:justify-start"
                }
              >
                <Link to={"/"} className={"hover:scale-110"}>
                  <Icon src={Twitter} alt={"Twitter"} />
                </Link>

                <Link to={"/"} className={"hover:scale-110"}>
                  <Icon src={Facebook} alt={"Facebook"} />
                </Link>

                <Link to={"/"} className={"hover:scale-110"}>
                  <Icon src={Tiktok} alt={"Tiktok"} />
                </Link>

                <Link to={"/"} className={"hover:scale-110"}>
                  <Icon src={Instagram} alt={"Instagram"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
