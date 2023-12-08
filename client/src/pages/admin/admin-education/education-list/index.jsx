import { useEffect, useState } from "react";
import { handleDelete ,getAllItems } from "../../../../servises/admin";
import { useSelector } from "react-redux";
import SortedList from "../../../../helpers/sorted-list";
import AdminListBox from "../../../../components/admin-list-box";
import AdminListHeader from "../../../../components/admin-list-header";
function EducationList() {
  const [educations, setEducations] = useState([]);
  const {sortOrder} = useSelector((state) => state.adminOperations)
  useEffect(() => {
    const fetchBlogs = async () => {
      const getEducations = await getAllItems("education");
      setEducations(getEducations);
    };
    fetchBlogs();
  }, []);
  const educationDeleteHandler = async (deleteUrl) => {
    const url = `education/${deleteUrl}`;
    const successMessage = `${deleteUrl} Özel Dersi başarılı bir şekilde silindi `;
    const errorMessage = "Özel Ders Silinemedi";
   const response =  await handleDelete(url, successMessage, errorMessage);
   
   if(response){
    const filteredEducations= educations.filter((item) => item.paramsUrl !== deleteUrl); 
    setEducations(filteredEducations);
   }
   
  };
  const sortedEducations =
    sortOrder === "inc" ? educations : [...educations].reverse();

  return (
    <div className="w-full gap-2  flex flex-col ">
       {
        educations.length > 1  && <SortedList/>
      }
      {
        educations.length > 0  &&  <AdminListHeader header={"Özel Ders"}/>
      }
      
      {sortedEducations.map((education) => (
          <AdminListBox
          key={education.id}
          header={education.title}
          handleDelete={() => educationDeleteHandler(education.paramsUrl)}
          editUrl={`education/${education.paramsUrl}`} />
      ))}
      
    </div>
  );
}

export default EducationList;
