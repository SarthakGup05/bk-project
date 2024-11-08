import React, { useState } from "react";

function LiteraturePage() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Define the data array within the component
  const sectionsData = [
    {
      title: "Spiritual Literature 1",
      description: "5 PDFs available",
      pdfs: [
        { name: "Intro to Meditation", url: "/pdfs/intro_to_meditation.pdf" },
        { name: "Path to Peace", url: "/pdfs/path_to_peace.pdf" },
      ],
    },
    {
      title: "Spiritual Literature 2",
      description: "3 PDFs available",
      pdfs: [
        { name: "Inner Silence", url: "/pdfs/inner_silence.pdf" },
        { name: "Understanding Karma", url: "/pdfs/understanding_karma.pdf" },
      ],
    },
  ];

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen p-4 sm:p-8 text-black mt-28">
      {sectionsData.map((section, index) => (
        <div
          key={index}
          className={`my-6 rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
            activeIndex === index ? "bg-[#F7B777]" : "bg-slate-100"
          }`}
        >
          <div
            className="flex justify-between items-center px-4 sm:px-6 py-4 cursor-pointer transition-colors duration-300"
            onClick={() => toggleSection(index)}
          >
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold">{`0${index + 1}`}</span>
              <h3 className="text-lg font-semibold">{section.title}</h3>
            </div>
            <span className="transition-transform duration-300">
              {activeIndex === index ? "▲" : "▼"}
            </span>
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              activeIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="bg-gray-100 px-4 sm:px-6 py-4">
              <p className="mb-2 text-sm">{section.description}</p>
              <ul>
                {section.pdfs.map((pdf, i) => (
                  <li key={i} className="text-sm mb-2">
                    <a
                      href={pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F7B777] underline"
                    >
                      {pdf.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LiteraturePage;
