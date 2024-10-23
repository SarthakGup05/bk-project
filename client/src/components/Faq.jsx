import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

const Faq = () => {
  // Set up state to track which question is open
  const [activeIndex, setActiveIndex] = useState(null);

  // Spiritual FAQ data
  const faqData = [
    {
      question: "What is meditation, and how can I start?",
      answer: "Meditation is the practice of calming the mind to achieve a state of awareness and inner peace. To start, find a quiet space, sit comfortably, and focus on your breathing."
    },
    {
      question: "How can I connect with my inner self?",
      answer: "Connecting with your inner self requires mindfulness and regular self-reflection. Meditation, journaling, and spending time in nature are effective ways to deepen this connection."
    },
    {
      question: "What are the benefits of spiritual practices?",
      answer: "Spiritual practices like yoga, meditation, and prayer can reduce stress, increase self-awareness, and lead to a deeper sense of fulfillment and purpose in life."
    },
  ];

  // Function to toggle active question
  const toggleActive = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the current question
    } else {
      setActiveIndex(index); // Open the clicked question
    }
  };

  // Define transition styles for smooth opening/closing
  const duration = 300;
  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0,
    maxHeight: 0,
    overflow: 'hidden',
  };
  const transitionStyles = {
    entering: { opacity: 1, maxHeight: '200px' },
    entered: { opacity: 1, maxHeight: '200px' },
    exiting: { opacity: 0, maxHeight: 0 },
    exited: { opacity: 0, maxHeight: 0 },
  };

  return (
    <div className="container mx-auto py-16">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
      </div>

      {/* FAQ Items */}
      <div className="max-w-2xl mx-auto">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <button
              onClick={() => toggleActive(index)}
              className="w-full text-left flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-semibold">{item.question}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            <Transition in={activeIndex === index} timeout={duration} unmountOnExit>
              {(state) => (
                <div
                  style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                  }}
                  className="mt-2 text-gray-600"
                >
                  {item.answer}
                </div>
              )}
            </Transition>
          </div>
        ))}
      </div>

      {/* Fixed Appointment Button */}
      {/* <a
        href="/appointment"
        className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 uppercase font-semibold shadow-lg"
        style={{ writingMode: 'vertical-rl' }}
      >
        Book Appointment
      </a> */}
    </div>
  );
};

export default Faq;
