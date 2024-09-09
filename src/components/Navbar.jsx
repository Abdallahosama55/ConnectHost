import React, { useState } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import Logo from '../assets/Logo.png';
import { HashLink } from "react-router-hash-link";

const Button = ({ onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className="text-[#000000] bg-[#FB5607] hover:bg-[#fb5407c6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
  >
    {children}
  </button>
);

const MenuItem = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="block py-2 px-3 md:p-0 text-[#000000] hover:text-[#FB5607] rounded md:bg-transparent"
      aria-current="page"
    >
      {children}
    </a>
  </li>
);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const smoothScroll = (el) => {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div dir="rtl" className="font-cairo overflow-x-hidden">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-12" alt="ConnectHost" />
          </a>
          <div className="flex gap-1 flex-row md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button>التسجيل</Button>
            <Button>الأدمن</Button>
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <HiX className="w-5 h-5" aria-hidden="true" /> : <HiMenuAlt1 className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
          <div
            className={`absolute top-16 left-0 w-full md:static md:w-auto md:top-auto md:left-auto transition-transform duration-300 ease-in-out transform ${isMenuOpen ? "translate-x-0" : "translate-x-full w-0 h-0"} md:translate-x-0 items-center justify-between md:flex md:items-center md:space-x-8`}
            id="navbar-cta"
          >
            {isMenuOpen ? (
              <ul className="flex flex-col gap-5 font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <HashLink to="#aboutus" scroll={smoothScroll}>
                من نحن
              </HashLink>
              <HashLink to="#pricePlan" scroll={smoothScroll}>
                أسعارنا
              </HashLink>
              <HashLink to="#service" scroll={smoothScroll}>
                خدماتنا
              </HashLink>
              <HashLink to="#usage" scroll={smoothScroll}>
                السياسة والاستخدام
              </HashLink>
              <HashLink to="#contactus" scroll={smoothScroll}>
                تواصل معنا
              </HashLink>
              </ul>
            ) : (
              ""
            )}

            <ul className="flex-col lg:flex hidden font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <MenuItem href="#">الرئيسية</MenuItem>
              <HashLink to="#aboutus" scroll={smoothScroll}>
                من نحن
              </HashLink>
              <HashLink to="#pricePlan" scroll={smoothScroll}>
                أسعارنا
              </HashLink>
              <HashLink to="#service" scroll={smoothScroll}>
                خدماتنا
              </HashLink>
              <HashLink to="#usage" scroll={smoothScroll}>
                السياسة والاستخدام
              </HashLink>
              <HashLink to="#contactus" scroll={smoothScroll}>
                تواصل معنا
              </HashLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
