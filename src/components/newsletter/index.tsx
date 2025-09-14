import { memo } from "react";
import chair from "../../assets/chair.png";
import shelf from "../../assets/shelf.png";
import { AiOutlineMail } from "react-icons/ai"; 


const NewsLetter = () => {
  return (
    <section className="relative w-full mt-[80px] bg-[#F2F4F6] min-h-[360px] overflow-hidden flex items-center justify-center">
      <img
        className="absolute top-[-160px] left-[-280px] w-[700px] h-auto md:inline-block hidden"
        src={shelf}
        alt="shelf"
      />

      <img
        className="absolute top-[-50px] right-[-450px] w-[800px] h-auto md:inline-block hidden"
        src={chair}
        alt="chair"
      />

      <div className="relative z-10 text-center max-w-xl px-4">
        <h2 className="text-2xl md:tex t-[40px] font-semibold mb-2">
          Join Our Newsletter
        </h2>
        <p className="text-gray-600 mb-6 lg:text-[18px] font-normal text-[14px]">
          Sign up for deals, new products and promotions
        </p>

        <form className="flex items-center justify-center gap-2 border-b border-gray-400 max-w-md mx-auto pb-2">
          <AiOutlineMail size={20}/>
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
          />
          <button
            type="submit"
            className="text-gray-700 font-medium hover:text-black"
          >
            Signup
          </button>
        </form>
      </div>
    </section>
  );
};

export default memo(NewsLetter);