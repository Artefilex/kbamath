import { useEffect, useState } from "react";
import { handleDelete, getAllItems } from "../../../../servises/admin";
import { MdDeleteForever } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { useSelector } from "react-redux";
import SortedList from "../../../../helpers/sorted-list";
import AdminListHeader from "../../../../components/admin-list-header";

function CategoryList() {
  const {sortOrder} = useSelector((state) => state.adminOperations)
  const [categorys, setCategorys] = useState([]);
  const [nots, setNots] = useState([]);

  useEffect(() => {
    const fetchCategorys = async () => {
      const getNots = await getAllItems("nots");
      const getCategory = await getAllItems("category");
      setCategorys(getCategory);
      setNots(getNots);
    };
    fetchCategorys();
  }, []);
  const categoryDeleteHandler = async (deleteUrl) => {
    const url = `category/${deleteUrl}`;
    const successMessage = `${deleteUrl} Category başarılı bir şekilde silindi `;
    const errorMessage = "Category Silinemedi";

    const response = await handleDelete(url, successMessage, errorMessage);
    if (response) {
      const filteredBlogs = categorys.filter(
        (item) => item.paramsUrl !== deleteUrl
      );
      setCategorys(filteredBlogs);
    }
  };

  const sortedCategorys =
    sortOrder === "inc" ? categorys : [...categorys].reverse();

  return (
    <div className="w-full gap-2  flex flex-col ">
       {
        categorys.length > 1  && <SortedList/>
      }
       {
        categorys.length > 0  &&   <AdminListHeader header={"Kategori"}/>
      }
  
      {sortedCategorys.map((category) => (
        <div
          key={category.id}
          className="w-full flex items-center justify-between  border rounded-lg px-2 py-4 flex-row bg-[color:var(--bg-secondary)] gap-4 mobile:gap-0  "
        >
          <div  className="truncate  hover:whitespace-normal hover:overflow-visible w-full max-w-[250px]">{category.title}</div>
          <div className="flex items-center justify-around gap-4 w-[200px]">
            {nots.some((not) => not.category === category.paramsUrl) ? (
              <button
              className={"px-4 py-2 opacity  duration-500 group "}>  
              <ReactTooltip anchorSelect="#ancs"  style={{background:"rgb(255,204,0)", color: "rgb(0,5,0)", fontWeight:"bold"}} content="Bu Kategoriyi silemezsin. Şuan da kullanılıyor " className="z-[99]"/>
                 <BsCheckLg id="ancs" className="w-full h-[30px] text-green-700" />
              </button>
            ) : (
              <button
                className="px-4 py-2  hover:rounded-lg "
                onClick={() => categoryDeleteHandler(category.paramsUrl)}
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

export default CategoryList;
