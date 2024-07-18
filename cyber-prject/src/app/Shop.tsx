import React, { Suspense, useEffect, useState } from "react";
import { Header, MobileMenu, Footer, Loader } from "shared/ui";
import AppRouter from "./providers/Routers/ui/AppRouter";
import { useAppDispatch } from "./providers/StoreProvider/hooks";
import { userActions } from "../entities/User";

const Shop = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const dispatch = useAppDispatch();

  const onVisibleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
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
          <AppRouter />
        </main>

        <Footer />
      </div>
    </Suspense>
  );
};

export default Shop;
