import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/store/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

const About = lazy(() => import("./components/About"));

const AppLayout = () => (
  <Provider store={appStore}>
    <div className="app">
      <UserContext.Provider value={{ userName: "Hema" }}>
        <Header />
      </UserContext.Provider>
      <Outlet />
    </div>
  </Provider>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />, // Error boundary for AppLayout and its children
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />, // Specific error boundary for Body component
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
