import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Why is it considered necessary to register Agreement for Sale?",
      answer:
        "The Registration Act, 1908, the Transfer of Property Act, 1882 and the Real Estate (Regulation and Development) Act, 2016 mandates the registration...",
    },
    {
      question: "Do I need to pay stamp duty if the property is transferred or is a gift?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "What is Carpet Area?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "What are the documents a buyer would need from me?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "How can I qualify for exemptions on Tax?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "How soon would I receive a call from you after writing?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page bg-[#F6F5F5] px-4 md:px-6 lg:px-10 xl:px-20 py-20 ">
      {/* Title */}
      <div className="faq-title section-title w-full text-center pb-20">
        <h4 className="text-4xl font-medium pb-5 text-black">
          Frequently Asked Questions
        </h4>
        <p className="text-[#7a7a7a] font-normal text-lg w-full lg:w-[50%] mx-auto">
          You can use this guide to familiarize yourself with rules, laws and
          other important information relating to your property.
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="faq-wrapper grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="faq-main bg-white p-4 rounded-lg shadow-[0_10px_31px_0_rgba(7,152,255,0.09)] transition-all duration-300 flex flex-col"
            >
              <div
                className="faq-header cursor-pointer flex items-start justify-between gap-4"
                onClick={() => toggleAnswer(index)}
              >
                <h2 className="text-lg font-semibold text-black hover:text-blue-600 transition-colors duration-300">
                  {item.question}
                </h2>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`text-lg transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                className={`text-base text-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[500px] opacity-100 pt-3" : "max-h-0 opacity-0"
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
