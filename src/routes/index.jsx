import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts";
import Home from "../pages/home";
import About from "../pages/abouth";
import Services from "../pages/services";
import Contact from "../pages/contact";
import Nots from "../pages/nots";

const routes = createBrowserRouter([
{ path : "/",
element: <MainLayout/>,
children:[
    {
        index: true,
        element: <Home/>
    },
    {
        path: "/hakkımızda",
        element: <About/>

    },
    {
        path: "/hizmetler",
        element: <Services/>
    },
    {
        path: "/iletişim",
        element: <Contact/>
    },
    {
        path: "/notlar",
        element: <Nots/>
    }
]

}
])


export default routes