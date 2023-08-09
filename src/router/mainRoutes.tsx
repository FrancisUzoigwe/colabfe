import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import TaskScreen from "../Pages/screen/TaskScreen";
import Register from "../Pages/auth/Register";

export const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TaskScreen />,
      },
    ],
  },
  {
    element: <Register />,
    path: "/register",
  },
]);
