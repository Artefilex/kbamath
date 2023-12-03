import PropTypes from "prop-types"
import { useAppearance } from "../../store/appearance/hooks";
import classnames from "classnames"
import { Link } from "react-router-dom";
function AdminListBox({header , handleDelete ,editUrl  }) {
  const { theme } = useAppearance();
  return  (
    <div
    className="w-full flex items-center justify-between flex-col border rounded-lg px-2 py-4 mobile:flex-row bg-[color:var(--bg-secondary)] gap-4 mobile:gap-0 "
  >
    <div>{header}</div>
    <div className="flex items-center justify-around gap-4 w-[200px]">
      <Link
        to={`/admin/${editUrl}`}
        className={classnames(
          "px-6 py-2 transition-color  hover:rounded-xl",
          {
            " hover:bg-green-500  hover:text-white transition-color duration-300":
              theme.name === "dark",
            " hover:bg-green-500 hover:text-white transition-color duration-300":
              theme.name === "light",
          }
        )}
      >
        Edit
      </Link>
      <button
        className="hover:bg-red-700 px-4 py-2 transition-color duration-300 hover:rounded-lg hover:text-white  "
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  </div>
  ) 
}

AdminListBox.propTypes = {
  header : PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  editUrl: PropTypes.string.isRequired
}

export default AdminListBox;
