import React from "react";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Signin from "./Signin";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Signin />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}>
        <Browse />
      </RouterProvider>
    </div>
  );
};

export default Body;
