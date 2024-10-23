import React from "react";

const Marquealerts = () => {
  return (
    <div className="sticky top-0 z-50 bg-gray-100 border-b border-gray-300 py-1 overflow-hidden">
      <div className="flex animate-marquee space-x-8">
        {/* Duplicate alerts for continuous scroll */}
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            {/* Alert 1 */}
            <div className="inline-block flex-shrink-0 w-96 h-12">
              <span className="bg-red-500 text-white text-xs font-semibold rounded px-1 mr-2">
                New
              </span>
              <span className="font-bold text-blue-700 text-sm">
                Important: Info 1
              </span>
              {/* <span className="ml-2 text-gray-600 text-xs">
                Please be aware of potential disruptions between 10:00 AM and 2:00 PM.
              </span> */}
            </div>

            {/* Alert 2 */}
            <div className="inline-block flex-shrink-0 w-80 h-12">
              <span className="bg-red-500 text-white text-xs font-semibold rounded px-1 mr-2">
                Update
              </span>
              <span className="font-bold text-blue-700 text-sm">
                New Class launched: 3 : pm
              </span>
              {/* <span className="ml-2 text-gray-600 text-xs">
                Book your appointment by 30th October 2024 for a discount.
              </span> */}
            </div>

            {/* Alert 3 */}
            <div className="inline-block flex-shrink-0 w-80 h-12">
              <span className="bg-red-500 text-white text-xs font-semibold rounded px-1 mr-2">
                Reminder
              </span>
              <span className="font-bold text-blue-700 text-sm">
                Don’t forget the class timings.
              </span>
              {/* <span className="ml-2 text-gray-600 text-xs">
                Regular visits help keep your smile healthy!
              </span> */}
            </div>

            {/* Alert 4 */}
            <div className="inline-block flex-shrink-0 w-80 h-12">
              <span className="bg-red-500 text-white text-xs font-semibold rounded px-1 mr-2">
                Notice
              </span>
              <span className="font-bold text-blue-700 text-sm">
                Classes will be closed on 1st November 2024.
              </span>
              {/* <span className="ml-2 text-gray-600 text-xs">
                We apologize for any inconvenience.
              </span> */}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquealerts;
