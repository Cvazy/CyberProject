import searchIcon from "../../assets/images/Icon/search.svg";
import React, {
  forwardRef,
  HTMLAttributes,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

interface InputProps
  extends Omit<HTMLAttributes<HTMLInputElement>, "onChange"> {
  icon: boolean;
  name?: string;
  type?: string;
  placeholder: string;
  paddingForIcon?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const Input = forwardRef((props: InputProps, ref) => {
  const {
    icon,
    className,
    name,
    type,
    placeholder,
    paddingForIcon,
    value,
    onChange,
    disabled,
  } = props;
  const { t } = useTranslation();
  const [searchingValue, setSearchingValue] = useState("");

  const inputPaddingLeft = icon ? "pl-12" : "pl-3";

  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
  }));

  return (
    <div className="flex flex-grow w-full relative">
      <input
        type={type || "text"}
        name={name || ""}
        value={value ? value : searchingValue}
        placeholder={t(placeholder)}
        className={`rounded-lg text-sm text-[#656565] ${inputPaddingLeft} pr-3 ${className} w-full border border-solid focus:border-[#B5B5B5]`}
        onChange={({ target }) =>
          onChange ? onChange(target.value) : setSearchingValue(target.value)
        }
        disabled={disabled || false}
        ref={inputRef}
      />

      {icon && (
        <img
          className={`block absolute select-none ${paddingForIcon}`}
          src={searchIcon}
          alt="Searching"
          loading="lazy"
          draggable={"false"}
        />
      )}
    </div>
  );
});
