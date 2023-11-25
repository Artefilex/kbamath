import { useEffect, useState } from "react";
// import { getEducations } from "../../../../servises";
import { Link } from "react-router-dom";
import { useAppearance } from "../../../../store/appearance/hooks";
import classnames from "classnames";
import axios from "axios";
import toast from "react-hot-toast"

function  EducationList() {
  const [educations, setEducations] = useState([]);
  const { theme } = useAppearance();
  useEffect(() => {
    const fetchBlogs = async () => {
      // const response = await getEducations();
      const {data}  = await axios.get("http://localhost:4000/admin/education");
       
      setEducations(data);
     
     
    };
    fetchBlogs();
  }, []);
  

  const handleDelete = async (deleteUrl) => {
    const confirms = window.confirm("Silmek istediğine emin misin");
  
    if (confirms) {
      try {
        await axios.delete(`http://localhost:4000/admin/education/${deleteUrl}`);
        const filteredEducations= educations.filter((item) => item.paramsUrl !== deleteUrl);
        setEducations(filteredEducations);
        toast.success(`${deleteUrl} Özel Dersi başarılı bir şekilde silindi `)
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    } else {
      toast.error("Özel Ders Silinemedi")
    }
  };
  return  <div className="w-full gap-2  flex flex-col mt-2">
  {educations.map((education) => (
    <div
      key={education.id}
      className="w-full flex items-center justify-between flex-col border rounded-lg px-2 py-4 mobile:flex-row bg-[color:var(--bg-secondary)] gap-4 mobile:gap-0 "
    >
      <div>{education.title}</div>
      <div className="flex items-center justify-around gap-4 w-[200px]">
        <Link
          to={`/admin/education/${education.paramsUrl}`}
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
          onClick={() => handleDelete(education.paramsUrl)}
        >
          Delete
        </button>
      </div>
    </div>
  ))}
</div>;
}

export default  EducationList;
