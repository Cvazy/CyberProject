import { NetworkType } from "../../model";

export const NetworkBlock = ({ title, contact, icon }: NetworkType) => {
  return (
    <div className={"flex items-center gap-4 flex-nowrap"}>
      <div
        className={
          "flex items-center justify-center border border-solid border-black w-20 h-20 bg-[#F6F6F6] rounded-full"
        }
      >
        <img
          className={"block"}
          src={icon}
          alt={title}
          loading={"lazy"}
          draggable={"false"}
        />
      </div>

      <div className={"flex flex-col items-start gap-1"}>
        <p className={"text-base font-medium text-[#b2b2b2]"}>{title}</p>

        <a
          href={contact}
          className={"text-base font-medium text-black hover:scale-105"}
        >
          {contact}
        </a>
      </div>
    </div>
  );
};
