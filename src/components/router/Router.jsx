import { createBrowserRouter } from "react-router";
import Home from "../../App";
import Success from "../auth/Success";
import Repos from "../repos/Repos";
import About from "../about/About";

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
  {
    path: "/about",
    element: <About />,
  },
]);
