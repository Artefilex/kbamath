import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts";
import AdminLayout from "../layouts/AdminLayout";

import BlogDetails from "../pages/blogs/blog-details";
import LessonsDetails from "../pages/dersler/lesson-details";
import LessonMain from "../pages/dersler/lesson-main";
import QuizDetails from "../pages/quizs/quiz-details";
import ClassDetail from "../pages/nots/class-detail";
import TopicDetail from "../pages/nots/topic-detail";
import {
  Quizs,
  Home,
  About,
  Lessons,
  Nots,
  Blogs,
  AdminMain,
} from "../pages/routes";
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
  Register,
  Login
} from "../pages/admin/routes";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/hakkımızda",
        element: <About />,
      },
      {
        path: "/dersler",
        element: <Lessons />,
        children: [
          {
            index: true,
            element: <LessonMain />,
          },
          {
            path: "/dersler/:lessonid",
            element: <LessonsDetails />,
          },
        ],
      },
      {
        path: "/bloglar",
        element: <Blogs />,
      },
      {
        path: "/bloglar/:url",
        element: <BlogDetails />,
      },
      {
        path: "/notlar",
        element: <Nots />,
        children: [
          {
            path: "/notlar/:classid",
            element: <ClassDetail />,
          },
          {
            path: "/notlar/:classid/:topicid",
            element: <TopicDetail />,
          },
        ],
      },
      {
        path: "/test-quiz",
        element: <Quizs />,
      },
      {
        path: "/test-quiz/:quizid",
        element: <QuizDetails />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
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
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

export default routes;
