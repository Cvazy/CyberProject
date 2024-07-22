import { useAppSelector } from "app/providers/StoreProvider/hooks";
import { ReviewItem } from "../../../../entities";

export const ReviewsList = () => {
  const { reviewsData } = useAppSelector((state) => state.reviewsReducer);

  return (
    <div className={"flex flex-col gap-6 w-full"}>
      {reviewsData?.map(({ id, username, text, date, mark }) => (
        <ReviewItem
          key={id}
          id={id}
          username={username}
          text={text}
          date={date}
          mark={mark}
        />
      ))}
    </div>
  );
};
