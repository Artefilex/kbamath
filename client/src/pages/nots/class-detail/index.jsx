import {  Link, useParams } from "react-router-dom"
import NotsMain from "../nots-component"
import LeftBar from "../left-navbar"
import { notsLinks } from "../../../routes/links";
import { useEffect, useState } from "react";
import { getAllItems } from "../../../servises/admin";
export default function ClassDetail (){
  // Sınıfa Göre verileri filtreleyip mapleyecegiz 
    const {classid} = useParams()
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
    console.log("nots", nots);
    console.log("otherClasses", otherClasses);
    console.log("classid", classid);
    
    const filteredByClass = nots.filter((not) => not.class === classid )
    console.log(filteredByClass)
    return (
        <NotsMain>
              <div className="flex flex-col  w-full  gap-6 mobile:flex-row">
        <LeftBar />
        {filteredByClass.map((not) =>(
       <Link key={not.id} 
         to={`/notlar/${classid}/${not.category}`}
       >
         <img src={`${import.meta.env.VITE_BASE_URL}/${not.image}`} alt={not.category}  className="w-[200px] xtablet:w-[200px] h-full max-h-[400px] object-cover"/>       
         <div>{not.category}</div>
       </Link>))
       }
      </div>
          
           
        </NotsMain>
    )
}