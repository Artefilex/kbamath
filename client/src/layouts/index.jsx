import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import { useAppearance } from "../store/appearance/hooks";
import { useEffect } from "react";
import RightBar from "./rightbar";
export default function MainLayout(){
   const appearance = useAppearance()
   useEffect(()=>{
      document.documentElement.style.setProperty("--bg-primary", appearance.theme.bgPrimary )
      document.documentElement.style.setProperty("--bg-secondary", appearance.theme.bgSecondary)
      document.documentElement.style.setProperty("--c-base", appearance.theme.base )
      document.documentElement.style.setProperty("--c-subbase", appearance.theme.subbase )
      document.documentElement.style.setProperty("--box-shadow", appearance.theme.boxShadow )
   },[appearance])
 return(
    <div className="w-full flex flex-col items-center  min-h-[120vh]">
    <Navbar/>
  
    <div className="min-h-[120vh] flex items-start w-full laptop:max-w-[80%]  gap-2 ">
    <Outlet />
    <RightBar/>
    </div>
  

  
   
    <Footer/>
    </div>
 )

}