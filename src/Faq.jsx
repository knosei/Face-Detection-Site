import React, { useState } from 'react';

const Faq = () => {
  const faqData = [
    {
      question: 'Question 1',
      answer:
        'Answer to Question 1',
    },
    {
      question: 'Question 2',
      answer:
        'Answer to Question 2',
    },
    {
      question: 'Question 3',
      answer:
        'Answer to Question 3',
    },
    {
        question: 'Question 4',
        answer:
          'Answer to Question 4',
    },
    {
        question: 'Question 5',
        answer:
          'Answer to Question 5',
    }
    // Add more FAQ data as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition duration-300"
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                  <svg
                    className={`w-6 h-6 transition transform ${
                      index === activeIndex ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {index === activeIndex && (
                  <div className="mt-4 text-gray-800">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
