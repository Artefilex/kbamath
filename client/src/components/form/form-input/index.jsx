import classNames from "classnames";
import { useAppearance } from "../../../store/appearance/hooks";
import PropTypes from "prop-types"
import { useLocation } from "react-router-dom";
function FormInput({type , onChange ,value}) {
  const { theme } = useAppearance();
  const location = useLocation();
  return (
    <input
     type={type}
     onChange={onChange}  
     value={value}
      className={classNames(
        "w-[95%] bg-transparent outline-none  border rounded-sm px-4 py-2 ",
        {
          "border-black": theme.name === "light",
          "rounded-xl border border-slate-200  text-white ": location.pathname=== "/register" || location.pathname=== "/login"
        }
      )}
    />
  );
}
FormInput.propTypes = {
  type :  PropTypes.string ,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
}

export default FormInput;
