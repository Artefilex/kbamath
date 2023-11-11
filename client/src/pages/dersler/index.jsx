
import { memo } from "react";
import SectionMain from "../../components/section-main";
import LeftbarLesson from "./leftbar-lesson";
import { Outlet } from "react-router-dom";

const Lessons = memo( function Lessons(){
  return (
      <SectionMain>
      <div className="w-full flex  flex-col  gap-6 mobile:flex-row">
        <LeftbarLesson/>
        <Outlet/>
      </div>
      </SectionMain>
  )
})

export default Lessons