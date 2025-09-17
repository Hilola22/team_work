import { memo, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import ProductView from "../../components/product-view/ProductView";
import Furniture from "./components/furniture";
import Grid from "./components/grid";
import Service from "./components/service";
import Article from "./components/article";
import Newsletter from "../../components/newsletter";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Home = () => {
  const [page, setPage] = useState(0);
  const { data } = useFetch(`/products?limit=4&skip=${page * 4}`);

  return (
    <div>
      <Furniture />
      <Grid />
      <div className="flex items-center justify-between container">
        <h2 className="w-[100px] text-3xl my-[50px] md:text-5xl">
          New Arrivalls
        </h2>

        <button className="cursor-pointer  self-end mb-[40px] pb-[5px]  font-medium flex items-center gap-[15px] border-b underline-offset-8">
          <BsArrowLeft onClick={() => setPage((p: number) => p - 1)} /> More
          products
          <BsArrowRight onClick={() => setPage((p: number) => p + 1)} />
        </button>
      </div>
      <ProductView data={data?.products} setPage={setPage} />
      <div className="container w-full">
        <div className="mt-[50px] flex w-full">
          <div className="h-[4px] bg-black rounded-3xl w-[70%]"></div>
          <div className="h-[4px] bg-gray-300 rounded-3xl w-[30%]"></div>
        </div>
      </div>
      <Service />
      <Article />
      <Newsletter />
    </div>
  );
};

export default memo(Home);
