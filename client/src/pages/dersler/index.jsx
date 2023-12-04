import SectionMain from "../../components/section-main";
import LeftbarLesson from "./leftbar-lesson";
import { Outlet } from "react-router-dom";
import LessonCard from "./lesson-main";

 function LessonsMain(){
  return (
      <SectionMain>
      <div className="w-full flex  flex-col  gap-6 mobile:flex-row">
        <LeftbarLesson/>
        <LessonCard/>
        <Outlet/>
      </div>
      </SectionMain>
  )
}

export default LessonsMain