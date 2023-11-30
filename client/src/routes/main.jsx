import {  Route, Routes } from "react-router-dom";
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
  Nots,
  Blogs,

} from "../pages/routes";
import {
  Register,
  Login
} from "../pages/admin/routes";


export default function MainLocation () {
    return (
        <Routes>
      
          <Route path="/*" exact element={<Home />} />
          <Route path="/hakkımızda" element={<About />} />
          <Route path="/dersler" element={<LessonMain />}/>
          <Route path="/dersler/:lessonid" element={<LessonsDetails />} />
          <Route path="/bloglar" element={<Blogs />} />
          <Route path="/bloglar/:url" element={<BlogDetails />} />
          <Route path="/notlar" element={<Nots />} />
          <Route path="/notlar/:classid" element={<ClassDetail />} />
          <Route path="/notlar/:classid/:topicid" element={<TopicDetail />} />
          <Route path="/test-quiz" element={<Quizs />} />
          <Route path="/test-quiz/:quizid" element={<QuizDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        
      </Routes>
    )

}
