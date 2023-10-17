
import SectionMain from "../../components/section-main";
import HighSchool from "./high-school";
import LefttBar from "./left-navbar";


export default function Nots (){
    return (
        <SectionMain>
      <div className="flex  w-full  gap-6">
      <LefttBar/>
     <HighSchool/>
      </div>
        </SectionMain>
    )
}