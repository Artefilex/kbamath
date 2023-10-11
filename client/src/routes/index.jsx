import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts";
import Home from "../pages/home";
import About from "../pages/about";
import Services from "../pages/services";
import Contact from "../pages/contact";
import Nots from "../pages/nots";
import Admin from "../pages/admin";
import AdminNots from "../pages/admin/admin-nots";
import AdminBlogs from "../pages/admin/admin-blogs";
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
    },
    {
        path: "/admin",
        children: [
            {
                index: true,
                element: <Admin/>
            },

           {
               path: "/admin/nots",
               element: <AdminNots/>,
           
           },
           {
            path: "/admin/blogs",
            element: <AdminBlogs/>
           }
           
        ]
       
       }
]

},

])


export default routes