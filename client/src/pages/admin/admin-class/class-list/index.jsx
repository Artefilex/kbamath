import { useEffect, useState } from "react";
import { handleDelete, getAllItems } from "../../../../servises/admin";
import { MdDeleteForever } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { useSelector } from "react-redux";
import SortedList from "../../../../helpers/sorted-list";
function ClassList() {
  const [classes, setClasses] = useState([]);
  const [nots, setNots] = useState([]);
  const {sortOrder} = useSelector((state) => state.adminOperations)
  useEffect(() => {
    const fetchCategorys = async () => {
      const getCLass = await getAllItems("class");
      const getNots = await getAllItems("nots"); 
      setClasses(getCLass);
      setNots(getNots);
    };
    fetchCategorys();
  }, []);
  
  const classesDeleteHandler = async (deleteUrl) => {
    const url = `class/${deleteUrl}`;
    const successMessage = `${deleteUrl} Category başarılı bir şekilde silindi `;
    const errorMessage = "Category Silinemedi";
   
    const response = await handleDelete(url, successMessage, errorMessage);
    if (response) {
      const filteredBlogs = classes.filter(
        (item) => item.paramsUrl !== deleteUrl
      );
      setClasses(filteredBlogs);
    }
  };
  const sortedClasses =
    sortOrder === "inc" ? classes : [...classes].reverse();

  return (
    <div className="w-full gap-2  flex flex-col ">
   
      {
        classes.length > 1  && <SortedList/>
      }
      {sortedClasses.map((classMap) => (
        <div
          key={classMap.id}
          className="w-full flex items-center justify-between  border rounded-lg px-2 py-4 flex-row bg-[color:var(--bg-secondary)] gap-4 mobile:gap-0 "
        >
          <div className="truncate  hover:whitespace-normal hover:overflow-visible w-full max-w-[250px]">{classMap.title}</div>
          <div className="flex items-center justify-around gap-4 w-[200px]">
            {nots.some((not) => not.class === classMap.title) ? (
              <button
              className={"px-4 py-2 opacity  duration-500 group "}>  
              <ReactTooltip anchorSelect="#ancs"  style={{background:"rgb(255,204,0)", color: "rgb(0,5,0)", fontWeight:"bold"}} content="Bu Kategoriyi silemezsin. Şuan da kullanılıyor " className="z-[99]"/>
                 <BsCheckLg id="ancs" className="w-full h-[30px] text-green-700" />
              </button>
            ) : (
              <button
                className="px-4 py-2  hover:rounded-lg "
                onClick={() => classesDeleteHandler(classMap.paramsUrl)}
              >
                <MdDeleteForever className="w-full h-[30px] hover:text-red-700 transition-color duration-300" />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ClassList;
