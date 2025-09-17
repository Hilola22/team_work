import { memo } from "react";
import ProductView from "../../components/product-view/ProductView";
import { useFetch } from "../../hooks/useFetch";

const Search = () => {
  const { data } = useFetch("/products", { limit: 3 });

  return (
    <div className="container my-[20px] pb-[20px]">
      <div className="h-[60px] bg-gray-100 rounded-2xl flex items-center gap-[20px] justify-between px-[40px] mb-[100px]">
        <input
          className="w-[100%] h-[100%] text-2xl hover:outline-0 outline-0"
          type="text"
          placeholder="search..."
        />
        <button className="bg-black px-[40px] text-white text-[20px] py-[6px] rounded-[15px]">
          send
        </button>
      </div>
      <div>
        <ProductView data={data?.products} />
      </div>
    </div>
  );
};

export default memo(Search);
