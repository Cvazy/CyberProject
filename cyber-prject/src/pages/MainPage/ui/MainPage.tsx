import { MainBanner, SmallerBanners } from "entities/index";

const MainPage = () => {
  return (
    <div className={"w-full h-[revert]"}>
      <div className={"flex flex-col items-center w-full h-full"}>
        <MainBanner />
        <SmallerBanners />
      </div>
    </div>
  );
};

export default MainPage;
