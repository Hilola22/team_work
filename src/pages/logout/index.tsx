import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../lib/features/authSlice";

const LogOut = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    setLoading(true);
    localStorage.clear();
    dispatch(removeToken());
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center bg-white px-6 py-8 mt-50">
      <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-lg p-10 border border-gray-200">
        <h3 className="text-[30px] md:text-[36px] font-semibold text-gray-900 leading-tight">
          Are you sure you want to log out?
        </h3>

        <div className="flex gap-4 mt-8">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex-1 bg-black text-white py-2 rounded-md hover:bg-gray-300 "
          >
            {loading ? "Logging out..." : "Confirm"}
          </button>
          <button
            onClick={() => navigate(-1)}
            className="flex-1 border border-gray-400 text-gray-800 py-2 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(LogOut);
