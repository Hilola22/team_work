import { memo } from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { addToCart } from "../../lib/features/cartSlice";
import { useDispatch } from "react-redux";

const Detail = () => {
  const { id } = useParams();
  const { data } = useFetch(`/products/${id}`);
  const { pathname } = useLocation();
  let path = pathname.split("/").at(-1);
  const dispatch = useDispatch();

  let now = new Date();
  let hour = now.getHours();
  let day = now.getDay();
  let minu = now.getMinutes();
  let sec = now.getSeconds();

  return (
    <div className="my-[50px]">
      <div className="container  min-h-[980px] flex gap-8">
        <div className="w-1/2 flex flex-col mb-[60px]">
          <div
            className="bg-gray-100 flex-1 flex items-start object-contain justify-start "
            style={{
              backgroundImage: `url(${data?.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex text-[20px] flex-col w-[79px] h-[34px] mt-[32px]  ml-[32px] gap-[5px]">
              <button className="font-medium rounded-[4px] bg-white uppercase">
                new
              </button>
              <button className="text-white rounded-[4px] bg-[#38CB89]">
                {data?.discountPercentage}%
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 mt-4 h-[160px]">
            <img src={data?.images[0]} alt="thumb1" className="bg-gray-100" />
            <img src={data?.images[1]} alt="thumb2" className="bg-gray-100" />
            <img src={data?.images[2]} alt="thumb3" className="bg-gray-100" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex items-center gap-[3px] mb-[16px]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p className="ml-[10px]">{data?.reviews.length} reviews</p>
          </div>
          <h2 className="max-size-[40px] w-[300px] font-medium text-[40px] mb-[16px]">
            {data?.title}
          </h2>
          <p className="text-[#6C7275] pt-[16px] w-[500px] mb-[16px]">
            {data?.description}
          </p>
          <div className="flex gap-[20px] items-center mb-[12px]">
            <strong className="text-3xl font-normal">
              ${Math.round(data?.price * (1 - data?.discountPercentage / 100))}
            </strong>
            <strong className="text-[#6C7275] text-2xl font-normal line-through">
              ${data?.price}
            </strong>
          </div>
          <hr className="border-gray-100 border-[1px] mb-[12px]" />
          <div>
            <p className="mb-[10px]">Offer expires in:</p>
          </div>
          <div className="flex gap-[20px]">
            <div>
              <div className="bg-gray-100 h-[60px] w-[60px] flex items-center justify-center text-3xl font-medium">
                {day}
              </div>
              <p className="text-center text-[13px] text-gray-400">Days</p>
            </div>
            <div>
              <div className="bg-gray-100 h-[60px] w-[60px] flex items-center justify-center text-3xl font-medium">
                {hour}
              </div>
              <p className="text-center text-[13px] text-gray-400">Hours</p>
            </div>
            <div>
              <div className="bg-gray-100 h-[60px] w-[60px] flex items-center justify-center text-3xl font-medium">
                {minu}
              </div>
              <p className="text-center text-[13px] text-gray-400">Minutes</p>
            </div>
            <div>
              <div className="bg-gray-100 h-[60px] w-[60px] flex items-center justify-center text-3xl font-medium">
                {sec}
              </div>
              <p className="text-center text-[13px] text-gray-400">Seconds</p>
            </div>
          </div>
          <hr className="border border-gray-100 my-[26px]" />
          <div>
            <p className="text-gray-500 font-medium mb-[10px]">Measurements</p>
            <p className="text-[20px]">17 1/2x20 5/8 "</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium mb-[5px] mt-[20px]">
              Choose color <IoIosArrowForward className="inline" />
            </p>
            <p className="text-[20px]">Black</p>
            <div className="flex gap-[20px] mt-[20px] mb-[24px]">
              <div className="w-[70px] h-[70px] bg-gray-200"></div>
              <div className="w-[70px] h-[70px] bg-gray-200"></div>
              <div className="w-[70px] h-[70px] bg-gray-200"></div>
              <div className="w-[70px] h-[70px] bg-gray-200"></div>
            </div>
            <div className="flex items-center w-[100%] h-[50px] gap-[20px]">
              <div className=" flex-[30%] h-[100%] bg-gray-200 rounded-[8px] text-2xl px-[30px] flex items-center justify-between">
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </div>
              <button className="flex flex-[70%] h-[100%] rounded-[8px] hover:bg-black hover:text-blue-200 border justify-center items-center gap-[6px] text-[20px]">
                <CiHeart />
                Wishlist
              </button>
            </div>
            <button
              onClick={() => dispatch(addToCart(data))}
              className="h-[60px] bg-black w-[100%] mt-[30px] mb-[10px] hover:text-blue-400 hover:border rounded-[8px] text-white text-2xl"
            >
              Add to Cart
            </button>
            <hr className="border border-gray-100 my-[15px]" />
            <div>
              <p className="flex gap-[50px]">
                CKU <strong className="font-medium">{data?.sku}</strong>
              </p>
              <p className="flex gap-[20px]">
                Category
                <strong className="font-medium">{data?.category}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container h-[1660px] pt-[40px]">
        <div className="flex gap-[80px] text-[20px] pb-[5px] cursor-pointer">
          <p
            className={
              path === "questions" ? "underline underline-offset-13" : ""
            }
          >
            <NavLink className="text-gray-500" to={`/products/${id}/questions`}>
              Questions
            </NavLink>
          </p>
          <p className={path === "info" ? "underline underline-offset-13" : ""}>
            <NavLink className="text-gray-500" to={`/products/${id}/info`}>
              Additional info
            </NavLink>
          </p>
          <p className={path === id ? "underline underline-offset-13" : ""}>
            <NavLink className="text-gray-500" to={`/products/${id}`}>
              Reviews
            </NavLink>
          </p>
        </div>
        <hr className="border border-gray-100 mb-[40px]" />
        <Outlet />
      </div>
    </div>
  );
};

export default memo(Detail);
