import { memo } from "react";
import img1 from "../../assets/articele1.jpg";
import img2 from "../../assets/article2.jpg";
import img3 from "../../assets/article3.jpg";

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
    title: "7 ways to decor your home like a professional",
    date: "October 16, 2023",
    image: img1,
  },
  {
    id: 5,
    title: "Inside a beautiful kitchen organization",
    date: "October 16, 2023",
    image: img2,
  },
  {
    id: 6,
    title: "Decor your bedroom for your children",
    date: "October 16, 2023",
    image: img3,
  },
  {
    id: 7,
    title: "Decor your bedroom for your children",
    date: "October 16, 2023",
    image: img3,
  },
  {
    id: 8,
    title: "7 ways to decor your home like a professional",
    date: "October 16, 2023",
    image: img1,
  },
  {
    id: 9,
    title: "Inside a beautiful kitchen organization",
    date: "October 16, 2023",
    image: img2,
  },
];

const BlogList = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[250px] object-cover shadow-md"
            />
            <h3 className="text-lg font-semibold mt-4">{blog.title}</h3>
            <p className="text-gray-500 text-sm">{blog.date}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 border rounded-full hover:bg-black hover:text-white transition">
          Show more
        </button>
      </div>
    </section>
  );
};

export default memo(BlogList);
