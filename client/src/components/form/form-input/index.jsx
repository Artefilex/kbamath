import classNames from "classnames";
import { useAppearance } from "../../../store/appearance/hooks";
import PropTypes from "prop-types"
function FormInput({type , onChange }) {
  const { theme } = useAppearance();
  return (
    <input
     type={type}
     onChange={onChange}  
      className={classNames(
        "w-[95%] bg-transparent border  rounded-sm px-4 py-2 ",
        {
          "border-black": theme.name === "light",
        }
      )}
    />
  );
}
FormInput.propTypes = {
  type :  PropTypes.string ,
  onChange: PropTypes.func
}

export default FormInput;
