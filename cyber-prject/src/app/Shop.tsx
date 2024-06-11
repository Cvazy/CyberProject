import React, { Suspense, /*useEffect,*/ useState } from "react";
import { Header, MobileMenu, Footer, Loader } from "shared/ui";
import AppRouter from "./providers/Routers/ui/AppRouter";

const Shop = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const onVisibleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  // useEffect(() => {
  //   if (Math.random() > 0.5) throw new Error();
  // }, []);

  return (
    <Suspense fallback={<Loader />}>
      <div
        className={
          "flex flex-col items-center bg-white min-h-dvh w-full h-max relative"
        }
      >
        <MobileMenu mobileMenuVisible={mobileMenuVisible} />

        <Header
          onVisibleMobileMenu={onVisibleMobileMenu}
          mobileMenuVisible={mobileMenuVisible}
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
