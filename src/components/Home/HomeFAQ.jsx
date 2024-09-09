import React, { useState } from "react";
import Header from "../CommonComponet/Header";
import { cancellationPolicy, commitments, definitions, liability, modifications, privacyPolicy, services, termsOfUse } from "../utils/constant";

function HomeFAQ() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };


  return (
    <div className="lg:mx-32 font-cairo " dir="rtl">
      <div className=" pt-4">
        <Header title="السياسة والأحكام" />
      </div>
      <main className="lg:mx-28 mx-6">
        <div className="leading-8 text-lg">
          <h2 className="font-bold text-xl py-2">
            مرحبًا بكم في منصة كونكت هوست !
          </h2>
          <p>
            من خلال استخدامك لخدماتنا، فإنك توافق على الالتزام بالشروط والأحكام
            التالية. نوصي بقراءة هذه السياسة بعناية لضمان فهمك الكامل لحقوقك
            وواجباتك.
          </p>

          {showMore && (
            <div className="mt-4">
              <h3 className="font-bold">1. التعريفات:</h3>
              {definitions.map((definition, index) => (
                <p key={index}>
                  <span className="font-bold">{definition.title}: </span>
                  {definition.description}
                </p>
              ))}

              <h3 className="font-bold mt-4 text-xl py-3">
                2. خدمات كونكت هوست:
              </h3>
              <ul className="list-disc ml-5">
                {services.map((service, index) => (
                  <li
                    key={index}
                    style={{ "list-style-type": "square" }}
                    className="ms-8"
                  >
                    {service}
                  </li>
                ))}
              </ul>

              <h3 className="font-bold mt-4 text-xl py-3">
                3. شروط الاستخدام:
              </h3>
              {termsOfUse.map((term, index) => (
                <ul className="list-disc" key={index}>
                 <li className=" ms-8" style={{ "list-style-type": "square" }}>
                    <span className="font-bold">{term.title}: </span>
                    {term.description}
                  </li>
                </ul>
              ))}

              <h3 className="font-bold mt-4 text-xl py-3">
                4. التزامات المضيف والنزيل:
              </h3>
              {commitments.map((commitment, index) => (
                <ul key={index} className="list-disc flex items-center">
                  <li className=" ms-8" style={{ "list-style-type": "square" }}>
                    {" "}
                    {commitment.description}{" "}
                  </li>
                </ul>
              ))}

              <h3 className="font-bold mt-4 text-xl py-3">
                5. شروط الإلغاء والاسترداد:
              </h3>
              {cancellationPolicy.map((policy, index) => (
                <ul key={index} className="list-disc flex items-center">
                  <li className=" ms-8" style={{ "list-style-type": "square" }}>
                    {" "}
                    {policy.description}{" "}
                  </li>
                </ul>
              ))}

              <h3 className="font-bold mt-4 text-xl py-3">
                6. سياسة الخصوصية:
              </h3>
              {privacyPolicy.map((policy, index) => (
                <ul key={index} className="list-disc flex items-center">
                  <li className=" ms-8" style={{ "list-style-type": "square" }}>
                    {" "}
                    {policy.description}{" "}
                  </li>
                </ul>
              ))}

              <h3 className="font-bold mt-4 text-xl py-3">
                7. حدود المسؤولية:
              </h3>
              {liability.map((item, index) => (
                <ul key={index} className="list-disc flex items-center">
                  <li className=" ms-8" style={{ "list-style-type": "square" }}>
                    {" "}
                    {item.description}{" "}
                  </li>
                </ul>
              ))}

              <h3 className="font-bold mt-4 text-xl py-3">
                8. التعديلات على الشروط:
              </h3>
              {modifications.map((item, index) => (
                <ul key={index} className="list-disc flex items-center">
                  <li className=" ms-8" style={{ "list-style-type": "square" }}>
                    {" "}
                    {item.description}{" "}
                  </li>
                </ul>
              ))}
            </div>
          )}

          <span
            onClick={handleShowMore}
            className="underline text-[#FB5607] font-semibold cursor-pointer"
          >
            {showMore ? "إخفاء النص" : "قراءة المزيد"}
          </span>
        </div>
      </main>
    </div>
  );
}

export default HomeFAQ;
