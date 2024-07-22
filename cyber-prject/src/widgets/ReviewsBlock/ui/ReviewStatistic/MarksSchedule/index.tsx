import { MarkLine } from "./MarkLine";
import { ReviewBlockTypes } from "../../../model";

interface MarksScheduleProps {
  allReviewsData?: ReviewBlockTypes[];
}

export const MarksSchedule = ({ allReviewsData }: MarksScheduleProps) => {
  const markSchedule = [
    { mark: "Excellent", percent: 0, quantity: 0 },
    { mark: "Good", percent: 0, quantity: 0 },
    { mark: "Average", percent: 0, quantity: 0 },
    { mark: "Below Average", percent: 0, quantity: 0 },
    { mark: "Poor", percent: 0, quantity: 0 },
  ];

  if (allReviewsData) {
    let totalMarks = 0;

    allReviewsData.forEach(({ mark }) => {
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
