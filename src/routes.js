import Home from "./Containers/App";
import About from "./Containers/About";

export default [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/about",
        component: About,
        exact: true,
    }
];
