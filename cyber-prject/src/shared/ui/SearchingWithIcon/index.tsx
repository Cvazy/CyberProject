import searchIcon from "../../assets/images/Icon/search.svg";
import { HTMLAttributes, useState } from "react";
import { useTranslation } from "react-i18next";

interface SearchingWithIconProps extends HTMLAttributes<any> {
  paddingForIcon: string;
}

export const SearchingWithIcon = ({
  className,
  paddingForIcon,
}: SearchingWithIconProps) => {
  const { t } = useTranslation();
  const [searchingValue, setSearchingValue] = useState("");

  return (
    <div className="flex flex-grow w-full relative lg:max-w-[372px]">
      <input
        type="text"
        value={searchingValue}
        placeholder={t("Search")}
        className={`rounded-lg text-sm text-[#656565] pl-[48px] pr-[12px] bg-[#F5F5F5] ${className} w-full border border-solid focus:border-[#B5B5B5]`}
        onChange={({ target }) => setSearchingValue(target.value)}
      />

      <img
        className={`block absolute ${paddingForIcon} left-[20px]`}
        src={searchIcon}
        alt="Searching"
        loading="lazy"
        draggable={"false"}
      />
    </div>
  );
};
