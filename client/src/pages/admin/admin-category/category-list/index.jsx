import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { handleDelete ,getAllItems } from "../../../../servises/admin";
import { MdDeleteForever } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
function CategoryList() {
  const [categorys, setCategorys] = useState([])
 const  [nots , setNots] = useState([])
  useEffect(() => {
    const fetchCategorys = async () => {
      const getNots = await getAllItems("nots");
      const getCategory = await getAllItems("category");
      setCategorys(getCategory);
      setNots(getNots)
    };
    fetchCategorys();
  }, []);
  const categoryDeleteHandler = async (deleteUrl) => {
    const url = `category/${deleteUrl}`;
    const successMessage = `${deleteUrl} Category başarılı bir şekilde silindi `;
    const errorMessage = "Category Silinemedi";
    
    const response = await handleDelete(url, successMessage, errorMessage);
    if(response){
      const filteredBlogs = categorys.filter((item) => item.paramsUrl !== deleteUrl);  
      setCategorys(filteredBlogs);  
    }

  };
  const [sortOrder, setSortOrder] = useState("inc");
  const sortedCategorys = sortOrder === "inc" ? categorys : [...categorys].reverse();

    return   <div className="w-full gap-2  flex flex-col ">
    <button
    onClick={() => {
      setSortOrder(sortOrder === "inc" ? "dec" : "inc");
    }}
  >
    {sortOrder === "inc" ? (
      <div className="flex items-center justify-between font-semibold px-1">
        <div>İlk Eklenene Göre Sırala</div> <FaChevronDown />
      </div>
    ) : (
      <div className="flex items-center justify-between font-semibold px-1">
        <div>Son Eklenene Göre Sırala </div>
        <FaChevronUp />{" "}
      </div>
    )}
  </button>
  {sortedCategorys.map((category) => (
    <div
      key={category.id}
      className="w-full flex items-center justify-between flex-col border rounded-lg px-2 py-4 mobile:flex-row bg-[color:var(--bg-secondary)] gap-4 mobile:gap-0 "
    >
      <div>{category.title}</div>
      <div className="flex items-center justify-around gap-4 w-[200px]">
      {nots.some((not) => not.category === category.title) ? (
              <div className=" px-4 py-2 " >< BsCheckLg className="w-full h-[30px] text-green-700" /></div>
            ) : (
              <button
                className="px-4 py-2  hover:rounded-lg "
                onClick={() => categoryDeleteHandler(category.paramsUrl)}
              >
                <MdDeleteForever  className="w-full h-[30px] hover:text-red-700 transition-color duration-300" />
              
              </button>
            )}
      </div>
    </div>
  ))}
</div>;
}

export default CategoryList;
