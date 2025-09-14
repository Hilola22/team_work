import { memo } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/elegant..svg";
import rect from "../../../assets/rectangle.svg";
import { LuInstagram, LuYoutube, LuFacebook } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-[#141718] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link to={"/"}>
              <img src={logo} alt="Logo" className="h-6" />
            </Link>
            <img
              src={rect}
              alt="divider"
              className="rotate-90 md:rotate-180 h-6"
            />
            <p className="text-sm text-[#E8ECEF]">Gift & Decoration Store</p>
          </div>

          <ul className="flex flex-col text-center md:flex-row gap-4 md:gap-10 text-sm">
            {["Home", "Shop", "Product", "Blog", "Contact Us"].map(
              (item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "")}`}
                    className="transition transform hover:text-gray-300 hover:-translate-y-0.5 active:translate-y-0.5"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
            
        <div className="border-t border-gray-700 pt-6 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col-reverse md:flex-row items-center gap-4 text-xs text-[#E8ECEF]">
            <p>Copyright © 2023 3legant. All rights reserved</p>
            <div className="flex gap-4 font-semibold text-white">
              <Link
                to={"/#"}
                className="transition transform hover:text-gray-300 hover:-translate-y-0.5 active:translate-y-0.5"
              >
                Privacy Policy
              </Link>
              <Link
                to={"/#"}
                className="transition transform hover:text-gray-300 hover:-translate-y-0.5 active:translate-y-0.5"
              >
                Terms of Use
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {[LuInstagram, LuFacebook, LuYoutube].map((Icon, index) => (
              <button
                key={index}
                className="transition transform hover:text-gray-300 hover:-translate-y-0.5 active:translate-y-0.5"
              >
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
