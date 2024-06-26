import { ProfileSidebar } from "../components";
import { useMatch } from "react-router-dom";
import React from "react";
import { CartBlock, ProfileBlock, WishlistBlock } from "pages";
import { useAppSelector } from "../../../app/providers/StoreProvider/hooks";

const LkPage = () => {
  const checkCartPage = !!useMatch("/cart");
  const checkProfilePage = !!useMatch("/profile");
  const checkWishlistPage = !!useMatch("/wishlist");

  const authData = useAppSelector((state) => state.userReducer.authData);

  return (
    <div className={"w-full h-full"}>
      <div className={"flex justify-center w-full px-4"}>
        <div className={"max-w-[1120px] w-full py-16 lg:py-20"}>
          <div className={"flex flex-col items-start w-full gap-8 md:flex-row"}>
            <ProfileSidebar />

            <div className={"w-full"}>
              {checkCartPage && <CartBlock authData={authData} />}
              {checkProfilePage && <ProfileBlock />}
              {checkWishlistPage && <WishlistBlock authData={authData} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LkPage;
