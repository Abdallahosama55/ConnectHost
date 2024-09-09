import React from "react";
import Header from "../CommonComponet/Header";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import box from "../../assets/box.svg";
import circle from "../../assets/circle.png";
function HomeContactUs() {
  // Validation Schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("الاسم مطلوب"),
    email: Yup.string()
      .email("البريد الإلكتروني غير صحيح")
      .required("البريد الإلكتروني مطلوب"),
    message: Yup.string().required("الرسالة مطلوبة"),
  });

  // Initialize Formik with validation schema
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema, // Apply the validation schema
    onSubmit: (values, { resetForm }) => {
      // Handle form submission
      console.log("Form Values:", values);

      // Trigger Toast notification on form submission
      toast.success("تم إرسال الرسالة بنجاح!", {
        position: "top-right",
      });

      // Optionally reset the form
      resetForm();
    },
  });

  return (
    <div className="font-cairo py-6 lg:mx-24" id="contactus">
      {/* Toast Container to display notifications */}
      <ToastContainer />

      <div className="py-10">
        <Header title="تواصل معنا" />
      </div>

      <div className="flex flex-col lg:mx-16 gap-5 lg:flex-row justify-between items-start bg-transparent text-white px-10">
        {/* Left Side: Form */}
        <div className="lg:w-1/2 w-full">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            {/* Name Input */}
            <div>
              <label className="block mb-2 text-orange-500" htmlFor="name">
                الاسم
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border-b-2 text-black border-orange-500 bg-transparent focus:outline-none"
                placeholder="الاسم"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 mt-1">{formik.errors.name}</div>
              ) : null}
            </div>

            {/* Email Input */}
            <div>
              <label className="block mb-2 text-orange-500" htmlFor="email">
                البريد الالكتروني
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border-b-2 text-black border-orange-500 bg-transparent focus:outline-none"
                placeholder="البريد الالكتروني"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 mt-1">{formik.errors.email}</div>
              ) : null}
            </div>

            {/* Message Input */}
            <div>
              <label className="block mb-2 text-orange-500" htmlFor="message">
                الرسالة
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 text-black border-b-2 border-orange-500 bg-transparent focus:outline-none"
                placeholder="اكتب رسالتك هنا"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500 mt-1">{formik.errors.message}</div>
              ) : null}
            </div>

            {/* Submit Button */}
            <div className=" " dir="rtl">
              <button
                type="submit"
                className="bg-[#FB5607] text-white py-2 px-6 rounded-lg flex items-center shadow-md hover:bg-orange-600 transition duration-300"
              >
                <span>إرسال الرسالة</span>
              </button>
              <img src={box} alt="contactus" className="w-[250px]" />
            </div>
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div className="lg:w-1/2 w-full bg-[#FB5607B2] text-white p-10  lg:min-h-[400px]   lg:mt-0 lg:ml-10 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
          <p className="mb-6">
            نحن هنا للمساعدة! لأي استفسارات أو دعم، يمكنكم التواصل معنا عبر:
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaPhoneAlt className="mr-3" />
              <span>+992345620</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-3" />
              <span>connecthost@gmail.com</span>
            </div>
            <div className="w-full flex justify-end relative">
              {" "}
              <img src={circle} alt="contact_us" className=" absolute z-50 right-[-60px] w-[200px]" />
            </div>
          </div>
          <div className="flex mt-6 space-x-4">
            <a
              href="#"
              className="text-2xl hover:text-white transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-2xl hover:text-white transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-2xl hover:text-white transition duration-300"
            >
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContactUs;
