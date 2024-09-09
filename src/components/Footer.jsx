import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer
      className="bg-white py-8 font-cairo border-t border-[#FB5607] mt-12"
      dir="rtl"
    >
      <div className="mx-12 lg:flex-row bg flex-col flex justify-center items-start gap-5">
        <div className="w-full lg:w-auto flex justify-center">
          {" "}
          <img src={logo} alt="connecthost" className="w-[183px] h-[100px]" />
        </div>
        <div className="text-[#FB5607] font-semibold">
          <p className="text-lg lg:pe-56 py-3 leading-9">
            حن نسعى لجعل عملية إدارة الحجوزات أسهل وأكثر كفاءة لأصحاب العقارات،
            مع ضمان أعلى معايير الجودة ورضا النزلاء.
          </p>
        </div>

        {/* Links Section */}
        <div className="text-[#FB5607] font-semibold">
          <h3 className="text-xl font-bold pb-6">المساعدة</h3>
          <a href="/about" className="block hover:text-orange-600">
            من نحن
          </a>
          <a href="/privacy" className="block hover:text-orange-600">
            سياسة الخصوصية والاستخدام
          </a>
        </div>

        {/* Contact Section */}
        <div className="text-[#FB5607] font-semibold">
          <h3 className="text-xl font-bold pb-6">تواصل معنا</h3>
          <p className="flex items-center gap-2">
            <FaEnvelope className="m-2" />
            <a
              href="mailto:support@connecthost.io"
              className="hover:text-orange-600"
            >
              support@connecthost.io
            </a>
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="m-2" />
            <a href="tel:87856" className="hover:text-orange-600">
              87856
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-300 lg:mx-48 mt-8 pt-4 text-center text-[#FB5607]">
        <p>2024 جميع الحقوق محفوظة لموقع <span className=" font-extrabold">كونكت هوست</span> </p>
      </div>
    </footer>
  );
};

export default Footer;
