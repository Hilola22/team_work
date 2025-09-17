import {
  memo,
  useCallback,
  useEffect,
  useState,
  type ChangeEvent,
} from "react";
import { useFetch } from "../../hooks/useFetch";
import ProductView from "../../components/product-view/ProductView";
import { PiGridFourBold, PiGridNineFill } from "react-icons/pi";

const ShopCards = () => {
  const [order, setOrder] = useState<string>("id-asc");
  const [skip, setSkip] = useState(0);
  const [products, setProducts] = useState<any>([]);
  const [category, setCategory] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const limit = 4;

  const { data: categories } = useFetch("/products/category-list");

  const { data, loading } = useFetch(`/products/${category}`, {
    limit,
    skip,
    sortBy: order.split("-")[0],
    order: order.split("-")[1],
  });

  useEffect(() => {
    if (data) {
      setProducts((prev: any) => [...prev, ...data?.products]);
    }
  }, [data]);

  const setDefaultValue = useCallback(() => {
    setProducts([]);
    setSkip(0);
  }, []);

  const handleChangeOrder = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value);
    setDefaultValue();
  };

  const handleChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setCategory(value ? `category/${value}` : value);
    setDefaultValue();
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center gap-6 my-6">
        <div className="flex lg:flex-row flex-col lg:gap-6 ">
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="uppercase text-[16px] font-semibold text-[#6C7275] mb-2 mt-10"
            >
              Categories
            </label>
            <select
              onChange={handleChangeOrder}
              className="min-w-[260px] h-auto border-2 border-gray-500 rounded-lg px-3 py-2 text-gray-700 
          focus:outline-none focus:border-gray-500 focus:border-2 
          bg-white transition"
            >
              <option value="id-asc">Popular</option>
              <option value="rating-desc">Rating</option>
              <option value="price-desc">Expensive</option>
              <option value="price-asc">Cheap</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor=""
              className="uppercase text-[16px] font-semibold text-[#6C7275] mb-2 mt-10"
            >
              Price
            </label>
            <select
              onChange={handleChangeCategory}
              className="min-w-[260px] border-2 border-gray-500 rounded-lg px-3 py-2 text-gray-700 
               focus:outline-none focus:border-gray-500 focus:border-2 
               bg-white transition"
            >
              <option value="">All</option>
              {categories?.map((item: string) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="md:flex items-center justify-center hidden py-5 mt-10 border-[100%]">
          <p className="text-xl">Sort by</p>
          <select name="sortby" id="sort" className="py-1 text-sm"></select>

          <div className="hidden sm:flex gap-2 ml-3">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1 rounded ${
                viewMode === "grid"
                  ? "bg-gray-400 text-[20px] text-white "
                  : "hover:bg-gray-100 text-[20px]"
              }`}
            >
              <PiGridNineFill />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1 rounded ${
                viewMode === "list"
                  ? "bg-gray-400 text-[20px] text-white"
                  : "hover:bg-gray-100 text-[20px]"
              }`}
            >
              <PiGridFourBold />
            </button>
          </div>
        </div>
      </div>
      <ProductView data={products} viewMode={viewMode} />

      {loading && (
        <div className="flex justify-center items-center mt-10">
          <div role="status">
            <svg
              aria-hidden="true"
              className="size-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {data?.total > skip + limit && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setSkip((p) => p + limit)}
            className="px-6 py-2 border rounded-full hover:bg-black hover:text-white transition"
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(ShopCards);
