import { createBrowserRouter } from "react-router";
import Home from "../../App";
import Success from "../auth/Success";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/success",
    element: <Success />,
  },
]);
