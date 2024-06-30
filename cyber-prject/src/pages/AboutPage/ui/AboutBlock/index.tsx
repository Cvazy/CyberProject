import { useTranslation } from "react-i18next";

interface AboutBlockProps {
  title: string;
  text: string;
  isMainTitle?: boolean;
}

export const AboutBlock = ({ title, text, isMainTitle }: AboutBlockProps) => {
  const { t } = useTranslation("aboutPage");

  return (
    <div className={"flex flex-col items-start gap-2 w-full"}>
      <h1
        className={`${isMainTitle ? "text-2xl" : "text-xl"} font-semibold text-black text-left`}
      >
        {t(title)}
      </h1>

      <p
        className={"text-base text-black text-left w-full"}
        dangerouslySetInnerHTML={{
          __html: t(text),
        }}
      ></p>
    </div>
  );
};
