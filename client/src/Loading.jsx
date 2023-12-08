import KBA from "./assests/image/mainheader.svg"
import { CgSpinnerTwoAlt } from "react-icons/cg";

function Loading() {
  return <div className="w-full flex flex-col items-center justify-center bg-slate-800  text-white min-h-screen overflow-hidden">
      <img src={KBA} alt="başlık"  className="animate-ping w-[16rem] mobile:w-[20rem] " />
         <CgSpinnerTwoAlt   className="animate-spin w-[4rem] h-[4rem] mobile:w-[8rem] mobile:h-[8rem]" />
         <div className="animate-pulse font-bold mobile:text-[2rem]"> Loading  </div>
  </div>;
}

export default Loading;
