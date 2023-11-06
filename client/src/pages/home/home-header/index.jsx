import { memo } from "react";
// import headerstudent from "../../../assests/image/homeheaderstudent.jpg";
 import mainimg from "../../../assests/image/mainheader.svg";
//  import { useAppearance } from "../../../store/appearance/hooks";
// import classNames from "classnames"
import headerimg from "../../../assests/image/header.jpg"
const HomeHeader = memo(function HomeHeader() {
  //  const {theme}= useAppearance()
  return (
  
      // <header className="w-full relative flex items-end justify-end   mobile:flex-row">
      //   <div className="w-full  flex flex-col justify-start items-start  absolute left-0  z-[2]">
      //       <img
      //         src={mainimg}
      //         alt=""
         
      //         className={classNames("h-[8rem] max-w-[12rem] mobile:max-w-[18rem]  tablet:h-[18rem]  laptop:h-[18rem]  deskop:h-[18rem] object-cover",{
      //           "drop-shadow-dark" : theme.name  === "dark" ,
      //           "drop-shadow-light" : theme.name === "light"
      //         })}
      //       />
 
      //       <h1 className="text-[2rem] mx-5 mobile:text-[3rem] tablet:text-[4rem] mobile:mx-0 laptop:text-[6rem] deskop:text-[8rem] bg-clip-text text-transparent bg-gradient-to-t from-blue-900 to-blue-300 contrast-200  ">MATEMATİK</h1> 
    
      //   </div> 
      //     <img
      //       src={headerstudent}
      //       alt="Header"
      //       className="w-[30rem]  h-[15rem] tablet:h-[18rem] tablet:w-[35rem] laptop:h-[25rem] laptop:w-[40rem] deskop:h-[28rem] deskop:w-[45rem] object-cover object-top header-clip opacity-10 "
      //     />
      //       {/* <img
      //       src={headerstudent}
      //       alt="Header"
      //       className="opacity-5 h-[25rem] w-full  object-cover"
      //     /> */}
      // </header>
      <header className="w-full  flex items-end justify-end  mobile:flex-row   min-h-screen ">
        <div className="w-full   min-h-screen bg-black/70 flex flex-col justify-start items-start  absolute left-0  z-[1] ">
        <img src={headerimg} alt=""  className="w-full min-h-screen object-cover blur-md"/>
           <div className="w-full  flex flex-col justify-center items-center absolute  mt-[10rem] z-[2]">
            <img
               src={mainimg}
              alt=""
             className={"w-[20rem] h-[15rem] object-cover"}
           />
         <div className="text-[2rem] text-capitalize  max-w-[30rem] text-center font-bold text-black/70">
          Matematik Hiç Olmadığı Kadar Kolay
         </div>
              
    
       </div> 
        </div> 
      </header>
  );
})
export default HomeHeader