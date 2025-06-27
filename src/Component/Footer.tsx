import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black mt-20 py-12 text-[#f7eedf] px-10 text-sm">
      <div className="mx-auto grid grid-cols-4 gap-4">
        <div>
          <img
            src="/img/boars-head-medallion-gold.png"
            alt="Footer Logo"
            className="w-24 mb-6"
          />
          <p className="mb-2">Sign Up for Our Dish Worthy.Newsletter</p>
          <button className="bg-[#a6192e] hover:bg-[#c3aa86] text-sm uppercase font-bold px-5 py-2 mt-3">
            Join Today →
          </button>
          <div className="flex gap-4 mt-6 text-[#bbae96] text-xl">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-x-twitter"></i>
          </div>
        </div>

        <div>
          <h4 className="uppercase mb-4 font-bold text-base">About Us</h4>
          <ul className="space-y-2">
            <li>
              <a href="/careers" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="/foodservices" className="hover:underline">
                Foodservices
              </a>
            </li>
            <li>
              <a href="/awards" className="hover:underline">
                Awards
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase mb-4 font-bold text-base">Resources</h4>
          <ul className="space-y-2">
            <li>
              <a href="/faqs" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/animal-wellbeing" className="hover:underline">
                Animal Well-Being
              </a>
            </li>
            <li>
              <a href="/become-purveyor" className="hover:underline">
                Become a Local Purveyor
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase mb-4 font-bold text-base">Contact Us</h4>
          <p className="mb-2">
            Please reach out Monday through Friday, from 8 a.m. to 5 p.m. ET.
          </p>
          <p className="text-[#ab965d] font-bold">(800) 352-6277</p>
        </div>
      </div>

      <div className="mt-10 pt-6 flex justify-evenly items-center">
        <div className="text-[#bbae96] text-sm">
          <span>© 2025 Boar’s Head Brand / All rights reserved.</span>
          <div className="space-x-4 justify-center flex text-center">
            <a href="/privacy-policy" className="underline">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="gap-10 flex">
          <div className="flex gap-4">
            <a href="/lang/en" className="underline">
              English
            </a>
            <a href="/lang/es" className="underline">
              Español
            </a>
          </div>
          <div>
            <a href="/sitemap" className="underline text-[#ab965d]">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
