import React, { FC } from "react";
import { UserSchema } from "entities/User/model/types";
import { useTranslation } from "react-i18next";

const CartBlock: FC<UserSchema> = ({ authData }) => {
  const { t } = useTranslation("profilePage");

  return (
    <div className={"flex flex-col gap-6 w-full"}>
      <h1 className={"text-2xl text-black font-medium md:text-3xl lg:text-4xl"}>
        {t("Shopping cart")}
      </h1>

      <div className={"w-full"}></div>
    </div>
  );
};

export default CartBlock;
