import { MarkLine } from "./MarkLine";
import { useAppSelector } from "../../../../../app/providers/StoreProvider/hooks";

export const MarksSchedule = () => {
  const { reviewsData } = useAppSelector((state) => state.reviewsReducer);
  const markSchedule = [
    { mark: "Excellent", percent: 0, quantity: 0 },
    { mark: "Good", percent: 0, quantity: 0 },
    { mark: "Average", percent: 0, quantity: 0 },
    { mark: "Below Average", percent: 0, quantity: 0 },
    { mark: "Poor", percent: 0, quantity: 0 },
  ];

  if (reviewsData) {
    let totalMarks = 0;

    reviewsData.forEach(({ mark }) => {
      totalMarks += 1;

      switch (mark) {
        case 5:
          markSchedule[0].quantity += 1;
          break;
        case 4:
          markSchedule[1].quantity += 1;
          break;
        case 3:
          markSchedule[2].quantity += 1;
          break;
        case 2:
          markSchedule[3].quantity += 1;
          break;
        case 1:
          markSchedule[4].quantity += 1;
          break;
        default:
          break;
      }
    });

    markSchedule.forEach((item) => {
      item.percent = (item.quantity / totalMarks) * 100;
    });
  }

  return (
    <div className={"flex flex-col gap-6 w-full"}>
      {markSchedule.map(({ mark, percent, quantity }) => (
        <MarkLine
          key={mark}
          title={mark}
          percent={percent}
          quantity={quantity}
        />
      ))}
    </div>
  );
};
