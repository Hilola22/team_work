import React, { useEffect, useState } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import furniture from "../../../../assets/furniture.png";
import furniture2 from "../../../../assets/furniture2.jpg";
import "../../../../index.css";
const Furniture = () => {
  const [isSmall, setSmall] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setSmall(window.innerWidth < 600);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmall == false ? (
    <div className="w-full py-10 container mx-auto text-gray-700 overflow-hidden">
      <SwiperComponent
        modules={isSmall ? [Pagination] : [Navigation]}
        navigation
        loop
        spaceBetween={30}
        className="w-full flex justify-center items-center "
      >
        <SwiperSlide>
          <div className="h-[500px] ">
            <img className="h-[498px] w-full" src={furniture} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px] ">
            <img className="h-[498px] w-full" src={furniture2} alt="" />
          </div>
        </SwiperSlide>
      </SwiperComponent>

      <div className="md:flex mt-[40px] gap-[30px]">
        <h3 className=" flex flex-col text-[72px] font-semibold text-black">
          Simply Unique/ Simply Better.
        </h3>
        <div className="flex flex-col justify-center">
          <p className="text-[20px]">
            <b>3legant</b> is a gift & decorations store based in HCMC, Vietnam.
            Est since 2019.
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-auto mx-auto text-gray-700 overflow-hidden px-4">
      <SwiperComponent
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        className="w-full mx-auto"
      >
        <SwiperSlide>
          <div className=" shadow-sm">
            <img className="h-[304px] object-cover" src={furniture} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" shadow-sm">
            <img className="h-[304px] object-cover" src={furniture2} alt="" />
          </div>
        </SwiperSlide>
      </SwiperComponent>

      <div className="flex flex-col items-center text-center  mt-8 mb-6 px-4">
        <h3 className="text-[42px] leading-13 font-semibold text-black">
          Simply Unique / Simply Better.
        </h3>
        <p className="text-[16px] text-gray-700 mt-4 max-w-[480px]">
          <strong>3legant</strong> is a gift & decorations store based in HCMC,
          Vietnam. Est since 2019.
        </p>
      </div>
    </div>
  );
};

export default React.memo(Furniture);
