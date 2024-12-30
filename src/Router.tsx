import { RouterProvider, createHashRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/Default";
import { HomePage } from "./pages/Home";
import { MdToString } from "./pages/MdToString";




const router = createHashRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true, // same path as parent: "/"
        element: <HomePage />,
      },
      {
        'path': 'mdtostring',
        'element': <MdToString />,
      }
    ],
  },

]);

export function Router() {
  return <RouterProvider router={router} />;
}
