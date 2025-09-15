import { memo } from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const Detail = () => {
  const { id } = useParams();
  const { data } = useFetch(`/products/${id}`);

  let now = new Date();
  let hour = now.getHours();
  let day = String(
    Number(data?.warrantyInformation.split("")[0]) == 1
      ? data?.warrantyInformation.split("")[2]
      : Number(data?.warrantyInformation.split("")[0])
  );
  let minu = now.getMinutes();
  let sec = now.getSeconds();

  const averageRating =
    data?.reviews && data.reviews.length > 0
      ? data.reviews.reduce((sum: number, r: any) => sum + r.rating, 0) /
        data.reviews.length
      : 0;

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
              <button className="font-medium rounded-[4px] bg-white">
                new
              </button>
              <button className="text-white rounded-[4px] bg-[#38CB89]">
                -50%
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
              <button className="flex flex-[70%] h-[100%] rounded-[8px] hover:bg-gray-200 hover:text-black border justify-center items-center gap-[6px] text-[20px]">
                <CiHeart />
                Wishlist
              </button>
            </div>
            <button className="h-[60px] bg-black w-[100%] mt-[30px] mb-[10px] hover:bg-gray-500 hover:text-black hover:border rounded-[8px] text-white text-2xl">
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
        <div className="flex gap-[80px] text-[20px] pb-[5px]">
          <p className="text-gray-500">Additional info</p>
          <p className="text-gray-500">Questions</p>
          <p className="underline underline-offset-13">Reviews</p>
        </div>
        <hr className="border border-gray-100 mb-[40px]" />
        <div className="w-[300px] mb-[30px]">
          <p className="text-[32px] font-normal">Customer Reviews</p>
          <div className="flex items-center mb-[6px] mt-[20px]">
            {averageRating.toFixed(1)} <FaStar />
            <p className="ml-[10px] ">{data?.reviews.length} reviews</p>
          </div>
          <p className="text-end pr-[43px] font-medium text-gray-800">
            Tray Table
          </p>
        </div>
        <form
          action=""
          className="h-[70px] flex items-center w-[100%] rounded-2xl border border-gray-300 px-[20px]"
        >
          <input
            type="text"
            className="text-3xl hover:border-none w-[100%] border-[#E8ECEF] "
          />
          <button className="w-[200px] h-[40px] rounded-4xl bg-black text-white">
            Write review
          </button>
        </form>
        <div className="mt-[50px] justify-between flex items-center">
          <p className="text-[27px] font-medium">
            {data?.reviews.length} reviews
          </p>
          <select className="border px-[5px] rounded-[5px] pr-40 py-2 border-gray-300">
            <option>Newest</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        <div className=" mt-[40px]  border max-h-[74%] flex flex-col gap-[20px] justify-center">
          <div className="max-h-[95%] border grid grid-rows-6">
            {data?.reviews?.map((r: any) => (
              <div
                key={`${Date.now()}review`}
                className=" py-[15px] border flex gap-[40px] border-x-white border-t-white border-b-gray-200"
              >
                <div className=" bg-cover bg-gray-100 bg-center rounded-full border flex flex-[7%] w-[70px] h-[70px] items-center justify-center">
                  <p className="text-4xl ">
                    {r?.reviewerName.split("")[0].toUpperCase()}
                  </p>
                </div>
                <div className="flex-[92%]">
                  <p className="font-medium text-[20px]">{r?.reviewerName}</p>
                  <div className="flex items-center gap-[5px] mb-[6px] mt-[15px]">
                    {[...Array(Math.round(r.rating))].map((_, i) => (
                      <FaStar key={i} style={{ color: "black" }} />
                    ))}
                  </div>
                  <p className="mt-[20px]">{r?.comment}</p>
                  <div className="flex pl-[80px] font-medium gap-[20px] pt-[15px]">
                    <button>Like</button>
                    <button>Reply</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="border w-[200px] block m-auto h-[50px] rounded-3xl">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Detail);
