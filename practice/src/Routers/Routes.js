import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Orders from "../components/Orders/Orders";
import About from "../components/About/About";
import Grandpa from "../components/Grandpa/Grandpa";
import { data } from "../Data/Data";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                index: true,
                loader: data,
                element: <Home />
            },
            {
                path: '/home',
                loader: data,
                element: <Home />
            },
            {
                path: '/orders',
                element: <Orders />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/grandpa',
                element: <Grandpa />
            }
        ]
    }
]);