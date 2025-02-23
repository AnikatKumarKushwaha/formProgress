import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./pages/MainPage";
import FormPage from "./pages/FormPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <FormPage /> },
      { path: "main", element: <Home /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
