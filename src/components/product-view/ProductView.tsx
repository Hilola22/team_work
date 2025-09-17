import { memo } from "react";
import { FaStar} from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const ProductView = (props: any) => {
  const { data, viewMode } = props;
  const navigate = useNavigate();

  const gridClass =
    viewMode === "grid"
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";


  return (
    <>
      <div className={`mt-[20px] w-[100%] mx-auto container ${gridClass}`}>
        {data?.map((item: any) => (
          <div key={item.id}>
            <div className="relative ">
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
                  className="min-w-[260px] bg-gray-100 h-[350px] object-center object-cover mb-[12px]"
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
              <div className="flex gap-0.5 mb-[10px]">
                <FaStar size={14} />
                <FaStar size={14} />
                <FaStar size={14} />
                <FaStar size={14} />
                <FaStar size={14} />
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
    </>
  );
};

export default memo(ProductView);
