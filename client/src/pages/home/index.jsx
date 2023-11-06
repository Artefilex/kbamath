import SectionMain from "../../components/section-main";


import LessonMain from "../dersler/lesson-main";
import HomeMain from "./home-main";
import HomeBlogs from "./home-blogs";
import HomeLessons from "./home-lessons";
import HomeHeader from "./home-header";
import HomeDescription from "./home-description";
import HomeQuizs from "./home-quizs";
export default function Home() {
  return (
    <SectionMain>
      <HomeHeader/>
     <HomeDescription/>
      <HomeMain />
      <HomeQuizs/>
      <LessonMain />
      <HomeLessons />
      Bloglarımız 
      <HomeBlogs />
    </SectionMain>
  );
}
