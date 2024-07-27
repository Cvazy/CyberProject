import { useState } from "react";
import SaveIcon from "shared/assets/images/Icon/save.svg";
import EditIcon from "shared/assets/images/Icon/edit.svg";
import RemoveIcon from "shared/assets/images/Icon/close.svg";
import { AddressItem } from "../../User/model/types";
import { EditAddress, RemoveAddress } from "../model";
import { useAppDispatch } from "app/providers/StoreProvider/hooks";

export const Address = ({
  id,
  title,
  phone,
  placeStatus,
  full_address,
  isSelected,
  onSelect,
}: AddressItem & { isSelected: boolean; onSelect: () => void }) => {
  const dispatch = useAppDispatch();
  const [disabledStatus, setDisabledStatus] = useState(true);

  const [addressTitle, setAddressTitle] = useState(title);
  const [addressPhone, setAddressPhone] = useState(phone);
  const [addressFullAddress, setFullAddress] = useState(full_address);

  const handleInputsStatus = () => {
    setDisabledStatus(!disabledStatus);
  };

  const onEditAddress = () => {
    dispatch(
      EditAddress({
        addressId: id,
        title: addressTitle,
        phone: addressPhone,
        full_address: addressFullAddress,
      }),
    ).then(() => setDisabledStatus(!disabledStatus));
  };

  const onRemoveAddress = () => {
    dispatch(RemoveAddress({ addressId: id }));
  };

  return (
    <div className={"bg-[#F6F6F6] rounded-lg w-full"}>
      <div
        className={
          "flex flex-col items-center gap-4 p-6 w-full sm:gap-2 sm:flex-row"
        }
      >
        <div
          className={"flex flex-col items-start gap-4 w-full"}
          onClick={disabledStatus ? onSelect : () => {}}
        >
          <div
            className={
              "flex flex-col-reverse items-start justify-start gap-4 w-full md:items-center md:flex-row"
            }
          >
            <label className={"flex items-start justify-start gap-4 w-full"}>
              <input
                className={"min-w-6 min-h-6 max-w-6 max-h-6 accent-black"}
                type={"radio"}
                checked={isSelected}
                onChange={onSelect}
              />

              <textarea
                className={`textarea_not_corner block text-[#17183B] text-base text-left w-full border border-solid border-black rounded p-1 min-w-fit ${disabledStatus ? "min-h-5 lg:max-h-5" : "min-h-10"} h-fit disabled:p-0 disabled:border-none`}
                disabled={disabledStatus}
                name={`title-${id}`}
                onChange={(event) => setAddressTitle(event.target.value)}
                defaultValue={addressTitle}
              ></textarea>
            </label>

            <div className={"bg-black rounded"}>
              <div
                className={
                  "py-1 px-2 text-center text-white text-xs font-semibold text-nowrap uppercase"
                }
              >
                {placeStatus}
              </div>
            </div>
          </div>

          <div className={"flex flex-col items-start gap-2 w-full sm:pl-10"}>
            <textarea
              className={`textarea_not_corner block text-[#17183B] text-base text-left w-full border border-solid border-black rounded p-1 min-w-fit ${disabledStatus ? "min-h-5 lg:max-h-5" : "min-h-10"} h-fit disabled:p-0 disabled:border-none`}
              disabled={disabledStatus}
              name={`full_address-${id}`}
              onChange={(event) => setFullAddress(event.target.value)}
              defaultValue={addressFullAddress}
            ></textarea>

            <textarea
              className={`textarea_not_corner block text-[#17183B] text-base text-left w-full border border-solid border-black rounded p-1 min-w-fit ${disabledStatus ? "min-h-5 lg:max-h-5" : "min-h-10"} h-fit disabled:p-0 disabled:border-none`}
              disabled={disabledStatus}
              name={`phone-${id}`}
              onChange={(event) => setAddressPhone(event.target.value)}
              defaultValue={addressPhone}
            ></textarea>
          </div>
        </div>

        <div className={"flex items-center gap-6 flex-nowrap"}>
          <button
            type={"button"}
            onClick={disabledStatus ? handleInputsStatus : onEditAddress}
            className={"bg-none border-none hover:scale-110"}
          >
            <img
              src={disabledStatus ? EditIcon : SaveIcon}
              className={"min-w-6 min-h-6 max-w-6 max-h-6"}
              alt={"Edit"}
              loading={"lazy"}
              draggable={"false"}
            />
          </button>

          <button
            type={"button"}
            className={"bg-none border-none hover:scale-105"}
          >
            <img
              src={RemoveIcon}
              className={"min-w-6 min-h-6 max-w-6 max-h-6"}
              alt={"Remove"}
              loading={"lazy"}
              draggable={"false"}
              onClick={onRemoveAddress}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
