import { useEffect, useState } from "react";
import { handleDelete ,getAllItems } from "../../../../servises/admin";
import SortedList from "../../../../helpers/sorted-list";
import { useSelector } from "react-redux";
import AdminListBox from "../../../../components/admin-list-box";
import AdminListHeader from "../../../../components/admin-list-header";
export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const {sortOrder} = useSelector((state) => state.adminOperations)
  useEffect(() => {
    const fetchBlogs = async () => {
      const getBlog = await getAllItems("blogs");
      const getAdmin = await JSON.parse(localStorage.getItem("userLogin"))
      const response = getBlog.filter((blogs) => blogs.author === getAdmin.username) 
      console.log(response)
      setBlogs(response);
    };
     fetchBlogs();
  }, []);
  
  const blogDeleteHandler = async (deleteUrl) => {
    const url = `blogs/delete/${deleteUrl}`;
    const successMessage = `${deleteUrl} Blog başarılı bir şekilde silindi `;
    const errorMessage = "Blog Silinemedi";
    
    const response = await handleDelete(url, successMessage, errorMessage);
    if(response){
      const filteredBlogs = blogs.filter((item) => item.paramsUrl !== deleteUrl);  
      setBlogs(filteredBlogs);  
    }

  };

  const sortedBlogs = sortOrder === "inc" ? blogs : [...blogs].reverse();

  return (
    <div className="w-full gap-2  flex flex-col ">
      {
        blogs.length > 1  && <SortedList/>
      }
          {
        blogs.length > 1  &&   <AdminListHeader header={"Blog"}/>
      }
   
      {sortedBlogs.map((blog ) => (
        <AdminListBox
          key={blog.id}
          header={blog.header}
          handleDelete={() => blogDeleteHandler(blog.paramsUrl)}
          editUrl={`blogs/${blog.paramsUrl}`} />
      ))}
    </div>
  );
}

