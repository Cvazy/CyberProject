import { useTranslation } from "react-i18next";

interface ConditionsCardProps {
  icon: string;
  name: string;
  value: string;
}

export const ConditionsCard = ({ icon, name, value }: ConditionsCardProps) => {
  const { t } = useTranslation("productPage");

  return (
    <div className={"flex flex-col items-center gap-4 w-full xl:flex-row"}>
      <div className={"bg-[#F6F6F6] p-4 rounded-xl"}>
        <img
          className={"select-none min-w-6 min-h-6 max-w-6 max-h-6"}
          src={icon}
          alt={name}
          loading={"lazy"}
          draggable={"false"}
        />
      </div>

      <div className={"flex flex-col items-center xl:items-start w-full"}>
        <p
          className={
            "text-sm font-medium text-[#717171] text-center xl:text-left"
          }
        >
          {t(name)}
        </p>

        <p
          className={
            "text-sm !leading-6 font-medium text-black text-center xl:text-left"
          }
        >
          {t(value)}
        </p>
      </div>
    </div>
  );
};
