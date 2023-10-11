import AddNote from "./addnote";
import DeleteNote from "./deletenote";
import EditNote from "./editnote";


export default function AdminNots (){
    return  (
        <div>
           <AddNote/>
           <DeleteNote/>
           <EditNote/>
        </div>
    )
}