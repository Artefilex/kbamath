import { NavLink, useNavigate } from "react-router-dom";

import { useAppearance } from "../../store/appearance/hooks";
import ThemeButton from "../navbar/theme-button";
import className from "classnames"
import { adminLinks } from "../../routes/links";
import { setLogout } from "../../store/auth/action";
import toast from "react-hot-toast";

export default function AdminSidebar () {
    const navigate = useNavigate();
    const {theme} = useAppearance()
  
    const removeAdmin = async () => {
     try{
      await  setLogout()
      navigate("/");
      toast.success("Görüşmek üzere ")
     }
     catch(err){
   toast.error("Çıkış Başarısız")
     }
      };
    return(
        <nav className={className("w-[250px]  backdrop-blur-md  min-h-screen sticky z-[30] px-4  top-0 ",{
        "bg-black/50 text-white" : theme.name === "dark",
        "bg-[color:var(--c-subbase)] text-black" : theme.name === "light",
        })}>
            <div className="flex-1  flex  flex-col items-start justify-end   gap-6  w-full  whitespace-nowrap mt-4">
              {
                adminLinks.map((link, i) => (
                  <NavLink
                    className="w-full  transition-colors duration-500  px-3  relative hover:bg-[color:var(--c-subbase)]  flex font-bold"
                    key={i}
                    to={link.href}
                  >
                    {link.label}

                  </NavLink>
                ))}
            </div>
      
      <div className="absolute bottom-0 flex items-center justify-around w-full ">
        <ThemeButton/>
        <button className="w-full" onClick={removeAdmin}>Log Out</button>
        </div>
        </nav>
    )
}

// w-full  backdrop-blur-md text-white bg-black/50 flex items-center justify-center custom-box-shadow sticky top-0 left-0 right-0  transition-all duration-200 z-[30] px-4