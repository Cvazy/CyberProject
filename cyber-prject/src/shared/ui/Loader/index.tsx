import React from "react";
import "./index.css";
import { LoaderTwister } from "./LoaderTwister";

export const Loader = () => {
  return (
    <div
      className={"fixed top-0 left-0 w-full h-full bg-[#00000066] z-[999999]"}
    >
      <LoaderTwister />
    </div>
  );
};
