
import SectionMain from "../../../components/section-main";
import AddNote from "./addnote";
import DeleteNote from "./deletenote";
import EditNote from "./editnote";
import { useUser } from "../../../store/auth/hooks";

export default function AdminNots (){
    const {user} = useUser() 
    if(!user){ 
       return <div> giriş yetkiniz yok </div>
    }
    return  (
        <SectionMain>
           <AddNote/>
           <DeleteNote/>
           <EditNote/>
        </SectionMain>
    )
}