import { useTranslation } from "react-i18next";
import { Address } from "../../../entities";
import { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/hooks";
import { FetchUserAddress } from "../model";
import { FetchErrorWrap } from "shared/FetchErrorWrap";
import { cartActions } from "../../../pages/CartPage/model";
import AddAddressIcon from "shared/assets/images/Icon/add.svg";
import { AddNewAddress } from "../../AddNewAddress";

export const DeliveryAddress = () => {
  const [selectedAddress, setSelectedAddress] = useState<
    string | number | null
  >(null);

  const [visibleNewAddressForm, setVisibleNewAddressForm] = useState(false);

  const { t } = useTranslation("checkoutPage");
  const dispatch = useAppDispatch();
  const { authData, isLoading, error } = useAppSelector(
    (state) => state.userReducer,
  );

  const addresses = authData?.addresses;

  useEffect(() => {
    dispatch(FetchUserAddress());
  }, [dispatch]);

  const onSelectAddress = (addressId: string | number, fullAddress: string) => {
    setSelectedAddress(addressId);
    dispatch(cartActions.setFullAddressData(fullAddress));
  };

  return (
    <div className={"flex flex-col items-start gap-8 w-full"}>
      <p className={"text-[#17183B] text-xl font-semibold text-left"}>
        {t("Select Address")}
      </p>

      <div className={"flex flex-col gap-6 w-full"}>
        <div className={"flex flex-col gap-6 w-full"}>
          <FetchErrorWrap error={error} isLoading={isLoading}>
            {addresses?.map((address) => (
              <Address
                key={address.id}
                {...address}
                isSelected={address.id === selectedAddress}
                onSelect={() =>
                  onSelectAddress(address.id, address.full_address)
                }
              />
            ))}
          </FetchErrorWrap>
        </div>

        {!visibleNewAddressForm && (
          <div className={"flex items-center justify-center w-full"}>
            <div className={"add_address"}>
              <button
                type={"button"}
                className={
                  "flex flex-col items-center gap-2 bg-none border-none hover:scale-110"
                }
                onClick={() => setVisibleNewAddressForm(!visibleNewAddressForm)}
              >
                <img
                  src={AddAddressIcon}
                  className={"block min-w-6 min-h-6 max-w-6 max-h-6 z-50"}
                  alt={"Add Address"}
                  loading={"lazy"}
                  draggable={"false"}
                />

                <p className={"text-black text-sm text-center"}>
                  {t("Add New Address")}
                </p>
              </button>
            </div>
          </div>
        )}

        <AddNewAddress
          visibleNewAddressForm={visibleNewAddressForm}
          setVisibleNewAddressForm={setVisibleNewAddressForm}
        />
      </div>
    </div>
  );
};
