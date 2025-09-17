import { memo, useState } from "react";
import img1 from "../../assets/articele1.jpg";
import img2 from "../../assets/article2.jpg";
import img3 from "../../assets/article3.jpg";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";
import { PiGridNineFill } from "react-icons/pi";
import { PiGridFourBold } from "react-icons/pi";

const blogs = [
  {
    id: 1,
    title: "7 ways to decor your home like a professional",
    date: "October 16, 2023",
    image: img1,
  },
  {
    id: 2,
    title: "Inside a beautiful kitchen organization",
    date: "October 16, 2023",
    image: img2,
  },
  {
    id: 3,
    title: "Decor your bedroom for your children",
    date: "October 16, 2023",
    image: img3,
  },
  {
    id: 4,
    title: "Modern texas home is beautiful and completely kid-friendly",
    date: "October 16, 2023",
    image: img4,
  },
  {
    id: 5,
    title: "Modern texas home is beautiful and completely kid-friendly",
    date: "October 16, 2023",
    image: img5,
  },
  {
    id: 6,
    title: "Modern texas home is beautiful and completely kid-friendly",
    date: "October 16, 2023",
    image: img6,
  },
  {
    id: 7,
    title: "Modern texas home is beautiful and completely kid-friendly",
    date: "October 16, 2023",
    image: img7,
  },
  {
    id: 8,
    title: "Modern texas home is beautiful and completely kid-friendly",
    date: "October 16, 2023",
    image: img8,
  },
  {
    id: 9,
    title: "Modern texas home is beautiful and completely kid-friendly",
    date: "October 16, 2023",
    image: img9,
  },
];

const BlogList = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-10">
        <div className="flex gap-10">
          <div className="hidden lg:flex gap-10">
            <h2 className="inline-block border-b-2 border-b-black">All Blog</h2>
            <p className="text-gray-400">Featured</p>
          </div>
          <div className="block w-full lg:hidden">
            <select
              name="blogFilter"
              id="blogFilter"
              className="border rounded px-2 py-1 text-sm"
            >
              <option>All Blog</option>
              <option>Featured</option>
            </select>
          </div>
        </div>

        <div className="md:flex items-center hidden border-[100%]">
          <p>Sort by</p>
          <select name="sortby" id="sort" className="py-1 text-sm"></select>

          <div className="hidden sm:flex gap-2 ml-3">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1 rounded ${
                viewMode === "grid"
                  ? "bg-gray-300 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <PiGridNineFill />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1 rounded ${
                viewMode === "list"
                  ? "bg-gray-300 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <PiGridFourBold />
            </button>
          </div>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex flex-col">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[250px] object-cover shadow-md rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-4">{blog.title}</h3>
              <p className="text-gray-500 text-sm">{blog.date}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-10">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex flex-col">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[250px] object-cover shadow-md rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-4">{blog.title}</h3>
              <p className="text-gray-500 text-sm">{blog.date}</p>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 border rounded-full hover:bg-black hover:text-white transition">
          Show more
        </button>
      </div>
    </section>
  );
};

export default memo(BlogList);
