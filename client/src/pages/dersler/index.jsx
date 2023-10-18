import { Link, } from "react-router-dom";
import SectionMain from "../../components/section-main";
import { pakets } from "../../mock"; 
export default function Lessons(){


    return (
        <SectionMain>
              <div  className="py-2 grid  grid-rows-1 grid-cols-1  mobile:grid-rows-2 mobile:grid-cols-2 w-full gap-3 deskop:grid-rows-3 deskop:grid-cols-3">  
     {
      pakets.map(( paket) => (
        <div key={ paket.id} className="flex items-center w-full justify-center">
           <Link to={`/dersler/${paket.url}`} className="  gap-4 flex  flex-col  bg-[color:var(--bg-primary)] p-2 min-h-[20rem]" >
         <img src="https://img2.bilgeyik.com/blog/770x480/1628077791_gzuttzn.jpg" width={300} alt="" />
        <div>
          <h2>{ paket.title} </h2>
          <h4> { paket.price} TL</h4>
        </div>
         </Link>
        </div>
        
       ))
      }     
        </div>
          

        </SectionMain>
    )
}