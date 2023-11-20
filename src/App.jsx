import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import ProtectedRoutes from "./ui/ProtectedRoutes";
import Profile from "./features/profile/Profile";
import PostDetails from "./features/posts/PostDetails";
import PageNotFound from "./ui/PageNotFound";
import Explore from "./pages/Explore";
import { ErrorBoundary } from "react-error-boundary";
import ServerError from "./ui/ServerError";

const router = createBrowserRouter([
  {
    element: (
      <ErrorBoundary FallbackComponent={ServerError} onReset={() => window.location.replace("/home")}>
        <ProtectedRoutes>
          <AppLayout />
        </ProtectedRoutes>
      </ErrorBoundary>
    ),
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace={true} />,
      },
      {
        path: "/home",
        element: <Home />,
        index: true,
      },
      {
        path: "/messages",
        element: <h1>Coming Soon</h1>,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/:username",
        element: <Profile />,
      },
      {
        path: "/post/:postId",
        element: <PostDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "rgb(38, 38, 38)",
            color: "white",
          },
        }}
      />
    </QueryClientProvider>
  );
};

export default App;
