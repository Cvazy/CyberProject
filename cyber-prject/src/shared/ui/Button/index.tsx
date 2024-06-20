import { ButtonHTMLAttributes } from "react";
import { useTranslation } from "react-i18next";

export const Button = ({
  children,
  className,
  onClick,
  disabled,
}: ButtonHTMLAttributes<any>) => {
  const { t } = useTranslation();

  return (
    <button
      type={"button"}
      className={`main_button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {t(`${children}`)}
    </button>
  );
};
