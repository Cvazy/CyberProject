import { ButtonHTMLAttributes } from "react";

export const Button = ({
  children,
  className,
  onClick,
  disabled,
  type,
}: ButtonHTMLAttributes<any>) => {
  return (
    <button
      type={type ? type : "button"}
      className={`main_button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
