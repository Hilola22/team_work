import { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { BsSearch } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import shopbag from "../../../assets/shopbag.svg";
import { LuAlignJustify } from "react-icons/lu";

const Header = () => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-black font-semibold" : "text-gray-700 hover:text-black";
  return (
    <header>
      <div className="container max-w-screen-xl mx-auto px-4">
        <nav>
          <div className="flex justify-between items-center py-[18px]">
            <div className="flex items-center gap-3">
              <button className="md:hidden text-2xl">
                <LuAlignJustify size={24} />
              </button>
              <Link to={"/"}>
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <ul className="hidden md:flex gap-8 lg:flex">
              <li>
                <NavLink to={"/"} className={getNavLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/shop"} className={getNavLinkClass}>
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to={"/products"} className={getNavLinkClass}>
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} className={getNavLinkClass}>
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <div className="flex items-center gap-3">
              <Link
                to="/search"
                className="hidden md:block transition-transform duration-200 hover:-translate-y-1 hover:text-gray-800"
              >
                <BsSearch size={20} />
              </Link>

              <Link
                to="/account"
                className="hidden md:block transition-transform duration-200 hover:-translate-y-1 hover:text-gray-800"
              >
                <MdOutlineAccountCircle size={24} />
              </Link>

              <Link
                to="/cart"
                className="flex items-center transition-transform duration-200 hover:-translate-y-1"
              >
                <img className="size-7 font-bold" src={shopbag} alt="Cart" />
                <div className="w-5 h-5 flex items-center justify-center bg-black rounded-full text-white text-xs ml-[2px]">
                  2
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);