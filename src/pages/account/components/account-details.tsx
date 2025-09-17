import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { api } from "../../../api";
import { removeToken } from "../../../lib/features/authSlice";
import type { IUser } from "../../../types";

const AccountDetails = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
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
    <div>
      <div className="flex container flex-col mt-20 mb-20 sm:mt-0 sm:mb-0">
        <div className="shadow-lg  md:w-[100%] p-10">
          <h4 className="text-xl font-medium">Account Details</h4>
          <br />
          <p className="text-[#6C7275] text-[18px]">First name *</p>
          <p className="text-[20px]">{user?.firstName}</p>
          <br />
          <p className="text-[#6C7275] text-[18px]">Last name *</p>
          <p className="text-[20px]">{user?.lastName}</p>
          <br />
          <p className="text-[#6C7275] text-[18px]">Display name *</p>
          <p className="text-[20px]">{user?.username}</p>
          <p className="text-gray-400">
            This is how your name will be displayed in the account section and
            in reviews
          </p>
          <br />
          <p className="text-[#6C7275] text-[18px]">Email</p>
          <p className="text-[20px]">{user?.email}</p>
          <br />{" "}
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
