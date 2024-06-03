import React from "react";
import samosa from "../image/samosa.webp";
import samosaclient from "../image/samosaclient.webp";
const Stockout = () => {
  return (
    <div className="my-24 mx-12 flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-12">
      <div className="flex flex-col md:flex-col items-center justify-center lg:flex-row lg:justify-between space-x-8 space-y-8 lg:space-x-8">
        <div className="bg-pink-btn p-12 rounded-2xl flex items-center justify-center">
          <img
            className=" border border-gray-300 rounded-xl"
            src={samosa}
            alt=""
          />
        </div>
        <div className="flex flex-col space-y-8">
          <div className="text-gray-800 lg:text-xl">
            Startups and office teams often struggle with planning and managing
            snacks for events and breaks. Samosa Party steps in to automate this
            process, ensuring that everyone gets their favorite samosas without
            the hassle of manual orders. By predicting peak snack times and
            streamlining deliveries, Samosa Party keeps your team satisfied and
            productive. This directly boosts team morale and efficiency, which
            is the key value Samosa Party unlocks for countless offices. Founded
            by passionate food enthusiasts, the Samosa Party team has distilled
            their culinary expertise into a seamless snack solution for modern
            workplaces.
          </div>
          <div className="flex flex-col space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div>
                  <img
                    className="rounded-full h-16"
                    src={samosaclient}
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold">Diksha Pande</span>
                  <span>Co-founder, Samosa Party</span>
                  <div className="flex space-x-8 mr-10 ml-0 mt-4">
                    <img
                      className="rotate-180 h-12"
                      src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
                      alt=""
                    />
                    <img
                      className="h-12"
                      src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <img
                  className="h-16"
                  src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a48634ed59555eb9125770_samosa.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-start space-x-6 ">
              <div className="flex flex-col items-center bg-purple-100 py-4 px-12 rounded-xl">
                <span className="text-2xl text-pink-400">Upto 95%</span>
                <span className="text-gray-800">Demand Fulfilment</span>
              </div>

              <div className="flex flex-col items-center justify-stretch bg-purple-100 py-4 px-12 rounded-xl">
                <span className="text-2xl text-pink-400">{"<"}3%</span>
                <span className="text-gray-800">Daily Stock-out</span>
              </div>
              <div>
                <button className="flex flex-col items-center justify-stretch bg-purple-100 py-8 px-16 rounded-3xl">
                  <span className="text-2xl text-pink-400">Read story</span>{" "}
                  <span className="text-gray-800"> {" -->"} </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stockout;
