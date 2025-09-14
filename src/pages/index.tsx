import { memo, useEffect } from "react";
// import { api } from '../../api';
import { api } from "../api";
import { useDispatch } from "react-redux";
// import { removeToken } from '../../lib/features/authSlice';
import { removeToken } from "../lib/features/authSlice";

const Account = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    api
      .get("/auth/me")
      .then()
      .catch(() => {
        dispatch(removeToken());
      });
  }, []);
  return (
    <div className="Index">
      <h2>Account</h2>
    </div>
  );
};

export default memo(Account);
