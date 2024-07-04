import { ProfileSidebar } from "../components";
import { useMatch, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { ProfileBlock, WishlistBlock } from "pages";
import { useAppSelector } from "../../../app/providers/StoreProvider/hooks";

const LkPage = () => {
  const checkProfilePage = !!useMatch("/profile");
  const checkWishlistPage = !!useMatch("/wishlist");

  const navigate = useNavigate();

  const authData = useAppSelector((state) => state.userReducer.authData);

  useEffect(() => {
    if (!authData) {
      navigate("/login");
    }
  }, [authData, navigate]);

  return (
    <div className={"w-full h-full"}>
      <div className={"flex justify-center w-full px-4"}>
        <div className={"max-w-[1120px] w-full py-16 lg:py-20"}>
          <div className={"flex flex-col items-start w-full gap-8 md:flex-row"}>
            <ProfileSidebar />

            <div className={"w-full"}>
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
