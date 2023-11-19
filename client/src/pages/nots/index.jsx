import { memo } from "react";
import SectionMain from "../../components/section-main";
import HighSchool from "./high-school";
import LefttBar from "./left-navbar";
import TopicDetail from "./topic-detail";
import { Outlet } from "react-router-dom";

const Nots = memo( function Nots() {
  
  return (
    <SectionMain>
      <div className="flex flex-col  w-full  gap-6 mobile:flex-row">
        <LefttBar />
        <Outlet/>
      </div>
    </SectionMain>
  );
})

export default Nots