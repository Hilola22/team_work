import { lazy, memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const MainLayout = lazy(() => import("./layout"));
const Home = lazy(() => import("./home"));
const Shop = lazy(() => import("./shop"));
const SignIn = lazy(() => import("./sign-in"));
const Account = lazy(() => import("./account"));
const Auth = lazy(() => import("./auth"));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {useRoutes([
        // puplic route with layout
        {
          path: "/",
          element: <MainLayout />,
          children: [
            { index: true, element: <Home /> },
            { path: "shop", element: <Shop /> },
          ],
        },
        // private route
        { path: "/", element: <Auth /> , children: [
          { path: "", element: <MainLayout />, children: [
            { path: "account", element: <Account /> },
          ] },
        ]},
        // puplic route without layout
        { path: "/sign-in", element: <SignIn /> },
      ])}
    </Suspense>
  );
};

export default memo(AppRouter);
