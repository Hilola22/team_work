import { memo } from "react";
import { FaStar } from "react-icons/fa";
import { useFetch } from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const { id } = useParams();
  const { data } = useFetch(`/products/${id}`);

  const averageRating =
    data?.reviews && data.reviews.length > 0
      ? data.reviews.reduce((sum: number, r: any) => sum + r.rating, 0) /
        data.reviews.length
      : 0;
  return (
    <>
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
          className="text-3xl hover:border-none w-[100%] border-[#E8ECEF] outline-0"
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

      <div className=" mt-[40px]   max-h-[74%] flex flex-col gap-[20px] justify-center ">
        <div className="h-[95%]  grid grid-rows-6 overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
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
    </>
  );
};

export default memo(Reviews);
