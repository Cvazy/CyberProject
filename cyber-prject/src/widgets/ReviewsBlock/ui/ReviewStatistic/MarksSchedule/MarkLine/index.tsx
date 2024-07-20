import { useTranslation } from "react-i18next";

interface MarkLineProps {
  title: string;
  percent: number;
  quantity: number;
}

export const MarkLine = ({ title, percent, quantity }: MarkLineProps) => {
  const { t } = useTranslation("productPage");

  return (
    <div className={"flex items-center gap-4 w-full"}>
      <p
        className={
          "text-black text-base !leading-4 text-left text-nowrap whitespace-nowrap font-medium min-w-[125px] sm:text-lg md:min-w-[150px]"
        }
      >
        {t(title)}
      </p>

      <div className={"flex items-center gap-4 flex-grow w-full"}>
        <div className={"w-full rounded-2xl bg-[#D9D9D9] h-1.5 relative"}>
          <div
            className={"absolute left-0 bg-[#FFB547] h-1.5 rounded-2xl"}
            style={{ width: `${percent}%` }}
          ></div>
        </div>

        <p
          className={
            "text-base !leading-4 font-medium text-right text-[#999999] min-w-10"
          }
        >
          {quantity}
        </p>
      </div>
    </div>
  );
};
