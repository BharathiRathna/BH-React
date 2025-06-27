import React, { useEffect, useRef, useState } from "react";

const brandLinks = [
  "Our Story",
  "Counter Culture℠",
  "Where to Buy",
  "FAQs",
  "Foodservice",
];

const connectLinks = ["Contact Us", "Dish Worthy. Newsletter"];

const socialIcons = [
  { icon: "facebook", url: "#" },
  { icon: "instagram", url: "#" },
  { icon: "youtube", url: "#" },
  { icon: "pinterest", url: "#" },
  { icon: "x", url: "#" },
  { icon: "tiktok", url: "#" },
];

const OurBrandDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative font-['Times_New_Roman',serif]" ref={dropdownRef}>
      <button
        type="button"
        onMouseEnter={() => setIsOpen(true)}
        className="hover:underline uppercase  font-['Montserrat'] text-sm tracking-wide bg-transparent border-0 p-0 cursor-pointer"
      >
        <p className="font-montserrat">Our Brand</p>
      </button>

      {isOpen && (
        <div
          className="fixed top-[80px] sm:top-[100px] lg:top-[80px] bottom-[110px] left-0 right-0 bg-black border-t border-b border-[#bbae96] text-[#f7eedf] shadow-lg z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
              {/* Our Brand */}
              <div>
                <h3 className="uppercase text-[#ab965d] text-sm mb-4 font-semibold font-['EB_Garamond',serif]">
                  Our Brand
                </h3>

                <ul className="space-y-2 text-lm">
                  {brandLinks.map((link, i) => (
                    <li
                      key={i}
                      className="cursor-pointer transition-transform duration-200 ease-out hover:translate-x-1"
                    >
                      <a
                        href="/path"
                        className="block hover:underline transition-all"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h3 className="uppercase text-[#ab965d] text-sm mb-4 font-semibold">
                  Connect
                </h3>
                <ul className="space-y-2 text-lm">
                  {connectLinks.map((link, i) => (
                    <li
                      key={i}
                      className="transition-all duration-200 ease-in-out hover:translate-x-1 hover:underline cursor-pointer"
                    >
                      <a href="/path">{link}</a>
                    </li>
                  ))}
                </ul>

                {/* Social Icons */}
                <div className="flex items-center gap-4 mt-4">
                  {socialIcons.map((item, i) => (
                    <a
                      key={i}
                      href={item.url}
                      className="text-[#bbae96] hover:text-white"
                    >
                      <span className="sr-only">{item.icon}</span>
                      <i className={`fab fa-${item.icon} text-xl`}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Video */}
              <div className="relative overflow-hidden rounded-lg cursor-pointer group">
                <video
                  src="https://player.vimeo.com/progressive_redirect/playback/951218400/rendition/540p/file.mp4?loc=external&signature=ca93f0d39970cdb10cb87935816b8b9d0afee819fdc92a1a7c47f547259d3c3e"
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                ></video>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h4 className="text-[#ab965d] font-semibold text-sm uppercase">
                    Counter Culture...
                  </h4>
                  <p className="text-white text-xs">Guide to the Deli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurBrandDropdown;
