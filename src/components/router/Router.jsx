import { createBrowserRouter } from "react-router";
import Home from "../../App";
import Success from "../auth/Success";
import Repos from "../repos/Repos";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/repos",
    element: <Repos />,
  },
]);
