import React from "react";
import Header from "../CommonComponet/Header";
import { PiRectangleFill } from "react-icons/pi";
import { plans } from "../utils/constant";

function HomePrice() {
  return (
    <div className="lg:mx-32 mx-5 flex flex-col gap-6 font-cairo" dir="rtl">
      <div className=" py-6">
        <Header title={"أسعارنا"} />
      </div>
      <div
        className="grid  lg:grid-cols-3 grid-col-1 lg:mx-24 justify-center items-center gap-16"
        dir="rtl"
      >
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col rounded-3xl border  p-8 py-24 pt-8 gap-5 bg-[#FB5607B2] text-white shadow-custom"
          >
            <h1 className="text-center font-bold text-2xl">{plan.title}</h1>
            <div className="mt-16 flex flex-col items-center">
              <p className="gap-3 flex leading-10 text-xl items-start">
                <PiRectangleFill size={10} className="mt-3" />
                عمولة {plan.commission} على كل عملية حجز
              </p>
              <button className="bg-[#FB5607] mt-12 py-2 w-full rounded-2xl px-8 text-white font-cairo">
                اشترك الان
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePrice;
