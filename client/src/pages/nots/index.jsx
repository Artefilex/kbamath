import { memo } from "react";
import SectionMain from "../../components/section-main";

import LeftBar from "./left-navbar";

import { Outlet } from "react-router-dom";

const Nots = memo( function Nots() {
  
  return (
    <SectionMain>
      <div className="flex flex-col  w-full  gap-6 mobile:flex-row">
        <LeftBar />
        <Outlet/>
      </div>
    </SectionMain>
  );
})

export default Nots