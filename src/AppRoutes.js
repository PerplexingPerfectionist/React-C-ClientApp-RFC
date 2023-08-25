import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import Home from "./components/Home";

const AppRoutes = [
    {
        index: true,
        element: <Home />,
        tag: "welcome"
    },
    {
        path: '/counter',
        element: <Counter />,
        tag: "step1"
    },
    {
        path: '/fetch-data',
        element: <FetchData />,
        tag: "step2"
    }
];

export default AppRoutes;
