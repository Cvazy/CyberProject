import { ContactType } from "../../model";
import { useTranslation } from "react-i18next";

interface ContactPageBlockProps {
  propsData: ContactType[];
}

export const ContactPageBlock = ({ propsData }: ContactPageBlockProps) => {
  const { t } = useTranslation("contactsPage");

  return (
    <div className={"rounded-lg bg-[#F6F6F6] w-full"}>
      <div className={"w-full p-4 sm:p-6 lg:p-8"}>
        <div className={"flex flex-col items-start gap-4 w-full"}>
          {propsData.map(({ title, value }) => (
            <div
              key={title}
              className={"flex flex-col items-start gap-1 w-full sm:flex-row"}
            >
              <p className={"text-base text-black font-semibold text-left"}>
                {t(title)}:
              </p>

              <p className={"text-base text-black text-left"}>{t(value)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
