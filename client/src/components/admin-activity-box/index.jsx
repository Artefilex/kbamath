import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function AdminActivityBox({ count, header ,path}) {
  return (
    <Link to={`/admin/${path}`} className="w-[14rem] flex-col h-[10rem] flex items-center justify-start gap-6 bg-slate-800/25 rounded-sm text-[1.2rem] font-bold ">
     
     <div className="text-[3rem] ">{count} </div>
      <div> {header}</div>
      
    </Link>
  );
}

AdminActivityBox.propTypes = {
  count: PropTypes.number,
  header: PropTypes.string,
  path: PropTypes.string
};

export default AdminActivityBox;
