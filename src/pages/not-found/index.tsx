import { memo } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-800">
        404
      </h1>
      <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-gray-700 mt-4">
        Page Not Found
      </h2>

      <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-2 max-w-md">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-black text-white text-sm sm:text-base rounded-lg shadow-md hover:bg-gray-800 transition duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default memo(NotFound);
