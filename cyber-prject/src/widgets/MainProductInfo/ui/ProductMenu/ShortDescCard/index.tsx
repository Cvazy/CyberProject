interface ShortDescCardProps {
  name: string;
  value: string;
  iconUrl: string;
}

export const ShortDescCard = ({ name, value, iconUrl }: ShortDescCardProps) => {
  return (
    <div
      key={iconUrl}
      className={
        "flex justify-center items-center p-4 rounded-lg bg-[#F4F4F4] w-full"
      }
    >
      <div className={"flex items-center justify-start gap-1 w-full"}>
        <img
          className={"select-none block w-6 h-6"}
          src={iconUrl}
          alt={name}
          loading={"lazy"}
          draggable={"false"}
        />

        <div className={"flex flex-col items-start w-full"}>
          <p
            className={
              "text-sm !leading-4 text-nowrap whitespace-nowrap text-[#A7A7A7] text-left"
            }
          >
            {name}
          </p>

          <p
            className={
              "text-sm !leading-4 font-medium text-[#4E4E4E] text-left"
            }
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};
