import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAppearance } from "../../store/appearance/hooks";
import ThemeButton from "../navbar/theme-button";
import className from "classnames";
import { adminLinks } from "../../routes/links";
import { setLogout } from "../../store/auth/action";
import toast from "react-hot-toast";
import IsMobile from "../../helpers/is-mobile";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
export default function AdminSidebar() {
  const navigate = useNavigate();
  const { theme } = useAppearance();
  const { isMobile } = IsMobile();
  const [showSidebar, setShowSidebar] = useState(false);
  console.log(isMobile);
  const removeAdmin = async () => {
    try {
      await setLogout();
      navigate("/");
    } catch (err) {
      toast.error("Çıkış Başarısız");
    }
  };
  return (
    <>
      {!isMobile && (
        <nav
          className={className(
            "w-[250px]  backdrop-blur-md  min-h-screen sticky z-[30] px-4  top-0 ",
            {
              "bg-black/50 text-white": theme.name === "dark",
              "bg-[color:var(--c-subbase)] text-black": theme.name === "light",
            }
          )}
        >
          <div className="flex-1  flex  flex-col items-start justify-end   gap-6  w-full  whitespace-nowrap mt-4">
            {adminLinks.map((link, i) => (
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
            <ThemeButton />
            <button className="w-full font-bold" onClick={removeAdmin}>
              Log Out
            </button>
          </div>
        </nav>
      )}
      {isMobile && (
        <>
          <button
            className={`flex flex-col h-[30px] items-center justify-center rounded-br-lg w-[30px]  top-0 z-10 bg-slate-800 text-white ${showSidebar ? "hidden" : "sticky"}`}
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <GiHamburgerMenu className="h-[2rem]" />
          </button>
    
          {showSidebar && (
            <nav
              className={className(
                "w-[300px]  backdrop-blur-md  min-h-screen sticky z-[8] px-4 left-0 top-0  bottom-0 right-0",
                {
                  "bg-black/50 text-white": theme.name === "dark",
                  "bg-[color:var(--c-subbase)] text-black":
                    theme.name === "light",
                }
              )}
            >
              <div className="flex-1  flex  flex-col items-start justify-end   gap-6  w-full  whitespace-nowrap mt-4">
              <button
                  className="flex flex-col h-[30px] items-center justify-center rounded-bl-lg w-[30px] absolute bg-slate-800 text-white right-0 top-0"
                  onClick={() => setShowSidebar(!showSidebar)}
                >
                  <IoClose className="h-[2rem]" />
                </button>
                {adminLinks.map((link, i) => (
                  <NavLink
                    className="w-full  transition-colors duration-500  px-3  relative hover:bg-[color:var(--c-subbase)]  flex font-bold"
                    key={i}
                    to={link.href}
                    onClick={() => setShowSidebar(!showSidebar)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              <div
                className="absolute border-none outline-none bottom-0 flex items-center justify-around w-full "
              >
                <ThemeButton />
                <button className="w-full font-bold" onClick={removeAdmin}>
                  Log Out
                </button>
              </div>
            </nav>
          )}
        </>
      )}
    </>
  );
}
