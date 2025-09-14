import { memo, useEffect, useState } from "react";
import armchair from "../../../../assets/armchair.png";
import wardrobe from "../../../../assets/wardrobe.png";
import toster from "../../../../assets/toster.png";

const Grid = () => {
  const [isSmall, setSmall] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setSmall(window.innerWidth < 600);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmall == false ? (
    <div className="grid grid-cols-4 gap-6 w-full container overflow-x-hidden overflow-y-hidden text-black px-4">
      <div
        className="col-span-2 row-span-2 bg-cover bg-center min-h-[284px] p-6 w-full"
        style={{ backgroundImage: `url(${armchair})` }}
      >
        <div>
          <p className="text-[34px] font-semibold">Living Room</p>
          <p className="border-b w-[95px]">Shop Now →</p>
        </div>
      </div>

      <div
        className="col-span-2 bg-cover bg-center min-h-[284px] p-6 flex items-end w-full"
        style={{ backgroundImage: `url(${wardrobe})` }}
      >
        <div className="mb-10">
          <p className="text-[34px] font-semibold">Bedroom</p>
          <p className="border-b w-[95px]">Shop Now →</p>
        </div>
      </div>

      <div
        className="col-span-2 bg-cover bg-center min-h-[284px] p-6 flex items-end w-full"
        style={{ backgroundImage: `url(${toster})` }}
      >
        <div className="mb-10">
          <p className="text-[34px] font-semibold">Kitchen</p>
          <p className="border-b w-[95px]">Shop Now →</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-6 p-5">
      <div
        className="bg-cover bg-center min-h-[284px] p-6 w-full"
        style={{ backgroundImage: `url(${armchair})` }}
      >
        <div className="flex flex-col h-[497px] w-[311px]">
          <p className="text-[34px] font-semibold">Living Room</p>
          <p className="border-b w-[95px]">Shop Now →</p>
        </div>
      </div>

      <div
        className="bg-cover bg-center min-h-[284px] p-6 flex items-end"
        style={{ backgroundImage: `url(${wardrobe})` }}
      >
        <div className="mb-10 h-[180px] w-[311px]">
          <p className="text-[34px] font-semibold mt-30">Bedroom</p>
          <p className="border-b w-[95px]">Shop Now →</p>
        </div>
      </div>

      <div
        className="bg-cover bg-center min-h-[284px] p-6 flex items-end w-full"
        style={{ backgroundImage: `url(${toster})` }}
      >
        <div className="mb-10 h-[180px] w-[311px]">
          <p className="text-[34px] font-semibold mt-30">Kitchen</p>
          <p className="border-b w-[95px]">Shop Now →</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Grid);
