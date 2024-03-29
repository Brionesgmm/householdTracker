import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Root from "./routes/Root";
import ErrorPage from "./routes/Error";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Index from "./routes/Index";
import Profile from "./routes/Profile";
import Logout from "./routes/Logout";
import Feed from "./routes/Feed";
import Post from "./routes/Post";
import ItemsTracker from "./routes/ItemsTracker";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <Index />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/logout",
//         element: <Logout />,
//       },
//       {
//         path: "/signup",
//         element: <Signup />,
//       },
//       {
//         path: "/profile",
//         element: <Profile />,
//       },
//       {
//         path: "/feed",
//         element: <Feed />,
//       },
//       {
//         path: "/post/:id",
//         element: <Post />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <ItemsTracker />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
