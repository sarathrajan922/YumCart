import React from "react";
import ReactDOM from "react-dom/client";
import Headercomponent  from "./components/Header";
import Footercomponents  from "./components/Footer";
import Bodycomponents  from "./components/Body";
import AboutUspage from "./components/About";
import Contact from "./components/contact";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";





const Applayout = () => {
  return (
    <>
      <Headercomponent />
      <Outlet/>
      <Footercomponents />
    </>
  );
};


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: < Applayout />,
    errorElement: < Error />,
    children : [
      {
        path: '/about',
        element : <AboutUspage/>
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
      {
        path: '/',
        element: <Bodycomponents/>
      },
      {
        path: '/resturant/:id',
        element: <ResturantMenu />
      }
    ]
  },
  
])




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider router={appRouter} />);
