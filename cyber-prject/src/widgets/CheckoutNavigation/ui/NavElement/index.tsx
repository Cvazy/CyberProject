import { useTranslation } from "react-i18next";

interface NavElementProps {
  icon: string;
  stepNum: string;
  title: string;
  isActive: boolean;
}

export const NavElement = ({
  icon,
  stepNum,
  title,
  isActive,
}: NavElementProps) => {
  const { t } = useTranslation("checkoutPage");

  return (
    <div
      className={`flex items-center gap-2 flex-nowrap ${isActive ? "" : "opacity-25"} min-w-[140px]`}
    >
      <img
        className={"block w-6 h-6"}
        src={icon}
        alt={title}
        loading={"lazy"}
        draggable={"false"}
      />

      <div className={"flex flex-col items-start w-full"}>
        <p
          className={
            "text-sm text-left text-black font-medium text-nowrap whitespace-nowrap"
          }
        >
          {t("Step")} {stepNum}
        </p>

        <p
          className={
            "text-lg !leading-6 text-left text-black font-medium text-nowrap whitespace-nowrap"
          }
        >
          {t(title)}
        </p>
      </div>
    </div>
  );
};
