
import SectionMain from "../../components/section-main";
import LeftbarLesson from "./leftbar-lesson";
import { Outlet } from "react-router-dom";

export default function Lessons(){


    return (
        <SectionMain>
        <div className="w-full flex  flex-col   gap-6 mobile:flex-row">
          <LeftbarLesson/>
          <Outlet/>
        </div>
        </SectionMain>
    )
}