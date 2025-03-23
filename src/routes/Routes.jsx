import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import { createBrowserRouter } from "react-router-dom";
import Service from "../pages/Service/Service";
import Pages from "../pages/Pages/Pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/services",
                element: <Service />,
            },
            {
                path: "/page",
                element: <Pages/>,
            },
        ],
    },
]);
