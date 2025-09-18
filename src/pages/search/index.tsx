import { memo, useState } from "react";
import ProductView from "../../components/product-view/ProductView";

const Search = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState<any>("");
  console.log(data);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => setData(data.products));
  };

  return (
    <div className="container my-[20px] pb-[20px]">
      <form
        onSubmit={handleSubmit}
        className="h-[60px] bg-gray-100 rounded-2xl flex items-center gap-[20px] justify-between px-[40px] mb-[100px]"
      >
        <input
          className="w-[100%] h-[100%] text-2xl hover:outline-0 outline-0"
          type="text"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-black px-[40px] text-white text-[20px] py-[6px] rounded-[15px] hover:text-green-200">
          send
        </button>
      </form>
      {search ? (
        <ProductView data={data} />
      ) : (
        <h3 className="text-center text-2xl">search...</h3>
      )}
    </div>
  );
};

export default memo(Search);
