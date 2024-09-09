import React from "react";
import { PiRectangleFill } from "react-icons/pi";
import Header from "../CommonComponet/Header";
import line from "../../assets/lines.svg"
import { servicesSection } from "../utils/constant";


const OurServices = () => {
  return (
    <div className="font-cairo lg:mx-16 mx-5" dir="rtl">
      <Header title="خدماتنا" />

      <div className=" flex lg:flex-row flex-col justify-between">
        <ul className="flex flex-col gap-5 lg:mt-8">
          {servicesSection.map((service, index) => (
            <li key={index} className="flex items-center gap-4 lg:text-xl flex-wrap">
              <PiRectangleFill size={10} />
              <strong>{service.title}</strong> {service.description}
            </li>
          ))}
        </ul>

        <div className=" lg:absolute left-[-60px]   lg:flex hidden" > <img src={line} alt="line"/></div>
      </div>
    </div>
  );
};

export default OurServices;
