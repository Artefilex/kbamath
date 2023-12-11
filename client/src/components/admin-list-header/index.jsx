import PropTypes from "prop-types"
function AdminListHeader({header}) {
  return  <div className="w-full flex items-center justify-between px-4 py-2 bg-slate-700 text-white rounded-t-lg font-bold "> <div> {header} Başlığı</div> <div> Aksiyon</div> </div>;
}

AdminListHeader.propTypes = {
 header: PropTypes.string
}
export default AdminListHeader;
