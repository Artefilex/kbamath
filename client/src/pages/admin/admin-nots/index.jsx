import SectionMain from "../../../components/section-main";
import AddNote from "./addnote";
import DeleteNote from "./deletenote";
import EditNote from "./editnote";


export default function AdminNots (){
    return  (
        <SectionMain>
           <AddNote/>
           <DeleteNote/>
           <EditNote/>
        </SectionMain>
    )
}