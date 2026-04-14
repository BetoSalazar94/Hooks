import { createBrowserRouter, Navigate } from "react-router";
import { AboutPage } from "../pages/about/About";
import { ProfilePage } from "../pages/about/profile/ProfilePage";
import { LoginPage } from "../pages/about/auth/LoginPage";
import { PrivateRoute } from "./PrivateRoute";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AboutPage />,
    },
    {
        path: "/profile",
        element: <PrivateRoute element={<ProfilePage />} />,
    },

    {
        path: "/login",
        element: <LoginPage />,
    },

    {
        path: "*",
        element: <Navigate to="/" />,
    }


]);
