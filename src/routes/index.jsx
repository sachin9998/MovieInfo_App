import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ExplorePage from "../pages/ExplorePage";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":explore",
        element: <ExplorePage />,
      },
    ],
  },
]);

export default router;
