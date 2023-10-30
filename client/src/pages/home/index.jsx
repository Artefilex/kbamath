import SectionMain from "../../components/section-main";

import HomeNots from "./home-nots";
import LessonMain from "../dersler/lesson-main";
import HomeMain from "./home-main";
import HomeBlogs from "./home-blogs";
import HomeLessons from "./home-lessons";
import HomeHeader from "./home-header";
import HomeDescription from "./home-description";
export default function Home() {
  return (
    <SectionMain>
      <HomeHeader/>
     <HomeDescription/>
      <HomeMain />
      <LessonMain />
      <HomeNots />
      <HomeLessons />
      Bloglarımız 
      <HomeBlogs />
    </SectionMain>
  );
}
