import classNames from "classnames";
import { useAppearance } from "../../../store/appearance/hooks";
import PropTypes from "prop-types"
function FormButton({children}) {
    const { theme } = useAppearance();
  return <button
  type="submit"
  className={classNames(
    "w-[95%] px-3 py-2 relative active:translate-y-1 ",
    {
      "bg-black/60 text-white": theme.name === "dark",
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
