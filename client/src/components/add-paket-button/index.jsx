import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { IoAdd } from "react-icons/io5";

import PropTypes from "prop-types"
import { useAppearance } from "../../store/appearance/hooks";
function AddPaketButton({url,text}) {
    const navigate = useNavigate()
    const {theme} = useAppearance()


  return  <button className={classNames(" text-start  px-3 py-2 rounded-sm flex items-center gap-4 group",{
    "border-green-900 font-bold border-2 hover:bg-green-600 text-green-400 hover:text-white transition-color duration-700": theme.name ==="dark",
    "bg-green-500 font-bold border-2   hover:bg-green-700 text-white hover:text-white transition-color duration-700": theme.name ==="light"
   })} onClick={()=>navigate(url)}>
   <IoAdd className="group-hover:rotate-45 transition-all duration-600 text-[1.5rem]" />   {text}
  </button>;
}

AddPaketButton.propTypes = {
    url : PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default AddPaketButton;
