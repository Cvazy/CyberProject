import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/hooks";
import { useEffect } from "react";
import { FetchContacts, FetchDocuments, FetchNetworks } from "../model";
import { FetchErrorWrap } from "shared/FetchErrorWrap";
import { ContactPageBlock } from "./ContactPageBlock";
import { NetworkBlock } from "./NetworkBlock";

const ContactPage = () => {
  const dispatch = useAppDispatch();
  const {
    contactsData,
    documentsData,
    networksData,
    isLoadingContacts,
    isLoadingNetworks,
    isLoadingDocuments,
    errorContacts,
    errorDocuments,
    errorNetworks,
  } = useAppSelector((state) => state.ContactDataSliceReducer);

  useEffect(() => {
    dispatch(FetchContacts());
    dispatch(FetchDocuments());
    dispatch(FetchNetworks());
  }, [dispatch]);

  return (
    <div className={"w-full h-auto"}>
      <div className={"flex justify-center w-full h-full px-4"}>
        <div className={"max-w-[1120px] w-full py-10 md:py-14 lg:py-20"}>
          <div className={"flex flex-col items-center gap-8 w-full"}>
            <div
              className={
                "grid gap-4 min-h-16 w-full md:gap-6 lg:grid-cols-2 lg:gap-8"
              }
            >
              <FetchErrorWrap
                error={errorContacts}
                isLoading={isLoadingContacts}
              >
                <ContactPageBlock propsData={contactsData} />
              </FetchErrorWrap>

              <FetchErrorWrap
                error={errorDocuments}
                isLoading={isLoadingDocuments}
              >
                <ContactPageBlock propsData={documentsData} />
              </FetchErrorWrap>
            </div>

            <div
              className={
                "flex items-center flex-wrap min-h-12 justify-between gap-4 w-full md:gap-6"
              }
            >
              <FetchErrorWrap
                error={errorNetworks}
                isLoading={isLoadingNetworks}
              >
                {networksData.map(({ title, contact, icon }) => (
                  <NetworkBlock
                    key={icon}
                    title={title}
                    contact={contact}
                    icon={icon}
                  />
                ))}
              </FetchErrorWrap>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
