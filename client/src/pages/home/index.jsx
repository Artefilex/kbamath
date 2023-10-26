import SectionMain from "../../components/section-main";
import AboutHeader from "../about/about-header";
import HomeNots from "./home-nots";
import LessonMain from "../dersler/lesson-main";
import HomeMain from "./home-main";
import HomeBlogs from "./home-blogs";
import HomeLessons from "./home-lessons";
export default function Home() {
  return (
    <SectionMain>
      <h4>Matematikte Başarının Anahtarı Burada</h4>
      <AboutHeader />
      <HomeMain />
      <LessonMain />
      <HomeBlogs />
      <HomeLessons />
      <HomeNots />
    </SectionMain>
  );
}
