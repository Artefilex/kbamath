
import mainimg from "../../../assests/image/mainheader.svg";
import headerimg from "../../../assests/image/header.jpg"
function HomeHeader() {

  return (
  
      
      <header className="w-full  flex items-end justify-end min-h-screen mobile:flex-row  ">
        <div className="w-full   bg-black/70 flex flex-col justify-start items-start top-0  absolute left-0  z-[1] ">
        <img src={headerimg} alt=""  className="w-full  min-h-screen  object-cover blur-md"/>
           <div className="w-full  flex flex-col justify-center items-center absolute  mt-[10rem] z-[2]">
          <div>
          <img
               src={mainimg}
              alt=""
             className={"w-[20rem] h-[15rem] object-cover"}
           />
          </div>    
         <div className="font-bold text-[1.4rem] mobile:text-[1.5rem] tablet:text-[1.8rem] xtablet:text-[2rem]  text-white drop-shadow-text text-center capitalize">Sizleri önemsiyoruz çünkü geleceğimizin siz olduğunu biliyoruz </div>  
       </div> 
        </div> 
      </header>
  );
}
export default HomeHeader