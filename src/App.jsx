import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { QueryClient , QueryClientProvider } from '@tanstack/react-query';

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
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
        element: <Home />,
      },
      {
        path: "home/:username",
        element: <div>profile</div>,
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
]);

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster position="top-center" gutter={12} containerStyle={{ margin: "8px" }} toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000
          },
          style: {
            fontSize: '16px',
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: 'rgb(38, 38, 38)',
            color: 'white'
          }
        }} />
    </QueryClientProvider>
  );
};

export default App;
