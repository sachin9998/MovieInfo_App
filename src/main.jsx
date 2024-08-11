import axios from "axios";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/index.jsx";
import { Provider } from "react-redux";
import store from "./store/store.jsx";

// Setup Axios
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

axios.defaults.headers.common["Authorization"] =
  `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
