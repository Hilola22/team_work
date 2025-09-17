import { memo } from "react";
import heroimg from "../../assets/contact.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import location from "../../assets/location.png";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

const services = [
  {
    id: 1,
    icon: <CiDeliveryTruck size={48} />,
    title: "Free Shipping",
    subtitle: "Order above $200",
  },
  {
    id: 2,
    icon: <CiMoneyBill size={48} />,
    title: "Money-back",
    subtitle: "30 days guarantee",
  },
  {
    id: 3,
    icon: <CiLock size={48} />,
    title: "Secure Payments",
    subtitle: "Secured by Stripe",
  },
  {
    id: 4,
    icon: <BsTelephone size={35} />,
    title: "24/7 Support",
    subtitle: "Phone and Email support",
  },
];

const ContactUs = () => {
  return (
    <div className="ContactUs">
      <section className="container mx-auto mt-4">
        <div className="">
          <p className="mb-10">
            {"Home >"}
            <b className="font-medium"> Contact Us</b>
          </p>
          <h1 className="lg:text-[54px] text-[28px] font-medium max-w-[750px] lg:leading-[54px] leading-[34px]">
            We believe in sustainable decor. We're passionate about life at
            home.
          </h1>
          <p className="max-w-[780px] text-[16px] mt-6">
            Our features timeless furniture, with natural fabrics, curved lines,
            plenty of mirrors and classic design, which can be incorporated into
            any decor project. The pieces enchant for their sobriety, to last
            for generations, faithful to the shapes of each period, with a touch
            of the present
          </p>
        </div>
      </section>
      <section className="container mt-[48px]">
        <div className="w-full bg-[#F3F5F7] lg:flex lg:flex-row md:flex flex-col">
          <img src={heroimg} alt="" />
          <div className="lg:ml-[72px] lg:mt-[98px] py-[63px] px-4">
            <h2 className="lg:text-[40px] font-medium sm:text-[20px]">
              About Us
            </h2>
            <p className="lg:text-[16px] sm:text-[14px] mt-4 max-w-100">
              3legant is a gift & decorations store based in HCMC, Vietnam. Est
              since 2019.{" "}
            </p>
            <p className="text-[16px]">
              Our customer service is always prepared to support you 24/7
            </p>
            <Link
              className="flex w-fit mt-6 items-center gap-1 sm:gap-2 border-b-1 border-black"
              to={"/"}
            >
              Shop Now <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div>
          <h1 className="lg:text-[40px] font-medium text-center mt-10 mb-10">
            Contact Us
          </h1>
          <div className="grid gap-7 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mb-5">
            <div className="bg-[#F3F5F7] max-h-[156px] flex flex-col justify-center p-7 leading-8">
              <div className="mx-auto text-center">
                <CiShop size={38} className="mx-auto my-4" />
                <p className="text-[16px] uppercase font-bold text-[#6C7275]">
                  Address
                </p>
                <p className="text-[16px] font-semibold leading-[24px]">
                  234 Hai Trieu, Ho Chi Minh City, Viet Nam{" "}
                </p>
              </div>
            </div>
            <div className="bg-[#F3F5F7] max-h-[156px] flex flex-col justify-center p-7 leading-8">
              <div className="mx-auto text-center ">
                <FiPhone size={32} className="mx-auto my-4" />
                <p className="text-[16px] uppercase font-bold text-[#6C7275]">
                  Contact Us
                </p>
                <p className="text-[16px] font-semibold">+84 234 567 890</p>
              </div>
            </div>
            <div className="bg-[#F3F5F7] max-h-[156px] flex flex-col justify-center p-7 leading-8">
              <div className="mx-auto text-center ">
                <HiOutlineMail size={32} className="mx-auto my-4" />
                <p className="text-[16px] uppercase font-bold text-[#6C7275]">
                  Email
                </p>
                <p className="text-[16px] font-semibold">hello@3legant.com</p>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col-reverse lg:flex-row lg:justify-between gap-7 mb-20">
            <form className="w-full" action="">
              <label
                className="block mb-3 uppercase text-[12px] font-bold text-[#6C7275] tracking-[1px]"
                htmlFor=""
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                required
                className="border w-full py-[7px] px-4 rounded-[6px] mb-6 border-[#dddddd] outline-none focus:ring-1 focus:ring-blue-400"
              />
              <label
                className="block mb-3 uppercase text-[12px] font-bold text-[#6C7275]  tracking-[1px]"
                htmlFor=""
              >
                Email address
              </label>
              <input
                type="text"
                placeholder="Your Email"
                required
                className="border w-full py-[7px] px-4 rounded-[6px] mb-6 border-[#dddddd] outline-none focus:ring-1 focus:ring-blue-400"
              />
              <label
                className="block mb-3 uppercase text-[12px] font-bold text-[#6C7275] tracking-[1px]"
                htmlFor=""
              >
                message
              </label>
              <textarea
                placeholder="Your message"
                required
                className="border w-full min-h-[108px] py-[7px] px-4 rounded-[6px] mb-6 border-[#dddddd] outline-none focus:ring-1 focus:ring-blue-400"
              ></textarea>
              <button className="w-[189px] h-10 bg-black rounded-[8px] text-white">
                Send Message
              </button>
            </form>
            <img className="" src={location} alt="" />
          </div>
        </div>
      </section>
      <section className="bg-[#F3F5F7]">
        <div className="container grid gap-6 lg:grid-cols-4 grid-cols-2 place-items-center">
          {services?.map((item) => (
            <div className="bg-[#fffff] h-[220px] flex flex-col justify-center p-7 leading-8">
              <div>{item.icon}</div>
              <div className="mt-[16px]">
                <h4 className="text-[20px] font-semibold">{item.title}</h4>
                <p className="text-[16px] font-normal text-[#6C7275]">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default memo(ContactUs);
