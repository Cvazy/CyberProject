import { useTranslation } from "react-i18next";

interface CategoryMenuButtonProps {
  title: string;
  categoryStatus: boolean;
  onLoadFunc: () => void;
}

export const CategoryMenuButton = ({
  title,
  categoryStatus,
  onLoadFunc,
}: CategoryMenuButtonProps) => {
  const { t } = useTranslation("mainPage");

  return (
    <button
      type={"button"}
      className={`text-sm font-medium ${categoryStatus ? "text-black border-b-2" : "text-[#8B8B8B]"} border-solid border-black !leading-8 sm:text-base md:text-lg hover:text-black`}
      onClick={onLoadFunc}
    >
      {t(title)}
    </button>
  );
};
