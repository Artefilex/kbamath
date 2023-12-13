import { NavLink } from "react-router-dom";
import { notsLinks } from "../../../routes/links";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Disclosure } from "@headlessui/react";
import { getAllItems } from "../../../servises/admin";
import { useEffect, useState } from "react";
import IsMobile from "../../../helpers/is-mobile";
function LeftBar() {
  const { isMobile } = IsMobile();
  const [otherClasses, setOtherClasses] = useState([]);
  const [classShow, setClassShow] = useState(false);
  useEffect(() => {
    const fetchCategory = async () => {
      const otherClassData = await getAllItems("class");
      setOtherClasses(otherClassData);
    };
    fetchCategory();
  }, []);
  return (
    <div className=" flex mobile:flex-col mobile:min-h-screen  mobile:border-r-2  border-r-gray-400 transition-all duration-400">
      {!isMobile && (
        <>
          <div className="min-w-[6rem] smobile:min-w-[10rem] flex gap-2  flex-col transition-all  duration-400">
            {notsLinks.map((not) => (
              <NavLink
                className="hover:bg-[color:var(--bg-secondary)] whitespace-nowrap  py-2 pr-9 pl-2 transition-colors font-bold"
                key={not.href}
                to={not.href}
              >
                {" "}
                {not.label}{" "}
              </NavLink>
            ))}
          </div>

          {otherClasses.length > 0 && (
            <Disclosure
              as="div"
              className="min-w-[6rem] smobile:min-w-[10rem]  flex gap-2  flex-col transition-all  duration-400"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-2 w-full text-start px-3 flex items-center justify-between  font-bold">
                    Diğer {open ? <BsChevronUp /> : <BsChevronDown />}
                  </Disclosure.Button>
                  <Disclosure.Panel as="nav" className="flex   flex-col pb-2 ">
                    {otherClasses.map((not) => (
                      <NavLink
                        className="hover:bg-[color:var(--bg-secondary)] whitespace-nowrap  py-2 pr-9 pl-2 transition-colors"
                        key={not.id}
                        to={`/notlar/${not.paramsUrl}`}
                      >
                        {not.title}
                      </NavLink>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          )}
        </>
      )}
      {isMobile && (
        <div className="`flex flex-col items-center gap-2 px-4 py-2  duration-200 transition-all justify-center rounded-sm w-full  bg-slate-800 text-white">
          <button onClick={() => setClassShow(!classShow)} className="w-full py-2 text-start "> 
          {
            classShow ?  "Sınıfları Gizle" :"Sınıfları Göster" 
          }
          </button>
          {classShow && (
            <>
              <div className="min-w-[6rem] smobile:min-w-[10rem] flex gap-2  flex-col transition-all  duration-400 pl-4">
                {notsLinks.map((not) => (
                  <NavLink
                    className="hover:bg-[color:var(--bg-secondary)] whitespace-nowrap  py-2 pr-9 pl-2 transition-colors"
                    key={not.href}
                    to={not.href}
                  >
                    {" "}
                    {not.label}{" "}
                  </NavLink>
                ))}
              </div>

              {otherClasses.length > 0 && (
                <Disclosure
                  as="div"
                  className="min-w-[6rem] smobile:min-w-[10rem]  flex gap-2  flex-col transition-all  duration-400"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="py-2 w-full text-start px-3 flex items-center justify-between  font-bold">
                        Diğer {open ? <BsChevronUp /> : <BsChevronDown />}
                      </Disclosure.Button>
                      <Disclosure.Panel
                        as="nav"
                        className="flex   flex-col pb-2 "
                      >
                        {otherClasses.map((not) => (
                          <NavLink
                            className="hover:bg-[color:var(--bg-secondary)] whitespace-nowrap  py-2 pr-9 pl-2 transition-colors"
                            key={not.id}
                            to={`/notlar/${not.paramsUrl}`}
                          >
                            {not.title}
                          </NavLink>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default LeftBar;
