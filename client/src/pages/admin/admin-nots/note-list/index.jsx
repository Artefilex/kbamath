import { useEffect, useState } from "react";
import { handleDelete ,getAllItems } from "../../../../servises/admin";
import SortedList from "../../../../helpers/sorted-list";
import { useSelector } from "react-redux";
import AdminListBox from "../../../../components/admin-list-box"
function NoteList() {
  const [nots , setNots] = useState([]);

  const {sortOrder} = useSelector((state) => state.adminOperations)
  useEffect(() => {
    const fetchBlogs = async () => {
      const getNots = await getAllItems("nots");
      setNots(getNots);
    };
    fetchBlogs();
  }, []);
  const notsDeleteHandler = async (deleteUrl) => {
    const url = `nots/${deleteUrl}`;
    const successMessage = `${deleteUrl} notu başarılı bir şekilde silindi `;
    const errorMessage = "Nots Silinemedi";
   const response =  await handleDelete(url, successMessage, errorMessage);
   
   if(response){
    const filteredNots= nots.filter((item) => item.paramsUrl !== deleteUrl); 
    setNots(filteredNots);
   }
   
  };

  const sortedNots =
    sortOrder === "inc" ? nots : [...nots].reverse();


  return  <div className="w-full gap-2  flex flex-col ">
       {
        nots.length > 1  && <SortedList/>
      }
  {sortedNots.map((note) => (
        <AdminListBox
        key={note.id}
        header={note.description}
        handleDelete={() => notsDeleteHandler(note.paramsUrl)}
        editUrl={`nots/${note.paramsUrl}`} />
  ))}
</div>;
}

export default NoteList;
