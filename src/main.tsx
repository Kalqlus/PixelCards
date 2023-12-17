import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";

import router from "./router";
import "./main.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <RouterProvider router={router} />
  </>
);
