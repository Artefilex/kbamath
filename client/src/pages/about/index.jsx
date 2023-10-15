import { useEffect, useState } from "react"
import SectionMain from "../../components/section-main"
import { getData  } from "../../utils/blog"

export default function About(){
    const [arr, setArr] = useState([]) 
    
    useEffect(()=>{
        const fetchData = async () => {
            const response = await getData();
            setArr(response[0]); // Veriyi state'e atayın
          };
         
          fetchData();
    })
 

    return (
        <SectionMain>
    
        </SectionMain>
    )
}