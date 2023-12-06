import { Link, useParams } from "react-router-dom";
import NotsMain from "../nots-component";
import LeftBar from "../left-navbar";
import { useEffect, useState } from "react";
import { getAllCategory, getNotsByClass } from "../../../servises";
export default function ClassDetail() {
  // Sınıfa Göre verileri filtreleyip mapleyecegiz
  const { classid } = useParams();
  const [notsByClass, setNotsByClass] = useState([]);
const [categorys , setCategorys ] = useState([])
  useEffect(() => {
    const fetchCategory = async () => {
      const notsByClasses = await getNotsByClass(classid);
      const categoryData = await getAllCategory()
      setCategorys(categoryData)
      setNotsByClass(notsByClasses);
    };
    fetchCategory();
  }, [classid]);
console.log(categorys)
  const filterData =categorys.filter((category) => {
    return notsByClass.some((not) => not.category === category.paramsUrl);
  });

  return (
    <NotsMain>
      <div className="flex flex-col  w-full  gap-6 mobile:flex-row">
        <LeftBar />
        {filterData.map((filteredCategory) => (
          <Link key={filteredCategory.id} to={`/notlar/${classid}/${filteredCategory.paramsUrl}`}>
            <img
              src={`${import.meta.env.VITE_BASE_URL}/${filteredCategory.image}`}
              alt={filteredCategory.title}
              className="w-[200px] xtablet:w-[200px] h-full max-h-[400px] object-cover"
            />
            <div>{filteredCategory.title}</div>
          </Link>
        ))}
      </div>
    </NotsMain>
  );
}
