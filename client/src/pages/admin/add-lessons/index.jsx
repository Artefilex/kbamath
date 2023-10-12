import SectionMain from "../../../components/section-main";
import AddLesson from "./addlessson";
import DeleteLesson from "./deletelesson";
import EditLesson from "./editlesson";

export default function AdminLessons(){
    return (
        <SectionMain>
           <AddLesson/> 
          <EditLesson/>
          <DeleteLesson/>
        </SectionMain>
    )
}