import { Icon } from "../../../../shared/ui";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface SidebarItemProps {
  icon: string;
  link: string;
  text: string;
}

export const SidebarItem = ({ icon, link, text }: SidebarItemProps) => {
  const { t } = useTranslation("profilePage");

  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        [
          "bg-[#F5F5F5] rounded-lg w-full border border-solid hover:bg-[#e7e7e7] lg:hover:scale-105",
          isActive ? "border-black" : "hover:border-black",
        ].join(" ")
      }
    >
      <div className={"flex items-center gap-4 py-4 px-8 w-full"}>
        <Icon src={icon} alt={text} />

        <p className={"text-black text-base"}>{t(text)}</p>
      </div>
    </NavLink>
  );
};
