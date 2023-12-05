import classNames from "classnames";
import { useAppearance } from "../../../store/appearance/hooks";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
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
  return (
    <>
      <input
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={handleBlur}
        className={classNames(
          "w-[95%] bg-transparent outline-none  border rounded-sm px-4 py-2 ",
          {
            "border-black": theme.name === "light",
            "rounded-xl border border-slate-200  text-white ":
              location.pathname === "/register" ||
              location.pathname === "/login",
          }
        )}
      />
      {formikError && <div className="text-red-500">{formikError}</div>}
      {helperText && <div className="text-red-800">{helperText}</div>}
    </>
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
