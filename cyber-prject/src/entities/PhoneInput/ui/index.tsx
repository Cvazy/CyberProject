import React, { ChangeEvent, ForwardedRef } from "react";
import MaskedInput from "react-text-mask";

interface PhoneInputProps {
  inputRef: (ref: HTMLInputElement | null) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const PhoneInput = React.forwardRef(
  (props: PhoneInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { inputRef, ...other } = props;

    return (
      <MaskedInput
        {...other}
        ref={(ref: any) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={[
          "+",
          "7",
          " ",
          "(",
          /\d/,
          /\d/,
          /\d/,
          ")",
          " ",
          /\d/,
          /\d/,
          /\d/,
          " ",
          /\d/,
          /\d/,
          " ",
          /\d/,
          /\d/,
        ]}
        placeholderChar={undefined}
        showMask
        className="block text-[#17183B] text-base text-left w-full border border-solid border-black rounded p-2"
      />
    );
  },
);
