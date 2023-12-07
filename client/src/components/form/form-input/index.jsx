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

  return (
    <div className="flex w-[95%] flex-col items-center justify-center relative">
      <input
        id={id}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        onChange={onChange}
        value={value}
        onBlur={handleBlur}
        className={classNames(
          "w-[95%] bg-transparent outline-none  border rounded-sm px-4 py-2 ",
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
          className="text-gray-400 hover:text-white focus:outline-none absolute right-9  top-3"
        >
          {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
        </button>
      )}
      {helperText && (
        <div className="text-red-700	 px-2 py-2 w-full text-end flex items-end justify-end right-0 group relative">
          <CgDanger className="w-[2rem] h-[1.3rem] opacity-100  group-hover:opacity-0  group-hover: cursor-pointer transition-all absolute bottom-16 right-0 drop-shadow-text" />{" "}
          <div className="w-0 opacity-0 group-hover:w-full  group-hover:opacity-100 transition-all  absolute bottom-16 left-0 drop-shadow-text font-bold ">{helperText}</div>{" "}
        </div>
      )}
        
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
};

export default FormInput;
