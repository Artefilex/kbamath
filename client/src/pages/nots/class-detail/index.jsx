import { Link, useParams } from "react-router-dom";
import NotsMain from "../nots-component";
import LeftBar from "../left-navbar";
import { useEffect, useState } from "react";
import { getAllCategory, getNotsByClass } from "../../../servises";
import { getImageDataUrl } from "../../../helpers/get-image-blob";
import toast from "react-hot-toast";
export default function ClassDetail() {
  const { classid } = useParams();
  const [notsByClass, setNotsByClass] = useState([]);
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const notsByClasses = await getNotsByClass(classid);
      
      try {
        const categoryData = await getAllCategory();
        const updatedCategorys = await Promise.all(categoryData.map(async (category) => {
          const base64Image = await getImageDataUrl(category.image);
          return { ...category, image: base64Image };
        }));
        setCategorys(updatedCategorys);
      } catch (error) {
        toast.error('Error fetching blogs:', error);
      }
      
      setNotsByClass(notsByClasses);
     
    };
    fetchCategory();
  }, [classid]);
  const filterData = categorys.filter((category) => {
    return notsByClass.some((not) => not.category === category.paramsUrl);
  });

  return (
    <NotsMain>
      <div className="flex flex-col  w-full  gap-6 mobile:flex-row">
        <LeftBar />
        <div className=" py-2 flex flex-wrap justify-center mobile:justify-start gap-4">
          {filterData.map((filteredCategory) => (
            <Link
              key={filteredCategory.id}
              to={`/notlar/${classid}/${filteredCategory.paramsUrl}`}
              className="overflow-hidden group rounded-md items-center relative hover:-translate-y-1 gap-4 flex  flex-col justify-between  bg-[color:var(--bg-primary)] transition  h-[22rem] duration-700 w-[17rem]"
            >
              <img
                src={`${filteredCategory.image}`}
                alt={filteredCategory.title}
                className="group-hover:scale-105 rounded-md relative z-[1]  w-[17rem] h-[22rem] object-cover duration-700 "
              />
              <div className="rounded-md absolute z-[2] text-[2rem]  group-hover:blog-second-bg bottom-0  w-[17rem] max-w-[17rem] blog-bg h-[10rem] p-4 flex text-[color:var(--blog-text)] justify-center flex-col group-hover:scale-105 duration-700">
                {filteredCategory.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </NotsMain>
  );
}
