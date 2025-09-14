import { memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubHeader from "./components/SubHeader";

const MainLayout = () => {
  return (
    <>
      <SubHeader/>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default memo(MainLayout);
