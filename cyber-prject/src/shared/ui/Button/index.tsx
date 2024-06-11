import { ButtonHTMLAttributes } from "react";
import { useTranslation } from "react-i18next";

export const Button = ({
  children,
  className,
  onClick,
}: ButtonHTMLAttributes<any>) => {
  const { t } = useTranslation();

  return (
    <button
      type={"button"}
      className={`main_button ${className}`}
      onClick={onClick}
    >
      {t(`${children}`)}
    </button>
  );
};
