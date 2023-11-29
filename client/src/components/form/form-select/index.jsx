import classNames from "classnames";
import { useAppearance } from "../../../store/appearance/hooks";
import PropTypes from "prop-types";
function FormSelect({ children, onChange, value }) {
  const { theme } = useAppearance();
  return (
    <select
      onChange={onChange}
      value={value}
      className={classNames("  px-4 py-2 mb-6 w-[95%] bg-transparent border", {
        "border-black ": theme.name === "light",
      })}
    >
      {children}
    </select>
  );
}

FormSelect.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
};

export default FormSelect;
