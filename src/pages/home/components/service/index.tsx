import { memo, useEffect, useState } from "react";
import car from "../../../../assets/car.png";
import money from "../../../../assets/money.png";
import lock from "../../../../assets/lock.png";
import phone from "../../../../assets/phone.png";

const Service = () => {
  const [isSmall, setSmall] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setSmall(window.innerWidth < 600);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isSmall === false ? (
    <div className="container  mt-10">
      <div className="flex gap-10">
        <div className="bg-[#F3F5F7] h-[220px] flex flex-col justify-center p-7 leading-8 w-[262px]">
          <div>
            <img src={car} alt="" />
          </div>
          <div className="mt-[16px]">
            <h4 className="text-[20px] font-semibold">Free Shipping</h4>
            <p className="text-[16px] text-[#6C7275]">Order above $200</p>
          </div>
        </div>
        <div className="bg-[#F3F5F7] h-[220px] flex flex-col justify-center p-7 leading-8 w-[262px]">
          <div>
            <img src={money} alt="" />
          </div>
          <div className="mt-[16px]">
            <h4 className="text-[20px] font-semibold">Money-back</h4>
            <p className="text-[16px] text-[#6C7275]">30 days guarantee</p>
          </div>
        </div>
        <div className="bg-[#F3F5F7] h-[220px] flex flex-col justify-center p-7 leading-8 w-[262px]">
          <div>
            <img src={lock} alt="" />
          </div>
          <div className="mt-[16px]">
            <h4 className="text-[20px] font-semibold">Secure Payments</h4>
            <p className="text-[16px] text-[#6C7275]">Secured by Stripe</p>
          </div>
        </div>
        <div className="bg-[#F3F5F7] h-[220px] flex flex-col justify-center p-7 leading-8 w-[262px]">
          <div>
            <img src={phone} alt="" />
          </div>
          <div className="mt-[16px]">
            <h4 className="text-[20px] font-semibold">24/7 Support</h4>
            <p className="text-[16px] text-[#6C7275]">
              Phone and Email support
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container mt-10">
      <div className="grid gap-7 grid-cols-2">
        <div className="bg-[#F3F5F7] h-[220px] flex flex-col justify-center p-7 leading-8">
          <div>
            <img src={car} alt="" />
          </div>
          <div className="mt-[16px]">
            <h4 className="text-[20px] font-semibold">Free Shipping</h4>
            <p className="text-[16px] text-[#6C7275]">Order above $200</p>
          </div>
        </div>
        <div className="bg-[#F3F5F7] h-[220px] flex flex-col justify-center p-7 leading-8">
          <div>
            <img src={money} alt="" />
          </div>
          <div className="mt-[16px]">
            <h4 className="text-[20px] font-semibold">Money-back</h4>
            <p className="text-[16px] text-[#6C7275]">30 days guarantee</p>
          </div>
        </div>
        <div className="bg-[#F3F5F7] h-[220px] flex flex-col justify-center p-7 leading-8 ">
          <div>
            <img src={lock} alt="" />
          </div>
          <div className="mt-[16px]">
            <h4 className="text-[20px] font-semibold">Secure Payments</h4>
            <p className="text-[16px] text-[#6C7275]">Secured by Stripe</p>
          </div>
        </div>
        <div className="bg-[#F3F5F7] h-[220px] flex flex-col justify-center p-7 leading-8">
          <div>
            <img src={phone} alt="" />
          </div>
          <div className="mt-[16px]">
            <h4 className="text-[20px] font-semibold">24/7 Support</h4>
            <p className="text-[16px] text-[#6C7275]">
              Phone and Email support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Service);
