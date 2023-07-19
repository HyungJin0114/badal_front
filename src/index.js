import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Stores from "./pages/Stores";
import Payments from "./pages/Payments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/profile",
        element: <MyProfile />,
      },
      {
        path: "/stores/:storeId",
        element: <Stores />,
      },
      {
        path: "/payments",
        element: <Payments />,
      },
      // {
      //   path: '/posts/new',
      //   element: <NewPost />,
      // },
      // {
      //   path: '/post/:postId',
      //   element: <PostDetail />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
