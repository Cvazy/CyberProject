import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

type NavLinksProps = {
  placeOfUse: string;
  setMobileMenuVisible: any;
};

export const NavLinks = ({
  placeOfUse,
  setMobileMenuVisible,
}: NavLinksProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={`flex ${placeOfUse === "header" ? "items-center flex-nowrap flex-grow justify-between max-w-[351px]" : "flex-col items-start"} gap-4`}
    >
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          ["nav_link", isActive ? "active_nav_link" : "inactive_nav_link"].join(
            " ",
          )
        }
        onClick={() => setMobileMenuVisible(false)}
      >
        {t("Home")}
      </NavLink>

      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          ["nav_link", isActive ? "active_nav_link" : "inactive_nav_link"].join(
            " ",
          )
        }
        onClick={() => setMobileMenuVisible(false)}
      >
        {t("About")}
      </NavLink>

      <NavLink
        to={"/contacts"}
        className={({ isActive }) =>
          ["nav_link", isActive ? "active_nav_link" : "inactive_nav_link"].join(
            " ",
          )
        }
        onClick={() => setMobileMenuVisible(false)}
      >
        {t("Contact Us")}
      </NavLink>

      <NavLink
        to={"/catalog"}
        className={({ isActive }) =>
          ["nav_link", isActive ? "active_nav_link" : "inactive_nav_link"].join(
            " ",
          )
        }
        onClick={() => setMobileMenuVisible(false)}
      >
        {t("Catalog")}
      </NavLink>
    </div>
  );
};
