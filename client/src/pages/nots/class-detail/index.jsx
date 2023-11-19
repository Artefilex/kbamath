import { useParams } from "react-router-dom"
import NotsMain from "../nots-component"

export default function ClassDetail (){
    const {classid} = useParams()
    console.log(classid)
   
    return (
        <NotsMain>
            {classid}
        </NotsMain>
    )
}