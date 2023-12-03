import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useSelector ,useDispatch} from "react-redux";
import { sortOrderButtonController } from "../../store/admin-operations/AdminOperationsSlice";
function SortedList() {
    const {sortOrder} = useSelector((state) => state.adminOperations)
   console.log(sortOrder)
   const dispatch = useDispatch()

  return (
    <button
    onClick={() => {
        dispatch(sortOrderButtonController(sortOrder === "inc" ? "dec" : "inc"));
    }}
  >
    {sortOrder === "inc" ? (
      <div className="flex items-center justify-between font-semibold px-1">
        <div>İlk Eklenene Göre Sırala</div> <FaChevronDown />
      </div>
    ) : (
      <div className="flex items-center justify-between font-semibold px-1">
        <div>Son Eklenene Göre Sırala </div>
        <FaChevronUp />
      </div>
    )}
  </button>
  )

  
}

export default SortedList;
