import { Input } from "shared/ui";
import eyeOpenIcon from "shared/assets/images/Icon/eye_open.svg";
import eyeCloseIcon from "shared/assets/images/Icon/eye_close.svg";
import React, { forwardRef, useState } from "react";

interface PasswordInputProps {
  value?: string;
  onChange?: (value: string) => void;
  repeatPass?: boolean;
  name?: string;
}

export const PasswordInput = forwardRef(
  ({ value, onChange, repeatPass, name }: PasswordInputProps, ref) => {
    const [inputType, setInputType] = useState("password");

    const handleChangeInputType = () => {
      setInputType(inputType === "password" ? "text" : "password");
    };

    return (
      <div className={"relative w-full"}>
        <Input
          ref={ref}
          icon={false}
          type={inputType}
          name={name}
          value={value}
          placeholder={repeatPass ? "Repeat password..." : "Password..."}
          className={"bg-white py-4 pr-12 pl-3 h-[56px]"}
          paddingForIcon={"top-5 right-5"}
          onChange={onChange}
        />

        <img
          onClick={handleChangeInputType}
          className={
            "block cursor-pointer w-6 h-6 absolute select-none right-4 top-4"
          }
          src={inputType === "password" ? eyeOpenIcon : eyeCloseIcon}
          alt="Searching"
          loading="lazy"
          draggable={"false"}
        />
      </div>
    );
  },
);
