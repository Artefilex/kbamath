import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts";
import Home from "../pages/home";
import About from "../pages/about";
import Lessons from "../pages/dersler";
import Nots from "../pages/nots";
import Admin from "../pages/admin";
import AdminNots from "../pages/admin/admin-nots";
import AdminBlogs from "../pages/admin/admin-blogs";
import AdminLessons from "../pages/admin/add-lessons"
import Blogs from "../pages/blogs";
import BlogDetails from "../pages/blogs/blog-details";
import FirstClass from "../pages/nots/high-school/first";
import SecondClass from "../pages/nots/high-school/second";
import ThirthClass from "../pages/nots/high-school/thirth";
import FourClass from "../pages/nots/high-school/four";
import LessonsDetails from "../pages/dersler/lesson-details";
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
        path: "/dersler",
        element: <Lessons/>
    },
    { 
        path: "/dersler/:lessonid",
        element: <LessonsDetails/>
    },
    {
        path: "/bloglar",
        element: <Blogs/>
    },
    {
        path:"/bloglar/:url",
        element: <BlogDetails/> 
    },
    {
        path: "/notlar",
        element: <Nots/>,
        children:[
            {
                index: true,
                element:  <FirstClass/>
            },
            {
                path: "/notlar/1-sınıf",
                element: <FirstClass/>
            },
            {
                path: "/notlar/2-sınıf",
                element: <SecondClass/>
            },
            {
                path: "/notlar/3-sınıf",
                element: <ThirthClass/>
            },
            {
                path: "/notlar/4-sınıf",
                element: <FourClass/>
            }
        ]
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
           },
           {
            path: "/admin/ders-ekle",
            element: <AdminLessons/>
           }
           
        ]
       
       }
]

},

])


export default routes