import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import { useAppearance } from "../store/appearance/hooks";
import { useEffect } from "react";
export default function MainLayout(){
   const appearance = useAppearance()
   useEffect(()=>{
      document.documentElement.style.setProperty("--bg-primary", appearance.theme.bgPrimary )
      document.documentElement.style.setProperty("--bg-secondary", appearance.theme.bgSecondary)
      document.documentElement.style.setProperty("--c-base", appearance.theme.base )
      document.documentElement.style.setProperty("--c-subbase", appearance.theme.subbase )
      document.documentElement.style.setProperty("--box-hadow", appearance.theme.boxShadow )
   },[appearance])
 return(
    <>
    <Navbar/>
     <Outlet/>
    <Footer/>
    </>
 )

}