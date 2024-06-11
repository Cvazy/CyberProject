import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

type NavLinksProps = {
  placeOfUse: string;
};

export const NavLinks = ({ placeOfUse }: NavLinksProps) => {
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
      >
        {t("About")}
      </NavLink>

      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          ["nav_link", isActive ? "active_nav_link" : "inactive_nav_link"].join(
            " ",
          )
        }
      >
        {t("Contact Us")}
      </NavLink>

      <NavLink
        to={"/blog"}
        className={({ isActive }) =>
          ["nav_link", isActive ? "active_nav_link" : "inactive_nav_link"].join(
            " ",
          )
        }
      >
        {t("Blog")}
      </NavLink>
    </div>
  );
};
