import { useEffect, useState } from "react";
import type { IUser } from "../../../types";
import { useDispatch } from "react-redux";
import { api } from "../../../api";
import { removeToken } from "../../../lib/features/authSlice";

const Address = () => {
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
    <div className="w-full max-w-3xl bg-white shadow-md rounded-md p-6">
      <h4 className="text-xl font-medium mb-4">Billing Address</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <p className=" text-gray-900">{user?.firstName}</p>
        <p className=" text-gray-900">{user?.phone}</p>
        <p className=" text-gray-900">{user?.address?.address}</p>
      </div>
    </div>
  );
};

export default Address;
