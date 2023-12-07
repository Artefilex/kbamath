import classNames from "classnames";
import { useAppearance } from "../../../store/appearance/hooks";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";

import { CgDanger } from "react-icons/cg";
function FormInput({
  id,
  label,
  type,
  onChange,
  value,
  formikError,
  helperText,
  handleBlur,
}) {
  const { theme } = useAppearance();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showTooltip, setShowTooltip] = useState()
  return (
    <div className="flex w-[95%] flex-col items-center justify-center relative ">
    
    <div className="flex items-center w-[95%] justify-between mb-2 ">
    <h1 className="w-full whitespace-nowrap">{label}</h1>
       {helperText && (
        <div className="text-red-700	 px-2 py-2 w-full text-end flex items-end justify-end  group relative">
         {/* <div>
           <CgDanger className="w-[2rem] h-[1.3rem] opacity-100  group-hover:opacity-0  group-hover: cursor-pointer transition-all absolute bottom-0 right-0 drop-shadow-text duration-500 " />
           <div className=" opacity-0 group-hover:w-full  group-hover:opacity-100 transition-all  absolute bottom-0 left-0 drop-shadow-text font-bold duration-500 z-2  whitespace-nowrap">{helperText}</div>
         </div> */}

          <button onMouseEnter={() => setShowTooltip(true) } onMouseLeave={() => setShowTooltip(false) }>
           <CgDanger className="w-[2rem] h-[1.3rem] opacity-100  transition-all absolute bottom-0 right-0 drop-shadow-text duration-500 " />
         
         </button>
    
        

        </div>
      )}
    </div>


      <input
        id={id}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        onChange={onChange}
        value={value}
        onBlur={handleBlur}
        className={classNames(
          "w-[95%] bg-transparent outline-none  border rounded-sm px-4 py-2  mb-5",
          {
            "border-black": theme.name === "light",
            "rounded-xl border border-slate-200  text-white ": location.pathname === "/register" || location.pathname === "/login",
            "border-red-900 border-2 text-white  rounded-xl ": formikError,
          }
        )}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="text-gray-400 hover:text-white focus:outline-none absolute right-9  top-11"
        >
          {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
        </button>
      )}
       {
          showTooltip &&  <div className="text-red-700 w-[95%]	px-4  xtablet:px-8 bg-blend-color transition-all  py-2  absolute left-0 -bottom-4 drop-shadow-text font-bold duration-500 z-2  whitespace-nowrap">{helperText}</div>
        }
        
    </div>
  );
}
FormInput.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  formikError: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  helperText: PropTypes.string,
  handleBlur: PropTypes.func,
  label: PropTypes.string
};

export default FormInput;
