import { memo } from "react";
import bloghero from "../../assets/bhero.png";
import BlogList from "./BlogList";
import Newsletter from "../../components/newsletter";

const Blog = () => {
  return (
    <>
      <section className="relative">
        <img
          src={bloghero}
          alt=""
          className="container w-full h-[400px] object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center p-4">
          <p className="mb-2 text-gray-700 mr-3">
            Home &gt; <b className="text-black">Blog</b>
          </p>
          <h1 className="text-[54px] font-medium my-4">Our Blog</h1>
          <h3 className="text-[20px]">Home ideas and design inspiration</h3>
        </div>
          </section>
          <BlogList />
          <Newsletter/>
    </>
  );
};

export default memo(Blog);
