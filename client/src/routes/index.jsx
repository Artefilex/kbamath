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
  AdminBlogs,
  EditBlog,
  AddBlog,
  AdminEducation,
  EditEducation,
  AddEducation,
  AdminQuizs,
  AddQuizs,
  EditQuizs,
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
        path: "/admin/nots",
        element: <AdminNots />,
      },
      {
        path: "/admin/blogs",
        element: <AdminBlogs />,
      },
      {
        path: "/admin/blogs-add-blog",
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
    ],
  },
]);

export default routes;
