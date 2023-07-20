import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../component/Login";
import Projects from "../pages/Home/Projects";
import Services from "../pages/Home/Services";
import Register from "../component/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/project', element: <Projects /> },
            { path: '/services', element: <Services /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
        ]
    },
]);