import SectionMain from "../../components/section-main";
import NotsCard from "./NotsCard";
import LeftBar from "./left-navbar";
import { Outlet } from "react-router-dom";

const Nots =  function Nots() {
  return (
    <SectionMain>
      <div className="flex flex-col  w-full  gap-6 mobile:flex-row">
        <LeftBar />
        <NotsCard/>
        <Outlet/>
      </div>
    </SectionMain>
  );
}

export default Nots