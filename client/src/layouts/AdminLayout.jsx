import {  useLocation } from "react-router-dom";
import { useAppearance } from "../store/appearance/hooks";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import AdminSidebar from "./admin-sidebar";
import AdminLocation from "../routes/admin";


export default function AdminLayout() {
  const appearance = useAppearance();

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
    <div className="w-full flex flex-col mobile:flex-row items-start  min-h-screen absolute">
      <AdminSidebar/>
      <div className=" flex items-start  w-full laptop:max-w-[80%]  gap-2  absolute top-8  mobile:relative mobile:top-0">
        <Toaster position="top-right" />
       <AdminLocation/>
      </div>
  
    </div>
  );
}
