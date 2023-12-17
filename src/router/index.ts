import { createBrowserRouter } from "react-router-dom";

import PathCostatnts from "../views/PathConstants";
import Layout from "../components/Layout";

import HomePage from "../views/HomePage";
import CardsInfoPage from "../views/CardsInfoPage";



const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: PathCostatnts.HOME,
        Component: HomePage,
      },
      {
        path: PathCostatnts.CARDSINFO,
        Component: CardsInfoPage,
      },
    ],
  },
]);

export default router;
