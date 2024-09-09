import React from "react";
import illustration from "../../assets/pic.png";
import Logo from "../../assets/Logo.png";
function HomeAbout() {
  return (
    <div
      className="lg:mx-16 mx-5 grid lg:grid-cols-2 grid-cols-1 lg:gap-24 gap-8 justify-center items-center font-cairo "
      dir="rtl"
    >
      <div className=" w-full h-full py-12  lg:order-1 order-2">
        <img
          src={illustration}
          alt="illustration"
          className=" lg:w-[580px] lg:h-[500px] "
        />
      </div>
      <div className=" w-full h-full items-center justify-center flex flex-col gap-5  lg:order-2 order-1">
        <img src={Logo} alt="illustration" className="w-[424px] h-[198px]" />
        <p className=" text-black mx-auto leading-10 text-lg">
          هي منصة متكاملة لإدارة حجوزات الوحدات السكنية المدرجة على منصات مثل
          جاذر إن وAirbnb. نحن نسعى لجعل عملية إدارة الحجوزات أسهل وأكثر كفاءة
          لأصحاب العقارات، مع ضمان أعلى معايير الجودة ورضا النزلاء.
        </p>
      </div>
    </div>
  );
}

export default HomeAbout;
