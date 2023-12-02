import {  useParams } from "react-router-dom"
import NotsMain from "../nots-component"
import LeftBar from "../left-navbar"

export default function ClassDetail (){
    const {classid} = useParams()
    
    return (
        <NotsMain>
              <div className="flex flex-col  w-full  gap-6 mobile:flex-row">
        <LeftBar />

        {classid}
      </div>
          
           
        </NotsMain>
    )
}