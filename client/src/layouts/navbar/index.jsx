import { NavLink } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { HiMenu } from "react-icons/hi";
import {GrClose} from "react-icons/gr"
import {useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false)
  const [isAdmin ,setIsAdmin] = useState(true)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500)
  
  // Mobile göre kontrol 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


//  kullanıcı linkleri 
  const mainLinks = [
    { href: "/", label: "Ana Sayfa " },
    { href: "/hakkımızda", label: "Hakkımızda" },
    { href: "/hizmetler", label: "Hizmetler" },
    { href: "notlar", label: "Notlar" },
    { href: "/iletişim", label: "İletişim" },
  ];
  
//  Admin Linkleri 
  const adminLinks = [
    { href: "/", label: "Admin Panel" },
    { href: "/hakkımızda", label: "Blog Panel" },
    { href: "/hizmetler", label: "Not Panel" },
  ];
  return (
    <div className="">
       
      <nav className="flex item-center justify-center flex-col  w-full  font-bold p-3 my-2  mobile:flex-row mobile:justify-around  ">
      { !isMobile && (
        <>
         { !isAdmin && mainLinks.map((link, i) => (
          <NavLink className={"hover:bg-white"} key={i} to={link.href}>  {link.label} </NavLink>
        ))} 
        { isAdmin && adminLinks.map((link, i) => (
          <NavLink className={"hover:bg-white"} key={i} to={link.href}>  {link.label} </NavLink>
        ))}  
        
        </>
       ) }   
         
      {isMobile && (
        <Menu >
        <Menu.Button onClick={() => setActive( !active)} >

          {!active &&   <HiMenu className="h-10 w-10 transition-all duration-700" />}
          {active  && <GrClose className="h-10 w-10 transition-all duration-700" />}
          
        </Menu.Button>

        {mainLinks.map((link, i) => (
          <Menu.Items key={i}
            className={
              "flex item-center  font-bold  gap-2 flex-col justify-center transition-color hover:bg-black  hover:text-white duration-200"
            }
          >
          <NavLink className={"w-full mx-2"}  to={link.href} >  {link.label} </NavLink>   
          </Menu.Items>
        ))}
      </Menu> 
      )}

      </nav>

     
 
    </div>
  );
}
