
import { memo } from "react";
import SectionMain from "../../components/section-main";
import LeftbarLesson from "./leftbar-lesson";

import MainLocation from "../../routes/main";

const Lessons = memo( function Lessons(){
  return (
      <SectionMain>
      <div className="w-full flex  flex-col  gap-6 mobile:flex-row">
        <LeftbarLesson/>
        <MainLocation/>
      </div>
      </SectionMain>
  )
})

export default Lessons