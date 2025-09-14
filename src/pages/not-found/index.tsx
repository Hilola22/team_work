import { memo } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <h1 className="text-7xl font-extrabold text-gray-800">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-500 mt-2 max-w-md">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default memo(NotFound);
