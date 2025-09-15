import { memo, useState, type FormEvent } from "react";
import { api } from "../../api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setToken } from "../../lib/features/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import chair from "../../assets/chair.png";
import logo from "../../assets/logo.svg";

const SignIn = () => {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const body = {
      username,
      password,
      expiresInMins: rememberMe ? 60 * 24 * 7 : 10,
    };

    api
      .post("/auth/login", body)
      .then((res) => {
        toast.success("Welcome");
        dispatch(setToken(res.data.accessToken));
        navigate("/account");
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || "Login failed");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="hidden md:flex md:w-1/2 bg-gray-50 flex-col items-center justify-between py-10 px-10">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="Logo"
          className="w-[100px] md:w-[140px]"
        />
        <img
          src={chair}
          alt="Chair"
          className="w-fit min-w-[800px] mb-10 ml-[130px]"
        />
      </div>

      <div className="flex md:hidden flex-col items-center justify-center px-4 pt-8">
        <img src={logo} alt="Logo" className="w-[90px] mb-6" />
        <img src={chair} alt="Chair" className="w-[70%] max-w-[300px] mb-6" />
      </div>
      <div className="flex flex-1 items-center justify-center px-6 py-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div className="text-left">
            <h2 className="text-[32px] md:text-[40px] font-semibold mb-6">
              Sign In
            </h2>
            <p className="mt-2 text-sm mb-8">
              Don't have an account yet?{" "}
              <Link to={"#"} className="text-green-600 font-medium">
                Sign Up
              </Link>
            </p>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your username or email address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border-b border-gray-300 py-2 mb-8 focus:outline-none"
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                autoComplete="off"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-gray-300 py-2 mb-10 focus:outline-none"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 text-lg cursor-pointer select-none"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm mb-8">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="accent-green-600"
                />
                Remember me
              </label>
              <Link to={"/#"} className="font-semibold">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition-all duration-150 disabled:opacity-50"
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default memo(SignIn);
