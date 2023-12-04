import {  useParams } from "react-router-dom"
import NotsMain from "../nots-component"
import LeftBar from "../left-navbar"
import { notsLinks } from "../../../routes/links";
import { useEffect, useState } from "react";
import { getAllItems } from "../../../servises/admin";
// Konuya göre filtreleyip mapleleyecigz
export default function TopicDetail (){
    const {topicid} = useParams()
    const [nots , setNots] = useState([])
    const [otherClasses, setOtherClasses] = useState([])
    useEffect(() => {
      const fetchCategory = async () => {
        const notsData = await getAllItems("nots")
        const otherClassData = await getAllItems("class");
        setOtherClasses(otherClassData)
        setNots(notsData)
      };
      fetchCategory();
    }, []);
    const filteredClassByCategory = nots.filter((not) => not.category === topicid )
    console.log(filteredClassByCategory)
    return (
        <NotsMain>
            <div className="flex flex-col  w-full  gap-6 mobile:flex-row">
        <LeftBar />
    
       {topicid}
      </div>
        </NotsMain>
    )
}