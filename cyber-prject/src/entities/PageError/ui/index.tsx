import { useTranslation } from "react-i18next";
import { Button, Footer, Header, MobileMenu } from "../../../shared/ui";
import React, { useState } from "react";

export const PageError = () => {
  const { t } = useTranslation();

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const onVisibleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const onReloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div
      className={
        "flex flex-col items-center bg-white min-h-dvh w-full h-max relative"
      }
    >
      <MobileMenu
        mobileMenuVisible={mobileMenuVisible}
        setMobileMenuVisible={setMobileMenuVisible}
      />

      <Header
        onVisibleMobileMenu={onVisibleMobileMenu}
        mobileMenuVisible={mobileMenuVisible}
        setMobileMenuVisible={setMobileMenuVisible}
      />

      <main className={"flex flex-grow w-full"}>
        <div className={"flex justify-center items-center w-full h-auto p-4"}>
          <div
            className={
              "flex flex-col items-center justify-center gap-6 w-full h-full"
            }
          >
            <h1
              className={
                "text-3xl font-medium text-black text-center sm:text-4xl md:text-5xl lg:text-6xl"
              }
            >
              {t("An unexpected error has occurred")}
            </h1>

            <Button
              className={
                "h-[46px] bg-black text-white text-nowrap whitespace-nowrap border-black px-8 hover:bg-white hover:text-[#211C24] md:h-56 md:px-56"
              }
              onClick={onReloadPage}
            >
              {t("Reload page")}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
