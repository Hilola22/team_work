import { memo, type FC } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface IProps {
  data: any;
}

const ProductView: FC<IProps> = (props) => {
  const { data } = props;
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="w-[100px] text-5xl  pl-[20px]  my-[50px]">
          New Arrivalls
        </h2>
        <p className="mr-[20px] self-end mb-[40px] pb-[5px]  font-medium flex items-center gap-[15px] border-b underline-offset-8">
          More products <BsArrowRight />
        </p>
      </div>
      <div className=" container mt-[20px] mx-auto grid grid-cols-4 gap-6">
        {data?.map((item: any) => (
          <div key={item.id}>
            <div className="relative">
              <div className="absolute z-40 flex text-[20px] flex-col w-[79px] h-[34px] mt-[25px]  ml-[20px] gap-[10px]">
                <button className="uppercase font-medium rounded-[4px] bg-white">
                  new
                </button>
                <button className="text-white rounded-[4px] bg-[#38CB89]">
                  -50%
                </button>
              </div>
              <div className="relative group">
                <img
                  onClick={() => navigate(`/products/${item.id}`)}
                  className="w-[260px] bg-gray-100 h-[350px] object-center object-cover mb-[12px]"
                  src={item.thumbnail}
                  alt={item.title}
                />
                <button
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 
               w-[95%] h-[50px] rounded-2xl bg-black text-white 
               opacity-0 translate-y-2
               transition-all duration-300 ease-in-out 
               group-hover:opacity-100 group-hover:translate-y-0"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div>
              {/* <p>{item.rating}</p> */}
              <div className="flex mb-[10px]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
              </div>
              <h3 className="font-bold mb-[10px]">{item.title}</h3>
              <div className="flex gap-[20px]">
                <strong className=" ">${item.price}</strong>
                <strong className="text-gray-400 line-through">
                  ${item.price}
                </strong>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-300">
        <hr className="mt-[50px] border-2 w-[70%]  rounded-full" />
      </div>
    </>
  );
};

export default memo(ProductView);
