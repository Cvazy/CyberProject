import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui";
import ArrowIcon from "shared/assets/images/Icon/arrow_down.svg";
import { PhoneInput } from "../../../entities";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addressActions, newAddressScheme, FetchNewAddress } from "../model";
import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/hooks";

interface AddNewAddressProps {
  visibleNewAddressForm: boolean;
  setVisibleNewAddressForm: Dispatch<SetStateAction<boolean>>;
}

export const AddNewAddress = ({
  visibleNewAddressForm,
  setVisibleNewAddressForm,
}: AddNewAddressProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      addressTitle: "",
      fullAddress: "",
      phoneNumber: "",
    },
    resolver: yupResolver(newAddressScheme),
  });

  const { t } = useTranslation("checkoutPage");
  const dispatch = useAppDispatch();

  const { addressTitle, fullAddress, phoneNumber } = useAppSelector(
    (state) => state.addressReducer,
  );

  const [addressCategory, setAddressCategory] = useState("HOME");

  const [categoriesVisible, setCategoriesVisible] = useState(false);

  const categories = [
    {
      id: 1,
      title: "HOME",
    },
    {
      id: 2,
      title: "OFFICE",
    },
  ];

  const formError =
    errors?.addressTitle?.message ||
    errors?.fullAddress?.message ||
    errors?.phoneNumber?.message;

  const onChangeAddressTitle = useCallback(
    (value: string) => {
      dispatch(addressActions.setAddressTitle(value));
      setValue("addressTitle", value);
    },
    [dispatch, setValue],
  );

  const onChangeFullAddress = useCallback(
    (value: string) => {
      dispatch(addressActions.setFullAddress(value));
      setValue("fullAddress", value);
    },
    [dispatch, setValue],
  );

  const onChangePhoneNumber = useCallback(
    (value: string) => {
      dispatch(addressActions.setPhoneNumber(value));
      setValue("phoneNumber", value);
    },
    [dispatch, setValue],
  );

  const handleCategories = (value: string) => {
    setAddressCategory(value);
    setCategoriesVisible(false);
  };

  const onSubmitNewAddress = useCallback(() => {
    dispatch(
      FetchNewAddress({
        title: addressTitle,
        full_address: fullAddress,
        phone: phoneNumber,
        placeStatus: addressCategory,
      }),
    );

    if (!formError) {
      setVisibleNewAddressForm(false);
    }
  }, [
    dispatch,
    addressTitle,
    fullAddress,
    phoneNumber,
    addressCategory,
    formError,
    setVisibleNewAddressForm,
  ]);

  return (
    <div
      className={`bg-[#F6F6F6] rounded-lg w-full ${visibleNewAddressForm ? "max-h-[750px]" : "max-h-0"} overflow-hidden`}
    >
      <form
        className={"flex flex-col items-start gap-3 p-4 w-full"}
        onSubmit={handleSubmit(onSubmitNewAddress)}
      >
        <label
          className={
            "flex flex-col items-start gap-1 w-full text-sm font-medium text-[#545454]"
          }
        >
          {t("New Address Title")}

          <textarea
            className={`textarea_not_corner block text-[#17183B] text-base text-left w-full border border-solid border-black rounded p-2 min-w-full min-h-10 h-fit`}
            defaultValue={addressTitle}
            placeholder={t("New Address Title")}
            {...register("addressTitle")}
            onChange={(event) => onChangeAddressTitle(event.target.value)}
          ></textarea>
        </label>

        <label
          className={
            "flex flex-col items-start gap-1 w-full text-sm font-medium text-[#545454]"
          }
        >
          {t("Full Address")}

          <textarea
            className={`textarea_not_corner block text-[#17183B] text-base text-left w-full border border-solid border-black rounded p-2 min-w-full min-h-10 h-fit`}
            defaultValue={fullAddress}
            placeholder={t("Full Address")}
            {...register("fullAddress")}
            onChange={(event) => onChangeFullAddress(event.target.value)}
          ></textarea>
        </label>

        <label
          className={
            "flex flex-col items-start gap-1 w-full text-sm font-medium text-[#545454]"
          }
        >
          {t("Phone number")}

          <PhoneInput
            inputRef={() => {}}
            value={phoneNumber}
            {...register("phoneNumber")}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onChangePhoneNumber(event.target.value)
            }
          />
        </label>

        <label
          className={
            "flex flex-col items-start gap-1 w-full text-sm font-medium text-[#545454]"
          }
        >
          {t("Address category")}

          <div
            className={`bg-white ${categoriesVisible ? "rounded-t" : "rounded"} border border-solid border-black relative w-full`}
          >
            <div className={"flex flex-col items-start w-full cursor-pointer"}>
              <div
                className={"flex items-center justify-between gap-6 w-full p-2"}
                onClick={() => setCategoriesVisible(!categoriesVisible)}
              >
                <p className={"text-[#17183B] text-base text-left"}>
                  {t(addressCategory)}
                </p>

                <img
                  src={ArrowIcon}
                  className={`block min-w-6 min-h-6 max-w-6 max-h-6 ${categoriesVisible ? "rotate-180" : ""}`}
                  alt={"Arrow"}
                  loading={"lazy"}
                  draggable={"false"}
                />
              </div>

              <input
                type={"hidden"}
                name={"address_category"}
                value={addressCategory}
              />

              <div
                className={`absolute top-10 flex flex-col items-start bg-white rounded-b w-full overflow-hidden ${categoriesVisible ? "max-h-60 border border-solid border-black" : "max-h-0"}`}
              >
                {categories.map(({ id, title }, index) => (
                  <p
                    key={id}
                    onClick={() => handleCategories(title)}
                    className={`text-[#17183B] text-base text-left ${index % 2 === 0 ? "border-b border-solid border-black" : ""} w-full px-2 py-1 hover:bg-[#F6F6F6]`}
                  >
                    {t(title)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </label>

        {formError && (
          <p className={"text-base font-medium text-[#c73131]"}>
            {t(formError)}
          </p>
        )}

        <div
          className={
            "flex flex-col items-center justify-center gap-4 w-full sm:flex-row"
          }
        >
          <Button
            className={
              "h-12 w-full bg-white text-black border-black px-6 hover:bg-black hover:text-white md:w-auto md:px-20 disabled:opacity-40 disabled:cursor-not-allowed"
            }
            onClick={() => setVisibleNewAddressForm(false)}
          >
            {t("Close")}
          </Button>

          <Button
            type={"submit"}
            className={
              "h-12 w-full bg-black text-white border-black px-6 hover:bg-white hover:text-black md:w-auto md:px-20"
            }
          >
            {t("Save")}
          </Button>
        </div>
      </form>
    </div>
  );
};
