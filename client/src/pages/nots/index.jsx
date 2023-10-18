import SectionMain from "../../components/section-main";
import HighSchool from "./high-school";
import LefttBar from "./left-navbar";
import {BlogProvider} from "../../utils/data"
export default function Nots() {
   const {data ,loading} = BlogProvider()
   console.log(data , loading)
  return (
    <SectionMain>
      <div className="flex flex-col  w-full  gap-6 mobile:flex-row">
        <LefttBar />
        <HighSchool />
      </div>
    </SectionMain>
  );
}
