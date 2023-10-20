import { pakets } from "../../../mock"; 
import { Link, } from "react-router-dom";
export default function LeftbarLesson () {

    return (
      <nav  className="flex mobile:flex-col mobile:min-h-screen gap-3  mobile:border-r-2  border-r-[color:var(--c-subbase)] transition-all duration-400">
          {
            pakets.map(( paket) => (
                 <Link key={paket.id} to={`/dersler/${paket.url}`} className="hover:bg-[color:var(--c-subbase)] justify-center w-full min-w-[10rem]  gap-4 flex  flex-col  px-2 min-h-[3rem]" >
                <h2>{ paket.title} </h2>
               </Link>
    
              
             ))
            }    
      </nav>
    )
}