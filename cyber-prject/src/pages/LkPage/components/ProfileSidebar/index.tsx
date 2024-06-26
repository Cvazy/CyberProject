import CartIcon from "shared/assets/images/Icon/cart.svg";
import LogoutIcon from "shared/assets/images/Icon/logout.svg";
import ProfileIcon from "shared/assets/images/Icon/profile.svg";
import WishlistIcon from "shared/assets/images/Icon/wishlist.svg";
import { Icon } from "shared/ui";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { userActions } from "../../../../entities/User";
import { useAppDispatch } from "../../../../app/providers/StoreProvider/hooks";
import { SidebarItem } from "../SidebarItem";

export const ProfileSidebar = () => {
  const { t } = useTranslation("profilePage");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    navigate("/");
  }, [dispatch, navigate]);

  return (
    <div
      className={
        "flex flex-col gap-4 w-full md:max-w-[280px] lg:gap-7 lg:max-w-[400px]"
      }
    >
      <SidebarItem link={"/profile"} icon={ProfileIcon} text={"Your Profile"} />

      <SidebarItem
        link={"/wishlist"}
        icon={WishlistIcon}
        text={"Your Wishlist"}
      />

      <SidebarItem link={"/cart"} icon={CartIcon} text={"Shopping cart"} />

      <button
        type={"button"}
        className={
          "bg-[#F5F5F5] rounded-lg w-full border border-solid hover:bg-[#e7e7e7] hover:border-black lg:hover:scale-110"
        }
        onClick={onLogout}
      >
        <div className={"flex items-center gap-4 py-4 px-8 w-full"}>
          <Icon src={LogoutIcon} alt={"Logout"} />

          <p className={"text-black text-base"}>{t("Logout")}</p>
        </div>
      </button>
    </div>
  );
};
