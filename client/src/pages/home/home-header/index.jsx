import headerstudent from "../../../assests/image/homeheaderstudent.jpg";
import mainimg from "../../../assests/image/mainheader.svg";
export default function HomeHeader() {
  return (
  
      <header className="w-full tablet:w-[95%] relative flex items-end justify-end   mobile:flex-row">
        <div className="w-full  flex flex-col justify-center  absolute left-0  z-[2]">
            <img
              src={mainimg}
              alt=""
              className=" h-[8rem] max-w-[12rem] mobile:max-w-[18rem]  tablet:h-[18rem]  laptop:h-[18rem]  deskop:h-[18rem] object-cover  "
            />
           
    
           
            <h1 className="w-full text-[2rem] mobile:text-[3rem] tablet:text-[4rem] laptop:text-[6rem] deskop:text-[8rem] bg-clip-text text-transparent bg-gradient-to-t from-blue-900 to-blue-300 contrast-200 ">MATEMATİK</h1> 
          
          
        </div> 
          <img
            src={headerstudent}
            alt="Header"
            className="w-[30rem]  h-[15rem] tablet:h-[18rem] tablet:w-[35rem] laptop:h-[25rem] laptop:w-[40rem] deskop:h-[28rem] deskop:w-[45rem] object-cover object-top header-clip "
          />
       
      </header>
  );
}
