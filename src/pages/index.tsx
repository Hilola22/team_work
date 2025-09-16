import { lazy, memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "./not-found";
import Logout from "./logout";
import Cart from "./cart";
import Info from "./detail/components/Info";
import Questions from "./detail/components/Questions";
import Reviews from "./detail/components/Reviews";

const MainLayout = lazy(() => import("./layout"));
const Home = lazy(() => import("./home"));
const Shop = lazy(() => import("./shop"));
const SignIn = lazy(() => import("./sign-in"));
const Account = lazy(() => import("./account"));
const Auth = lazy(() => import("./auth"));
const Blog = lazy(() => import("./blog"));
const Detail = lazy(() => import("./detail"));

const AppRouter = () => {
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      {useRoutes([
        {
          path: "/",
          element: <MainLayout />,
          children: [
            { index: true, element: <Home /> },
            { path: "shop", element: <Shop /> },
            { path: "logout", element: <Logout /> },
            { path: "cart", element: <Cart /> },
            { path: "blog", element: <Blog /> },
            {
              path: "products/:id",
              element: <Detail />,
              children: [
                {
                  index: true,
                  element: <Reviews />,
                },
                {
                  path: "questions",
                  element: <Questions />,
                },

                {
                  path: "info",
                  element: <Info />,
                },
              ],
            },
          ],
        },
        {
          path: "/",
          element: <Auth />,
          children: [
            {
              path: "",
              element: <MainLayout />,
              children: [{ path: "account", element: <Account /> }],
            },
          ],
        },
        { path: "/sign-in", element: <SignIn /> },
        { path: "/*", element: <NotFound /> },
      ])}
    </Suspense>
  );
};

export default memo(AppRouter);
