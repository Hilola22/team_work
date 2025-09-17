import { memo } from 'react';
import ShopCards from "./Shop";
import Newsletter from "../../components/newsletter";
import shophero from "../../assets/shophero.png";

const Shop = () => {
  return (
    <div className="Shop">
      <section className="relative">
        <img
          src={shophero}
          alt=""
          className="container w-full h-[400px] object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center p-4">
          <p className="mb-2 text-gray-700 mr-3">
            Home &gt; <b className="text-black font-medium">Shop</b>
          </p>
          <h1 className="text-[54px] font-medium my-4">Shop Page</h1>
          <h3 className="text-[20px]">
            Let's design the place you always imagined.
          </h3>
        </div>
      </section>
      <ShopCards />
      <Newsletter />
    </div>
  );
};

export default memo(Shop);