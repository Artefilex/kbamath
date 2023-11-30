import { createBrowserRouter } from "react-router-dom";
import {
    AdminNots,
    AddNote,
    EditNote,
    AdminBlogs,
    EditBlog,
    AddBlog,
    AdminEducation,
    EditEducation,
    AddEducation,
    AdminQuizs,
    AddQuizs,
    EditQuizs,
    AdminCategory,
    AddCategory,
    UsersEdit,
    AdminUsers,
  
  } from "../pages/admin/routes";
  import AdminLayout from "../layouts/AdminLayout";
import AdminMain from "../pages/admin";

  const admin = createBrowserRouter([

   {
      path:  "/admin"  ,
      element:  <AdminLayout/> ,
      children: [
        {
          index: true,
          element: <AdminMain />,
        },
     
        {
          path: "/admin/users",
          element: <AdminUsers/>,
        },
        {
          path: "/admin/users/:id",
          element: <UsersEdit/>,
        },
        {
          path: "/admin/nots",
          element: <AdminNots />,
        },
        {
          path: "/admin/add-note" ,
          element: <AddNote/>
        },
        {
          path: "/admin/nots/:id" ,
          element: <EditNote/>
        },
        {
          path: "/admin/blogs",
          element: <AdminBlogs />,
        },
        {
          path: "/admin/add-blog",
          element: <AddBlog />,
        },
        {
          path: "/admin/blogs/:id",
          element: <EditBlog />,
        },
        {
          path: "/admin/educations",
          element: <AdminEducation />,
        },
        {
          path: "/admin/educations-add",
          element: <AddEducation />,
        },
        {
          path: "/admin/education/:id",
          element: <EditEducation />,
        },
  
        {
          path: "/admin/quizs",
          element: <AdminQuizs />,
        },
        {
          path: "/admin/quizs-add",
          element: <AddQuizs />,
        },
        {
          path: "/admin/quizs/:id",
          element: <EditQuizs />,
        },
        {
          path : "/admin/category",
          element:<AdminCategory/>
        },
        {
          path : "/admin/category-add",
          element:<AddCategory/>
        }
      ],
    } 
   
  ]);
  
  export default admin;