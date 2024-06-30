import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider/hooks";
import { useEffect } from "react";
import { FetchAboutData } from "../model";
import { FetchErrorWrap } from "shared/FetchErrorWrap";
import { AboutBlock } from "./AboutBlock";

const AboutPage = () => {
  const dispatch = useAppDispatch();
  const { aboutList, error, isLoading } = useAppSelector(
    (state) => state.AboutDataSliceReducer,
  );

  const [firstElement, ...otherElements] = aboutList;

  useEffect(() => {
    dispatch(FetchAboutData());
  }, [dispatch]);

  return (
    <div className={"w-full h-auto"}>
      <div className={"flex justify-center w-full h-full px-4"}>
        <div className={"max-w-[1120px] w-full py-10 md:py-14 lg:py-20"}>
          <FetchErrorWrap error={error} isLoading={isLoading}>
            <div className={"flex flex-col items-start gap-6 w-full"}>
              {firstElement && (
                <AboutBlock
                  title={firstElement.title || ""}
                  text={firstElement.text}
                  isMainTitle={true}
                />
              )}

              {otherElements.map((element) => (
                <AboutBlock
                  key={element.text}
                  title={element.title || ""}
                  text={element.text}
                />
              ))}
            </div>
          </FetchErrorWrap>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
