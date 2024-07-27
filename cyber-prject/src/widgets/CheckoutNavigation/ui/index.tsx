import { NavElement } from "./NavElement";
import { useEffect, useRef } from "react";
import AddressIcon from "shared/assets/images/Icon/address.svg";
import ShippingIcon from "shared/assets/images/Icon/shipping.svg";
import PaymentIcon from "shared/assets/images/Icon/payment.svg";

interface CheckoutNavigationProps {
  checkoutStep: string;
}

export const CheckoutNavigation = ({
  checkoutStep,
}: CheckoutNavigationProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      if (checkoutStep !== "1") {
        scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
      } else {
        scrollRef.current.scrollLeft = 0;
      }
    }
  }, [checkoutStep]);

  return (
    <div
      className={"w-full py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20"}
    >
      <div ref={scrollRef} className={"w-full overflow-x-scroll no-scrollbar"}>
        <div className={"flex items-center justify-between gap-5 w-full"}>
          <NavElement
            icon={AddressIcon}
            stepNum={"1"}
            title={"Address"}
            isActive={checkoutStep === "1"}
          />

          <NavElement
            icon={ShippingIcon}
            stepNum={"2"}
            title={"Shipping"}
            isActive={checkoutStep === "2"}
          />

          <NavElement
            icon={PaymentIcon}
            stepNum={"3"}
            title={"Payment"}
            isActive={checkoutStep === "3"}
          />
        </div>
      </div>
    </div>
  );
};
