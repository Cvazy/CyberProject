import { AverageValue } from "./AverageValue";
import { MarksSchedule } from "./MarksSchedule";

export const ReviewStatistic = () => {
  return (
    <div
      className={
        "flex flex-col items-center justify-between gap-[60px] w-full md:flex-row md:gap-7 lg:gap-12 xl:gap-[60px]"
      }
    >
      <AverageValue />

      <MarksSchedule />
    </div>
  );
};
