import logo from "shared/assets/images/Logo.svg";
import cartIcon from "shared/assets/images/Icon/cart.svg";
import closeIcon from "shared/assets/images/Icon/close.svg";
import burgerIcon from "shared/assets/images/Icon/burger.svg";
import logoutIcon from "shared/assets/images/Icon/logout.svg";
import profileIcon from "shared/assets/images/Icon/profile.svg";
import wishlistIcon from "shared/assets/images/Icon/wishlist.svg";
import { Link, useNavigate } from "react-router-dom";
import { NavLinks } from "./components";
import { ChangeLanguage, Icon } from "../index";
import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/hooks";
import { userActions } from "entities/User";
import { useCallback } from "react";
import { SearchedProducts } from "features";

type HeaderProps = {
  mobileMenuVisible: boolean;
  onVisibleMobileMenu: () => void;
  setMobileMenuVisible: any;
};

export const Header = ({
  onVisibleMobileMenu,
  mobileMenuVisible,
  setMobileMenuVisible,
}: HeaderProps) => {
  const authData = useAppSelector((state) => state.userReducer.authData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    navigate("/");
  }, [dispatch, navigate]);

  return (
    <header
      className={
        "z-[9999] w-full sticky top-0 h-[88px] border-b border-solid border-[#B5B5B5] bg-white"
      }
    >
      <div className={"w-full h-full p-4"}>
        <div className={"flex items-center justify-center w-full h-full"}>
          <div className={"max-w-[1120px] w-full"}>
            <div className={"flex justify-center items-center w-full"}>
              <div className={"flex items-center justify-between gap-9 w-full"}>
                <Link to={"/"} onClick={() => setMobileMenuVisible(false)}>
                  <img
                    className={"block select-none hover:scale-110"}
                    src={logo}
                    alt={"Logotype"}
                    loading={"lazy"}
                    draggable={"false"}
                  />
                </Link>

                <div
                  className={
                    "hidden items-center justify-between gap-9 w-full lg:flex"
                  }
                >
                  <SearchedProducts />

                  <NavLinks
                    placeOfUse={"header"}
                    setMobileMenuVisible={setMobileMenuVisible}
                  />

                  <div className={"flex items-center flex-nowrap gap-6"}>
                    <ChangeLanguage />

                    <Link
                      to={"/wishlist"}
                      className={
                        "flex items-center justify-center hover:scale-110"
                      }
                    >
                      <Icon src={wishlistIcon} alt={"Wishlist"} />
                    </Link>

                    <Link
                      to={"/cart"}
                      className={
                        "flex items-center justify-center hover:scale-110"
                      }
                    >
                      <Icon src={cartIcon} alt={"Cart"} />
                    </Link>

                    <Link
                      to={authData ? "/profile" : "/login"}
                      className={
                        "flex items-center justify-center hover:scale-110"
                      }
                    >
                      <Icon src={profileIcon} alt={"Profile"} />
                    </Link>

                    {authData && (
                      <button
                        type={"button"}
                        className={"block bg-none border-none hover:scale-110"}
                        onClick={onLogout}
                      >
                        <Icon src={logoutIcon} alt={"Logout"} />
                      </button>
                    )}
                  </div>
                </div>

                <div
                  className={"flex items-center gap-4 flex-nowrap lg:hidden"}
                >
                  <ChangeLanguage />

                  <button
                    type={"button"}
                    className={"block bg-none border-none"}
                    onClick={onVisibleMobileMenu}
                  >
                    <Icon
                      src={mobileMenuVisible ? closeIcon : burgerIcon}
                      alt={"Menu"}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
