import logo from "shared/assets/images/Logo.svg";
import cartIcon from "shared/assets/images/Icon/cart.svg";
import closeIcon from "shared/assets/images/Icon/close.svg";
import burgerIcon from "shared/assets/images/Icon/burger.svg";
import profileIcon from "shared/assets/images/Icon/profile.svg";
import wishlistIcon from "shared/assets/images/Icon/wishlist.svg";
import { SearchingWithIcon } from "../SearchingWithIcon";
import { Link } from "react-router-dom";
import { NavLinks } from "./components";
import { ChangeLanguage, Icon } from "../index";

type HeaderProps = {
  mobileMenuVisible: boolean;
  onVisibleMobileMenu: () => void;
};

export const Header = ({
  onVisibleMobileMenu,
  mobileMenuVisible,
}: HeaderProps) => {
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
                <Link to={"/"}>
                  <img
                    className={"block hover:scale-110"}
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
                  <SearchingWithIcon
                    className={"py-[19px] h-[56px]"}
                    paddingForIcon={"top-[20px]"}
                  />

                  <NavLinks placeOfUse={"header"} />

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
                      to={"/profile"}
                      className={
                        "flex items-center justify-center hover:scale-110"
                      }
                    >
                      <Icon src={profileIcon} alt={"Profile"} />
                    </Link>
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
