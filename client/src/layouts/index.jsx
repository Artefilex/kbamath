import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import { useAppearance } from "../store/appearance/hooks";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

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
    <div className="w-full flex flex-col items-center  min-h-screen">
      <Navbar />
      <div className=" flex items-start  w-full laptop:max-w-[80%]  gap-2  ">
        <Toaster position="top-right" />
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
}
