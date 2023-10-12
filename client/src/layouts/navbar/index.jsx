import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { setTheme } from "../../store/appearance/action";
import { useAppearance } from "../../store/appearance/hooks";
import { BsSun } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
export default function Navbar() {
  const [active, setActive] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  const { theme } = useAppearance();
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

  console.log(theme.name);
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
    <header className=" w-full flex items-center justify-center border-b-[1px] border-b-[color:var(--bg-primary)] bg-[color:var(--bg-secondary)] ">
      <nav className="flex item-center w-full justify-center flex-col  font-bold p-3 my-2  mobile:flex-row mobile:justify-around laptop:max-w-[80%] ">
        {!isMobile && (
        <div className=" flex  items-center justify-center w-full"> 
            <div>
                 <img  className="h-10 rounded-full object-cover" src="https://pbs.twimg.com/profile_images/1663136976327811072/p2zKMWq2_bigger.jpg" alt="" />
           </div>
        
           <div className="flex-1  flex  item-center justify-end  gap-7" >
           {!isAdmin &&
              mainLinks.map((link, i) => (
                <NavLink
                  className={"hover:bg-[color:var(--bg-secondary)] "}
                  key={i}
                  to={link.href}
                >
                  {" "}
                  {link.label}{" "}
                </NavLink>
              ))}
            {isAdmin &&
              adminLinks.map((link, i) => (
                <NavLink
                  className={"hover:bg-[color:var(--bg-primary)]"}
                  key={i}
                  to={link.href}
                >
                  {" "}
                  {link.label}{" "}
                </NavLink>
              ))}
            {theme?.name === "dark" ? (
              <button
                onClick={() => {
                  setTheme({
                    name: "light",
                    bgPrimary: "#fff",
                    bgSecondary: "#212327",
                    boxShadow:
                      "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px",
                    base: "#000",
                    subbase: "#71767b",
                  });
                }}
              >
                {" "}
                <BsSun />{" "}
              </button> ) : (
              <button
                onClick={() => {
                  setTheme({
                    name: "dark",
                    bgPrimary: "#16181c",
                    bgSecondary: "#212327",
                    boxShadow:
                      "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px",
                    base: "#e7e9ea",
                    subbase: "#71767b",
                  });
                }}
              >
                {" "}
                <MdOutlineDarkMode />{" "}
              </button>
            )}
           </div>
           
          </div>
        )}

        {isMobile && (
        <div className=" flex  items-center justify-center flex-row">
         <div >
                 <img  className="h-5 rounded-full object-cover" src="https://pbs.twimg.com/profile_images/1663136976327811072/p2zKMWq2_bigger.jpg" alt="" />
         </div>
        
        <div className="flex-1 flex items-center justify-end  gap-3">
            {theme?.name === "dark" ? (
              <button
                onClick={() => {
                  setTheme({
                    name: "light",
                    bgPrimary: "#fff",
                    bgSecondary: "#212327",
                    boxShadow:
                      "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px",
                    base: "#000",
                    subbase: "#71767b",
                  });
                }}
              >
                {" "}
                <BsSun />{" "}
              </button>
            ) : (
              <button
                onClick={() => {
                  setTheme({
                    name: "dark",
                    bgPrimary: "#16181c",
                    bgSecondary: "#212327",
                    boxShadow:
                      "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px",
                    base: "#e7e9ea",
                    subbase: "#71767b",
                  });
                }}
              >
                {" "}
                <MdOutlineDarkMode />{" "}
              </button>
            )}

            <div className="relative flex items-center justify-center">
              <button onClick={() => setActive(!active)}>
                {!active && (
                  <svg
                    viewBox="0 0 22 22"
                    className="h-5 w-5 transition-all duration-700 "
                  >
                    <path
                      fill="currentColor"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    />
                  </svg>
                  // <HiMenu className="h-5 w-5 transition-all duration-700 " />
                )}
                {active && (
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    className="h-5 w-5 transition-all duration-700 "
                  >
                    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"/>
                  </svg>
                )}
              </button>
              {active && (
                <div
                  className={
                    " absolute px-4 py-2 top-[4.25rem] right-[50%] rounded-md flex item-center  shadow-lg shadow-[color: var(--box-shadow)]    font-bold  gap-2 !flex-col justify-center transition-color  duration-700 transition-all bg-[color:var(--bg-secondary)]"
                  }
                >
                  {mainLinks.map((link, i) => (
                    <NavLink
                      key={i}
                      className={
                        "w-full mx-2 hover:bg-black  hover:text-white duration-200"
                      }
                      to={link.href}
                    >
                      {" "}
                      {link.label}{" "}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        )}
      </nav>
    </header>
  );
}
