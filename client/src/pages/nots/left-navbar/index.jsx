import { NavLink } from "react-router-dom";
import { notsLinks } from "../../../routes/links";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Disclosure } from "@headlessui/react";
import { getAllItems } from "../../../servises/admin";
import { useEffect, useState } from "react";
// main servises cekilecek adminden degil
function LeftBar() {
  const [otherClasses, setOtherClasses] = useState([])
  useEffect(() => {
    const fetchCategory = async () => {
      const otherClassData = await getAllItems("class");
      setOtherClasses(otherClassData)
    };
    fetchCategory();
  }, []);
  return (
    <div className="flex mobile:flex-col mobile:min-h-screen  mobile:border-r-2  border-r-[color:var(--c-subbase)] transition-all duration-400">
      <Disclosure
        as="div"
        className="min-w-[6rem] smobile:min-w-[10rem] flex gap-2  flex-col transition-all  duration-400"
      >
        {({ open }) => (
          <>
            <Disclosure.Button className="py-2 w-full text-start px-3 flex items-center justify-between  font-bold">
              Lise {open ? <BsChevronUp /> : <BsChevronDown />}
            </Disclosure.Button>
            <Disclosure.Panel as="nav" className="flex px-5   flex-col pb-2 ">
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
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure
        as="div"
        className="min-w-[6rem] smobile:min-w-[10rem]  flex gap-2  flex-col transition-all  duration-400"
      >
        {({ open }) => (
          <>
            <Disclosure.Button className="py-2 w-full text-start px-3 flex items-center justify-between  font-bold">
              Other {open ? <BsChevronUp /> : <BsChevronDown />}
            </Disclosure.Button>
            <Disclosure.Panel as="nav" className="flex px-5   flex-col pb-2 ">
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
    </div>
  )
}

export default LeftBar;
