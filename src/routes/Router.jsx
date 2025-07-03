// src/routes/AppRoutes.jsx
import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

import Admin from "../pages/Admin";
import Seller from "../pages/Seller";
import User from "../pages/User";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/dashboard/admin", element: <Admin /> },
  { path: "/dashboard/seller", element: <Seller /> },
  { path: "/dashboard/user", element: <User /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
