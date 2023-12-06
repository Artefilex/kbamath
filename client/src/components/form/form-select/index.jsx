import classNames from "classnames";
import { useAppearance } from "../../../store/appearance/hooks";
import PropTypes from "prop-types";
function FormSelect({
  children,
  id,
  type,
  onChange,
  value,
  formikError,
  helperText,
  handleBlur,
}) {
  const { theme } = useAppearance();
  return (
   <>
     {formikError && <div className="text-red-500">{formikError}</div>}
      {helperText && <div className="text-red-800">{helperText}</div>}
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
   </>
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
};

export default FormSelect;
