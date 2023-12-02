import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ThemeButton from "./theme-button";
import { useUser } from "../../store/auth/hooks";

import { mainLinks, adminLinks } from "../../routes/links";
import IsMobile from "../../helpers/is-mobile";

export default function Navbar() {
  const { user } = useUser();
  const { isMobile } = IsMobile();
  const [active, setActive] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.isAdmin) {
      setIsAdmin(true);
    }
  }, [user?.isAdmin]);

  const location = useLocation();
 
  useEffect(() => {
   setActive(false)
  }, [location]);

  const removeAdmin = async () => {
    setIsAdmin(false);
    navigate("/", {
      replace: true,
    });
  };

  return (
    <nav className=" w-full  backdrop-blur-md text-white bg-black/50 flex items-center justify-center custom-box-shadow sticky top-0 left-0 right-0  transition-all duration-200 z-[30] px-4">
      <nav className="flex item-center  w-full justify-center flex-col  font-bold py-3 mobile:flex-row mobile:justify-around laptop:max-w-[80%] ">
        {!isMobile && (
          <div className=" flex  items-center justify-center w-full">
            <img
              className="h-10 rounded-full object-cover"
              src="https://pbs.twimg.com/profile_images/1663136976327811072/p2zKMWq2_bigger.jpg"
              alt=""
            />

            <div className="flex-1  flex  item-center justify-end   gap-1  h-12 w-full  whitespace-nowrap ">
              {!isAdmin &&
                mainLinks.map((link, i) => (
                  <NavLink
                    className="transition-colors duration-500  px-3  relative hover:bg-white/40  flex items-center justify-center"
                    key={i}
                    to={link.href}
                  >
                    {link.label}{" "}
                  </NavLink>
                ))}
              {isAdmin &&
                adminLinks.map((link, i) => (
                  <NavLink
                    className="transition-colors duration-500  px-3  relative hover:bg-[color:var(--c-subbase)]  flex items-center justify-center"
                    key={i}
                    to={link.href}
                  >
                    {" "}
                    {link.label}{" "}
                  </NavLink>
                ))}
              {isAdmin && <button onClick={removeAdmin}> Çıkış Yap </button>}

              <ThemeButton />
            </div>
          </div>
        )}

        {isMobile && (
          <div className="flex items-center justify-center flex-row">
            <img
              className="h-10 rounded-full object-cover"
              src="https://pbs.twimg.com/profile_images/1663136976327811072/p2zKMWq2_bigger.jpg"
              alt=""
            />
            <div className="flex-1 flex items-center justify-end  gap-3">
              <ThemeButton />
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
                  )}
                  {active && (
                    <svg
                      viewBox="0 0 1024 1024"
                      className="h-5 w-5 transition-all duration-700 "
                    >
                      {" "}
                      <path
                        fill="currentColor"
                        d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
                      />{" "}
                    </svg>
                  )}
                </button>
                {active && (
                  <div
                    className={
                      "w-[18rem] absolute px-4 py-2 top-[4.25rem] right-[50%] rounded-md flex item-center  shadow-lg shadow-[color: var(--box-shadow)]  font-bold  gap-2 !flex-col justify-center transition-color  duration-700 transition-all bg-[color:var(--bg-secondary)]"
                    }
                  >
                    {!isAdmin &&
                      mainLinks.map((link, i) => (
                        <NavLink
                          className="transition-colors duration-500 text-[color:var(--c-base)] px-3  relative hover:bg-[color:var(--c-subbase)]  flex items-center justify-center"
                          key={i}
                          to={link.href}
                        >
                          {link.label}{" "}
                        </NavLink>
                      ))}
                    {isAdmin &&
                      adminLinks.map((link, i) => (
                        <NavLink
                          className="transition-colors duration-500  px-3  relative hover:bg-[color:var(--c-subbase)]  flex items-center justify-center"
                          key={i}
                          to={link.href}
                        >
                          {" "}
                          {link.label}{" "}
                        </NavLink>
                      ))}
                    {isAdmin && (
                      <button onClick={removeAdmin}> Çıkış Yap </button>
                    )}

                    {/* {mainLinks.map((link, i) => ( <NavLink key={i} className="w-full mx-2  duration-200" to={link.href} >{link.label} </NavLink>))} */}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </nav>
  );
}

