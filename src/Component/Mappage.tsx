import React from "react";
import Footer from "./Footer";

interface MapPageProps {
  onClose: () => void;
}

const MapPage: React.FC<MapPageProps> = ({ onClose }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-black text-white font-serif">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 text-white bg-gray-800 hover:bg-gray-600 rounded-full w-10 h-10 flex items-center justify-center"
        aria-label="Close Map"
      >
        ✕
      </button>

      <div className="flex flex-grow flex-row overflow-hidden">
        <div className="w-1/2 p-6 flex flex-col border-r border-gray-800 overflow-y-auto">
          <h2 className="text-xl font-semibold text-white mb-6">
            Find Boar's Head near you
          </h2>

          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Find Boar's Head near you"
              className="w-full bg-transparent border-b border-gray-500 py-3 px-2 text-white placeholder-gray-400 focus:outline-none"
            />
            <i className="fas fa-search absolute right-0 top-3 text-[#bbae96]"></i>
          </div>

          {/* Dropdown */}
          <div className="relative mb-10">
            <div className="relative w-full">
              <select className="w-full bg-black text-[#ab965d] border border-[#ab965d] py-3 px-4 pr-10 appearance-none font-serif text-base leading-tight focus:outline-none">
                <option value="cayman">Cayman Islands</option>
                <option value="dominican">Dominican Republic</option>
                <option value="panama">Panama</option>
                <option value="usa">United States of America</option>
              </select>

              {/* Custom Down Arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#ab965d]">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center"></div>
          </div>

          <div className="mt-auto text-center text-[#bbae96]">
            <p className="italic text-lg mb-4">No stores were found.</p>

            <p className="text-base leading-relaxed mb-4">
              Boar's Head is proud to be served in select supermarkets, gourmet
              stores and delicatessens throughout the USA.
            </p>

            <p className="text-base leading-relaxed mb-4">
              Please call our customer service team for more information.
            </p>

            <p className="mb-4">
              <a
                href="tel:8003526277"
                className="text-[#d6b46b] underline hover:text-[#f5d89b]"
              >
                (800) 352-6277
              </a>
            </p>

            <p className="text-sm uppercase tracking-wide font-semibold">
              Monday – Friday, 8 A.M. – 5 P.M. EST.
            </p>
          </div>
        </div>

        <div className="w-1/2 h-auto">
          <iframe
            title="Map"
            className="w-full h-full grayscale min-h-[500px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19859250.232929233!2d-95!3d40!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1718123456789"
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MapPage;
