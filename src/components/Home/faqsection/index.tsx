"use client";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
  delay?: number;
};

const faqs: FAQItem[] = [
  {
    question: "How to build a website?",
    answer:
      "Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.",
    delay: 0.1,
  },
  {
    question: "How long will it take to get a new website?",
    answer:
      "Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.",
    delay: 0.2,
  },
  {
    question: "Do you only create HTML websites?",
    answer:
      "Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.",
    delay: 0.3,
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.",
    delay: 0.4,
  },
  {
    question: "Will you maintain my site for me?",
    answer:
      "Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.",
    delay: 0.5,
  },
  {
    question: "I’m on a strict budget. Do you have any low cost options?",
    answer:
      "Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.",
    delay: 0.6,
  },
  {
    question: "Will you maintain my site for me?",
    answer:
      "Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.",
    delay: 0.7,
  },
  {
    question: "I’m on a strict budget. Do you have any low cost options?",
    answer:
      "Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.",
    delay: 0.8,
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-darkmode text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-md mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-2">FAQ</h1>
          <p className="text-primary text-lg font-medium">
            Frequently Asked Questions
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border-2 border-opacity-20 border-section rounded-lg overflow-hidden shadow-sm transition-all duration-300"
              style={{
                animation: `fadeInUp 0.4s ease ${item.delay}s forwards`,
                opacity: 0,
                transform: "translateY(20px)",
                animationFillMode: "forwards",
              }}
            >
              <button
                className={`w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg transition-colors ${
                  openIndex === index ? "bg-green-300 text-darkmode" : "bg-section bg-opacity-10 hover:bg-opacity-50 text-primary"
                }`}
                onClick={() => toggle(index)}
              >
                {item.question}
                <span
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`transition-all overflow-hidden duration-500 ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="px-6 py-4 bg-section bg-opacity-10 text-gray-400 border-t border-section border-opacity-50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple animation mimic of wow.js */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
