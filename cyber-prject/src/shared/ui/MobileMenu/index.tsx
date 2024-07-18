import { Link, useNavigate } from "react-router-dom";
import wishlistIcon from "shared/assets/images/Icon/wishlist.svg";
import cartIcon from "shared/assets/images/Icon/cart.svg";
import profileIcon from "shared/assets/images/Icon/profile.svg";
import { NavLinks } from "../Header/components";
import { Icon } from "../Icon";
import { useTranslation } from "react-i18next";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider/hooks";
import { useCallback } from "react";
import { userActions } from "../../../entities/User";
import logoutIcon from "../../assets/images/Icon/logout.svg";
import { SearchedProducts } from "../../../features";

type MobileMenuProps = {
  mobileMenuVisible: boolean;
  setMobileMenuVisible: (value: boolean) => void;
};

export const MobileMenu = ({
  mobileMenuVisible,
  setMobileMenuVisible,
}: MobileMenuProps) => {
  const { t } = useTranslation();
  const authData = useAppSelector((state) => state.userReducer.authData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    navigate("/");
    setMobileMenuVisible(false);
  }, [dispatch, navigate, setMobileMenuVisible]);

  return (
    <div
      className={`fixed z-[999] duration-700 w-full h-full bg-white overflow-hidden ${mobileMenuVisible ? "max-h-full" : "max-h-0"} lg:-z-10`}
    >
      <div className={"pt-[104px] pb-6 px-4 w-full"}>
        <div className={"flex flex-col items-start gap-6 w-full"}>
          <SearchedProducts setMobileMenuVisible={setMobileMenuVisible} />

          <NavLinks
            placeOfUse={"menu"}
            setMobileMenuVisible={setMobileMenuVisible}
          />

          {authData && (
            <div className={"flex flex-col items-start gap-4"}>
              <Link
                to={"/wishlist"}
                className={"flex items-center gap-3 flex-nowrap"}
                onClick={() => setMobileMenuVisible(false)}
              >
                <div className={"flex items-center justify-center"}>
                  <Icon src={wishlistIcon} alt={"Wishlist"} />
                </div>

                <p
                  className={
                    "text-base text-black text-nowrap whitespace-nowrap"
                  }
                >
                  {t("Your Wishlist")}
                </p>
              </Link>

              <Link
                to={"/cart"}
                className={"flex items-center gap-3 flex-nowrap"}
                onClick={() => setMobileMenuVisible(false)}
              >
                <div className={"flex items-center justify-center"}>
                  <Icon src={cartIcon} alt={"Cart"} />
                </div>

                <p
                  className={
                    "text-base text-black text-nowrap whitespace-nowrap"
                  }
                >
                  {t("Your Cart")}
                </p>
              </Link>

              <Link
                to={"/profile"}
                className={"flex items-center gap-3 flex-nowrap"}
                onClick={() => setMobileMenuVisible(false)}
              >
                <div className={"flex items-center justify-center"}>
                  <Icon src={profileIcon} alt={"Profile"} />
                </div>

                <p
                  className={
                    "text-base text-black text-nowrap whitespace-nowrap"
                  }
                >
                  {t("Your Profile")}
                </p>
              </Link>

              <div
                role={"button"}
                className={"flex items-center gap-3 flex-nowrap"}
                onClick={onLogout}
              >
                <div className={"flex items-center justify-center"}>
                  <Icon src={logoutIcon} alt={"Logout"} />
                </div>

                <p
                  className={
                    "text-base text-black text-nowrap whitespace-nowrap"
                  }
                >
                  {t("Logout")}
                </p>
              </div>
            </div>
          )}

          {!authData && (
            <Link
              to={"/login"}
              className={"flex items-center gap-3 flex-nowrap"}
              onClick={() => setMobileMenuVisible(false)}
            >
              <div className={"flex items-center justify-center"}>
                <Icon src={profileIcon} alt={"Profile"} />
              </div>

              <p
                className={"text-base text-black text-nowrap whitespace-nowrap"}
              >
                {t("Authorization")}
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
