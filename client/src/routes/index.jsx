import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts";
import Home from "../pages/home";
import About from "../pages/about";
import Lessons from "../pages/dersler";
import Nots from "../pages/nots";
import Blogs from "../pages/blogs";
import Quizs from "../pages/quizs";
import BlogDetails from "../pages/blogs/blog-details";
import LessonsDetails from "../pages/dersler/lesson-details";
import LessonMain from "../pages/dersler/lesson-main";
import QuizDetails from "../pages/quizs/quiz-details";
import ClassDetail from "../pages/nots/class-detail";
import TopicDetail from "../pages/nots/topic-detail";

import AdminMain from "../pages/admin";
import AdminNots from "../pages/admin/admin-nots";
import AdminBlogs from "../pages/admin/admin-blogs";
import AdminLessons from "../pages/admin/add-lessons";
import AdminLayout from "../layouts/AdminLayout";
import EditBlog from "../pages/admin/admin-blogs/edit-blog";

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
    element: <AdminLayout/>,
    children: [
      {
        index: true,
        element: <AdminMain  />,
      },

      {
        path: "/admin/nots",
        element: <AdminNots />,
      },
      {
        path: "/admin/blogs",
        element: <AdminBlogs />,
      },
      {
        path: "/admin/blogs/:id",
        element: <EditBlog/>,
      },
      {
        path: "/admin/ders-ekle",
        element: <AdminLessons />,
      },
    ],
  },
]);

export default routes;
