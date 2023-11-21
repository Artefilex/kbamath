import { memo } from "react";
import SectionMain from "../../components/section-main";

import LeftBar from "./left-navbar";

import { Outlet } from "react-router-dom";
import AddEducation from "../admin/admin-education";

const Nots = memo( function Nots() {
  
  return (
    <SectionMain>
       <AddEducation/>
      <div className="flex flex-col  w-full  gap-6 mobile:flex-row">
        <LeftBar />
       
        <Outlet/>
      </div>
    </SectionMain>
  );
})

export default Nots