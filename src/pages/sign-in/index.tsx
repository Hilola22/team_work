import { memo, useState, type FormEvent } from "react";
import { api } from "../../api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setToken } from "../../lib/features/authSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const body = { username, password, expiresInMins: 1 };
    api
      .post("/auth/login", body)
      .then((res) => {
        toast.success("Welcome");
        dispatch(setToken(res.data.accessToken));
        navigate("/account")
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="Index">
      <h2>SignIn</h2>
      <form onSubmit={handleSubmit} action="">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border"
          type="text"
        />
        <input
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border"
          type="password"
        />
        <button
          className="border bg-slate-900 text-white disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "loading..." : "sign in"}
        </button>
      </form>
    </div>
  );
};

export default memo(SignIn);
