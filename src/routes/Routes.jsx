import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import { createBrowserRouter } from "react-router-dom";

export  const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
        ]
    }
]);
