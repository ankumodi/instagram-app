import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import instaStore from "./store/index.js";
import Login from "./components/auth/LoginPage.jsx";
import PostList from "./components/dashboard/PostList.jsx";
import CreatePost from "./components/dashboard/CreatePost.jsx";
import RequireAuth from "./components/auth/RequireAuth.jsx";
import RedirectIfAuth from "./components/auth/RedirectIfAuth.jsx";
import Profile from "./components/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      {
        path: "/login",
        element: (
          <RedirectIfAuth>
            <Login />
          </RedirectIfAuth>
        ),
      },
      { path: "/profile", element: <Profile /> },
      {
        path: "/posts/new",
        element: (
          <RequireAuth>
            <CreatePost />
          </RequireAuth>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={instaStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
