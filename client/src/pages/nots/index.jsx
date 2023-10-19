import SectionMain from "../../components/section-main";
import HighSchool from "./high-school";
import LefttBar from "./left-navbar";

export default function Nots() {
  
  return (
    <SectionMain>
      <div className="flex flex-col  w-full  gap-6 mobile:flex-row">
        <LefttBar />
        <HighSchool />
      </div>
    </SectionMain>
  );
}
