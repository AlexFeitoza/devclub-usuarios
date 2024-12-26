import { createBrowserRouter } from "react-router-dom";

import ListUsers from "./pages/ListUsers/index";
import Home from "./pages/Home/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/lista-de-usuarios",
    element: <ListUsers />,
  },
]);

export default router;
