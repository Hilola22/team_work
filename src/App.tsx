import { memo } from "react";
import AppRouter from "./pages";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="">
      <AppRouter />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default memo(App);
