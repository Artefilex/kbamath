import { NavLink } from "react-router-dom";
import { notsLinks } from "../../../routes/links";
import {BsChevronDown , BsChevronUp} from "react-icons/bs"
import { Disclosure } from "@headlessui/react";
export default function LefttBar() {
  return (
   <div className="flex flex-col min-h-[30rem]  bg-[color:var(--bg-primary)] ">
    <Disclosure
      as="div"
      className="min-w-[10rem] flex gap-2 bg-[color:var(--bg-primary)] flex-col"
    >
     {({open}) => (
            <>
               <Disclosure.Button className="py-2 w-full text-start px-3 flex items-center justify-between ">
         Lise     {open ? <BsChevronUp/> : <BsChevronDown/>}   
       </Disclosure.Button>
       <Disclosure.Panel as= "nav" className="flex px-5  bg-[color:var(--bg-primary)] flex-col pb-2 " >
      
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
     )

     }
    </Disclosure>
    <Disclosure
      as="div"
      className="min-w-[10rem] flex gap-2 bg-[color:var(--bg-primary)] flex-col"
    >
     {({open}) => (
            <>
               <Disclosure.Button className="py-2 w-full text-start px-3 flex items-center justify-between ">
         Other     {open ? <BsChevronUp/> : <BsChevronDown/>}   
       </Disclosure.Button>
       <Disclosure.Panel as= "nav" className="flex px-5  bg-[color:var(--bg-primary)] flex-col pb-2 " >
      
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
     )

     }
    </Disclosure>
   </div>
  );
}
