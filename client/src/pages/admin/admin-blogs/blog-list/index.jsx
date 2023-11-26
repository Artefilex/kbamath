import { useEffect, useState } from "react";
// import { getBlogs } from "../../../../servises";
import { Link } from "react-router-dom";
import { useAppearance } from "../../../../store/appearance/hooks";
import classnames from "classnames";
import axios from "axios";
import toast from "react-hot-toast"
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const { theme } = useAppearance();
  
  useEffect(() => {
    const fetchBlogs = async () => {
      // const response = await getBlogs();
      const {data}  = await axios.get("http://localhost:4000/admin/blogs");
       
      setBlogs(data);
     
     
    };
    fetchBlogs();
  }, []);
  

  const handleDelete = async (deleteblogUrl) => {
    const confirms = window.confirm("Silmek istediğine emin misin");
  
    if (confirms) {
      try {
        await axios.delete(`http://localhost:4000/admin/blogs/delete/${deleteblogUrl}`);
        const filteredBlogs = blogs.filter((item) => item.blogUrl !== deleteblogUrl);
        setBlogs(filteredBlogs);
        toast.success(`${deleteblogUrl} blog başarılı şekilde silindi `)
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    } else {
      toast.error("Blog silme işlemi başarısız")
    }
  };
  const [sortOrder, setSortOrder] = useState("inc");
  const sortedBlogs = sortOrder === "inc" ? blogs : [...blogs].reverse();

  return (
    <div className="w-full gap-2  flex flex-col ">
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
      {sortedBlogs.map((blog) => (
        <div
          key={blog.id}
          className="w-full flex items-center justify-between flex-col border rounded-lg px-2 py-4 mobile:flex-row bg-[color:var(--bg-secondary)] gap-4 mobile:gap-0 "
        >
          <div>{blog.header}</div>
          <div className="flex items-center justify-around gap-4 w-[200px]">
            <Link
              to={`/admin/blogs/${blog.blogUrl}`}
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
              onClick={() => handleDelete(blog.blogUrl)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

