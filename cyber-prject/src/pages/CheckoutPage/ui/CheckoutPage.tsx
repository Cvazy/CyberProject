import { CheckoutNavigation, OrderSummary } from "widgets";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "shared/ui";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { DeliveryAddress, ShipmentMethod } from "features";
import { useAppSelector } from "../../../app/providers/StoreProvider/hooks";

const CheckoutPage = () => {
  const { t } = useTranslation("checkoutPage");
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const checkoutStep = searchParams.get("step");

  const [currentStep, setCurrentStep] = useState(Number(checkoutStep));

  const { priceSum } = useAppSelector((state) => state.cartReducer);

  const handleBackBtn = () => {
    if (currentStep !== 1) {
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
      navigate(`/checkout?step=${newStep}`);
    }
  };

  const handleNextBtn = () => {
    if (currentStep !== 3) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      navigate(`/checkout?step=${newStep}`);
    }
  };

  useEffect(() => {
    if (!priceSum) {
      navigate("/cart");
    }
  }, [navigate, priceSum]);

  return (
    <div className={"w-full h-auto"}>
      <div className={"flex justify-center w-full h-full px-4"}>
        <div className={"max-w-[1120px] w-full"}>
          <div className={"flex flex-col justify-between w-full h-full"}>
            <div className={"flex flex-col w-full"}>
              <CheckoutNavigation checkoutStep={checkoutStep || ""} />

              <div className={"pt-12 pb-16 w-full"}>
                {currentStep === 1 && <DeliveryAddress />}

                {currentStep === 2 && <ShipmentMethod />}

                {currentStep === 3 && <OrderSummary />}
              </div>
            </div>

            <div className={"pb-12 w-full"}>
              <div className={"flex items-center justify-end gap-6 w-full"}>
                <Button
                  className={
                    "h-16 w-full bg-white text-black border-black px-6 hover:bg-black hover:text-white md:w-auto md:px-20 disabled:opacity-40 disabled:cursor-not-allowed"
                  }
                  onClick={handleBackBtn}
                  disabled={currentStep === 1}
                >
                  {t("Back")}
                </Button>

                <Button
                  className={
                    "h-16 w-full bg-black text-white border-black px-6 hover:bg-white hover:text-black md:w-auto md:px-20"
                  }
                  onClick={
                    currentStep === 3 ? () => navigate("/pay") : handleNextBtn
                  }
                >
                  {t(`${currentStep === 3 ? "Pay" : "Next"}`)}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
