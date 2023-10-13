import { NavLink , useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import ThemeButton from "./theme-button";
import Cookies from "universal-cookie";
export default function Navbar() {
  const cookies = new Cookies();
  const [active, setActive] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false  )  ;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 599);
  const navigate = useNavigate();
   useEffect(()=>{
    if(cookies.get("isAdmin")){
      setIsAdmin(true)
     } else{
      setIsAdmin(false)
     }
   },[cookies])

  // Mobile göre kontrol
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 599);
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
    { href: "/bloglar", label: "Bloglar" },
  ];

  //  Admin Linkleri
  const adminLinks = [
   { href: "/", label: "Ana Sayfa" },
    { href: "/admin/blogs", label: "Blog Panel" },
    { href: "/admin/nots", label: "Not Panel" },
    {href: "/admin/ders-ekle" , label: "Ders Ekle"}
  ];
  const removeAdmin = () =>{
    cookies.remove("isAdmin")
    navigate("/admin")
  }

  return (
    <header className=" w-full  flex items-center justify-center  bg-[color:var(--bg-secondary)] custom-box-shadow sticky top-0 transition-all duration-200">
      <nav className="flex item-center  w-full justify-center flex-col  font-bold my-2  mobile:flex-row mobile:justify-around laptop:max-w-[80%] ">
        {!isMobile && (
       <div className=" flex  items-center justify-center w-full"> 
           <img  className="h-10 rounded-full object-cover" src="https://pbs.twimg.com/profile_images/1663136976327811072/p2zKMWq2_bigger.jpg" alt="" /> 
        
           <div className="flex-1  flex  item-center justify-end   gap-1  h-12 w-full  whitespace-nowrap " >
           {!isAdmin &&  mainLinks.map((link, i) => (<NavLink className="transition-colors duration-500  px-3  relative hover:bg-[color:var(--c-subbase)]  flex items-center justify-center" key={i} to={link.href} >{link.label} </NavLink>  ))}
            {isAdmin &&  adminLinks.map((link, i) => (<NavLink  className="transition-colors duration-500  px-3  relative hover:bg-[color:var(--c-subbase)]  flex items-center justify-center"  key={i} to={link.href} > {link.label} </NavLink>  ))}
             {isAdmin &&  <button onClick={removeAdmin}>  Çıkış Yap </button>}
            
             <ThemeButton/>
           </div>
          </div>
        )}

        {isMobile && (
        <div className="flex items-center justify-center flex-row">
       <img className="h-10 rounded-full object-cover" src="https://pbs.twimg.com/profile_images/1663136976327811072/p2zKMWq2_bigger.jpg" alt="" />
        <div className="flex-1 flex items-center justify-end  gap-3">
          <ThemeButton/>
            <div className="relative flex items-center justify-center">
              <button onClick={() => setActive(!active)}>
                {!active && ( <svg viewBox="0 0 22 22"   className="h-5 w-5 transition-all duration-700 " > <path   fill="currentColor"   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" /> </svg>  )}
                {active && (  <svg  viewBox="0 0 1024 1024"  className="h-5 w-5 transition-all duration-700 " > <path fill="currentColor"  d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"/>  </svg> )}
              </button>
              {active && (
                <div className={" absolute px-4 py-2 top-[4.25rem] right-[50%] rounded-md flex item-center  shadow-lg shadow-[color: var(--box-shadow)]  font-bold  gap-2 !flex-col justify-center transition-color  duration-700 transition-all bg-[color:var(--bg-secondary)]"}>
                  {mainLinks.map((link, i) => ( <NavLink key={i} className="w-full mx-2  duration-200" to={link.href} >{link.label} </NavLink>))}
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
