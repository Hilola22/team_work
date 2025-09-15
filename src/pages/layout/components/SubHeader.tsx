import { memo, useState } from 'react';
import precentimg from "../../../assets/percent.svg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx"; 

const SubHeader = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="bg-gray-100 relative">
      <div className="container flex justify-center items-center gap-4 py-2 px-3 ">
        <div className="flex  justify-center items-center gap-3">
          <img
            src={precentimg}
            alt="discount"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          <h2 className="font-semibold text-xs sm:text-sm md:text-base">
            30% off storewide — Limited time!
          </h2>
          <div className="hidden md:flex items-center gap-2 text-blue-600 border-b border-blue-600 text-xs sm:text-sm">
            <Link
              className="flex items-center justify-center gap-1 sm:gap-2"
              to={"/"}
            >
              Shop Now <FaArrowRight />
            </Link>
          </div>
        </div>

        <button
          onClick={() => setShow(false)}
          className="text-gray-600 hover:text-black text-lg sm:text-xl absolute right-[16px]"
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default memo(SubHeader);
