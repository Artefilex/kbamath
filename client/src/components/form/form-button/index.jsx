import classNames from "classnames";
import { useAppearance } from "../../../store/appearance/hooks";
import PropTypes from "prop-types"
import { useLocation } from "react-router-dom";
function FormButton({children}) {
    const { theme } = useAppearance();
    const location = useLocation();
  return <button
  type="submit"
  className={classNames(
    "w-[95%] px-3 py-2 relative active:translate-y-1  capitalize",
    {
      "bg-black/60 text-white": theme.name === "dark",
      "rounded-xl border border-gray-800 boxShadow bg-black/60 backdrop-blur-3xl hover:bg-white transition-all duration-700 hover:text-black text-white": location.pathname=== "/register" || location.pathname=== "/login"
    }
  )}
>
{children}
</button>;
}
FormButton.propTypes = {
    children: PropTypes.node
  }

export default FormButton;
