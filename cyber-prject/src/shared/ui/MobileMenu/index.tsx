import { SearchingWithIcon } from "../SearchingWithIcon";
import { Link } from "react-router-dom";
import wishlistIcon from "shared/assets/images/Icon/wishlist.svg";
import cartIcon from "shared/assets/images/Icon/cart.svg";
import profileIcon from "shared/assets/images/Icon/profile.svg";
import { NavLinks } from "../Header/components";
import { Icon } from "../Icon";
import { useTranslation } from "react-i18next";

type MobileMenuProps = {
  mobileMenuVisible: boolean;
};

export const MobileMenu = ({ mobileMenuVisible }: MobileMenuProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={`fixed z-[999] duration-700 w-full h-full bg-white overflow-hidden ${mobileMenuVisible ? "max-h-full" : "max-h-0"} lg:-z-10`}
    >
      <div className={"pt-[104px] pb-6 px-4 w-full"}>
        <div className={"flex flex-col items-start gap-6 w-full"}>
          <SearchingWithIcon
            className={"py-[19px] h-[56px]"}
            paddingForIcon={"top-[20px]"}
          />

          <NavLinks placeOfUse={"menu"} />

          <div className={"flex flex-col items-start gap-4"}>
            <Link
              to={"/wishlist"}
              className={"flex items-center gap-3 flex-nowrap"}
            >
              <div className={"flex items-center justify-center"}>
                <Icon src={wishlistIcon} alt={"Wishlist"} />
              </div>

              <p className={"text-base text-black text-nowrap"}>
                {t("Your Wishlist")}
              </p>
            </Link>

            <Link
              to={"/cart"}
              className={"flex items-center gap-3 flex-nowrap"}
            >
              <div className={"flex items-center justify-center"}>
                <Icon src={cartIcon} alt={"Cart"} />
              </div>

              <p className={"text-base text-black text-nowrap"}>
                {t("Your Cart")}
              </p>
            </Link>

            <Link
              to={"/profile"}
              className={"flex items-center gap-3 flex-nowrap"}
            >
              <div className={"flex items-center justify-center"}>
                <Icon src={profileIcon} alt={"Profile"} />
              </div>

              <p className={"text-base text-black text-nowrap"}>
                {t("Your Profile")}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
