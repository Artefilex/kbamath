import SectionMain from "../../components/section-main";
import AboutHeader from "../about/about-header";
import HomeNots from "./home-nots";
import LessonMain from "../dersler/lesson-main";
import HomeMain from "./home-main";
import HomeBlogs from "./home-blogs";
import HomeLessons from "./home-lessons";
import HomeDescription from "./home-description";
export default function Home() {
  return (
    <SectionMain>
      <HomeDescription/>
     
      Sizleri önemsiyoruz çünkü hedefimiz .... 
      <HomeMain />
      <LessonMain />
      <HomeNots />
      <HomeLessons />
      Bloglarımız 
      <HomeBlogs />
    </SectionMain>
  );
}
