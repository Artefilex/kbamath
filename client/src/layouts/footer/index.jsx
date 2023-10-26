import { Link } from "react-router-dom"
import {BsInstagram} from "react-icons/bs"

export default function Footer (){
    
    return(
       <footer  className="border-1  w-full laptop:max-w-[80%] gap-4 flex-col flex items-center justify-center my-4 relative bg-[color:var(--bg-secondary)] px-2 py-6 mobile:">
         <header className="border-1  w-full laptop:max-w-[80%] gap-4 flex-col flex items-center tablet:items-start tablet:flex-row  justify-center my-4 relative bg-[color:var(--bg-secondary)] px-2 py-6 mobile:">
         <div className=" max-w-[20rem]  flex justify-center ">  
   
          </div>          
         <div className=" w-full h-[10rem] "> 
          
           <Link to={"https://www.instagram.com/kbamatematik_/?hl=tr"} > <BsInstagram/> Kba Matematik   </Link>
           <Link to={"https://www.instagram.com/kbageometri/?hl=tr"} > <BsInstagram/>  Kba  Geometri  </Link>
          
      
         
          </div>  
         <div className=" w-full  h-[10rem] "> <h3>  Hızlı Ulaşım </h3>
        
          </div>  
        </header>
        <span>birlikte yarınlara emin adımlarla </span>
       </footer>
    )
}