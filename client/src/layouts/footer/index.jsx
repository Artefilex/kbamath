import { Link } from "react-router-dom"

export default function Footer (){
    
    return(
       <footer  className="border-1  w-full laptop:max-w-[80%] gap-4 flex-col flex items-center justify-center my-4 relative bg-[color:var(--bg-secondary)] px-2 py-6 mobile:">
         <header className="border-1  w-full laptop:max-w-[80%] gap-4 flex-col flex items-center tablet:items-start tablet:flex-row  justify-center my-4 relative bg-[color:var(--bg-secondary)] px-2 py-6 mobile:">
         <div className=" max-w-[20rem]  flex justify-center ">  
          <img src="../../../public/kba.svg" alt="" className="h-full w-full px-2 py-2  filter: "  />
          </div>          
         <div className=" w-full h-[10rem] bg-[color:var(--c-subbase)] "> 
           <nav>
           <Link to={"/notlar"} > Kba Geometri  </Link>
           <Link to={"/notlar"} > Kba Matematik  </Link>
           <Link to={"/notlar"} > İnstagram  </Link>
           </nav>
         
          </div>  
         <div className=" w-full  h-[10rem] bg-[color:var(--c-subbase)] "> iconlar</div>  
        </header>
        <span>birlikte yarınlara emin adımlarla </span>
       </footer>
    )
}