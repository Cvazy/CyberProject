import { ReviewBlockTypes } from "widgets";
import ReviewProfileIcon from "shared/assets/images/Icon/review_profile.svg";
import GoldStarIcon from "shared/assets/images/Icon/gold_star.svg";
import WhiteStarIcon from "shared/assets/images/Icon/white_star.svg";

export const ReviewItem = ({
  username,
  mark,
  text,
  date,
}: ReviewBlockTypes) => {
  return (
    <div className={"bg-[#FAFAFA] rounded-lg w-full"}>
      <div className={"flex items-start gap-5 py-6 pr-7 pl-4 w-full"}>
        <img
          className={"block select-none w-14 h-14"}
          src={ReviewProfileIcon}
          alt={""}
          loading={"lazy"}
          draggable={"false"}
        />

        <div
          className={"flex flex-col items-start gap-2 w-full overflow-hidden"}
        >
          <div className={"flex items-start justify-between gap-4 w-full"}>
            <p
              className={
                "text-lg text-black font-bold text-left overflow-hidden text-ellipsis text-nowrap whitespace-nowrap"
              }
            >
              {username}
            </p>

            <p
              className={
                "text-sm text-[#C8C8C8] font-medium text-right text-nowrap whitespace-nowrap"
              }
            >
              {date}
            </p>
          </div>

          <div className={"flex items-center justify-start w-full"}>
            <div className={"flex items-center justify-start w-full"}>
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  className={"select-none w-6 h-6"}
                  src={i < mark ? GoldStarIcon : WhiteStarIcon}
                  alt={i < mark ? "Gold star" : "White star"}
                  loading={"lazy"}
                  draggable={"false"}
                />
              ))}
            </div>
          </div>

          <p
            className={"text-base font-medium text-[#7E7E7E] text-left w-full"}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
