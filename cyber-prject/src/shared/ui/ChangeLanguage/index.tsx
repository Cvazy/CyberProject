import ruFlag from "shared/assets/images/Languages/ru.svg";
import enFlag from "shared/assets/images/Languages/en.svg";
import { useTranslation } from "react-i18next";

export const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  const onToggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return (
    <button
      type={"button"}
      className={"hover:scale-110"}
      onClick={onToggleLanguage}
    >
      <img
        className={"w-[24px] select-none lg:w-[22px]"}
        src={i18n.language === "en" ? enFlag : ruFlag}
        alt={"Language"}
        loading={"lazy"}
        draggable={"false"}
      />
    </button>
  );
};
