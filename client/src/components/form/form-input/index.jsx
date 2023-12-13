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
  // formikError,
  helperText,
  handleBlur,
}) {
  const { theme } = useAppearance();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showTooltip, setShowTooltip] = useState();
  return (
    <div className="flex w-[95%] flex-col items-center justify-center relative ">
      <div className="flex items-center w-[95%] justify-between mb-2 ">
        <h1
          className={classNames("w-full whitespace-nowrap font-bold", {
            "text-red-700": helperText,
          })}
        >
          {label}
        </h1>
        {helperText && (
          <div className="text-red-700	 px-2 py-2 w-full text-end flex items-end justify-end  group relative">
            <button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <CgDanger
                className={classNames(
                  "w-[2rem] h-[1.3rem] opacity-100  transition-all absolute bottom-0 right-0  duration-500 ",
                  {
                    "drop-shadow-text": theme.name === "dark",
                  }
                )}
              />
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
          `w-[95%] bg-transparent outline-none  border rounded-sm px-4 py-2  mb-5 ${
            helperText ? "border-red-700 border-2" : null
          }`,
          {
            "border-black": theme.name === "light",

            [` rounded-xl border  text-white ${
              helperText ? "border-red-700 border-2" : "border-slate-200 "
            }`]:
              location.pathname === "/register" ||
              location.pathname === "/login",
          }
        )}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className={`text-gray-400 hover:text-white focus:outline-none absolute right-[5%] top-11`}
        >
          {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
        </button>
      )}
      {showTooltip && (
        <div
          className={classNames(
            "text-red-700 w-[95%]	px-4  xtablet:px-8 bg-blend-color transition-all  py-2  absolute left-0 -bottom-4  font-bold duration-500 z-2  whitespace-nowrap",
            {
              "drop-shadow-text": theme.name === "dark",
            }
          )}
        >
          {helperText}
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
  label: PropTypes.string,
};

export default FormInput;
