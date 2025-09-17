import { memo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { BsSearch } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import shopbag from "../../../assets/shopbag.svg";
import { LuAlignJustify } from "react-icons/lu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-black font-semibold" : "text-gray-700 hover:text-black";

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="relative z-50">
      <div className="container max-w-screen-xl mx-auto px-4">
        <nav>
          <div className="flex justify-between items-center py-[18px]">
            <div className="flex items-center gap-3">
              <button
                onClick={toggleMenu}
                className="md:hidden text-2xl focus:outline-none z-50 relative"
                aria-label="Toggle menu"
              >
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
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-semibold"
                      : "text-gray-700 hover:text-black"
                  }
                >
                  Blog
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

          {menuOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40 "
              onClick={() => setMenuOpen(false)}
            >
              <div
                className="absolute top-0 left-0 w-3/4 max-w-xs bg-white h-full p-6 py-10 shadow-lg transition duration-400"
                onClick={(e) => e.stopPropagation()}
              >
                <ul className="flex flex-col gap-6 mt-14">
                  <li>
                    <NavLink
                      to={"/"}
                      className={({ isActive }) =>
                        `${getNavLinkClass({ isActive })} block`
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/shop"}
                      className={({ isActive }) =>
                        `${getNavLinkClass({ isActive })} block`
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/blog"}
                      className={({ isActive }) =>
                        `${getNavLinkClass({ isActive })} block`
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/contact"}
                      className={({ isActive }) =>
                        `${getNavLinkClass({ isActive })} block`
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/account"}
                      className={({ isActive }) =>
                        `${getNavLinkClass({ isActive })} block`
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      Account
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);
