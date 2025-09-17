import { memo, useEffect, useState } from "react";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { removeToken } from "../../lib/features/authSlice";
import camera from "../../assets/camera.svg";
import type { IUser } from "../../types";
import { useNavigate, Outlet } from "react-router-dom";

const Account = () => {
  const [isSmall, setSmall] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setSmall(window.innerWidth < 600);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [user, setUser] = useState<IUser | null>(null);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) return;
    api
      .get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res.data))
      .catch(() => {
        dispatch(removeToken());
      });
  }, [token, dispatch]);
  return (
    <div className="p-7 sm:p-0">
      <div className="container">
        <h3 className="text-[24px] md:text-[44px] text-center m-10 font-semibold">
          My Account
        </h3>
        <div className="flex-col sm:flex sm:flex-row sm:gap-[102px]">
          <div className="bg-[#F3F5F7] md:w-[262px] p-10">
            <div className="flex relative flex-col justify-center items-center">
              <div className="mb-5">
                <img
                  className="w-20  h-20 rounded-full object-cover"
                  src={user?.image}
                  alt=""
                />
                <span className="bg-black rounded-full border-2 border-white w-8 h-8 md:right-6 flex justify-center absolute top-[60px] right-23 sm:right-13">
                  <img className="w-5 " src={camera} alt="" />
                </span>
              </div>
              <strong>
                {user?.firstName} {user?.lastName}
              </strong>
            </div>
            <div className="mt-12">
              {isSmall === false ? (
                <div>
                  <strong
                    onClick={() => navigate("")}
                    className="cursor-pointer"
                  >
                    Account
                  </strong>
                  <hr className="mt-3" />
                  <div className="mt-5 leading-10 font-medium hidden sm:block">
                    <p
                      onClick={() => navigate("address")}
                      className="text-[#6C7275] text-[18px] cursor-pointer hidden sm:block"
                    >
                      Address
                    </p>
                    <p
                      onClick={() => navigate("/cart")}
                      className="text-[#6C7275] text-[18px]"
                    >
                      Cart
                    </p>
                    <p
                      onClick={() => navigate("/wishlist")}
                      className="text-[#6C7275] text-[18px]"
                    >
                      Wishlist
                    </p>
                    <p
                      onClick={() => navigate("/logout")}
                      className="text-[#6C7275] text-[18px]"
                    >
                      Log Out
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <select className="w-full text-[#6C7275] text-[18px]">
                    <option value="account">Account</option>
                    <option value="address">Address</option>
                    <option value="orders">Orders</option>
                    <option value="wishlist">Wishlist</option>
                    <option value="logout">Log Out</option>
                  </select>
                  <hr className="mt-3" />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col mt-20 mb-20 sm:mt-0 sm:mb-0">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Account);
