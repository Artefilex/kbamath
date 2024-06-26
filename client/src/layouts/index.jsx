import {  useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import { useAppearance } from "../store/appearance/hooks";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import MainLocation from "../routes/main";
import classnames from "classnames";
import daktilo from "../assests/image/daktilo.jpg"
export default function MainLayout() {
  const appearance = useAppearance();
useEffect(()=>{
AOS.init({ duration: 1000 });

},[])
const location = useLocation();
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--bg-primary",
      appearance.theme.bgPrimary
    );
    document.documentElement.style.setProperty(
      "--bg-secondary",
      appearance.theme.bgSecondary
    );
    document.documentElement.style.setProperty(
      "--c-base",
      appearance.theme.base
    );
    document.documentElement.style.setProperty(
      "--c-subbase",
      appearance.theme.subbase
    );
    document.documentElement.style.setProperty(
      "--box-shadow",
      appearance.theme.boxShadow
    );
    document.documentElement.style.setProperty(
      "--btn-dark-hover",
      appearance.theme.btnColor
    );
    document.documentElement.style.setProperty(
      "--blog-text", appearance.theme.blogText
    )
  }, [appearance]);
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[location])
 
  return (
    <div className="w-full flex flex-col items-center  min-h-screen ">
      <Navbar />
      <div className={classnames(" flex w-full laptop:max-w-[80%]  gap-2  ",{
         "items-center justify-center" : location.pathname === "/register" || location.pathname === "/login"
      })}>
        <Toaster position="top-right" />
        <MainLocation/>
      </div>
      {
        location.pathname === "/register" || location.pathname === "/login" ? (
            <div className="w-full ">
                 <img src={daktilo} className="absolute  blur-sm -z-0 top-0 left-0 object-cover  w-full h-full overflow-hidden" alt="" />
            </div>
           
        ): (
          <Footer />
        )
      }
      
    </div>
  );
}
