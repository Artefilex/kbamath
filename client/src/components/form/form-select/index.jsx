import classNames from "classnames";
import { useAppearance } from "../../../store/appearance/hooks";
import PropTypes from "prop-types";
import { useState } from "react";

import { CgDanger } from "react-icons/cg";
function FormSelect({
  children,
  id,
  type,
  label,
  onChange,
  value,
  formikError,
  helperText,
  handleBlur,
}) {
  const { theme } = useAppearance();
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
     {/* {formikError && <div className="text-red-500">{formikError}</div>}
      {helperText && <div className="text-red-800">{helperText}</div>} */}
    <select
    id={id}
    type={type}
    onChange={onChange}
    value={value}
    onBlur={handleBlur}

      className={classNames("  px-4 py-2 mb-6 w-[95%] bg-transparent border", {
        "border-black ": theme.name === "light",
      })}
    >
      {children}
    </select>
    {
          showTooltip &&  <div className="text-red-700	w-[90%] bg-blend-color transition-all px-2 py-2  absolute left-0 -bottom-4 drop-shadow-text font-bold duration-500 z-2  whitespace-nowrap">{helperText}</div>
        }
   </div>
  );
}

FormSelect.propTypes = {
  children: PropTypes.node,
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

export default FormSelect;
