import { memo } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import article1 from "../../../../assets/articele1.jpg";
import article2 from "../../../../assets/article2.jpg";
import article3 from "../../../../assets/article3.jpg";

const Aricle = () => {
  return (
    <div className="container mx-auto pt-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[40px] font-medium">Articles</h2>
        <Link
          className="flex items-center gap-2 text-[16px] border-b-2 border-black py-2 font-medium"
          to={"#"}
        >
          More Articles <FaArrowRight />
        </Link>
      </div>
      <div className="grid gap-[25px] w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        <div className="cart">
          <img
            className="min-w-[337px] h-[325px] object-cover mb-6"
            src={article1}
            alt=""
          />
          <h4 className="font-medium">7 ways to decor your home</h4>
          <Link
            className="max-w-[110px] flex items-center gap-2 text-[16px] border-b-2 border-black py-2 font-medium"
            to={"#"}
          >
            Read More <FaArrowRight />
          </Link>
        </div>
        <div className="cart">
          <img
            className="min-w-[337px] h-[325px] object-cover mb-6"
            src={article2}
            alt=""
          />
          <h4 className="font-medium">Kitchen organization</h4>
          <Link
            className="max-w-[110px] flex items-center gap-2 text-[16px] border-b-2 border-black py-2 font-medium"
            to={"#"}
          >
            Read More <FaArrowRight />
          </Link>
        </div>
        <div className="cart">
          <img
            className="min-w-[337px] h-[325px] object-cover mb-6"
            src={article3}
            alt=""
          />
          <h4 className="font-medium">Decor your bedroom</h4>
          <Link
            className="max-w-[110px] flex items-center gap-2 text-[16px] border-b-2 border-black py-2 font-medium"
            to={"#"}
          >
            Read More <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(Aricle);