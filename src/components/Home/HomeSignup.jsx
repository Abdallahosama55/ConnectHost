import React from "react";
import { PiRectangleFill } from "react-icons/pi";

function HomeSignup() {
  const services = [
    {
      title: "قم بإنشاء حساب : ",
      description: " سجل الآن على موقعنا.",
    },
    {
      title: "الربط مع المنصات :",
      description: "سيتم الربط مع منصات الحجز بعد موافقتكم.",
    },
    {
      title: "إدارة الحجوزات :",
      description:
        " اترك لنا مهمة إدارة حجوزاتك، وركز على تعزيز تجربتك الخاصة.",
    },
  ];

  return (
    <div className=" font-cairo bg-[#FB5607B2] text-[#FFFFFF] lg:mt-56 mt-12 ">
      <div className=" flex flex-col gap-5 lg:mx-16 mx-5 py-8 " dir="rtl">
        <h1 className=" font-cairo text-white text-4xl font-bold">التسجيل</h1>
        <ul className="flex flex-col gap-5 lg:mt-8">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex items-center gap-4 lg:text-2xl flex-wrap"
            >
              <PiRectangleFill size={10} />
              <strong>{service.title}</strong> {service.description}
            </li>
          ))}
        </ul>
        <div>
          {" "}
          <button className=" rounded-lg bg-[#FB5607] py-3 px-12 text-white mt-5">سجل الان</button>
        </div>
      </div>
    </div>
  );
}

export default HomeSignup;
