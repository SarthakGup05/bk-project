import React from "react";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";

function LiteraturePage() {
  // Define the data array within the component
  const sectionsData = [
    {
      title: "Spiritual Literature 1",
      pdfs: [
        { name: "Intro to Meditation", url: "/pdfs/intro_to_meditation.pdf" },
        { name: "Path to Peace", url: "/pdfs/path_to_peace.pdf" },
      ],
    },
    {
      title: "Spiritual Literature 2",
      pdfs: [
        { name: "Inner Silence", url: "/pdfs/inner_silence.pdf" },
        { name: "Understanding Karma", url: "/pdfs/understanding_karma.pdf" },
      ],
    },
  ];

  // Flatten the PDF array with numbering
  const pdfsWithNumbering = sectionsData.flatMap((section) => section.pdfs);

  return (
    <div className="bg-white min-h-screen p-4 sm:p-8 text-black mt-28">
      {pdfsWithNumbering.map((pdf, index) => (
        <div
          key={index}
          className="my-4 p-4 flex items-center justify-between rounded-lg shadow-md bg-[#F7B777] hover:bg-[#e6a666] transition-all duration-300"
        >
          <span className="text-lg font-semibold text-white">
            {index + 1}. {pdf.name}
          </span>
          <div className="flex space-x-4">
            {/* View PDF Icon with Tooltip */}
            <a
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-white hover:text-gray-200 flex flex-col items-center"
            >
              <AiOutlineEye size={26} className="hover:scale-110 transition-transform duration-200" />
              <span className="tooltip text-xs text-white bg-black p-1 rounded opacity-0 transition-opacity duration-200 absolute top-8 text-center">
                View PDF
              </span>
            </a>
            {/* Download PDF Icon with Tooltip */}
            <a
              href={pdf.url}
              download
              className="relative text-white hover:text-gray-200 flex flex-col items-center"
            >
              <AiOutlineDownload size={26} className="hover:scale-110 transition-transform duration-200" />
              <span className="tooltip text-xs text-white bg-black p-1 rounded opacity-0 transition-opacity duration-200 absolute top-8 text-center">
                Download PDF
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LiteraturePage;
